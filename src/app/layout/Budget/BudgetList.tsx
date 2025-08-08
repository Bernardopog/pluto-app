"use client";

import { BudgetListItem } from "@/app/components/BudgetPage/BudgetList";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useEffect } from "react";

export default function BudgetList() {
  const { budgetList, getBudgetLimit, getExpenses, loadTxnAndBudgets } =
    useTransactionBudgetStore();

  useEffect(() => {
    loadTxnAndBudgets();
  }, [loadTxnAndBudgets]);

  return (
    <section
      id="budget-budgets"
      className="base-card flex flex-col gap-2 min-h-0 h-full"
    >
      <h2 className="subtitle">Orçamentos</h2>
      <ul className="flex flex-col gap-2 min-h-0 overflow-y-auto scrollbar-style scrollbar-thinner">
        {budgetList.map((bdgt) => {
          const limit = getBudgetLimit(bdgt.id);
          const expense = getExpenses(bdgt.id);

          return (
            <BudgetListItem
              key={bdgt.id}
              {...bdgt}
              budgetLimit={limit}
              expense={expense}
            />
          );
        })}
      </ul>
    </section>
  );
}
