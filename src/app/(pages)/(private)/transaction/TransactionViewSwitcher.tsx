'use client';

import { useState } from 'react';
import Inert from '@/components/Inert';
import TransactionSwitchViewButton from '@/components/TransactionPage/TransactionSwitchView/TransactionSwitchViewButton';
import TransactionChartPage from './TransactionChartPage';
import TransactionTablePage from './TransactionTablePage';

export default function TransactionViewSwitcher() {
  const [view, setView] = useState<'table' | 'chart'>('table');

  return (
    <div
      className={`grid h-full pb-8 duration-300 ease-in-out ${view === 'table' ? 'grid-rows-[1fr_0fr]' : 'grid-rows-[0fr_1fr]'}`}
    >
      <Inert
        isVisible={view === 'table'}
        className={`${view === 'chart' ? 'overflow-hidden max-h-0' : 'max-h-[100vh]'}`}
      >
        <TransactionTablePage />
      </Inert>

      <Inert
        isVisible={view === 'chart'}
        className={`${view === 'table' ? 'overflow-hidden max-h-0' : 'max-h-[100vh]'}`}
      >
        <TransactionChartPage />
      </Inert>
      <TransactionSwitchViewButton view={view} setView={setView} />
    </div>
  );
}
