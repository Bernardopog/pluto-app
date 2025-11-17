import type { Metadata } from 'next';
import StoreInitializer from '@/components/StoreInitializer';
import DashboardBudget from '@/layout/Dashboard/DashboardBudget';
import DashboardGoals from '@/layout/Dashboard/DashboardGoals';
import DashboardHeader from '@/layout/Dashboard/DashboardHeader';
import DashboardStats from '@/layout/Dashboard/DashboardStats';
import DashboardTransaction from '@/layout/Dashboard/DashboardTransaction';
import DashboardVault from '@/layout/Dashboard/DashboardVault';
import { getBudgets } from '@/server/functions/budget';
import { getFinance } from '@/server/functions/finance';
import { getGoal } from '@/server/functions/goal';
import { getStats } from '@/server/functions/stats';
import { getTransactions } from '@/server/functions/transaction';
import { getVaults } from '@/server/functions/vault';
import { getVaultItems } from '@/server/functions/vaultItem';

export const metadata: Metadata = {
  title: 'Pluto | Dashboard',
  description: 'Dashboard with your financial infos',
};

export default async function DashboardPage() {
  const [
    txnData,
    budgetData,
    vaultData,
    vaultItemsData,
    goalData,
    financeData,
    statsData,
  ] = await Promise.all([
    getTransactions(),
    getBudgets(),
    getVaults(),
    getVaultItems(),
    getGoal(),
    getFinance(),
    getStats(),
  ]);

  return (
    <main className='page'>
      <h2 className='main-title'>Dashboard</h2>
      <StoreInitializer
        txnData={txnData}
        budgetData={budgetData}
        vaultData={vaultData}
        vaultItemsData={vaultItemsData}
        goalData={goalData}
        // biome-ignore lint/style/noNonNullAssertion: <Finance Data will never be null>
        financeData={financeData!}
        statsData={statsData}
      />
      <section className='dashboard-layout grid'>
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
