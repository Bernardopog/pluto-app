"use client";

import { ApexOptions } from "apexcharts";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DashboardBudgetLoading() {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [
      "#dd999944",
      "#99dd9944",
      "#9999dd44",
      "#dddd9944",
      "#dd99dd44",
      "#99dddd44",
    ],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const [series, setSeries] = useState(Array(6).fill(50));

  const getRandomValues = () => {
    const values = [...series];
    const weight = [5, 10, 15, 20, 25];
    let invert = Math.random() > 0.5;

    for (let i = 0; i < values.length; i++) {
      const delta = weight[Math.floor(Math.random() * weight.length)];
      values[i] += invert ? -delta : delta;
      values[i] = Math.max(0, Math.min(100, values[i]));

      if (Math.floor(Math.random() * 2) === 1) {
        invert = true;
      } else {
        invert = false;
      }
    }

    return values;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries(getRandomValues());
    }, 1200);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-full">
      {typeof window !== "undefined" && window && (
        <Chart
          options={options}
          series={series}
          type="pie"
          height={"100%"}
          width={"100%"}
        />
      )}
      <div className="flex items-center justify-center pt-16 absolute inset-0 w-full h-full bg-transparent">
        <p className="subtitle italic opacity-75 text-center">
          Carregando resultado dos Orçamentos
        </p>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(DashboardBudgetLoading), {
  ssr: false,
});
