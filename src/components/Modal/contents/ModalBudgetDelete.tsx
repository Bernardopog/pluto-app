'use client';

import { useMessageStore } from '@/stores/useMessageStore';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useTransactionFilterStore } from '@/stores/useTransactionFilterStore';
import { moneyFormatter } from '@/utils/moneyFormatter';
import ModalFooter from '../ModalFooter';

export default function ModalBudgetDelete() {
  const toggleModal = useModalStore((s) => s.toggleModal);

  const budgetMethods = useTransactionBudgetStore((s) => s.budgetMethods);
  const budgetSelection = useTransactionBudgetStore((s) => s.budgetSelection);

  const setMessage = useMessageStore((s) => s.setMessage);

  const setCategoryFilter = useTransactionFilterStore(
    (s) => s.setCategoryFilter,
  );
  const categoryFilter = useTransactionFilterStore((s) => s.categoryFilter);

  const selected = budgetSelection.selected;

  const handleDelete = (id: number) => {
    budgetMethods.delete(id).then(({ message, status }) =>
      setMessage({
        message,
        status,
        description:
          status === 200
            ? 'O orçamento foi deletado com sucesso!'
            : 'Ocorreu um erro ao deletar o orçamento',
      }),
    );
    toggleModal();
    budgetSelection.unselect();
    setCategoryFilter(categoryFilter === id ? null : categoryFilter);
  };

  const handleCancel = () => {
    toggleModal();
  };

  return (
    <div className='flex flex-col'>
      <p className='text-2xl text-center text-chetwode-blue-950 dark:text-chetwode-blue-100'>
        Você tem certeza que quer deletar essa Categoria de Orçamento ?
      </p>
      {selected && (
        <div className='flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50'>
          <span>Nome: {selected.name}</span>
          <span>Limite: {moneyFormatter(Math.abs(selected.limit))}</span>
        </div>
      )}
      <p className='text-2xl text-center text-red-900 dark:text-red-400'>
        Essa ação nao pode ser desfeita!
      </p>
      <div className='flex self-end gap-x-2'>
        <ModalFooter cancelAction={handleCancel}>
          {selected && (
            <button
              type='submit'
              className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold ease-in-out modal-btn-delete'
              onClick={() => handleDelete(selected.id)}
            >
              Deletar Orçamento
            </button>
          )}
        </ModalFooter>
      </div>
    </div>
  );
}
