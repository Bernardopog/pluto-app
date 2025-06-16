"use client";

import {
  IBudget,
  useTransactionBudgetStore,
} from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useState } from "react";
import DashboardBudgetLegendController from "./DashboardBudgetLegendController";

export type LegendType = "expenses-limit" | "rest";

interface IDashboardBudgetLegendProps {
  budget: IBudget[];
  rest: number;
}

export default function DashboardBudgetLegend({
  budget,
  rest,
}: IDashboardBudgetLegendProps) {
  const { getExpenses, getBudgetRest } = useTransactionBudgetStore();
  const [typeOfLegend, setTypeOfLegend] =
    useState<LegendType>("expenses-limit");

  return (
    <>
      <DashboardBudgetLegendController
        state={typeOfLegend}
        setState={setTypeOfLegend}
      />
      <ul className="grid grid-cols-1 mt-4 gap-2 font-medium text-chetwode-blue-950 md:grid-cols-2 lg:flex lg:flex-col">
        <li className="border-l-4 pl-2" style={{ borderColor: `#a9a9a9` }}>
          Renda Restante: {moneyFormatter(rest)}
        </li>
        {budget.map((budgetItem) => (
          <li
            key={budgetItem.name}
            className="border-l-4 pl-2"
            style={{ borderColor: `${budgetItem.color}` }}
          >
            {budgetItem.name}:{" "}
            {typeOfLegend === "expenses-limit" ? (
              <span>
                {moneyFormatter(Math.abs(getExpenses(budgetItem.id)))}
                <span className="text-chetwode-blue-950/60">
                  {" "}
                  /{moneyFormatter(budgetItem.limit)}
                </span>
              </span>
            ) : (
              <span>{moneyFormatter(getBudgetRest(budgetItem.id))}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
