'use client';

import { type FormEvent, useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { useModalStore } from '@/stores/useModalStore';
import {
  useTransactionFilterStore,
  type ValueType,
} from '@/stores/useTransactionFilterStore';
import Radio from '@/ui/Radio';
import ModalFooter from '../ModalFooter';

export default function ModalValueFilter() {
  const valueFilter = useTransactionFilterStore((s) => s.valueFilter);
  const { setValueFilter, setFirstValue, setSecondValue } =
    useTransactionFilterStore(
      useShallow((s) => ({
        setValueFilter: s.setValueFilter,
        setFirstValue: s.setFirstValue,
        setSecondValue: s.setSecondValue,
      })),
    );
  const toggleModal = useModalStore((s) => s.toggleModal);

  const [typeValueFilter, setTypeValueFilter] =
    useState<ValueType>(valueFilter);
  const [firstValueInput, setFirstValueInput] = useState<number>(0);
  const [secondValueInput, setSecondValueInput] = useState<number>(0);

  const handleSelectValueType = (value: ValueType) => {
    setSecondValueInput(0);
    setTypeValueFilter(value);
  };
  const handleCancel = () => {
    setFirstValueInput(0);
    setSecondValueInput(0);
    toggleModal();
  };
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setValueFilter(typeValueFilter);
    setFirstValue(firstValueInput);
    setSecondValue(secondValueInput);
    toggleModal();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 250);
  }, []);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Radio
        id='all'
        name='value'
        label='Todos os valores'
        state={typeValueFilter === 'all'}
        setState={() => handleSelectValueType('all')}
        ref={inputRef}
      />
      <fieldset className='flex justify-between gap-2'>
        <Radio
          id='between'
          name='value'
          label='Entre valores'
          state={typeValueFilter === 'between'}
          setState={() => handleSelectValueType('between')}
        />
        <div className='flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50'>
          <span>A partir de:</span>
          <input
            type='number'
            step='0.01'
            className='inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200'
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== 'between'}
          />
          <span className='inline-block ml-4'>Ate:</span>
          <input
            type='number'
            step='0.01'
            className='inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200'
            value={secondValueInput}
            onChange={(ev) => setSecondValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== 'between'}
          />
        </div>
      </fieldset>
      <fieldset className='flex justify-between gap-2'>
        <Radio
          id='positive'
          name='value'
          label='Valores positivos'
          state={typeValueFilter === 'positive'}
          setState={() => handleSelectValueType('positive')}
        />
        <div className='flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50'>
          <span className='inline-block ml-4'>Acima de:</span>
          <input
            type='number'
            step='0.01'
            className='inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200'
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== 'positive'}
          />
        </div>
      </fieldset>
      <fieldset className='flex justify-between gap-2'>
        <Radio
          id='negative'
          name='value'
          label='Valores negativos'
          state={typeValueFilter === 'negative'}
          setState={() => handleSelectValueType('negative')}
        />
        <div className='flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50'>
          <span className='inline-block ml-4'>Abaixo de:</span>
          <input
            type='number'
            step='0.01'
            className='inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200'
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== 'negative'}
          />
        </div>
      </fieldset>
      <fieldset className='flex justify-between gap-2'>
        <Radio
          id='exactly'
          name='value'
          label='Valores iguais'
          state={typeValueFilter === 'exactly'}
          setState={() => handleSelectValueType('exactly')}
        />
        <div className='flex p-1 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 has-disabled:grayscale-100 has-disabled:opacity-50'>
          <span className='inline-block ml-4'>Exatamente igual a:</span>
          <input
            type='number'
            step='0.01'
            className='inline-block ml-2 px-1 rounded-lg bg-chetwode-blue-200'
            value={firstValueInput}
            onChange={(ev) => setFirstValueInput(Number(ev.target.value))}
            min={0}
            disabled={typeValueFilter !== 'exactly'}
          />
        </div>
      </fieldset>
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-color'
        >
          Filtrar por Valor
        </button>
      </ModalFooter>
    </form>
  );
}
