"use client";
import { useVaultStore } from "@/stores/useVaultStore";
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
  const vaultList = useVaultStore((s) => s.vaultData.list);

  const vaultListLength = vaultList.length;

  return (
    <header>
      <h2 className="subtitle">
        Gráfico{" "}
        {vaultListLength > 0 && (
          <span className="italic text-sm text-chetwode-blue-900/75 grayscale-50 dark:text-chetwode-blue-100/75">
            ({nameOfType})
          </span>
        )}
      </h2>
      {vaultListLength > 0 && (
        <button
          className="base-btn absolute top-2 right-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-label="Selecionar tipo de Gráfico"
          title="Selecionar tipo de Gráfico"
        >
          {isDropdownOpen ? <IoClose /> : <IoEllipsisHorizontal />}
        </button>
      )}
    </header>
  );
}
