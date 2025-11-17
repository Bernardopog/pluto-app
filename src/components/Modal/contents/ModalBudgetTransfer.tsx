'use client';

import { useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { useMessageStore } from '@/stores/useMessageStore';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useTransactionFilterStore } from '@/stores/useTransactionFilterStore';
import { moneyFormatter } from '@/utils/moneyFormatter';
import ModalFooter from '../ModalFooter';

export default function ModalBudgetTransfer() {
  const toggleModal = useModalStore((s) => s.toggleModal);
  const budgetMethods = useTransactionBudgetStore((s) => s.budgetMethods);
  const setMessage = useMessageStore((s) => s.setMessage);

  const { budgetList, budgetSelection } = useTransactionBudgetStore(
    useShallow((s) => ({
      budgetList: s.budgetData.list,
      budgetSelection: s.budgetSelection,
    })),
  );

  const setCategoryFilter = useTransactionFilterStore(
    (s) => s.setCategoryFilter,
  );
  const categoryFilter = useTransactionFilterStore((s) => s.categoryFilter);

  const [toId, setToId] = useState<number | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleTransfer = (fromId: number, toId: number) => {
    if (!toId) {
      setHasError(true);
      return;
    }
    budgetMethods.transfer(fromId, toId).then(({ message, status }) =>
      setMessage({
        message,
        status,
        description:
          status === 200
            ? 'O orçamento foi movido com sucesso!'
            : 'Ocorreu um erro ao movimentar o orçamento',
      }),
    );
    toggleModal();
    budgetSelection.unselect();
    setHasError(false);
    setCategoryFilter(categoryFilter === fromId ? toId : categoryFilter);
  };

  const handleCancel = () => {
    toggleModal();
    budgetSelection.unselect();
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  const selected = budgetSelection.selected;

  useEffect(() => {
    setTimeout(() => buttonRef.current?.focus(), 250);
  }, []);

  return (
    <div className='flex flex-col'>
      <p className='text-2xl text-center text-chetwode-blue-950 dark:text-chetwode-blue-100'>
        Você tem certeza que quer deletar essa Categoria de Orçamento ?
      </p>
      {budgetSelection.selected && (
        <div className='flex flex-col p-2 rounded-lg text-2xl text-center text-chetwode-blue-950 bg-chetwode-blue-200 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50'>
          <span>Nome: {budgetSelection.selected.name}</span>
          <span>
            Limite: {moneyFormatter(Math.abs(budgetSelection.selected.limit))}
          </span>
        </div>
      )}
      <p className='text-2xl text-center text-red-900 dark:text-red-400'>
        Essa ação nao pode ser desfeita!
      </p>
      <section className='rounded-lg mt-2 p-2 bg-chetwode-blue-100 dark:bg-chetwode-blue-700'>
        <h3 className='subsubtitle text-center'>
          Para qual Orçamento as transações de{' '}
          {
            budgetList.find((bdgt) => bdgt.id === budgetSelection.selected?.id)
              ?.name
          }{' '}
          devem ir?
        </h3>
        <ul className='flex flex-wrap mt-2 gap-2'>
          {budgetList.length > 0 &&
            budgetList
              .filter((bdgt) => bdgt.id !== budgetSelection.selected?.id)
              .map((bdgt, idx) => (
                <li
                  key={bdgt.id}
                  style={{ borderColor: `${bdgt.color}` }}
                  className={`flex-1 rounded-lg border-l-8 text-center duration-300 ease-in-out ${
                    toId === bdgt.id
                      ? 'bg-chetwode-blue-300 border-chetwode-blue-600'
                      : 'bg-chetwode-blue-200 border-transparent'
                  }`}
                >
                  <button
                    type='button'
                    className='w-full p-2 rounded-lg text-chetwode-blue-950'
                    onClick={() => setToId(bdgt.id)}
                    ref={idx === 0 ? buttonRef : null}
                  >
                    <span className='text-nowrap'>{bdgt.name}</span>
                  </button>
                </li>
              ))}
        </ul>
      </section>
      {hasError && (
        <p className='text-2xl text-center text-red-900'>
          Parece que houve um erro em escolher o destino para as transações do
          orçamento
        </p>
      )}
      <ModalFooter cancelAction={handleCancel}>
        {selected && toId && (
          <button
            type='submit'
            className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-delete'
            onClick={() => handleTransfer(selected.id, toId)}
          >
            Mover Transações
          </button>
        )}
      </ModalFooter>
    </div>
  );
}
