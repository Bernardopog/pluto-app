import { Doughnut } from "react-chartjs-2";
import PieChartControl from "../../PieChartControl";
import { useEffect, useState } from "react";
import { PieChartType } from "@/app/layout/Dashboard/DashboardBudget";
import { ITransaction } from "@/interfaces/ITransaction";
import { IBudget } from "@/interfaces/IBudget";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";

interface IDashboardBudgetChartProps {
  transactions: ITransaction[];
  budget: IBudget[];
  rest: number;
}

export default function DashboardBudgetChart({
  transactions,
  budget,
  rest,
}: IDashboardBudgetChartProps) {
  const { getBudgets } = useTransactionBudgetStore();
  const [typeOfChart, setTypeOfChart] = useState<PieChartType>("full");

  useEffect(() => {
    getBudgets();
  }, [getBudgets]);

  const data = {
    labels: ["Restante", ...budget.map((item) => item.name)],
    datasets: [
      {
        label: "R$",
        data: [
          rest,
          ...budget.map((budget) => {
            const expenses = transactions
              .filter((item) => item.value < 0)
              .reduce((acc, item) => {
                if (item.categoryId === budget.id) {
                  return acc + item.value;
                }
                return acc;
              }, 0);
            return Math.abs(expenses);
          }),
        ],
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
