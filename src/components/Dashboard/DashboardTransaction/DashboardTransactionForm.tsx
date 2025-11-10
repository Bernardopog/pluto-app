'use client';
import { type FormEvent, useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Inert from '@/components/Inert';
import { useDashboardControllersStore } from '@/stores/useDashboardControllersStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import Radio from '@/ui/Radio';
import Select from '@/ui/Select';

export default function DashboardTransactionForm() {
  const create = useTransactionBudgetStore((s) => s.transactionMethods.create);
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);
  const isTransactionFormOpen = useDashboardControllersStore(
    (s) => s.isTransactionFormOpen,
  );

  const [hadAnError, setHadAnError] = useState<boolean>(false);
  const [categoryValue, setCategoryValue] = useState<number | string>(0);
  const [transactionType, setTransactionType] = useState<'income' | 'outcome'>(
    'outcome',
  );
  const isStringValid = (name: string): boolean => {
    if (name.trim() === '') return false;
    return true;
  };

  const isValueValid = (value: number): boolean => {
    if (Number.isNaN(value)) return false;
    return true;
  };

  const today = new Date();
  const localDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;

    const formData = new FormData(ev.target as HTMLFormElement);
    const formDataObj = Object.fromEntries(formData.entries());

    const name = formDataObj.name as string;
    const value = Number(formDataObj.value);
    const date = formDataObj.date as string;

    let money = value;
    if (money < 0) money *= -1;
    if (transactionType === 'outcome') money *= -1;

    if (
      categoryValue === null ||
      Number.isNaN(Number(categoryValue)) ||
      categoryValue === 0
    ) {
      setHadAnError(true);
      return;
    }

    if (isStringValid(name) && isValueValid(value)) {
      const [year, month, day] = date.split('-').map((val) => Number(val));
      const localDate = new Date(year, month - 1, day);

      const data = {
        name,
        value: money,
        date: date === '' ? new Date() : localDate,
        categoryId: Number(categoryValue),
      };

      create(data);
      form.reset();
      setHadAnError(false);
    } else {
      setHadAnError(true);
    }
  };

  interface ISelectList {
    id: number | string;
    name: string;
    value: number | string;
  }

  const selectList: ISelectList[] = budgetList.map((budget) => ({
    id: budget.id,
    name: budget.name,
    value: budget.id,
  }));

  const [formController, setFormController] = useState<boolean>(false);

  useEffect(() => {
    const firstCategoryId = budgetList[0]?.id;
    setCategoryValue(firstCategoryId);
    if (isTransactionFormOpen) {
      const timeout = setTimeout(() => {
        setFormController(true);
      }, 300);

      return () => clearTimeout(timeout);
    }
    setFormController(false);
  }, [isTransactionFormOpen, budgetList]);

  return (
    <div>
      <Inert
        isVisible={isTransactionFormOpen}
        className={`duration-300 ease-in-out max-h-fit ${
          isTransactionFormOpen
            ? `h-full ${
                formController ? 'overflow-visible' : 'overflow-hidden'
              }`
            : 'h-0 overflow-hidden'
        }`}
      >
        <form
          onSubmit={handleSubmit}
          className='grid grid-cols-[1fr] grid-rows-[auto_auto] gap-2'
        >
          <fieldset className='grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] text-chetwode-blue-950 lg:grid-cols-[0.7fr_2fr_0.7fr] lg:grid-rows-[1fr]'>
            <input
              type='date'
              name='date'
              max={localDate}
              defaultValue={localDate}
              className='min-w-1/8 pl-2 py-1 rounded-tl-lg bg-chetwode-blue-300 outline-chetwode-blue-800 lg:rounded-l-lg'
            />
            <input
              type='text'
              name='name'
              placeholder='Descrição'
              className='order-1 col-span-2 px-1 py-1 rounded-b-lg bg-chetwode-blue-200 outline-chetwode-blue-800 lg:order-0 lg:col-span-1 lg:rounded-none'
            />
            <input
              type='number'
              step={'0.01'}
              name='value'
              placeholder='R$ 0,00'
              className='min-w-1/8 pl-1 py-1 rounded-tr-lg bg-chetwode-blue-300 outline-chetwode-blue-800 lg:rounded-r-lg'
            />
          </fieldset>
          <div className='flex flex-col gap-y-2 justify-between lg:flex-row'>
            <div className='order-1 lg:order-0'>
              <label
                htmlFor='category'
                className='text-chetwode-blue-950 dark:text-chetwode-blue-50'
              >
                Categorias:
              </label>
              <Select
                state={categoryValue}
                setState={setCategoryValue}
                list={selectList}
              />
            </div>
            <div className='flex items-center gap-x-2'>
              <div
                className={`size-fit rounded-full px-1 pr-2 bg-chetwode-blue-200 ${
                  transactionType === 'outcome' && 'bg-chetwode-blue-400'
                }`}
              >
                <Radio
                  id='outcome'
                  name='type'
                  state={transactionType === 'outcome'}
                  setState={() => setTransactionType('outcome')}
                  label='Despesa'
                />
              </div>
              <div
                className={`size-fit rounded-full px-1 pr-2 bg-chetwode-blue-200 ${
                  transactionType === 'income' && 'bg-chetwode-blue-400'
                }`}
              >
                <Radio
                  id='income'
                  name='type'
                  state={transactionType === 'income'}
                  setState={() => setTransactionType('income')}
                  label='Receita'
                />
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='flex justify-center items-center mt-2 px-2 py-2 rounded-lg bg-chetwode-blue-300 text-chetwode-blue-950 ease-in-out duration-300 lg:py-0 hover:bg-chetwode-blue-400 active:bg-chetwode-blue-500 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-50 dark:hover:bg-chetwode-blue-700 dark:active:bg-chetwode-blue-800'
          >
            <MdAdd />
            Adicionar
          </button>
        </form>
      </Inert>

      {hadAnError && isTransactionFormOpen && (
        <p className='font-medium text-center text-sm text-red-400'>
          Preencha os campos corretamente
        </p>
      )}
    </div>
  );
}
