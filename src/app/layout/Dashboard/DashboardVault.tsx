import { DashboardVaultSection } from "@/app/components/Dashboard/DashboardVault";
import MoreDetail from "@/app/ui/MoreDetail";

export default function DashboardVault() {
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
