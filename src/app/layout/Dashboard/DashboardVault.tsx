"use client";

import { DashboardVaultSection } from "@/app/components/Dashboard/DashboardVault";
import { useVaultStore } from "@/app/stores/useVaultStore";
import MoreDetail from "@/app/ui/MoreDetail";
import { useEffect } from "react";

export default function DashboardVault() {
  const fetchVault = useVaultStore((s) => s.vaultMethods.fetch);
  const fetchVaultItems = useVaultStore((s) => s.vaultItemMethods.fetch);

  useEffect(() => {
    fetchVault();
    fetchVaultItems();
  }, [fetchVault, fetchVaultItems]);

  return (
    <article
      id="dashboard-vault"
      className="base-card flex flex-col lg:grid lg:grid-cols-[1fr] lg:grid-rows-[auto_1fr]"
    >
      <header className="flex justify-between">
        <h2 className="subtitle">Cofre</h2>
        <MoreDetail href="/vault" />
      </header>
      <DashboardVaultSection />
    </article>
  );
}
