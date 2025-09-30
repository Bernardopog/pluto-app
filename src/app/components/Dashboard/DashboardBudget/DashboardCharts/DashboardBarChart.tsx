import { getPercentage } from "@/app/utils/getPercentage";
import { IBudget } from "@/interfaces/IBudget";
import { ITransaction } from "@/interfaces/ITransaction";
import { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IBarChartProps {
  budget: IBudget[];
  transactions: ITransaction[];
}

export default function BarChart({ budget, transactions }: IBarChartProps) {
  const countRef = useRef(-1);

  useEffect(() => {
    countRef.current = -1;
  }, []);

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: budget.map((item) => item.name),
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
    fill: {
      opacity: 1,
      colors: [
        ({ seriesIndex }: { seriesIndex: number }) => {
          let col = "#494949";
          if (seriesIndex === 1) {
            return col;
          } else {
            col = budget[countRef.current]?.color ?? "#3366dd";
            countRef.current++;
          }
          return col;
        },
      ],
    },
    legend: {
      show: false,
    },
  };

  const expenses = budget.map((budget) => {
    const expenses = transactions
      .filter((item) => item.value < 0)
      .reduce((acc, item) => {
        if (item.categoryId === budget.id) {
          return acc + item.value;
        }
        return acc;
      }, 0);
    return Math.abs(expenses);
  });

  const filledValues = budget.map((_, idx): number => {
    const valuePercentage = Number(
      getPercentage(expenses[idx], budget[idx].limit)
    );
    return valuePercentage >= 100 ? 100 : valuePercentage;
  });
  const remainValues = filledValues.map((item) => 100 - item);

  const series = [
    {
      name: "Gasto",
      data: filledValues,
    },
    {
      name: "Disponível",
      data: remainValues,
    },
  ];

  return (
    <>
      {typeof window !== "undefined" && window && (
        <Chart options={options} series={series} type="bar" height={"125%"} />
      )}
    </>
  );
}
