'use client';
import { useVaultStore } from '@/stores/useVaultStore';
import Divider from '@/ui/Divider';
import {
  DashboardVaultForm,
  DashboardVaultHistory,
  DashboardVaultSaved,
} from '.';

export default function DashboardVaultSection() {
  const selectedDashboardVault = useVaultStore((s) => s.selectedDashboardVault);

  return (
    <section className='flex flex-col mt-2 gap-2 lg:flex-row'>
      <DashboardVaultSaved />
      <Divider direction='vertical' />
      {selectedDashboardVault ? (
        <>
          <DashboardVaultHistory />
          <Divider direction='vertical' />
          <DashboardVaultForm />
        </>
      ) : (
        <p className='flex items-center justify-center flex-1 h-full text-lg font-bold italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
          Nenhum cofre selecionado...
        </p>
      )}
    </section>
  );
}
