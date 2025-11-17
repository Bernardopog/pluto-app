'use client';

import { type FormEvent, useEffect, useRef, useState } from 'react';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useTransactionFilterStore } from '@/stores/useTransactionFilterStore';
import ModalFooter from '../ModalFooter';

export default function ModalCategoryFilter() {
  const setCategoryFilter = useTransactionFilterStore(
    (s) => s.setCategoryFilter,
  );
  const categoryFilter = useTransactionFilterStore((s) => s.categoryFilter);

  const budgetData = useTransactionBudgetStore((s) => s.budgetData);

  const toggleModal = useModalStore((s) => s.toggleModal);

  const budgetList = budgetData.list;

  const [selectedCategory, setSelectedCategory] = useState<number | null>(
    categoryFilter,
  );

  const handleCancel = () => {
    setSelectedCategory(null);
    toggleModal();
  };
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setCategoryFilter(selectedCategory);
    toggleModal();
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTimeout(() => buttonRef.current?.focus(), 250);
  }, []);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <ul className='grid grid-cols-4 gap-2'>
        {budgetList.map((category, idx) => (
          <li
            key={category.id}
            className={`rounded-lg border-l-8 duration-300 ease-in-out hover:brightness-95 active:brightness-75 ${
              category.id === selectedCategory
                ? 'bg-chetwode-blue-900 text-chetwode-blue-100 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50'
                : 'bg-chetwode-blue-200 text-chetwode-blue-950'
            }`}
            style={{ borderColor: `${category.color}` }}
          >
            <button
              type='button'
              className='truncate size-full p-2 rounded-r-lg'
              onClick={() => setSelectedCategory(category.id)}
              ref={idx === 0 ? buttonRef : null}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-color'
        >
          Filtrar por Categoria
        </button>
      </ModalFooter>
    </form>
  );
}
