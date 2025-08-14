import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { IBudget } from "@/interfaces/IBudget";
import { ITransaction } from "@/interfaces/ITransaction";
import { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IDoughnutChartProps {
  budget: IBudget[];
  transactions: ITransaction[];
  rest: number;
  showRest: boolean;
  angle: {
    start: number;
    end: number;
    type: "full" | "half";
  };
}

export default function DoughnutChart({
  budget,
  transactions,
  rest,
  showRest,
  angle,
}: IDoughnutChartProps) {
  const getTotalExpenses = useTransactionBudgetStore((s) => s.getTotalExpenses);

  const series = [
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
    showRest ? rest : 0,
  ];
  const options = {
    labels: [...budget.map((bdgt) => bdgt.name), showRest ? "Restante" : ""],
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors: [...budget.map((bdgt) => bdgt.color), showRest ? "#494949" : ""],
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `R$ ${val}`,
      },
    },
    plotOptions: {
      pie: {
        offsetY: angle.type === "full" ? 0 : 50,
        startAngle: angle.start,
        endAngle: angle.end,
        donut: {
          labels: {
            show: true,
            value: {
              formatter: (val: string) =>
                `${val}/${Math.abs(getTotalExpenses())}`,
              color: "#2a1e57",
            },
          },
          size: "60",
        },
        expandOnClick: false,
      },
    },
  };

  return (
    <>
      {typeof window !== "undefined" && window && (
        <Chart
          options={options as ApexOptions}
          series={series}
          type="donut"
          height={"125%"}
        />
      )}
    </>
  );
}
