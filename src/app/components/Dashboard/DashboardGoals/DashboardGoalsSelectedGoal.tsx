"use client";

import { useFinanceStore } from "@/app/stores/useFinanceStore";
import { useGoalsStore } from "@/app/stores/useGoalsStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import DashboardGoalsProgressBar from "./DashboardGoalsProgressBar";
import DashboardGoalsPercentageDisplay from "./DashboardGoalsPercentageDisplay";

export default function DashboardGoalsSelectedGoal() {
  const { goal } = useGoalsStore();
  const { getTotalMoneySaved } = useVaultStore();
  const { balance } = useFinanceStore();

  const money = goal?.progress === "vault" ? getTotalMoneySaved() : balance;

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
        <p className="text-chetwode-blue-950/75">Nenhuma meta definida...</p>
      )}
    </>
  );
}
