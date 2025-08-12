"use client";
import Divider from "@/app/ui/Divider";
import {
  DashboardVaultSaved,
  DashboardVaultAdd,
  DashboardVaultHistory,
} from "./";
import { useVaultStore } from "@/app/stores/useVaultStore";

export default function DashboardVaultSection() {
  const { selectedDashboardVault } = useVaultStore();

  return (
    <section className="flex flex-col mt-2 gap-2 lg:flex-row">
      <DashboardVaultSaved />
      <Divider direction="vertical" />
      {selectedDashboardVault ? (
        <>
          <DashboardVaultHistory />
          <Divider direction="vertical" />
          <DashboardVaultAdd />
        </>
      ) : (
        <p className="text-lg italic text-chetwode-blue-950/50">
          Nenhum cofre selecionado ainda...
        </p>
      )}
    </section>
  );
}
