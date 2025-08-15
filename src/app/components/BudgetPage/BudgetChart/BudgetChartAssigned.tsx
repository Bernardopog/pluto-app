import dynamic from "next/dynamic";
import { IBudgetChartProps } from "@/app/layout/Budget/BudgetChart";
import { getPercentage } from "@/app/utils/getPercentage";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function BudgetChartAssigned({
  budgetList,
  options,
  isOverlay,
}: IBudgetChartProps) {
  const series = budgetList.map((bdgt) => bdgt.limit);
  const totalBudgetLimit = budgetList
    .map((bdgt) => bdgt.limit)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      {/* Custom DataLabel because colors and dataLabels don't work together */}
      {!isOverlay && (
        <div className="absolute z-20 size-88 rounded-full">
          {budgetList.map((bdgt, idx) => {
            const percentage = getPercentage(bdgt.limit, totalBudgetLimit);
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
      <div
        className={`${
          isOverlay &&
          "flex items-center justify-center absolute inset-0 grayscale-100"
        }`}
      >
        <Chart
          options={options}
          series={series}
          type="polarArea"
          width={"150%"}
        />
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(BudgetChartAssigned), {
  ssr: false,
});
