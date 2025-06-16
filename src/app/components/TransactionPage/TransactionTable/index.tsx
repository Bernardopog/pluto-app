"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function TransactionTable() {
  const { transactionList, budgetList } = useTransactionBudgetStore();

  return (
    <section
      role="table"
      aria-label="Tabela de transações"
      id="transaction-moves"
      className="base-card flex flex-col h-full p-0 overflow-hidden text-chetwode-blue-950"
    >
      <header role="rowgroup">
        <div
          role="row"
          className="grid w-full grid-cols-[0.3fr_2fr_0.5fr_0.5fr] font-bold px-1 py-2 bg-chetwode-blue-200"
        >
          <span role="columnheader" className="text-center">
            Data
          </span>
          <span role="columnheader" className="text-center">
            Descrição
          </span>
          <span role="columnheader" className="text-center">
            Valor
          </span>
          <span role="columnheader" className="text-center">
            Categoria
          </span>
        </div>
      </header>

      <section
        role="rowgroup"
        className="flex flex-col flex-1 gap-1 p-1 bg-star-dust-50 overflow-y-auto scrollbar-thin scrollbar-thumb-chetwode-blue-600 scrollbar-track-chetwode-blue-100"
      >
        {transactionList.toReversed().map((transaction, index) => (
          <div
            role="row"
            key={index}
            className="group grid grid-cols-[0.35fr_2fr_0.5fr_0.5fr] gap-1 rounded-lg bg-chetwode-blue-200 even:bg-chetwode-blue-300 hover:brightness-105 cursor-pointer"
          >
            <div
              role="cell"
              className="p-1 border-2 rounded-l-lg rounded-r-sm text-center border-chetwode-blue-950 ease-in-out duration-300 group-hover:border-chetwode-blue-600"
            >
              {transaction.date.toLocaleDateString("pt-BR")}
            </div>
            <div
              role="cell"
              className="p-1 border-2 rounded-sm border-chetwode-blue-950 ease-in-out duration-300 group-hover:border-chetwode-blue-600"
            >
              {transaction.name}
            </div>
            <div
              role="cell"
              className={`p-1 border-2 rounded-sm border-chetwode-blue-950 font-medium ease-in-out duration-300 group-hover:border-chetwode-blue-600  ${
                transaction.value < 0
                  ? "bg-red-200 text-red-700"
                  : "bg-green-200 text-green-700"
              }`}
            >
              {moneyFormatter(transaction.value)}
            </div>
            <div
              role="cell"
              className="p-1 border-2 rounded-r-lg rounded-l-sm border-chetwode-blue-950 ease-in-out duration-300 group-hover:border-chetwode-blue-600"
            >
              {budgetList.find((b) => b.id === transaction.categoryId)?.name}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
