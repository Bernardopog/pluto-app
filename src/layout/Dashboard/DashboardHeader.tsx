'use client';

import { useMemo } from 'react';
import { MdAttachMoney, MdPlayArrow, MdSettings } from 'react-icons/md';
import {
  OverviewCard,
  OverviewCardAction,
  OverviewCardSwitch,
} from '@/components/OverviewCard';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { moneyFormatter } from '@/utils/moneyFormatter';

export default function DashboardHeader() {
  const financeData = useFinanceStore((s) => s.financeData);
  const getTotalMotnhlyExpenses = useTransactionBudgetStore(
    (s) => s.getTotalMonthlyExpenses,
  );
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

  const currentExpenses = useMemo(
    () => Math.abs(getTotalMotnhlyExpenses()),

    [getTotalMotnhlyExpenses],
  );
  const estimateExpenses = budgetList.reduce(
    (acc, item) => acc + item.limit,
    0,
  );

  const balancePerMonth = financeData.item.income - currentExpenses;

  const toggleModal = useModalStore((s) => s.toggleModal);
  const selectModalType = useModalStore((s) => s.selectModalType);

  const openBalanceConfig = () => {
    toggleModal();
    selectModalType('configBalance');
  };

  const openIncomeConfig = () => {
    toggleModal();
    selectModalType('configIncome');
  };

  return (
    <header id='dashboard-overview'>
      <ul className='grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1fr] lg:grid-cols-3 xl:grid-cols-4 xl:gap-4'>
        {financeData.loading ? (
          <li className='relative sm:col-span-2 lg:col-span-3 xl:col-span-1'>
            <div className='flex items-center justify-center relative h-full py-2 px-4 rounded-lg shadow-md overflow-hidden duration-300 ease-in-out border-b-2 border-transparent bg-star-dust-50 hover:-translate-y-2 hover:shadow-lg hover:border-chetwode-blue-70 dark:bg-chetwode-blue-900'>
              <span className='text-2xl font-medium text-chetwode-blue-950/75 dark:text-chetwode-blue-50'>
                Carregando...
              </span>
            </div>
          </li>
        ) : (
          <li className='relative sm:col-span-2 lg:col-span-3 xl:col-span-1'>
            <OverviewCardAction
              action={openBalanceConfig}
              ariaLabel='Editar saldo'
              icon={<MdSettings />}
            >
              <OverviewCard
                title='Saldo'
                value={moneyFormatter(financeData.item.balance).replace(
                  'R$',
                  '',
                )}
                valueType='currency'
                icon={<MdAttachMoney />}
              />
            </OverviewCardAction>
          </li>
        )}
        <li className='sm:col-span-2 lg:col-span-1'>
          <OverviewCard
            title='Previsão do mês'
            value={moneyFormatter(balancePerMonth).replace('R$', '')}
            valueType='currency'
            icon={<MdAttachMoney />}
          />
        </li>
        {financeData.loading ? (
          <li className='relative'>
            <div className='flex items-center justify-center relative h-full py-2 px-4 rounded-lg shadow-md overflow-hidden duration-300 ease-in-out border-b-2 border-transparent bg-star-dust-50 hover:-translate-y-2 hover:shadow-lg hover:border-chetwode-blue-70 dark:bg-chetwode-blue-900'>
              <span className='text-2xl font-medium text-chetwode-blue-950/75 dark:text-chetwode-blue-50'>
                Carregando...
              </span>
            </div>
          </li>
        ) : (
          <li className='relative'>
            <OverviewCardAction
              action={openIncomeConfig}
              ariaLabel='Editar renda'
              icon={<MdSettings />}
            >
              <OverviewCard
                title='Renda'
                value={moneyFormatter(financeData.item.income).replace(
                  'R$',
                  '',
                )}
                valueType='currency'
                icon={<MdPlayArrow className='rotate-270' />}
              />
            </OverviewCardAction>
          </li>
        )}
        <li className='relative'>
          <OverviewCardSwitch>
            <OverviewCard
              title='Despesa'
              value={moneyFormatter(currentExpenses).replace('R$', '')}
              valueType='currency'
              icon={<MdPlayArrow className='rotate-90' />}
            />
            <OverviewCard
              title='Estimativa de Despesa'
              value={moneyFormatter(estimateExpenses).replace('R$', '')}
              valueType='currency'
              icon={<MdPlayArrow className='rotate-90' />}
            />
          </OverviewCardSwitch>
        </li>
      </ul>
    </header>
  );
}
