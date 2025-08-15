import dynamic from "next/dynamic";
import { IBudgetChartProps } from "@/app/layout/Budget/BudgetChart";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { getPercentage } from "@/app/utils/getPercentage";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function BudgetChartSpend({
  budgetList,
  options,
  isOverlay,
}: IBudgetChartProps) {
  const getExpenses = useTransactionBudgetStore((s) => s.getExpenses);
  const getTotalExpenses = useTransactionBudgetStore((s) => s.getTotalExpenses);

  const series = budgetList.map((bdgt) => Math.abs(getExpenses(bdgt.id)));

  return (
    <>
      {/* Custom DataLabel because colors and dataLabels don't work together */}
      {!isOverlay && (
        <div className="absolute z-20 size-88 rounded-full">
          {budgetList.map((bdgt, idx) => {
            const percentage = getPercentage(
              getExpenses(bdgt.id),
              getTotalExpenses()
            );
            const angle = (360 / budgetList.length) * idx;
            return (
              <div
                key={bdgt.id}
                style={{
                  backgroundColor: bdgt.color,
                  transform: `rotate(${angle}deg) translate(275%) rotate(-${
                    angle + 287
                  }deg)`,
                  transformOrigin: "center",
                  rotate: `287.5deg`,
                }}
                className="absolute top-1/2 left-1/2 -translate-1/2 min-w-16 w-fit p-1 border rounded-lg text-center text-xs font-bold text-white border-white duration-300 ease-in-out"
              >
                {percentage}%
              </div>
            );
          })}
        </div>
      )}
      <Chart
        options={options}
        series={series}
        type="polarArea"
        width={"150%"}
      />
    </>
  );
}

export default dynamic(() => Promise.resolve(BudgetChartSpend), {
  ssr: false,
});
