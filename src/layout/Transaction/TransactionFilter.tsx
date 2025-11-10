'use client';

import type { ChangeEvent } from 'react';
import { Suspense } from 'react';
import { FaBroom } from 'react-icons/fa';
import {
  MdAttachMoney,
  MdBarChart,
  MdCalendarMonth,
  MdInbox,
  MdSearch,
} from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { TransactionFilterButton } from '@/components/TransactionPage/TransactionFilter';
import { useDebouncedInput } from '@/hooks/useDebouncedInput';
import {
  type TransactionFilterType,
  useModalStore,
} from '@/stores/useModalStore';
import { useTransactionFilterStore } from '@/stores/useTransactionFilterStore';
import DebounceInput from '@/ui/DebounceInput';
import TransactionSearchParams from './TransactionSearchParams';

export default function TransactionFilter() {
  const { value, handleChangeDebounce } = useDebouncedInput();
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const {
    setSearchFilter,
    resetFullDateFilter,
    resetFullValueFilter,
    resetFullCategoryFilter,
    resetFullTypeFilter,
    resetFullFilter,
    setCategoryFilter,
  } = useTransactionFilterStore(
    useShallow((s) => ({
      setSearchFilter: s.setSearchFilter,
      resetFullDateFilter: s.resetFullDateFilter,
      resetFullValueFilter: s.resetFullValueFilter,
      resetFullCategoryFilter: s.resetFullCategoryFilter,
      resetFullTypeFilter: s.resetFullTypeFilter,
      resetFullFilter: s.resetFullFilter,
      setCategoryFilter: s.setCategoryFilter,
    })),
  );
  const { dateFilter, valueFilter, categoryFilter, transactionTypeFilter } =
    useTransactionFilterStore(
      useShallow((s) => ({
        dateFilter: s.dateFilter,
        valueFilter: s.valueFilter,
        categoryFilter: s.categoryFilter,
        transactionTypeFilter: s.transactionTypeFilter,
      })),
    );

  const modalController = (modalType: TransactionFilterType) => {
    selectModalType(modalType);
    toggleModal();
  };

  return (
    <form id='transaction-filter' className='base-card flex flex-col'>
      <Suspense fallback={null}>
        <TransactionSearchParams
          value={value}
          setSearchFilter={setSearchFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </Suspense>
      <h2 className='subtitle'>Filtros</h2>
      <div className='lg:flex lg:justify-end'>
        <button
          className='flex items-center w-full p-1.5 rounded-lg gap-x-2 duration-300 ease-in-out font-bold hover:brightness-95 active:brightness-75 bg-chetwode-blue-900 text-chetwode-blue-50 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50 lg:w-fit'
          type='reset'
          onClick={() => resetFullFilter()}
        >
          <FaBroom className='text-xl' />
          Limpar todos filtros
        </button>
      </div>
      <div
        role='group'
        className='flex flex-col flex-1 justify-between mt-2 xl:flex-row'
      >
        <ul className='grid grid-cols-1 w-full gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:flex items-center'>
          <li className='w-full lg:w-auto'>
            <TransactionFilterButton
              label='Data'
              isActive={dateFilter !== 'all'}
              action={() => modalController('filterDate')}
              reset={() => resetFullDateFilter()}
              icon={<MdCalendarMonth />}
            />
          </li>
          <li className='w-full lg:w-auto'>
            <TransactionFilterButton
              label='Valor'
              isActive={valueFilter !== 'all'}
              action={() => modalController('filterValue')}
              reset={() => resetFullValueFilter()}
              icon={<MdAttachMoney />}
            />
          </li>
          <li className='w-full lg:w-auto'>
            <TransactionFilterButton
              label='Categoria'
              isActive={categoryFilter !== null}
              action={() => modalController('filterCategory')}
              reset={() => resetFullCategoryFilter()}
              icon={<MdInbox />}
            />
          </li>
          <li className='w-full lg:w-auto'>
            <TransactionFilterButton
              label='Tipo'
              isActive={transactionTypeFilter !== 'all'}
              action={() => modalController('filterType')}
              reset={() => resetFullTypeFilter()}
              icon={<MdBarChart />}
            />
          </li>
        </ul>
        <div className='mt-2 w-full lg:w-1/3'>
          <DebounceInput
            id='search'
            placeholder='Ex: Compra de um Notebook'
            icon={<MdSearch />}
            action={(ev: ChangeEvent<HTMLInputElement>) => {
              handleChangeDebounce(ev.target.value);
            }}
          />
        </div>
      </div>
    </form>
  );
}
