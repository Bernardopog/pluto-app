"use client";

import PieChartControl from "@/app/components/PieChartControl";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartType = "full" | "half";

export default function DashboardBudget() {
  const [typeOfChart, setTypeOfChart] = useState<PieChartType>("full");

  const data = {
    labels: ["Renda", "Comida", "Transporte", "Contas"],
    datasets: [
      {
        label: "R$",
        data: [3000, 200, 300, 500],
        backgroundColor: [
          "hsl(0, 50%, 50%)",
          "hsl(200, 50%, 50%)",
          "hsl(100, 50%, 50%)",
          "hsl(50, 50%, 50%)",
        ],
        borderWidth: 0,
        spacing: 2,
        circumference: typeOfChart === "full" ? 360 : 180,
        rotation: typeOfChart === "full" ? 0 : -90,
      },
    ],
  };

  return (
    <article
      id="dashboard-budget"
      className="h-full mt-2 p-2 border-b-2 border-transparent rounded-lg shadow-md duration-300 ease-in-out bg-star-dust-50 hover:shadow-lg hover:border-chetwode-blue-700 lg:mt-0"
    >
      <h3 className="sub-title">Orçamento</h3>
      <div className="hidden lg:block">
        <div className="relative w-full mt-2">
          <PieChartControl state={typeOfChart} setState={setTypeOfChart} />
          <Doughnut data={data} />
        </div>
      </div>
    </article>
  );
}
