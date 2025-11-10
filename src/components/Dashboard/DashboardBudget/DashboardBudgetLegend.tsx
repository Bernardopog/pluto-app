"use client";

import { useTransactionBudgetStore } from "@/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/utils/moneyFormatter";
import { useState } from "react";
import DashboardBudgetLegendController from "./DashboardBudgetLegendController";
import { IBudget } from "@/interfaces/IBudget";
import { useShallow } from "zustand/shallow";
import DashboardBudgetListItem from "./DashboardBudgetListItem";
import { MdWarning } from "react-icons/md";

export type LegendType = "expenses-limit" | "rest";

interface IDashboardBudgetLegendProps {
  budget: IBudget[];
  rest: number;
}

export default function DashboardBudgetLegend({
  budget,
  rest,
}: IDashboardBudgetLegendProps) {
  const { getExpenseFromCurrentMonth, getMonthBudgetRest } =
    useTransactionBudgetStore(
      useShallow((s) => ({
        transactionList: s.transactionData.list,
        getExpenseFromCurrentMonth: s.getExpenseFromCurrentMonth,
        getMonthBudgetRest: s.getMonthBudgetRest,
      }))
    );
  const [typeOfLegend, setTypeOfLegend] =
    useState<LegendType>("expenses-limit");

  return (
    <>
      <DashboardBudgetLegendController
        state={typeOfLegend}
        setState={setTypeOfLegend}
      />
      <ul className="grid grid-cols-1 mt-4 gap-2 font-medium text-chetwode-blue-950 dark:text-chetwode-blue-50 md:grid-cols-2 lg:flex lg:flex-col">
        <li className="inline-flex items-center gap-2 border border-l-6 p-2 rounded-r-lg text-lg border-chetwode-blue-950/25 dark:border-chetwode-blue-50/25 md:border-l-4 md:text-base" style={{ borderColor: `#a9a9a9` }}>
          Renda Restante: {moneyFormatter(rest)}
          {rest < 0 && <MdWarning className="text-xl text-red-600/75 dark:text-red-400/75" />}
        </li>
        {budget.map((budgetItem) => {
          const expense = getExpenseFromCurrentMonth(budgetItem.id);
          const rest = getMonthBudgetRest(budgetItem.id);
          return (
            <DashboardBudgetListItem key={budgetItem.id} {...budgetItem} expense={expense} rest={rest} typeOfLegend={typeOfLegend}/>
          );
        })}
      </ul>
    </>
  );
}
