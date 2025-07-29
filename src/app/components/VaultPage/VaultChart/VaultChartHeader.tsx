"use client";
import { Dispatch, SetStateAction } from "react";
import { IoClose, IoEllipsisHorizontal } from "react-icons/io5";

interface IVaultChartHeaderProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  nameOfType: string;
}

export default function VaultChartHeader({
  isDropdownOpen,
  setIsDropdownOpen,
  nameOfType,
}: IVaultChartHeaderProps) {
  return (
    <header>
      <h2 className="subtitle">
        Gráfico{" "}
        <span className="italic text-sm text-chetwode-blue-900/75 grayscale-50">
          ({nameOfType})
        </span>
      </h2>
      <button
        className="base-btn absolute top-2 right-2"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label="Selecionar tipo de Gráfico"
        title="Selecionar tipo de Gráfico"
      >
        {isDropdownOpen ? <IoClose /> : <IoEllipsisHorizontal />}
      </button>
    </header>
  );
}
