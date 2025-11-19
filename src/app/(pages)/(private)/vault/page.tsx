import type { Metadata } from 'next';
import VaultAction from '@/layout/Vault/VaultAction';
import VaultChart from '@/layout/Vault/VaultChart';
import VaultList from '@/layout/Vault/VaultList';
import VaultOverview from '@/layout/Vault/VaultOverview';

export const metadata: Metadata = {
  title: 'Pluto | Vault',
  description: 'Vault with your saved money',
};
export default function page() {
  return (
    <main className='page'>
      <h2 className='main-title'>Cofre</h2>
      <section className='vault-page grid min-h-[calc(100vh-32px-24px)]'>
        <VaultOverview />
        <VaultAction />
        <VaultList />
        <VaultChart />
      </section>
    </main>
  );
}
