'use client';

import { useShallow } from 'zustand/shallow';
import { useVaultStore } from '@/stores/useVaultStore';
import { moneyFormatter } from '@/utils/moneyFormatter';

export default function DashboardVaultHistory() {
  const { vaultItemList, selectedDashboardVault } = useVaultStore(
    useShallow((s) => ({
      vaultItemList: s.vaultItemData.list,
      selectedDashboardVault: s.selectedDashboardVault,
    })),
  );

  return (
    <ul className='grid grid-cols-2 grid-rows-3 w-full gap-2 lg:w-2/4'>
      {vaultItemList
        .filter((item) => item.vaultId === selectedDashboardVault)
        .toReversed()
        .map((item, index) => {
          if (index >= 6) return;
          return (
            <li
              key={item.id}
              className='flex items-center w-full px-2 rounded-lg border-l-2 shadow-md bg-chetwode-blue-300 border-chetwode-blue-700 dark:bg-chetwode-blue-800 dark:border-chetwode-blue-600'
            >
              <p className='font-medium text-chetwode-blue-950 text-sm truncate dark:text-chetwode-blue-50'>
                {item.name} - {moneyFormatter(item.value)}
              </p>
            </li>
          );
        })}
    </ul>
  );
}
