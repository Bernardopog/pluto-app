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
      className="flex flex-col p-2 border-b-2 rounded-lg bg-star-dust-50 border-transparent shadow-md duration-300 ease-in-out hover:shadow-lg hover:border-chetwode-blue-700 lg:grid lg:grid-cols-[1fr] lg:grid-rows-[auto_1fr]"
    >
      <header className="flex justify-between">
        <h3 className="sub-title">Cofre</h3>
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
