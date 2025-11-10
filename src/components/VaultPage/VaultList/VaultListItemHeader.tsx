'use client';

import { FiTarget } from 'react-icons/fi';
import type { IVault } from '@/interfaces/IVault';
import { useVaultStore } from '@/stores/useVaultStore';
import { moneyFormatter } from '@/utils/moneyFormatter';

export default function VaultListItemHeader({ vault }: { vault: IVault }) {
  const selectVault = useVaultStore((s) => s.vaultSelection.select);

  const handleVaultSelection = () => {
    selectVault(vault.id);
  };

  return (
    <header className='relative w-full p-2 rounded-t-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-800'>
      <h3 className='subsubtitle pr-8 truncate'>{vault.name}</h3>
      <p className='text-chetwode-blue-950 dark:text-chetwode-blue-100'>
        <span className='font-medium'>Meta:</span>{' '}
        {moneyFormatter(vault.targetPrice)}
      </p>
      <button
        type='button'
        className='absolute top-1 right-1 p-1 rounded-lg text-lg bg-chetwode-blue-600 text-chetwode-blue-50 duration-300 ease-in-out hover:brightness-95 active:brightness-75'
        aria-label='Selecionar item'
        title='Selecionar Item'
        onClick={handleVaultSelection}
      >
        <FiTarget />
      </button>
    </header>
  );
}
