"use client";
import { ITransaction } from "@/interfaces/ITransaction";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

interface ITransactionTableRowDataProps {
  transaction: ITransaction;
  index: number;
}

export default function TransactionTableRowData({
  transaction,
  index,
}: ITransactionTableRowDataProps) {
  const { budgetList, selectTransaction } = useTransactionBudgetStore();

  const date = new Date(transaction.date);

  return (
    <div
      role="row"
      key={index}
      className="group grid grid-cols-4 p-1 gap-1 rounded-lg bg-chetwode-blue-200 cursor-pointer even:bg-chetwode-blue-300 hover:brightness-105 sm:grid-cols-3 lg:grid-cols-[0.35fr_2fr_0.5fr_0.5fr] lg:p-0"
      onClick={() => selectTransaction(transaction.id)}
    >
      <div
        role="cell"
        className="order-1 col-span-2 p-1 border-2 rounded-l-lg rounded-r-sm text-center border-chetwode-blue-950 ease-in-out duration-300 group-hover:border-chetwode-blue-600 sm:col-span-1"
      >
        {date.getUTCDate().toString().padStart(2, "0")}/
        {(date.getUTCMonth() + 1).toString().padStart(2, "0")}/
        {date.getUTCFullYear()}
      </div>
      <div
        role="cell"
        className="col-span-4 p-1 border-2 rounded-lg border-chetwode-blue-950 truncate ease-in-out duration-300 group-hover:border-chetwode-blue-600 sm:col-span-3 lg:col-span-1 lg:order-1 lg:rounded-sm"
      >
        {transaction.name}
      </div>
      <div
        role="cell"
        className={`order-3 col-span-4 p-1 border-2 rounded-lg border-chetwode-blue-950 font-medium ease-in-out duration-300 group-hover:border-chetwode-blue-600 sm:col-span-1 sm:order-2 lg:rounded-sm ${
          transaction.value < 0
            ? "bg-red-200 text-red-700"
            : "bg-green-200 text-green-700"
        }`}
      >
        {moneyFormatter(transaction.value)}
      </div>
      <div
        role="cell"
        className="order-2 col-span-2 p-1 border-2 rounded-r-lg rounded-l-sm border-chetwode-blue-950 ease-in-out duration-300 group-hover:border-chetwode-blue-600 sm:col-span-1 sm:order-3"
      >
        {budgetList.find((b) => b.id === transaction.categoryId)?.name}
      </div>
    </div>
  );
}
