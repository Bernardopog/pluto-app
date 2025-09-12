import StoreInitializer from "@/app/components/StoreInitializer";
import DashboardBudget from "@/app/layout/Dashboard/DashboardBudget";
import DashboardGoals from "@/app/layout/Dashboard/DashboardGoals";
import DashboardHeader from "@/app/layout/Dashboard/DashboardHeader";
import DashboardStats from "@/app/layout/Dashboard/DashboardStats";
import DashboardTransaction from "@/app/layout/Dashboard/DashboardTransaction";
import DashboardVault from "@/app/layout/Dashboard/DashboardVault";
import { getBudgets } from "@/server/functions/budget";
import { getFinance } from "@/server/functions/finance";
import { getGoal } from "@/server/functions/goal";
import { getTransactions } from "@/server/functions/transaction";
import { getVaults } from "@/server/functions/vault";
import { getVaultItems } from "@/server/functions/vaultItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluto | Dashboard",
  description: "Dashboard with your financial infos",
};

export default async function DashboardPage() {
  const [
    txnData,
    budgetData,
    vaultData,
    vaultItemsData,
    goalData,
    financeData,
  ] = await Promise.all([
    getTransactions(),
    getBudgets(),
    getVaults(),
    getVaultItems(),
    getGoal(),
    getFinance(),
  ]);

  return (
    <main className="page">
      <h2 className="main-title">Dashboard</h2>
      <StoreInitializer
        txnData={txnData}
        budgetData={budgetData}
        vaultData={vaultData}
        vaultItemsData={vaultItemsData}
        goalData={goalData}
        financeData={financeData!}
      />
      <section className="dashboard-layout grid min-h-[calc(100vh-32px-24px)]">
        <DashboardHeader />
        <DashboardVault />
        <DashboardGoals />
        <DashboardBudget />
        <DashboardTransaction />
        <DashboardStats />
      </section>
    </main>
  );
}
