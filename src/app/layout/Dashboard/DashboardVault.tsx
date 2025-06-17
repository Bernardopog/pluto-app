import {
  DashboardVaultAdd,
  DashboardVaultHistory,
  DashboardVaultSaved,
} from "@/app/components/Dashboard/DashboardVault";
import Divider from "@/app/ui/Divider";
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
      <section className="flex flex-col mt-2 gap-2 lg:flex-row">
        <DashboardVaultSaved />
        <Divider direction="vertical" />
        <DashboardVaultHistory />
        <Divider direction="vertical" />
        <DashboardVaultAdd />
      </section>
    </article>
  );
}
