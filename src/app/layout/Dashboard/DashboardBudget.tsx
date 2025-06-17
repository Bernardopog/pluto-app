"use client";

import {
  DashboardBudgetChart,
  DashboardBudgetLegend,
} from "@/app/components/Dashboard/DashboardBudget";
import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import MoreDetail from "@/app/ui/MoreDetail";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartType = "full" | "half";

export default function DashboardBudget() {
  const { income } = useFinanceStore();

  const { transactionList, budgetList, getTotalExpenses } =
    useTransactionBudgetStore();

  const totalExpenses = getTotalExpenses();
  const rest = income + totalExpenses;

  return (
    <article
      id="dashboard-budget"
      className="base-card max-h-full overflow-auto scrollbar-thin hover:shadow-lg lg:h-full lg:mt-0"
    >
      <header className="flex justify-between">
        <h2 className="subtitle">Orçamento</h2>
        <MoreDetail href="/budget" />
      </header>
      <DashboardBudgetChart
        budget={budgetList}
        transactions={transactionList}
        rest={rest}
      />
      <DashboardBudgetLegend budget={budgetList} rest={rest} />
    </article>
  );
}
