"use client";

import { TransactionTableRowData } from "@/app/components/TransactionPage/TransactionTable";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";

import { useTransactionFilterStore } from "@/app/stores/useTransactionFilterStore";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setCurrentPage(1);
  }, [
    firstDate,
    secondDate,
    dateFilter,
    firstValue,
    secondValue,
    valueFilter,
    categoryFilter,
    transactionTypeFilter,
    searchFilter,
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredTransactions = transactionList
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
          txnValueAbsolute >= firstValue && txnValueAbsolute <= secondValue!
        );
      if (valueFilter === "negative") return txnValueAbsolute < firstValue!;
      if (valueFilter === "positive") return txnValueAbsolute > firstValue!;
      if (valueFilter === "exactly") return txnValueAbsolute === firstValue!;
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
    });

  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    endIndex
  );

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
        className="flex flex-col flex-1 min-h-0 gap-1 p-1 bg-star-dust-50 overflow-y-auto scrollbar-thin scrollbar-thumb-chetwode-blue-600 scrollbar-track-chetwode-blue-100"
      >
        {paginatedTransactions.length === 0 ? (
          <p className="text-center text-xl text-chetwode-blue-950/75 italic">
            Nenhuma transação...
          </p>
        ) : (
          paginatedTransactions.map((transaction, index) => (
            <TransactionTableRowData
              key={transaction.id}
              transaction={transaction}
              index={index}
            />
          ))
        )}
      </section>
      <footer className="flex items-center justify-center px-1 py-2 gap-x-2  bg-chetwode-blue-200">
        {[...Array(totalPages)].map((_, idx) => {
          return (
            <button
              key={idx}
              className={`min-w-10 border py-1 px-2 rounded-lg ${
                idx + 1 === currentPage && "bg-chetwode-blue-300"
              }`}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </button>
          );
        })}
      </footer>
    </section>
  );
}
