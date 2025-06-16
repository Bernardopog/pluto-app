"use client";

import { useModalStore } from "@/app/stores/useModalStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { BsFiletypeCsv } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import TransactionActionButton from "./TransactionActionButton";

export default function TransactionAction() {
  const { toggleModal, selectModalType } = useModalStore();
  const { transactionList, budgetList } = useTransactionBudgetStore();

  const handleModal = (typeOfModal: "transactionCreate") => {
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
    <article id="transaction-action" className="base-card">
      <h2 className="sub-title">Ações</h2>
      <section className="flex flex-col mt-2 gap-2">
        <TransactionActionButton
          action={() => {
            handleModal("transactionCreate");
          }}
          icon={<MdAdd />}
          label={"Adicionar nova Transação"}
        />
        <TransactionActionButton
          action={handleExport}
          icon={<BsFiletypeCsv />}
          label={"Exportar CSV"}
        />
      </section>
    </article>
  );
}
