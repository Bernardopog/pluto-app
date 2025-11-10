'use client';

import { useShallow } from 'zustand/shallow';
import { useModalStore } from '@/stores/useModalStore';

export default function DashboardStatsHeader() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const handleModal = () => {
    toggleModal();
    selectModalType('stats');
  };

  return (
    <header className='flex justify-between'>
      <h2 className='subtitle'>Estatísticas</h2>
      <button
        type='button'
        className='text-chetwode-blue-950/50 duration-300 ease-in-out hover:text-chetwode-blue-950/75 dark:text-chetwode-blue-50/50 dark:hover:text-chetwode-blue-50/75'
        onClick={handleModal}
      >
        Adicionar
      </button>
    </header>
  );
}
