"use client";
import {
  ITransaction,
  useTransactionBudgetStore,
} from "@/app/stores/useTransactionBudgetStore";
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

  return (
    <div
      role="row"
      key={index}
      className="group grid grid-cols-[0.35fr_2fr_0.5fr_0.5fr] gap-1 rounded-lg bg-chetwode-blue-200 even:bg-chetwode-blue-300 hover:brightness-105 cursor-pointer"
      onClick={() => selectTransaction(transaction.id)}
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
  );
}
