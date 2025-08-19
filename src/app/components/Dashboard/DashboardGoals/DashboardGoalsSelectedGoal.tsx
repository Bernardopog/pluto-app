"use client";

import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useGoalsStore } from "@/app/stores/useGoalsStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import DashboardGoalsProgressBar from "./DashboardGoalsProgressBar";
import DashboardGoalsPercentageDisplay from "./DashboardGoalsPercentageDisplay";
import { useMemo } from "react";

export default function DashboardGoalsSelectedGoal() {
  const goal = useGoalsStore((s) => s.goal);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault
  );
  const balance = useFinanceStore((s) => s.balance);
  const vaultItemList = useVaultStore((s) => s.vaultItemData.list);

  const money = useMemo(() => {
    if (goal?.progress === "vault") {
      const vault = vaultItemList.find(
        (vault) => vault.id === goal.assignedVault
      );
      if (!vault) return 0;
      return getTotalMoneySavedFromVault(vault.id);
    }
    return balance;
  }, [goal, balance, getTotalMoneySavedFromVault, vaultItemList]);

  return (
    <>
      {goal ? (
        <div className="flex flex-col flex-1 p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-900">
          <p className="font-bold text-center">{goal.name}</p>
          <div className="flex justify-center gap-x-2">
            <p className="font-bold inline">{moneyFormatter(money)}</p>/
            <p className="font-medium inline">{moneyFormatter(goal.price)}</p>
          </div>
          <DashboardGoalsPercentageDisplay
            money={money}
            totalPrice={goal.price}
          />
          <DashboardGoalsProgressBar money={money} totalPrice={goal.price} />
        </div>
      ) : (
        <p className="italic text-chetwode-blue-950/75">
          Nenhuma meta definida...
        </p>
      )}
    </>
  );
}
