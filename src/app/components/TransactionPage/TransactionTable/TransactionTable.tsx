"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import TransactionTableRowData from "./TransactionTableRowData";
import { useTransactionFilterStore } from "@/app/stores/useTransactionFilterStore";

export default function TransactionTable() {
  const { transactionList } = useTransactionBudgetStore();
  const {
    firstDate,
    secondDate,
    dateFilter,
    firstValue,
    secondValue,
    valueFilter,
    categoryFilter,
    transactionTypeFilter,
    searchFilter,
  } = useTransactionFilterStore();

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
        {transactionList
          .toReversed()
          .filter((txn) => {
            if (dateFilter === "all") return true;
            if (dateFilter === "between")
              return txn.date >= firstDate && txn.date <= secondDate!;
            if (dateFilter === "before") return txn.date < firstDate;
            if (dateFilter === "after") return txn.date > firstDate;
            if (dateFilter === "exactly")
              return (
                txn.date.toISOString().split("T")[0] ===
                firstDate.toISOString().split("T")[0]
              );
          })
          .filter((txn) => {
            if (valueFilter === "all") return true;
            const txnValueAbsolute = Math.abs(txn.value);
            if (valueFilter === "between")
              return (
                txnValueAbsolute >= firstValue &&
                txnValueAbsolute <= secondValue!
              );
            if (valueFilter === "negative")
              return txnValueAbsolute < firstValue!;
            if (valueFilter === "positive")
              return txnValueAbsolute > firstValue!;
            if (valueFilter === "exactly")
              return txnValueAbsolute === firstValue!;
          })
          .filter((txn) => {
            if (categoryFilter === null) return true;
            return txn.categoryId === categoryFilter;
          })
          .filter((txn) => {
            if (transactionTypeFilter === "all") return true;
            if (transactionTypeFilter === "revenue") return txn.value > 0;
            if (transactionTypeFilter === "expenses") return txn.value < 0;
          })
          .filter((txn) => {
            if (txn.name.toLowerCase().includes(searchFilter.toLowerCase()))
              return true;
            return false;
          })
          .map((transaction, index) => (
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
