import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import type { IBudget } from '@/interfaces/IBudget';
import type { ITransaction } from '@/interfaces/ITransaction';
import { useThemeStore } from '@/stores/useThemeStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface IDoughnutChartProps {
  budget: IBudget[];
  transactions: ITransaction[];
  rest: number;
  showRest: boolean;
  angle: {
    start: number;
    end: number;
    type: 'full' | 'half';
  };
}

export default function DoughnutChart({
  budget,
  transactions,
  rest,
  showRest,
  angle,
}: IDoughnutChartProps) {
  const getTotalMonthlyExpenses = useTransactionBudgetStore(
    (s) => s.getTotalMonthlyExpenses,
  );
  const theme = useThemeStore((s) => s.theme);

  const expensesPerMonth = useMemo(
    () =>
      transactions.filter(
        (txn) =>
          new Date(txn.date).getMonth() === new Date().getMonth() &&
          new Date(txn.date).getFullYear() === new Date().getFullYear(),
      ),
    [transactions],
  );

  const onlyExpenses = useMemo(
    () => expensesPerMonth.filter((txn) => txn.value < 0),
    [expensesPerMonth],
  );

  const series = [
    ...budget.map((budget) => {
      const expenses = onlyExpenses.reduce((acc, item) => {
        if (item.categoryId === budget.id) {
          return acc + item.value;
        }
        return acc;
      }, 0);
      return Math.abs(expenses);
    }),
    showRest ? rest : 0,
  ];
  const options: ApexOptions = {
    labels: [...budget.map((bdgt) => bdgt.name), showRest ? 'Restante' : ''],
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors: [...budget.map((bdgt) => bdgt.color), showRest ? '#494949' : ''],
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `R$ ${val}`,
      },
    },
    stroke: {
      colors: theme === 'light' ? ['#f6f6f6'] : ['#453181'],
      width: 4,
    },
    plotOptions: {
      pie: {
        offsetY: angle.type === 'full' ? 0 : 50,
        startAngle: angle.start,
        endAngle: angle.end,
        donut: {
          labels: {
            show: true,
            value: {
              formatter: (val: string) =>
                `${val}/${Math.abs(getTotalMonthlyExpenses())}`,
              color: '#2a1e57',
            },
          },
          size: '60',
        },
        expandOnClick: false,
      },
    },
  };

  return (
    <>
      {typeof window !== 'undefined' && window && (
        <Chart options={options} series={series} type='donut' height={'125%'} />
      )}
    </>
  );
}
