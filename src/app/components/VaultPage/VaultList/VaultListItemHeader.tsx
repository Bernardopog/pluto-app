"use client";

import { IVault } from "@/interfaces/IVault";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { FiTarget } from "react-icons/fi";

export default function VaultListItemHeader({ vault }: { vault: IVault }) {
  const { selectVault } = useVaultStore();

  const handleVaultSelection = () => {
    selectVault(vault.id);
  };

  return (
    <header className="relative w-full p-2 rounded-t-lg bg-chetwode-blue-200">
      <h3 className="subsubtitle pr-8 truncate">{vault.name}</h3>
      <p className="text-chetwode-blue-950">
        <span className="font-medium">Meta:</span>{" "}
        {moneyFormatter(vault.targetPrice)}
      </p>
      <button
        className="absolute top-1 right-1 p-1 rounded-lg text-lg bg-chetwode-blue-600 text-chetwode-blue-50 duration-300 ease-in-out hover:brightness-95 active:brightness-75"
        aria-label="Selecionar item"
        title="Selecionar Item"
        onClick={handleVaultSelection}
      >
        <FiTarget />
      </button>
    </header>
  );
}
