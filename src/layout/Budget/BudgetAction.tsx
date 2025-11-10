'use client';

import {
  MdAdd,
  MdDelete,
  MdDeleteForever,
  MdEdit,
  MdQuestionMark,
} from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { type BudgetModalType, useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import ActionButton from '@/ui/ActionButton';

export default function BudgetAction() {
  const budgetSelection = useTransactionBudgetStore((s) => s.budgetSelection);

  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const handleModal = (typeOfModal: BudgetModalType) => {
    toggleModal();
    selectModalType(typeOfModal);
  };

  return (
    <section
      id='budget-action'
      className='base-card overflow-y-auto md:min-h-32'
    >
      <h2 className='subtitle'>Ações</h2>
      <div className='flex flex-col mt-2 gap-2'>
        <ActionButton
          action={() => handleModal('budgetCreate')}
          icon={<MdAdd />}
          label='Adicionar Orçamento'
        />
        {budgetSelection.selected ? (
          <div className='flex flex-col my-1 gap-1'>
            <p className='text-chetwode-blue-950 dark:text-chetwode-blue-50'>
              Orçamento Selecionado:{' '}
            </p>
            <span className='px-1 rounded-lg font-medium text-chetwode-blue-700 bg-chetwode-blue-200 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-50'>
              {budgetSelection.selected.name}
            </span>
          </div>
        ) : (
          <p className='italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
            Selecione um Orçamento clicando no botão de selecionar
          </p>
        )}
        <ActionButton
          action={() => handleModal('budgetUpdate')}
          icon={<MdEdit />}
          label='Editar Orçamento'
          disabled={budgetSelection.selected === null}
        />
        <div className='flex flex-col gap-2 lg:flex-wrap'>
          <ActionButton
            action={() => handleModal('budgetDelete')}
            icon={<MdDeleteForever />}
            label='Deletar Orçamento'
            className='flex-[0.8] relative'
            disabled={budgetSelection.selected === null}
          >
            <div
              role='tooltip'
              className='group flex items-center justify-center absolute right-0 h-full w-10 rounded-r-full text-xl bg-chetwode-blue-800 text-chetwode-blue-50'
            >
              <MdQuestionMark />
              <p className='absolute -top-12 right-12 p-0 w-0 rounded-md text-sm shadow-lg duration-300 ease-out bg-chetwode-blue-800 text-chetwode-blue-50 overflow-clip opacity-0 group-hover:opacity-100 group-hover:w-64 group-hover:p-2'>
                Deleta o Orçamento e todas transações ligadas a esse Orçamento
              </p>
            </div>
          </ActionButton>
          <ActionButton
            action={() => handleModal('budgetTransfer')}
            icon={<MdDelete />}
            label='Deletar e mover de Orçamento'
            className='flex-1 relative'
            disabled={budgetSelection.selected === null}
          >
            <div
              role='tooltip'
              className='group flex items-center justify-center absolute right-0 h-full w-10 rounded-r-full text-xl bg-chetwode-blue-800 text-chetwode-blue-50'
            >
              <MdQuestionMark />
              <p className='absolute -top-12 right-12 p-0 w-0 rounded-md text-sm shadow-lg duration-300 ease-out bg-chetwode-blue-800 text-chetwode-blue-50 overflow-clip opacity-0 group-hover:opacity-100 group-hover:w-64 group-hover:p-2'>
                Deleta o Orçamento e permite mover todas transações ligadas a
                esse Orçamento para um novo
              </p>
            </div>
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
