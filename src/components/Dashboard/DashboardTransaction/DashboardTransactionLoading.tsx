"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DashboardTransactionLoading() {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#99999944"],
    plotOptions: {
      bar: {
        barHeight: "100%",
        borderRadius: 10,
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
      max: 100,
    },
  };

  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([
    {
      name: "Serie",
      data: Array(10).fill(50),
    },
  ]);

  const getRandomValues = (): number[] => {
    const values = [...series[0].data];
    const weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
      setSeries([
        {
          name: "Serie",
          data: [...getRandomValues()],
        },
      ]);
    }, 1200);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex-1 relative w-full">
      {typeof window !== "undefined" && window && (
        <Chart
          options={options as ApexOptions}
          series={series}
          type="bar"
          height={"100%"}
          width={"100%"}
        />
      )}
      <div className="flex justify-center absolute inset-0 bg-transparent w-full h-full">
        <p className="subtitle italic opacity-75">
          Carregando tabela de Transações
        </p>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(DashboardTransactionLoading), {
  ssr: false,
});
