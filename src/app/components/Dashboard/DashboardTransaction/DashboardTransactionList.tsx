"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function DashboardTransactionList() {
  const { transactionList } = useTransactionBudgetStore();

  return (
    <ul className="flex flex-col gap-2 h-6/8 overflow-auto scrollbar-style scrollbar-thinner">
      {transactionList
        .toReversed()
        .slice(0, 12)
        .map((transaction) => (
          <li
            key={transaction.id}
            className="grid grid-cols-[0.5fr_0.5fr] grid-rows-[1fr_1fr] rounded-lg bg-chetwode-blue-200 lg:grid-cols-[0.5fr_2fr_0.5fr] lg:grid-rows-none"
          >
            <span className="p-1 rounded-tl-lg font-medium text-center text-chetwode-blue-950 bg-chetwode-blue-300 lg:rounded-l-lg">
              {transaction.date
                ? `${transaction.date.getDate().toString().padStart(2, "0")} 
                / ${(transaction.date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")} 
                / ${transaction.date.getFullYear()}`
                : "-- / -- / ----"}
            </span>
            <span className="col-span-2 p-1 text-chetwode-blue-950 order-1 lg:col-span-1 lg:order-0">
              {transaction.name}
            </span>
            <span
              className={`pl-1 py-1 rounded-tr-lg font-bold lg:rounded-none lg:rounded-r-lg ${
                transaction.value > 0
                  ? "text-green-600 bg-green-200"
                  : "text-red-600 bg-red-200"
              }`}
            >
              {moneyFormatter(Math.abs(transaction.value))}
              <span>{transaction.value > 0 ? " + " : " - "}</span>
            </span>
          </li>
        ))}
    </ul>
  );
}
