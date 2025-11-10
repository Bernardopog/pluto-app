'use client';
import { MdFilterAlt, MdTextSnippet } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { useDashboardControllersStore } from '@/stores/useDashboardControllersStore';
import { useModalStore } from '@/stores/useModalStore';

export default function DashboardTransactionTitle() {
  const { isTransactionFormOpen, transactionFilter } =
    useDashboardControllersStore(
      useShallow((s) => ({
        isTransactionFormOpen: s.isTransactionFormOpen,
        transactionFilter: s.transactionFilter,
      })),
    );

  const toggleTransactionForm = useDashboardControllersStore(
    (s) => s.toggleTransactionForm,
  );
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const handleModal = () => {
    toggleModal();
    selectModalType('transactionSimpleFilter');
  };

  return (
    <div className='flex flex-col justify-center'>
      <h2 className='subtitle'>
        Transações{' '}
        <span className='italic text-sm text-chetwode-blue-900/75 grayscale-50 dark:text-chetwode-blue-50/75'>
          (primeiras 12 transações)
        </span>
      </h2>
      <div className='flex gap-x-2'>
        <button
          type='button'
          title='Formulário de adição rápida'
          className={`flex justify-center items-center w-7 h-7 rounded-full duration-300 ease-in-out text-lg border ${
            isTransactionFormOpen
              ? 'text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900 border-transparent'
              : 'text-chetwode-blue-950 bg-chetwode-blue-200 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400 border-chetwode-blue-900'
          }`}
          aria-label='Formulário de adição rápida'
          aria-expanded={isTransactionFormOpen}
          onClick={toggleTransactionForm}
        >
          <MdTextSnippet />
        </button>
        <button
          type='button'
          title='Filtro simples de transações'
          className={`flex justify-center items-center w-7 h-7 rounded-full duration-300 ease-in-out text-lg border ${
            transactionFilter !== 'all'
              ? 'text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-900 border-transparent'
              : 'text-chetwode-blue-950 bg-chetwode-blue-200 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400 border-chetwode-blue-900'
          }`}
          aria-label='Filtro simples de transações'
          onClick={handleModal}
        >
          <MdFilterAlt />
        </button>
      </div>
    </div>
  );
}
