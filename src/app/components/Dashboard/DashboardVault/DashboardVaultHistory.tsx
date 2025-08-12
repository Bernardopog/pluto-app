"use client";

import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";

export default function DashboardVaultHistory() {
  const { vaultItemList, selectedDashboardVault } = useVaultStore();

  return (
    <ul className="grid grid-cols-2 grid-rows-3 w-full gap-2 lg:w-2/4">
      {vaultItemList
        .filter((item) => item.vaultId === selectedDashboardVault)
        .toReversed()
        .map((item, index) => {
          if (index >= 6) return;
          return (
            <li
              key={item.id}
              className="flex items-center w-full px-2 rounded-lg border-l-2 bg-chetwode-blue-300 border-chetwode-blue-700"
            >
              <p className="font-medium text-chetwode-blue-950 text-sm truncate">
                {item.name} - {moneyFormatter(item.value)}
              </p>
            </li>
          );
        })}
    </ul>
  );
}
