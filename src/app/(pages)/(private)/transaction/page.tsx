import type { Metadata } from 'next';
import TransactionViewSwitcher from './TransactionViewSwitcher';

export const metadata: Metadata = {
  title: 'Pluto | Transaction',
  description: 'Dashboard for transaction info and management',
};

export default function TransactionPage() {
  return (
    <main className='page'>
      <h2 className='main-title'>Transações</h2>
      <TransactionViewSwitcher />
    </main>
  );
}
