"use client";
import { useState } from "react";
import {
  VaultChartDropdown,
  VaultChartGraph,
  VaultChartHeader,
} from "@/app/components/VaultPage/VaultChart";

export type VaultChartTypes =
  | "totalProgress"
  | "vaultProgress"
  | "restProgress";

export default function VaultChart() {
  const [typeOfChart, setTypeOfChart] =
    useState<VaultChartTypes>("totalProgress");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  let nameOfType = "";

  switch (typeOfChart) {
    case "totalProgress":
      nameOfType = "Progresso Total";
      break;
    case "vaultProgress":
      nameOfType = "Progresso por Cofre";
      break;
    case "restProgress":
      nameOfType = "Restante para Concluir";
      break;
  }

  return (
    <section id="vault-chart" className="base-card relative">
      <VaultChartHeader
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        nameOfType={nameOfType}
      />
      <VaultChartDropdown
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        typeOfChart={typeOfChart}
        setTypeOfChart={setTypeOfChart}
      />
      <VaultChartGraph typeOfChart={typeOfChart} />
    </section>
  );
}
