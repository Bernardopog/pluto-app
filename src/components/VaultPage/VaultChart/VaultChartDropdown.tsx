"use client";
import { Dispatch, SetStateAction } from "react";
import Inert from "../../Inert";
import { VaultChartTypes } from "@/layout/Vault/VaultChart";

interface IVaultChartDropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  typeOfChart: VaultChartTypes;
  setTypeOfChart: Dispatch<SetStateAction<VaultChartTypes>>;
}

export default function VaultChartDropdown({
  isDropdownOpen,
  setIsDropdownOpen,
  typeOfChart,
  setTypeOfChart,
}: IVaultChartDropdownProps) {
  const handleSelectTypeOfChart = (type: VaultChartTypes) => {
    setTypeOfChart(type);
    setIsDropdownOpen(false);
  };

  return (
    <Inert
      isVisible={isDropdownOpen}
      className={`absolute right-2 z-30 overflow-hidden bg-chetwode-blue-200 text-chetwode-blue-950 duration-300 ease-in-out ${
        isDropdownOpen ? "h-48 mt-1 p-2 px-4 rounded-lg shadow-md" : "h-0"
      }`}
    >
      <span className="block text-lg">Exibir gráfico como:</span>
      <div className="flex flex-col gap-2">
        <button
          className={`p-1 rounded-lg bg-chetwode-blue-300 duration-300 ease-in-out ${
            typeOfChart === "totalProgress" && "bg-chetwode-blue-400"
          }`}
          onClick={() => handleSelectTypeOfChart("totalProgress")}
        >
          Progresso Geral
        </button>
        <button
          className={`p-1 rounded-lg bg-chetwode-blue-300 duration-300 ease-in-out ${
            typeOfChart === "vaultProgress" && "bg-chetwode-blue-400"
          }`}
          onClick={() => handleSelectTypeOfChart("vaultProgress")}
        >
          Progresso por Cofre
        </button>
        <button
          className={`p-1 rounded-lg bg-chetwode-blue-300 duration-300 ease-in-out ${
            typeOfChart === "restProgress" && "bg-chetwode-blue-400"
          }`}
          onClick={() => handleSelectTypeOfChart("restProgress")}
        >
          Faltando para Concluir
        </button>
      </div>
    </Inert>
  );
}
