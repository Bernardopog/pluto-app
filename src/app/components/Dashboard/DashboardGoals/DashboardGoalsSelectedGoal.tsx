"use client";

import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useGoalsStore } from "@/app/stores/useGoalsStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import DashboardGoalsProgressBar from "./DashboardGoalsProgressBar";
import DashboardGoalsPercentageDisplay from "./DashboardGoalsPercentageDisplay";
import { useEffect, useMemo } from "react";
import { getPercentage } from "@/app/utils/getPercentage";

export default function DashboardGoalsSelectedGoal() {
  const goal = useGoalsStore((s) => s.goal);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault
  );
  const balance = useFinanceStore((s) => s.balance);
  const vaultItemList = useVaultStore((s) => s.vaultItemData.list);
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const cancelGoal = useGoalsStore((s) => s.cancelGoal);
  const completeGoal = useGoalsStore((s) => s.completeGoal);

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

  useEffect(() => {
    if (!goal?.deadline) return;

    const deadline = new Date(goal.deadline);
    const now = Date.now();

    if (deadline.getTime() < now) {
      cancelGoal();
    } else if (deadline.getTime() < now && goal?.progress === "vault") {
      const vault = vaultList.find((vault) => vault.id === goal.assignedVault);
      if (!vault) return;
      const totalMoneySaved = getTotalMoneySavedFromVault(vault.id);
      const percentage = getPercentage(totalMoneySaved, goal.targetAmount);
      if (Number(percentage) >= 100) {
        completeGoal();
      }
    } else if (deadline.getTime() < now && goal?.progress === "balance") {
      const percentage = getPercentage(balance, goal.targetAmount);
      if (Number(percentage) >= 100) {
        completeGoal();
      }
    }
  }, [
    goal,
    balance,
    cancelGoal,
    completeGoal,
    getTotalMoneySavedFromVault,
    vaultList,
  ]);

  return (
    <>
      {goal ? (
        <div className="flex flex-col flex-1 relative p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-900">
          <p className="font-bold text-center">{goal.name}</p>
          <div className="flex justify-center gap-x-2">
            <p className="font-bold inline">{moneyFormatter(money)}</p>/
            <p className="font-medium inline">
              {moneyFormatter(goal.targetAmount)}
            </p>
          </div>
          {goal.deadline && (
            <p className="text-center text-sm text-chetwode-blue-950/75">
              Prazo: {goal.deadline}
            </p>
          )}
          <DashboardGoalsPercentageDisplay
            money={money}
            totalPrice={goal.targetAmount}
          />
          <DashboardGoalsProgressBar
            money={money}
            totalPrice={goal.targetAmount}
          />
        </div>
      ) : (
        <p className="italic text-chetwode-blue-950/75">
          Nenhuma meta definida...
        </p>
      )}
    </>
  );
}
