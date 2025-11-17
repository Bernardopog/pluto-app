import { type FormEvent, useEffect, useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useModalStore } from '@/stores/useModalStore';
import Input from '@/ui/Input';
import ModalFooter from '../ModalFooter';

export default function ModalIncomeConfiguration() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );
  const { income, updateIncome } = useFinanceStore(
    useShallow((s) => ({
      income: s.financeData.item.income,
      updateIncome: s.financeMethods.patch,
    })),
  );

  const [valueToIncome, setValueToIncome] = useState<number>(0);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    updateIncome('income', valueToIncome);
    toggleModal();
    selectModalType(null);
  };

  const handleCancel = () => {
    toggleModal();
    selectModalType(null);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValueToIncome(income);
    inputRef.current?.focus();
  }, [income]);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Input
        id='income'
        label='Renda'
        inputType='basic'
        state={valueToIncome}
        setState={setValueToIncome}
        type='number'
        step={'0.01'}
        minLimit={0}
        maxLimit={1000000}
        ref={inputRef}
      />
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-update'
        >
          Editar Renda
        </button>
      </ModalFooter>
    </form>
  );
}
