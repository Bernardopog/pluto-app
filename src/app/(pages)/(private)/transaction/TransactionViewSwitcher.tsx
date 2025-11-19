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
      className={`transaction-view-page-layout grid h-[calc(100vh-32px-24px)] min-h-0 duration-300 ease-in-out ${
        view === 'table'
          ? 'transaction-view-page-layout--txn'
          : 'transaction-view-page-layout--chart'
      }`}
    >
      <Inert
        isVisible={view === 'table'}
        className={`min-h-0 h-full ${view === 'chart' && 'overflow-hidden'}`}
      >
        <TransactionTablePage />
      </Inert>

      <Inert
        isVisible={view === 'chart'}
        className={`min-h-0 h-full max-h-[calc(100vh-32px-24px)] overflow-clip ease-in-out duration-300 opacity-0 ${view === 'chart' && 'opacity-100'}`}
      >
        <TransactionChartPage />
      </Inert>

      <TransactionSwitchViewButton view={view} setView={setView} />
    </div>
  );
}
