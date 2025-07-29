import {
  VaultListItemHeader,
  VaultListItemProgress,
  VaultListItemSaved,
} from "./";
import { IVault, IVaultItem } from "@/app/stores/useVaultStore";

interface IVaultListItemProps {
  vault: IVaultComplete;
  index: number;
  selectedVaultId?: number;
}

interface IVaultComplete extends IVault {
  items: IVaultItem[];
}

export default function VaultListItem({
  vault,
  index,
  selectedVaultId,
}: IVaultListItemProps) {
  return (
    <li
      className={`size-full rounded-lg shadow-md opacity-0 animate-move-in ${
        selectedVaultId === vault.id && "outline-2 outline-chetwode-blue-600"
      }`}
      style={{ animationDelay: `${index * 25}ms` }}
    >
      <article className="flex flex-col items-center h-full p-1 gap-1">
        <VaultListItemHeader vault={vault} />
        <ul className="flex flex-col flex-1 w-full min-h-120 max-h-120 p-2 gap-1 rounded-lg bg-chetwode-blue-100 overflow-y-auto scrollbar-style scrollbar-thinner">
          {vault.items.map((item) => (
            <VaultListItemSaved key={item.id} item={item} />
          ))}
        </ul>
        <VaultListItemProgress vault={vault} />
      </article>
    </li>
  );
}
