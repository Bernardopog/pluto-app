"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useState } from "react";
import DashboardBudgetLegendController from "./DashboardBudgetLegendController";
import { MdWarning } from "react-icons/md";
import { IBudget } from "@/interfaces/IBudget";
import { useShallow } from "zustand/shallow";

export type LegendType = "expenses-limit" | "rest";

interface IDashboardBudgetLegendProps {
  budget: IBudget[];
  rest: number;
}

export default function DashboardBudgetLegend({
  budget,
  rest,
}: IDashboardBudgetLegendProps) {
  const { getBudgetRest, getExpenseFromCurrentMonth } =
    useTransactionBudgetStore(
      useShallow((s) => ({
        getBudgetRest: s.getBudgetRest,
        getExpenseFromCurrentMonth: s.getExpenseFromCurrentMonth,
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
      <ul className="grid grid-cols-1 mt-4 gap-2 font-medium text-chetwode-blue-950 md:grid-cols-2 lg:flex lg:flex-col">
        <li className="border-l-4 pl-2" style={{ borderColor: `#a9a9a9` }}>
          Renda Restante: {moneyFormatter(rest)}
        </li>
        {budget.map((budgetItem) => (
          <li
            key={budgetItem.id}
            className="border-l-4 pl-2"
            style={{ borderColor: `${budgetItem.color}` }}
          >
            {budgetItem.name}:{" "}
            {typeOfLegend === "expenses-limit" ? (
              <span>
                {moneyFormatter(
                  Math.abs(getExpenseFromCurrentMonth(budgetItem.id))
                )}
                <span className="inline-flex gap-2 text-chetwode-blue-950/60">
                  {" "}
                  /{moneyFormatter(budgetItem.limit)}
                  {Math.abs(getExpenseFromCurrentMonth(budgetItem.id)) >
                    budgetItem.limit && <MdWarning className="text-xl" />}
                </span>
              </span>
            ) : (
              <span className="inline-flex gap-2">
                {moneyFormatter(getBudgetRest(budgetItem.id))}{" "}
                <span className="text-chetwode-blue-950/60">
                  {getBudgetRest(budgetItem.id) < 0 && (
                    <MdWarning className="text-xl" />
                  )}
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
