"use client";

import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useGoalsStore } from "@/app/stores/useGoalsStore";
import { useModalStore } from "@/app/stores/useModalStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { getPercentage } from "@/app/utils/getPercentage";
import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

export default function DashboardGoalsController() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    }))
  );

  const { goal, cancel, complete } = useGoalsStore(
    useShallow((s) => ({
      goal: s.goalData.item,
      cancel: s.goalMethods.cancel,
      complete: s.goalMethods.complete,
    }))
  );

  const money = useFinanceStore((s) => s.balance);
  const vaultList = useVaultStore((s) => s.vaultData.list);
  const vaultItemList = useVaultStore((s) => s.vaultItemData.list);
  const getTotalMoneySavedFromVault = useVaultStore(
    (s) => s.getTotalMoneySavedFromVault
  );

  const [currentProgressPercentage, setCurrentProgressPercentage] =
    useState<number>(0);

  useEffect(() => {
    if (goal?.progress === "vault") {
      const vault = vaultList.find((vault) => vault.id === goal.assignedVault);
      if (!vault) return;
      const totalMoneySaved = getTotalMoneySavedFromVault(vault.id);
      const percentage = getPercentage(totalMoneySaved, goal.targetAmount);
      setCurrentProgressPercentage(Number(percentage));
    }
    if (goal?.progress === "balance") {
      const percentage = getPercentage(money, goal.targetAmount);
      setCurrentProgressPercentage(Number(percentage));
    }
  }, [goal, money, vaultList, vaultItemList, getTotalMoneySavedFromVault]);

  const handleModal = () => {
    toggleModal();
    selectModalType("goalCreate");
  };

  const handleCompleteGoal = () => {
    if (goal?.progress === "vault") {
      const vault = vaultList.find((vault) => vault.id === goal.assignedVault);
      if (!vault) return;
      const totalMoneySaved = getTotalMoneySavedFromVault(vault.id);
      const percentage = getPercentage(totalMoneySaved, goal.targetAmount);
      if (Number(percentage) >= 100) {
        complete();
      }
    }
    if (goal?.progress === "balance") {
      if (money >= goal.targetAmount) {
        complete();
      }
    }
    setCurrentProgressPercentage(0);
  };

  const handleCancelGoal = () => {
    cancel();
    setCurrentProgressPercentage(0);
  };

  return (
    <>
      {!goal && (
        <button
          className="text-chetwode-blue-950/50 duration-300 ease-in-out hover:text-chetwode-blue-950/75"
          onClick={handleModal}
        >
          Criar
        </button>
      )}
      {goal && (
        <button
          className="text-red-950/50 duration-300 ease-in-out hover:text-red-950/75"
          onClick={handleCancelGoal}
        >
          Cancelar
        </button>
      )}
      {currentProgressPercentage >= 100 && (
        <button
          className="text-chetwode-blue-950/50 duration-300 ease-in-out hover:text-chetwode-blue-950/75"
          onClick={handleCompleteGoal}
        >
          Completar
        </button>
      )}
    </>
  );
}
