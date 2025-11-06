"use client";

import { TransactionTableRowData } from "@/components/TransactionPage/TransactionTable";
import { useTransactionBudgetStore } from "@/stores/useTransactionBudgetStore";

import { useTransactionFilterStore } from "@/stores/useTransactionFilterStore";
import { useVaultStore } from "@/stores/useVaultStore";
import Checkbox from "@/ui/Checkbox";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function TransactionTable() {
  const { loadTxnAndBudgets, budgetFetched, transactionFetched } =
    useTransactionBudgetStore(
      useShallow((s) => ({
        loadTxnAndBudgets: s.loadTxnAndBudgets,
        budgetFetched: s.budgetData.fetched,
        transactionFetched: s.transactionData.fetched,
      }))
    );
  const { transactionList, transactionDeletion } = useTransactionBudgetStore(
    useShallow((s) => ({
      transactionList: s.transactionData.list,
      transactionDeletion: s.transactionDeletion,
    }))
  );
  const { vaultFetched, fetchVault } = useVaultStore(
    useShallow((s) => ({
      vaultFetched: s.vaultData.fetched,
      fetchVault: s.vaultMethods.fetch,
    }))
  );

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
  } = useTransactionFilterStore(
    useShallow((s) => ({
      firstDate: s.firstDate,
      secondDate: s.secondDate,
      dateFilter: s.dateFilter,
      firstValue: s.firstValue,
      secondValue: s.secondValue,
      valueFilter: s.valueFilter,
      categoryFilter: s.categoryFilter,
      transactionTypeFilter: s.transactionTypeFilter,
      searchFilter: s.searchFilter,
    }))
  );

  useEffect(() => {
    if (!(budgetFetched && transactionFetched)) loadTxnAndBudgets();
    if (!vaultFetched) fetchVault();

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
    loadTxnAndBudgets,
    budgetFetched,
    transactionFetched,
    vaultFetched,
    fetchVault,
  ]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredTransactions = transactionList
    .filter((txn) => {
      const date = new Date(txn.date);

      if (dateFilter === "all") return true;
      if (dateFilter === "between")
        return date >= firstDate && date <= secondDate!;
      if (dateFilter === "before") return date < firstDate;
      if (dateFilter === "after") return date > firstDate;
      if (dateFilter === "exactly")
        return (
          date.toISOString().split("T")[0] ===
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

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedTransactions = filteredTransactions.slice(
    startIndex,
    endIndex
  );

  const handleDeleteMany = (id: number) => {
    if (transactionDeletion.list.includes(id)) transactionDeletion.remove(id);
    else transactionDeletion.add(id);
  };

  return (
    <section
      role="table"
      aria-label="Tabela de transações"
      id="transaction-moves"
      className="base-card flex flex-col h-full p-0 overflow-hidden"
    >
      <header
        role="rowgroup"
        className="hidden lg:block text-chetwode-blue-950 dark:text-chetwode-blue-50"
      >
        <div
          role="row"
          className="grid w-full grid-cols-[0.3fr_2fr_0.5fr_0.5fr] font-bold px-1 py-2 bg-chetwode-blue-200 dark:bg-chetwode-blue-800"
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
        className="flex flex-col flex-1 min-h-0 gap-3 p-1 bg-star-dust-50 overflow-y-auto scrollbar-thin scrollbar-thumb-chetwode-blue-600 scrollbar-track-chetwode-blue-100 dark:bg-chetwode-blue-900"
      >
        {paginatedTransactions.length === 0 ? (
          <p className="text-center text-xl text-chetwode-blue-950/75 italic">
            Nenhuma transação...
          </p>
        ) : (
          paginatedTransactions.map((transaction, index) => (
            <div
              key={transaction.id}
              className={`flex justify-between rounded-lg shadow-md ${
                transactionDeletion.list.includes(transaction.id)
                  ? "bg-chetwode-blue-700 text-chetwode-blue-100 dark:bg-chetwode-blue-400 dark:text-chetwode-blue-950"
                  : "bg-chetwode-blue-200 even:bg-chetwode-blue-300 text-chetwode-blue-950 dark:bg-chetwode-blue-800 dark:text-chetwode-blue-50 dark:even:bg-chetwode-blue-700"
              }`}
            >
              <TransactionTableRowData
                transaction={transaction}
                index={index}
                selectedToDeleted={transactionDeletion.list.includes(
                  transaction.id
                )}
              />
              {transactionDeletion.isDeleting && (
                <div className="flex items-center justify-end flex-[0.5] max-w-8">
                  <Checkbox
                    setState={() => handleDeleteMany(transaction.id)}
                    state={transactionDeletion.list.includes(transaction.id)}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </section>
      <footer className="flex items-center justify-center px-1 py-2 gap-x-2  bg-chetwode-blue-200 text-chetwode-blue-950 dark:bg-chetwode-blue-800 dark:text-chetwode-blue-100">
        {[...Array(totalPages)].map((_, idx) => {
          return (
            <button
              key={idx}
              className={`min-w-10 border py-1 px-2 rounded-lg ${
                idx + 1 === currentPage &&
                "bg-chetwode-blue-300 dark:bg-chetwode-blue-200 dark:text-chetwode-blue-950"
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
