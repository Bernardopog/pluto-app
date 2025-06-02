"use client";

import {
  DashboardBudgetChart,
  DashboardBudgetLegend,
} from "@/app/components/Dashboard/DashboardBudget";
import { useBudgetStore } from "@/app/stores/useBudgetStore";
import { useFinanceStore } from "@/app/stores/useFinanceStore";
import MoreDetail from "@/app/ui/MoreDetail";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartType = "full" | "half";

export default function DashboardBudget() {
  const { income } = useFinanceStore();
  const { budget } = useBudgetStore();

  const totalExpenses = budget.reduce((acc, item) => acc + item.value, 0);
  const rest = income - totalExpenses;

  return (
    <article
      id="dashboard-budget"
      className="max-h-full mt-2 p-2 border-b-2 border-transparent rounded-lg shadow-md duration-300 ease-in-out bg-star-dust-50 overflow-auto scrollbar-thin hover:shadow-lg hover:border-chetwode-blue-700 lg:h-[calc(100vh-11rem)] lg:mt-0"
    >
      <header className="flex justify-between">
        <h3 className="sub-title">Orçamento</h3>
        <MoreDetail href="/budget" />
      </header>
      <DashboardBudgetChart budget={budget} rest={rest} />
      <DashboardBudgetLegend budget={budget} rest={rest} />
    </article>
  );
}
