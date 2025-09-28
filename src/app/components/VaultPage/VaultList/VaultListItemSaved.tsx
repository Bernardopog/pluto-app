"use client";
import { IVaultItem } from "@/interfaces/IVault";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { useShallow } from "zustand/shallow";

export default function VaultListItemSaved({ item }: { item: IVaultItem }) {
  const { selectVaultItem, unselectVaultItem } = useVaultStore(
    useShallow((s) => ({
      selectVaultItem: s.vaultItemSelection.select,
      unselectVaultItem: s.vaultItemSelection.unselect,
    }))
  );
  const selectedVaultItem = useVaultStore((s) => s.vaultItemSelection.selected);

  const handleItemSelect = () => {
    if (selectedVaultItem?.id === item.id) unselectVaultItem();
    else selectVaultItem(item.id);
  };

  return (
    <li
      className={`flex justify-between p-1 rounded-lg shadow-sm ease-in-out duration-300 cursor-pointer ${
        selectedVaultItem?.id === item.id
          ? "bg-chetwode-blue-800 text-chetwode-blue-100 hover:bg-chetwode-blue-950 hover:text-chetwode-blue-50 dark:bg-chetwode-blue-200 dark:text-chetwode-blue-950 dark:hover:bg-chetwode-blue-100 dark:hover:text-chetwode-blue-950"
          : "bg-chetwode-blue-50 text-chetwode-blue-950 hover:bg-chetwode-blue-800 hover:text-chetwode-blue-100 dark:bg-chetwode-blue-900 dark:text-chetwode-blue-50 dark:hover:bg-chetwode-blue-950 dark:hover:text-chetwode-blue-50"
      }`}
      onClick={() => handleItemSelect()}
    >
      <span className="flex-1 truncate">{item.name}</span>
      <span className="flex-[0.5]">{moneyFormatter(item.value)}</span>
    </li>
  );
}
