import PieChartControl from "../../PieChartControl";
import { useEffect, useState } from "react";
import { PieChartType } from "@/app/layout/Dashboard/DashboardBudget";
import { ITransaction } from "@/interfaces/ITransaction";
import { IBudget } from "@/interfaces/IBudget";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { DashboardBarChart, DashboardDoughtnutChart } from "./DashboardCharts";

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

  const [chartType, setChartType] = useState<"pie" | "bar">("pie");
  const [pieChartType, setPieChartType] = useState<PieChartType>("full");
  const [showRest, setShowRest] = useState<boolean>(false);

  useEffect(() => {
    getBudgets();
  }, [getBudgets]);

  return (
    <div className="hidden md:flex md:justify-center md:w-full">
      <section className="relative w-full max-w-[20rem] mt-2">
        <PieChartControl
          chartType={chartType}
          setChartType={setChartType}
          pieChartType={pieChartType}
          setPieChartType={setPieChartType}
          showRest={showRest}
          setShowRest={setShowRest}
        />
        {budget.length > 0 && chartType === "pie" && (
          <DashboardDoughtnutChart
            budget={budget}
            transactions={transactions}
            rest={rest}
            angle={
              pieChartType === "full"
                ? { start: 0, end: 360, type: "full" }
                : { start: -90, end: 90, type: "half" }
            }
            showRest={showRest}
          />
        )}
        {budget.length > 0 && chartType === "bar" && (
          <DashboardBarChart budget={budget} transactions={transactions} />
        )}
      </section>
    </div>
  );
}
