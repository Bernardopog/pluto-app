"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import TransactionTableRowData from "./TransactionTableRowData";

export default function TransactionTable() {
  const { transactionList } = useTransactionBudgetStore();

  return (
    <section
      role="table"
      aria-label="Tabela de transações"
      id="transaction-moves"
      className="base-card flex flex-col h-full p-0 overflow-hidden text-chetwode-blue-950"
    >
      <header role="rowgroup" className="hidden lg:block">
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
          <TransactionTableRowData
            key={transaction.id}
            transaction={transaction}
            index={index}
          />
        ))}
      </section>
    </section>
  );
}
