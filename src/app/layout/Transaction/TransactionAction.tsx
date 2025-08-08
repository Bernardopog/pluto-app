"use client";

import {
  TransactionModalType,
  useModalStore,
} from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { BsFiletypeCsv } from "react-icons/bs";
import {
  MdAdd,
  MdAllInbox,
  MdCancel,
  MdDelete,
  MdDeleteForever,
  MdDeleteOutline,
  MdDeleteSweep,
  MdEdit,
} from "react-icons/md";
import Divider from "@/app/ui/Divider";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import ActionButton from "@/app/ui/ActionButton";

export default function TransactionAction() {
  const { toggleModal, selectModalType } = useModalStore();
  const {
    transactionList,
    transactionListToDelete,
    budgetList,
    selectedTransaction,
    isDeletingManyTxn,
    setIsDeletingManyTxn,
  } = useTransactionBudgetStore();

  const handleModal = (typeOfModal: TransactionModalType | "budgetCreate") => {
    toggleModal();
    selectModalType(typeOfModal);
  };

  const handleExport = () => {
    const formattedList = transactionList.map((txn) => ({
      Nome: txn.name,
      Valor: txn.value.toFixed(2).replace(".", ","),
      Data: txn.date.toISOString().split("T")[0],
      Categoria:
        budgetList.find((bdgt) => bdgt.id === txn.categoryId)?.name ||
        "Sem categoria",
    }));

    const header = Object.keys(formattedList[0]).join(";");

    const body = formattedList.map((row) =>
      Object.values(row)
        .map((val) => `"${val}"`)
        .join(";")
    );

    const csvContent = [header, ...body].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transacoes.csv";
    a.click();
  };

  return (
    <article
      id="transaction-action"
      className="base-card min-h-64 overflow-y-auto md:min-h-32"
    >
      <h2 className="subtitle">Ações</h2>
      <section className="flex flex-col mt-2 gap-2">
        <section className="flex flex-col gap-2">
          <h3 className="subsubtitle">Transações</h3>
          <ActionButton
            action={() => {
              handleModal("transactionCreate");
            }}
            icon={<MdAdd />}
            label={"Adicionar nova Transação"}
          />
          {selectedTransaction ? (
            <div className="flex flex-col my-1 gap-1">
              <p className="mt-2 text-chetwode-blue-950">
                Transação Selecionada:{" "}
              </p>
              <span className="px-1 rounded-lg font-medium text-chetwode-blue-700 bg-chetwode-blue-200">
                {selectedTransaction.name} -{" "}
                {moneyFormatter(Math.abs(selectedTransaction.value))}
              </span>
            </div>
          ) : (
            <p className="mt-2 italic text-chetwode-blue-950/75">
              Selecione uma Transação clicando nela
            </p>
          )}
          <ActionButton
            action={() => {
              handleModal("transactionUpdate");
            }}
            icon={<MdEdit />}
            label={"Editar Transação"}
            disabled={selectedTransaction === null}
          />
          <ActionButton
            action={() => {
              handleModal("transactionDelete");
            }}
            icon={<MdDelete />}
            label={"Deletar Transação"}
            disabled={selectedTransaction === null}
          />
          <Divider direction="horizontal" />
          {isDeletingManyTxn ? (
            <>
              <ActionButton
                action={() => handleModal("transactionDeleteGroup")}
                icon={<MdDeleteForever />}
                label={`Deletar Todas (${transactionListToDelete.length})`}
                disabled={transactionListToDelete.length <= 0}
              />
              <ActionButton
                action={() => setIsDeletingManyTxn(false)}
                icon={<MdCancel />}
                label={"Cancelar Deleção"}
                disabled={false}
              />
            </>
          ) : (
            <ActionButton
              action={() => setIsDeletingManyTxn(true)}
              icon={<MdDeleteSweep />}
              label={"Deletar Várias Transações"}
              disabled={false}
            />
          )}
          <Divider direction="horizontal" />
          <ActionButton
            action={() => handleModal("transactionDeleteAll")}
            icon={<MdDeleteOutline />}
            label={"Deletar Todas Transações"}
            disabled={isDeletingManyTxn}
          />
        </section>
        <Divider direction="horizontal" />
        <section className="flex flex-col gap-2">
          <h3 className="subsubtitle">Extras</h3>
          <ActionButton
            action={() => handleModal("budgetCreate")}
            icon={<MdAllInbox />}
            label={"Adicionar nova Categoria"}
          />
          <ActionButton
            action={handleExport}
            icon={<BsFiletypeCsv />}
            label={"Exportar CSV"}
          />
        </section>
      </section>
    </article>
  );
}
