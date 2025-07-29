"use client";
import { IVaultItem } from "@/interfaces/IVault";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function VaultListItemSaved({ item }: { item: IVaultItem }) {
  const { selectVaultItem, unselectVaultItem, selectedVaultItem } =
    useVaultStore();

  const handleItemSelect = () => {
    if (selectedVaultItem?.id === item.id) unselectVaultItem();
    else selectVaultItem(item.id);
  };

  return (
    <li
      className={`flex justify-between p-1 rounded-lg shadow-sm ease-in-out duration-300 cursor-pointer ${
        selectedVaultItem?.id === item.id
          ? "bg-chetwode-blue-800 text-chetwode-blue-100 hover:bg-chetwode-blue-950 hover:text-chetwode-blue-50"
          : "bg-chetwode-blue-50 text-chetwode-blue-950 hover:bg-chetwode-blue-800 hover:text-chetwode-blue-100"
      }`}
      onClick={() => handleItemSelect()}
    >
      <span className="flex-1 truncate">{item.name}</span>
      <span className="flex-[0.5]">{moneyFormatter(item.value)}</span>
    </li>
  );
}
