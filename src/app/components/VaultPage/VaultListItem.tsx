import {
  VaultListItemHeader,
  VaultListItemProgress,
  VaultListItemSaved,
} from "./";
import { IVault, IVaultItem } from "@/app/stores/useVaultStore";

interface IVaultComplete extends IVault {
  items: IVaultItem[];
}

export default function VaultListItem({
  vault,
  index,
}: {
  vault: IVaultComplete;
  index: number;
}) {
  return (
    <li
      className="size-full rounded-lg shadow-md animate-move-in"
      style={{ animationDelay: `${index * 25}ms` }}
    >
      <article className="flex flex-col items-center h-full p-1 gap-1">
        <VaultListItemHeader vault={vault} />
        <ul className="flex flex-col flex-1 w-full min-h-124 max-h-124 p-2 gap-1 rounded-lg bg-chetwode-blue-100 overflow-y-auto scrollbar-style scrollbar-thinner">
          {vault.items.map((item) => (
            <VaultListItemSaved key={item.id} item={item} />
          ))}
        </ul>
        <VaultListItemProgress vault={vault} />
      </article>
    </li>
  );
}
