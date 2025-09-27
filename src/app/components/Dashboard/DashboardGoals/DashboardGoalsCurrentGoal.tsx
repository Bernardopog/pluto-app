"use client";

import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useGoalsStore } from "@/app/stores/useGoalsStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import DashboardGoalsProgressBar from "./DashboardGoalsProgressBar";
import DashboardGoalsPercentageDisplay from "./DashboardGoalsPercentageDisplay";
import { useEffect, useMemo } from "react";
import { getPercentage } from "@/app/utils/getPercentage";
import { MdWarning } from "react-icons/md";
import { useModalStore } from "@/app/stores/useModalStore";
import { useStatsStore } from "@/app/stores/useStatsStore";
import { useShallow } from "zustand/shallow";

export default function DashboardGoalsCurrentGoal() {
  const goal = useGoalsStore((s) => s.goalData.item);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault
  );
  const balance = useFinanceStore((s) => s.financeData.item.balance);
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const vaultListItem = useVaultStore((s) => s.vaultItemData.list);
  const cancel = useGoalsStore((s) => s.goalMethods.cancel);
  const complete = useGoalsStore((s) => s.goalMethods.complete);
  const toggleModal = useModalStore((s) => s.toggleModal);
  const selectModalType = useModalStore((s) => s.selectModalType);
  const { statCompleteGoal, statCancelGoal } = useStatsStore(
    useShallow((s) => ({
      statCompleteGoal: s.completeGoal,
      statCancelGoal: s.cancelGoal,
    }))
  );

  const money = useMemo(() => {
    if (goal?.progress === "vault") {
      const vault = vaultList.find((vault) => {
        return vault.id === goal.assignedVault;
      });
      if (!vault) return 0;
      return getTotalMoneySavedFromVault(vault.id);
    }

    return balance;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goal, balance, getTotalMoneySavedFromVault, vaultList, vaultListItem]);

  useEffect(() => {
    if (!goal?.deadline) return;

    const deadline = new Date(goal.deadline);
    const now = Date.now();

    if (deadline.getTime() < now) {
      cancel();
      statCancelGoal();
    } else if (deadline.getTime() < now && goal?.progress === "vault") {
      const vault = vaultList.find((vault) => vault.id === goal.assignedVault);
      if (!vault) return;
      const totalMoneySaved = getTotalMoneySavedFromVault(vault.id);
      const percentage = getPercentage(totalMoneySaved, goal.targetAmount);
      if (Number(percentage) >= 100) {
        complete();
        statCompleteGoal();
      }
    } else if (deadline.getTime() < now && goal?.progress === "balance") {
      const percentage = getPercentage(balance, goal.targetAmount);
      if (Number(percentage) >= 100) {
        complete();
        statCompleteGoal();
      }
    }
  }, [
    goal,
    balance,
    cancel,
    complete,
    getTotalMoneySavedFromVault,
    vaultList,
    statCancelGoal,
    statCompleteGoal,
  ]);

  const deadlineFormatted = new Date(goal?.deadline || 0).toLocaleDateString();

  const handleModal = () => {
    toggleModal();
    selectModalType("goalReassign");
  };

  return (
    <>
      {goal ? (
        <div className="flex flex-col flex-1 relative p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-900 dark:bg-chetwode-blue-800 dark:text-chetwode-blue-200">
          <p className="font-bold text-center">{goal.name}</p>
          <div className="flex justify-center gap-x-2">
            <p className="font-bold inline">{moneyFormatter(money)}</p>/
            <p className="font-medium inline">
              {moneyFormatter(goal.targetAmount)}
            </p>
          </div>
          {goal.progress === "vault" &&
            vaultList.findIndex((vault) => vault.id === goal.assignedVault) ===
              -1 && (
              <button
                className="absolute top-0 right-0 text-center text-sm size-fit rounded-lg p-1 bg-red-500 animate-pulse"
                aria-label="Atribuir a novo cofre"
                title="Atribuir a novo cofre"
                onClick={handleModal}
              >
                <MdWarning className="text-2xl text-star-dust-50" />
              </button>
            )}
          {goal.deadline && (
            <p className="text-center text-sm text-chetwode-blue-950/75 dark:text-chetwode-blue-200/75">
              Prazo: {deadlineFormatted}
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
        <p className="flex items-center justify-center h-full text-lg italic font-bold text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75">
          Nenhuma meta definida...
        </p>
      )}
    </>
  );
}
