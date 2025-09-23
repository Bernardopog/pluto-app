import PieChartControl from "../../PieChartControl";
import { useState } from "react";
import { PieChartType } from "@/app/layout/Dashboard/DashboardBudget";
import { IBudget } from "@/interfaces/IBudget";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { DashboardBarChart, DashboardDoughtnutChart } from "./DashboardCharts";
import { DashboardBudgetLoading } from "./";
import { useShallow } from "zustand/shallow";

interface IDashboardBudgetChartProps {
  budget: IBudget[];
  rest: number;
}

export default function DashboardBudgetChart({
  budget,
  rest,
}: IDashboardBudgetChartProps) {
  const { budgetData, transactions } = useTransactionBudgetStore(
    useShallow((s) => ({
      budgetData: s.budgetData,
      transactions: s.transactionData.list,
    }))
  );

  const [chartType, setChartType] = useState<"pie" | "bar">("pie");
  const [pieChartType, setPieChartType] = useState<PieChartType>("full");
  const [showRest, setShowRest] = useState<boolean>(false);

  return (
    <>
      {budgetData.loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <DashboardBudgetLoading />
        </div>
      ) : (
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
      )}
    </>
  );
}
