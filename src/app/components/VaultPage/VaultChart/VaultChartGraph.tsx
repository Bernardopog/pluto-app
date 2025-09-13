"use client";

import { VaultChartTypes } from "@/app/layout/Vault/VaultChart";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { getPercentage } from "@/app/utils/getPercentage";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface IVaultChartGraphProps {
  typeOfChart: VaultChartTypes;
}

export default function VaultChartGraph({
  typeOfChart,
}: IVaultChartGraphProps) {
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault
  );

  const totalInVaults: number = vaultList
    .map((vault) => getTotalMoneySavedFromVault(vault.id))
    .reduce((acc, item) => acc + item, 0);

  const totalProgress = [
    ...vaultList.map((vault) => {
      const value = getPercentage(
        getTotalMoneySavedFromVault(vault.id),
        totalInVaults
      );
      return +value > 100 ? 100 : value;
    }),
  ];

  const vaultProgress = [
    ...vaultList.map((vault) => {
      const value = getPercentage(
        getTotalMoneySavedFromVault(vault.id),
        vault.targetPrice
      );
      return +value > 100 ? 100 : value;
    }),
  ];

  const rest = vaultList
    .map((vault) => vault.targetPrice - getTotalMoneySavedFromVault(vault.id))
    .reduce((acc, item) => acc + item, 0);

  const restProgress = [
    rest,
    ...vaultList.map((vault) => getTotalMoneySavedFromVault(vault.id)),
  ];

  const options: ApexOptions = {
    labels:
      typeOfChart === "restProgress"
        ? ["Restante", ...vaultList.map((vault) => vault.name)]
        : vaultList.map((vault) => vault.name),
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
      colors:
        typeOfChart === "restProgress"
          ? ["#a9a9a9", "#df4444", "#4477df", "#44df44", "#df7744"]
          : ["#df4444", "#4477df", "#44df44", "#df7744"],
    },
    plotOptions: {
      pie: {
        offsetY: 20,
        startAngle: -90,
        endAngle: 90,
        donut: {
          labels: {
            show: true,
            value: {
              formatter: (val: string) => `${val}/X`,
              color: "#2a1e57",
            },
          },
          size: "60",
        },
        expandOnClick: false,
      },
    },
  };
  const series =
    typeOfChart === "totalProgress"
      ? totalProgress.map((val) => +val)
      : typeOfChart === "vaultProgress"
      ? vaultProgress.map((val) => +val)
      : restProgress.map((val) => +val);

  return (
    <>
      {typeof window !== "undefined" && window && (
        <Chart
          options={options as ApexOptions}
          series={series}
          type="donut"
          height={"90%"}
          width={"98%"}
        />
      )}
    </>
  );
}
