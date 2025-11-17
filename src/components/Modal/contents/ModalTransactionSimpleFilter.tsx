'use client';

import { type FormEvent, useState } from 'react';
import { MdDragHandle, MdPlayArrow } from 'react-icons/md';
import { useDashboardControllersStore } from '@/stores/useDashboardControllersStore';
import { useModalStore } from '@/stores/useModalStore';
import Radio from '@/ui/Radio';
import ModalFooter from '../ModalFooter';

export default function ModalTransactionSimpleFilter() {
  const toggleModal = useModalStore((s) => s.toggleModal);
  const setTransactionFilter = useDashboardControllersStore(
    (s) => s.setTransactionFilter,
  );

  const [selectedType, setSelectedType] = useState<
    'all' | 'expense' | 'income'
  >('all');

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setTransactionFilter(selectedType);
    toggleModal();
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
      <fieldset className='flex flex-col gap-2'>
        <div className='flex items-center justify-between p-2 rounded-lg bg-chetwode-blue-200'>
          <Radio
            id='all'
            name='type'
            state={selectedType === 'all'}
            setState={() => setSelectedType('all')}
            label='Todos tipos de Transação'
          />
          <MdDragHandle className='text-xl text-chetwode-blue-800' />
        </div>
        <div className='flex items-center justify-between p-2 rounded-lg bg-red-200'>
          <Radio
            id='expense'
            name='type'
            state={selectedType === 'expense'}
            setState={() => setSelectedType('expense')}
            label='Despesas'
          />
          <MdPlayArrow className='text-xl rotate-90 text-red-800' />
        </div>
        <div className='flex items-center justify-between p-2 rounded-lg bg-green-200'>
          <Radio
            id='income'
            name='type'
            state={selectedType === 'income'}
            setState={() => setSelectedType('income')}
            label='Receitas'
          />
          <MdPlayArrow className='text-xl rotate-270 text-green-800' />
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
