"use client";

import PieChartControl from "@/app/components/PieChartControl";
import { useBudgetStore } from "@/app/stores/useBudgetStore";
import { useFinanceStore } from "@/app/stores/useFinanceStore";
import MoreDetail from "@/app/ui/MoreDetail";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartType = "full" | "half";

export default function DashboardBudget() {
  const [typeOfChart, setTypeOfChart] = useState<PieChartType>("full");
  const { income } = useFinanceStore();
  const { budget } = useBudgetStore();

  const totalExpenses = budget.reduce((acc, item) => acc + item.value, 0);
  const rest = income - totalExpenses;

  const data = {
    labels: ["Restante", ...budget.map((item) => item.name)],
    datasets: [
      {
        label: "R$",
        data: [rest, ...budget.map((item) => item.value)],
        backgroundColor: ["#a9a9a9", ...budget.map((item) => item.color)],
        borderWidth: 0,
        spacing: 2,
        hoverOffset: 16,
        circumference: typeOfChart === "full" ? 360 : 180,
        rotation: typeOfChart === "full" ? 0 : -90,
      },
    ],
  };

  return (
    <article
      id="dashboard-budget"
      className="max-h-full mt-2 p-2 border-b-2 border-transparent rounded-lg shadow-md duration-300 ease-in-out bg-star-dust-50 overflow-auto scrollbar-thin hover:shadow-lg hover:border-chetwode-blue-700 lg:h-[calc(100vh-11rem)] lg:mt-0"
    >
      <header className="flex justify-between">
        <h3 className="sub-title">Orçamento</h3>
        <MoreDetail href="/budget" />
      </header>
      <div className="hidden md:flex md:justify-center md:w-full">
        <section className="relative w-full max-w-[20rem] mt-2">
          <PieChartControl state={typeOfChart} setState={setTypeOfChart} />
          <Doughnut data={data} />
        </section>
      </div>
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
            {budgetItem.name}: {moneyFormatter(budgetItem.value)}
          </li>
        ))}
      </ul>
    </article>
  );
}
