import type { Metadata } from 'next';
import BudgetAction from '@/layout/Budget/BudgetAction';
import BudgetChart from '@/layout/Budget/BudgetChart';
import BudgetList from '@/layout/Budget/BudgetList';
import BudgetOverview from '@/layout/Budget/BudgetOverview';

export const metadata: Metadata = {
  title: 'Pluto | Budget',
  description: 'Dashboard for budget info and management',
};

export default function page() {
  return (
    <main className='page'>
      <h2 className='main-title'>Orçamento</h2>
      <section className='budget-page grid'>
        <BudgetOverview />
        <BudgetAction />
        <BudgetChart />
        <BudgetList />
      </section>
    </main>
  );
}
