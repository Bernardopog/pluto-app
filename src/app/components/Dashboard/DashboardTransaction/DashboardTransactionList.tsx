"use client";

import { useDashboardControllersStore } from "@/app/stores/useDashboardControllersStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useEffect } from "react";

export default function DashboardTransactionList() {
  const { transactionList, getTransactions } = useTransactionBudgetStore();
  const { transactionFilter } = useDashboardControllersStore();

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <ul className="flex flex-col flex-1 gap-2 overflow-auto scrollbar-style scrollbar-thinner">
      {transactionList
        .filter((transaction) => {
          if (transactionFilter === "all") return true;
          else if (transactionFilter === "expense")
            return transaction.value < 0;
          else if (transactionFilter === "income") return transaction.value > 0;
        })
        .toReversed()
        .slice(0, 12)
        .map((transaction) => {
          const date = new Date(transaction.date);
          return (
            <li
              key={transaction.id}
              className="grid grid-cols-[0.5fr_0.5fr] grid-rows-[1fr_1fr] rounded-lg bg-chetwode-blue-200 shadow-md lg:grid-cols-[0.5fr_2fr_0.5fr] lg:grid-rows-none"
            >
              <span className="inline-flex items-center justify-center py-2 px-1 rounded-tl-lg font-medium text-center text-chetwode-blue-950 bg-chetwode-blue-300 lg:rounded-l-lg">
                {date
                  ? `${date.getUTCDate().toString().padStart(2, "0")} 
                / ${(date.getUTCMonth() + 1).toString().padStart(2, "0")} 
                / ${date.getUTCFullYear()}`
                  : "-- / -- / ----"}
              </span>
              <span className="col-span-2 inline-flex items-center py-2 px-1 text-chetwode-blue-950 order-1 lg:col-span-1 lg:order-0">
                {transaction.name}
              </span>
              <span
                className={`pl-1 inline-flex items-center justify-center py-2 rounded-tr-lg font-bold lg:rounded-none lg:rounded-r-lg ${
                  transaction.value > 0
                    ? "text-green-600 bg-green-200"
                    : "text-red-600 bg-red-200"
                }`}
              >
                {moneyFormatter(Math.abs(transaction.value))}
                <span>{transaction.value > 0 ? " + " : " - "}</span>
              </span>
            </li>
          );
        })}
    </ul>
  );
}
