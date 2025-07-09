import { IVaultItem } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function VaultListItemSaved({ item }: { item: IVaultItem }) {
  return (
    <li className="flex justify-between p-1 rounded-lg bg-chetwode-blue-50 text-chetwode-blue-950 shadow-sm ease-in-out duration-300 hover:bg-chetwode-blue-800 hover:text-chetwode-blue-100">
      <span className="flex-1 truncate">{item.name}</span>
      <span className="flex-[0.5]">{moneyFormatter(item.value)}</span>
    </li>
  );
}
