"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { VaultChartTypes } from "@/app/layout/Vault/VaultChart";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { getPercentage } from "@/app/utils/getPercentage";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IVaultChartGraphProps {
  typeOfChart: VaultChartTypes;
}

export default function VaultChartGraph({
  typeOfChart,
}: IVaultChartGraphProps) {
  const vaultList = useVaultStore((s) => s.vaultList);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault
  );

  const BackgroundColorMap: Record<number, string> = {
    1: "#df4444",
    2: "#4477df",
    3: "#44df44",
    4: "#df7744",
  };

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

  const data = {
    labels:
      typeOfChart === "restProgress"
        ? ["Restante", ...vaultList.map((item) => item.name)]
        : [...vaultList.map((item) => item.name)],
    datasets: [
      {
        label: "%",
        data:
          typeOfChart === "totalProgress"
            ? totalProgress.map((v) => +v)
            : typeOfChart === "vaultProgress"
            ? vaultProgress.map((v) => +v)
            : restProgress.map((v) => +v),

        backgroundColor:
          typeOfChart === "restProgress"
            ? [
                "#a9a9a9",
                ...vaultList.map((_, idx) => BackgroundColorMap[idx + 1]),
              ]
            : vaultList.map((_, idx) => BackgroundColorMap[idx + 1]),

        borderWidth: 0,
        spacing: 2,
        hoverOffset: 16,
        circumference: 180,
        rotation: -90,
      },
    ],
  };

  return (
    <div className="flex justify-center w-full">
      <section className="relative w-full max-w-[20rem] mt-2">
        <Doughnut
          data={data}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      </section>
    </div>
  );
}
