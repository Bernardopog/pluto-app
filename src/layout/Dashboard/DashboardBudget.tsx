'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useMemo } from 'react';
import {
  DashboardBudgetChart,
  DashboardBudgetLegend,
} from '@/components/Dashboard/DashboardBudget';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import MoreDetail from '@/ui/MoreDetail';

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartType = 'full' | 'half';

export default function DashboardBudget() {
  const income = useFinanceStore((s) => s.financeData.item.income);

  const getTotalMonthlyExpenses = useTransactionBudgetStore(
    (s) => s.getTotalMonthlyExpenses,
  );
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);
  const currentMonthTxn = useTransactionBudgetStore(
    (s) => s.getTransactionsOfCurrentMonth,
  );

  const totalExpenses = getTotalMonthlyExpenses();
  const rest = income + totalExpenses;

  const budgetListHaveExpenses = useMemo(() => {
    return budgetList.some((bdgt) =>
      currentMonthTxn().some(
        (txn) => txn.categoryId === bdgt.id && txn.value < 0,
      ),
    );
  }, [budgetList, currentMonthTxn]);

  return (
    <article
      id='dashboard-budget'
      className='base-card max-h-full overflow-auto scrollbar-thin hover:shadow-lg lg:h-full lg:mt-0'
    >
      <header className='flex justify-between'>
        <h2 className='subtitle'>Orçamento</h2>
        <MoreDetail href='/budget' />
      </header>
      {budgetList.length > 0 && budgetListHaveExpenses && (
        <DashboardBudgetChart budget={budgetList} rest={rest} />
      )}
      <DashboardBudgetLegend budget={budgetList} rest={rest} />
    </article>
  );
}
