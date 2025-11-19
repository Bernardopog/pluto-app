import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import type { IBudgetChartProps } from '@/layout/Budget/BudgetChart';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { getPercentage } from '@/utils/getPercentage';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function BudgetChartSpend({
  budgetList,
  options,
  isOverlay,
}: IBudgetChartProps) {
  const getExpenseFromCurrentMonth = useTransactionBudgetStore(
    (s) => s.getExpenseFromCurrentMonth,
  );
  const getTotalExpenses = useTransactionBudgetStore((s) => s.getTotalExpenses);

  const series = budgetList.map((bdgt) =>
    Math.abs(getExpenseFromCurrentMonth(bdgt.id)),
  );

  const customOptions: ApexOptions = {
    ...options,
    yaxis: {
      show: false,
      max: isOverlay
        ? Math.max(...budgetList.map((bdgt) => bdgt.limit))
        : undefined,
    },
    plotOptions: {
      polarArea: {
        spokes: {
          strokeWidth: 0,
        },
        rings: {
          strokeWidth: 0,
        },
      },
    },
  };

  return (
    <>
      {/* Custom DataLabel because colors and dataLabels don't work together */}
      {!isOverlay && (
        <div className='absolute z-20 size-0 rounded-full'>
          {budgetList.map((bdgt, idx) => {
            const percentage = getPercentage(
              getExpenseFromCurrentMonth(bdgt.id),
              getTotalExpenses(),
            );
            const angle = (360 / budgetList.length) * idx;
            return (
              <div
                key={bdgt.id}
                style={{
                  backgroundColor: bdgt.color,
                  transform: `rotate(${angle}deg) translate(175%) rotate(-${
                    angle + 287
                  }deg)`,
                  transformOrigin: 'center',
                  rotate: `287.5deg`,
                }}
                className='absolute top-1/2 left-1/2 -translate-1/2 min-w-16 w-fit p-1 border rounded-lg text-center text-xs font-bold text-white border-white duration-300 ease-in-out'
              >
                {percentage}%
              </div>
            );
          })}
        </div>
      )}
      <div
        className={`${
          isOverlay && 'flex items-center justify-center absolute inset-0'
        }`}
      >
        <Chart
          options={isOverlay ? customOptions : options}
          series={series}
          type='polarArea'
          width={'125%'}
        />
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(BudgetChartSpend), {
  ssr: false,
});
