"use client";

import {
  TransactionModalType,
  useModalStore,
} from "@/stores/useModalStore";
import { useTransactionBudgetStore } from "@/stores/useTransactionBudgetStore";
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
import Divider from "@/ui/Divider";
import { moneyFormatter } from "@/utils/moneyFormatter";
import ActionButton from "@/ui/ActionButton";
import { useShallow } from "zustand/shallow";

export default function TransactionAction() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    }))
  );
  const {
    transactionList,
    transactionDeletion,
    transactionSelection,
    budgetList,
  } = useTransactionBudgetStore(
    useShallow((s) => ({
      transactionList: s.transactionData.list,
      transactionDeletion: s.transactionDeletion,
      transactionSelection: s.transactionSelection,
      budgetList: s.budgetData.list,
    }))
  );

  const handleModal = (typeOfModal: TransactionModalType | "budgetCreate") => {
    toggleModal();
    selectModalType(typeOfModal);
  };

  const handleExport = () => {
    const formattedList = transactionList.map((txn) => {
      const date = txn.date;
      const newDate = new Date(date);

      return {
        Nome: txn.name,
        Valor: txn.value.toFixed(2).replace(".", ","),
        Data: newDate.toISOString().split("T")[0],
        Categoria:
          budgetList.find((bdgt) => bdgt.id === txn.categoryId)?.name ||
          "Sem categoria",
      };
    });

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
      className="base-card min-h-64 overflow-y-auto scrollbar-style scrollbar-thinner md:min-h-32"
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
          {transactionSelection.selected ? (
            <div className="flex flex-col my-1 gap-1">
              <p className="mt-2 text-chetwode-blue-950 dark:text-chetwode-blue-50">
                Transação Selecionada:{" "}
              </p>
              <span className="px-1 rounded-lg font-medium text-chetwode-blue-700 bg-chetwode-blue-200 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-50">
                {transactionSelection.selected.name} -{" "}
                {moneyFormatter(Math.abs(transactionSelection.selected.value))}
              </span>
            </div>
          ) : (
            <p className="mt-2 italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75">
              Selecione uma Transação clicando nela
            </p>
          )}
          <ActionButton
            action={() => {
              handleModal("transactionUpdate");
            }}
            icon={<MdEdit />}
            label={"Editar Transação"}
            disabled={
              transactionSelection.selected === null ||
              transactionDeletion.isDeleting
            }
          />
          <ActionButton
            action={() => {
              handleModal("transactionDelete");
            }}
            icon={<MdDelete />}
            label={"Deletar Transação"}
            disabled={
              transactionSelection.selected === null ||
              transactionDeletion.isDeleting
            }
          />
          <Divider direction="horizontal" />
          {transactionDeletion.isDeleting ? (
            <>
              <ActionButton
                action={() => handleModal("transactionDeleteGroup")}
                icon={<MdDeleteForever />}
                label={`Deletar Todas (${transactionDeletion.list.length})`}
                disabled={transactionDeletion.list.length <= 0}
              />
              <ActionButton
                action={() => transactionDeletion.setIsDeleting(false)}
                icon={<MdCancel />}
                label={"Cancelar Deleção"}
                disabled={false}
              />
            </>
          ) : (
            <ActionButton
              action={() => transactionDeletion.setIsDeleting(true)}
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
            disabled={transactionDeletion.isDeleting}
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
