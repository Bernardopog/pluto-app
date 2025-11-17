'use client';

import { type FormEvent, useEffect, useRef, useState } from 'react';
import { MdDragHandle, MdPlayArrow } from 'react-icons/md';
import { useModalStore } from '@/stores/useModalStore';
import {
  type TransactionType,
  useTransactionFilterStore,
} from '@/stores/useTransactionFilterStore';
import Radio from '@/ui/Radio';
import ModalFooter from '../ModalFooter';

export default function ModalTypeFilter() {
  const setTransactionTypeFilter = useTransactionFilterStore(
    (s) => s.setTransactionTypeFilter,
  );
  const transactionTypeFilter = useTransactionFilterStore(
    (s) => s.transactionTypeFilter,
  );
  const toggleModal = useModalStore((s) => s.toggleModal);

  const [selectedType, setSelectedType] = useState<TransactionType>(
    transactionTypeFilter,
  );

  const handleCancel = () => {
    setSelectedType(transactionTypeFilter);
    toggleModal();
  };

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setTransactionTypeFilter(selectedType);
    toggleModal();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 250);
  }, []);

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <fieldset className='flex flex-col gap-2'>
        <div className='flex items-center justify-between p-2 rounded-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-700'>
          <Radio
            id='all'
            name='type'
            state={selectedType === 'all'}
            setState={() => setSelectedType('all')}
            label='Todos tipos de Transação'
            ref={inputRef}
          />
          <MdDragHandle className='text-xl text-chetwode-blue-800 dark:text-chetwode-blue-200' />
        </div>
        <div className='flex items-center justify-between p-2 rounded-lg bg-red-200 dark:bg-red-800'>
          <Radio
            id='expenses'
            name='type'
            state={selectedType === 'expenses'}
            setState={() => setSelectedType('expenses')}
            label='Despesas'
          />
          <MdPlayArrow className='text-xl rotate-90 text-red-800 dark:text-red-200' />
        </div>
        <div className='flex items-center justify-between p-2 rounded-lg bg-green-200 dark:bg-green-800'>
          <Radio
            id='revenue'
            name='type'
            state={selectedType === 'revenue'}
            setState={() => setSelectedType('revenue')}
            label='Receitas'
          />
          <MdPlayArrow className='text-xl rotate-270 text-green-800 dark:text-green-200' />
        </div>
      </fieldset>
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-color'
        >
          Filtrar por Tipo
        </button>
      </ModalFooter>
    </form>
  );
}
