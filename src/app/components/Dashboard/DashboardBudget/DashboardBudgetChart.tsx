import { Doughnut } from "react-chartjs-2";
import PieChartControl from "../../PieChartControl";
import { useState } from "react";
import { PieChartType } from "@/app/layout/Dashboard/DashboardBudget";

interface IDashboardBudgetChartProps {
  budget: { name: string; value: number; color: string }[];
  rest: number;
}

export default function DashboardBudgetChart({
  budget,
  rest,
}: IDashboardBudgetChartProps) {
  const [typeOfChart, setTypeOfChart] = useState<PieChartType>("full");

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
    <div className="hidden md:flex md:justify-center md:w-full">
      <section className="relative w-full max-w-[20rem] mt-2">
        <PieChartControl state={typeOfChart} setState={setTypeOfChart} />
        <Doughnut data={data} />
      </section>
    </div>
  );
}
