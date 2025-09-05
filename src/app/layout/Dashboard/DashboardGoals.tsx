"use client";
import {
  DashboardGoalsController,
  DashboardGoalsCurrentGoal,
} from "@/app/components/Dashboard/DashboardGoals";
import { useGoalsStore } from "@/app/stores/useGoalsStore";
import { useVaultStore } from "@/app/stores/useVaultStore";
import { useEffect } from "react";

export default function DashboardGoals() {
  const fetchVault = useVaultStore((s) => s.vaultMethods.fetch);
  const fetchVaultItems = useVaultStore((s) => s.vaultItemMethods.fetch);
  const fetchGoal = useGoalsStore((s) => s.goalMethods.fetch);

  useEffect(() => {
    fetchVault(); //! tmp
    fetchVaultItems(); //! tmp
    fetchGoal();
  }, [fetchVault, fetchVaultItems, fetchGoal]);

  return (
    <article id="dashboard-goals" className="base-card flex flex-col">
      <header className="flex justify-between">
        <h2 className="subtitle">Objetivo</h2>
        <DashboardGoalsController />
      </header>
      <DashboardGoalsCurrentGoal />
    </article>
  );
}
