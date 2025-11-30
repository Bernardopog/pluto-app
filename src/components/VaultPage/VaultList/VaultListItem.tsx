import type { IVault, IVaultItem } from '@/interfaces/IVault';
import {
  VaultListItemHeader,
  VaultListItemProgress,
  VaultListItemSaved,
} from '.';

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
      className={`size-full rounded-lg shadow-md border-2 border-chetwode-blue-950/40 opacity-0 animate-move-in dark:bg-chetwode-blue-950 ${
        selectedVaultId === vault.id &&
        'outline-2 outline-chetwode-blue-600 dark:outline-chetwode-blue-300'
      }`}
      style={{ animationDelay: `${index * 25}ms` }}
    >
      <article className='flex flex-col items-center h-full p-1 gap-1'>
        <VaultListItemHeader vault={vault} />
        <ul className='flex flex-col flex-1 w-full min-h-94 max-h-120 p-2 gap-1 rounded-lg bg-chetwode-blue-100 overflow-y-auto scrollbar-style scrollbar-thinner dark:bg-chetwode-blue-700'>
          {vault.items.map((item) => (
            <VaultListItemSaved key={item.id} item={item} />
          ))}
        </ul>
        <VaultListItemProgress vault={vault} />
      </article>
    </li>
  );
}
