import { type FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { MdAddCircle, MdRemoveCircle } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import { useFinanceStore } from '@/stores/useFinanceStore';
import { useModalStore } from '@/stores/useModalStore';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { useVaultStore } from '@/stores/useVaultStore';
import Divider from '@/ui/Divider';
import Input from '@/ui/Input';
import { moneyFormatter } from '@/utils/moneyFormatter';
import ModalFooter from '../ModalFooter';

export default function ModalBalanceConfiguration() {
  const { toggleModal, selectModalType } = useModalStore(
    useShallow((s) => ({
      toggleModal: s.toggleModal,
      selectModalType: s.selectModalType,
    })),
  );

  const { balance, income, updateBalance } = useFinanceStore(
    useShallow((s) => ({
      balance: s.financeData.item.balance,
      income: s.financeData.item.income,
      updateBalance: s.financeMethods.patch,
    })),
  );
  const { selectedVaultId, getTotalMoneySavedFromVault, vaultList } =
    useVaultStore(
      useShallow((s) => ({
        selectedVaultId: s.selectedDashboardVault,
        getTotalMoneySavedFromVault: s.getTotalMoneySavedFromVault,
        vaultList: s.vaultData.list,
      })),
    );

  const getTransactionsOfCurrentMonth = useTransactionBudgetStore(
    (s) => s.getTransactionsOfCurrentMonth,
  );

  const [valueToBalance, setValueToBalance] = useState<number>(balance);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();

    if (valueToBalance < 0) return setHasError(true);

    updateBalance('balance', valueToBalance);

    toggleModal();
    selectModalType(null);
  };

  const handleCancel = () => {
    toggleModal();
    selectModalType(null);
  };

  const txnExpensesValue: number = useMemo(
    () =>
      getTransactionsOfCurrentMonth()
        .filter((txn) => txn.value < 0)
        .reduce((acc, item) => acc + item.value, 0),
    [getTransactionsOfCurrentMonth],
  );

  const vaultSavedValue = getTotalMoneySavedFromVault(selectedVaultId ?? 0);

  const selectedVault = vaultList.find((vault) => vault.id === selectedVaultId);

  const handleBalanceChange = () => {
    return {
      add: (value: number) => {
        setValueToBalance(valueToBalance + value);
      },
      remove: (value: number) => {
        if (valueToBalance - value < 0) return;
        setValueToBalance(valueToBalance - value);
      },
    };
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValueToBalance(balance);
    setTimeout(() => inputRef.current?.focus(), 250);
  }, [balance]);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <fieldset>
        <h3 className='subsubtitle'>Ações Rápidas</h3>
        <ul className='grid grid-cols-2 items-center justify-end mt-2 gap-2'>
          <li>
            <button
              type='button'
              className='group flex justify-center relative w-full'
              onClick={() => handleBalanceChange().add(income)}
            >
              <div className='flex items-center justify-center w-full p-2 rounded-lg gap-2 duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800'>
                <MdAddCircle className='text-xl' />
                <p>Adicionar Renda</p>
              </div>
              <div className='flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-green-400 overflow-hidden group-hover:w-full group-hover:opacity-100 group-hover:blur-none dark:bg-chetwode-blue-700'>
                {moneyFormatter(income)}
              </div>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='group flex justify-center relative w-full'
              onClick={() => handleBalanceChange().remove(income)}
            >
              <div className='flex items-center justify-center w-full p-2 rounded-lg gap-2 duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800'>
                <MdRemoveCircle className='text-xl' />
                <p>Subtrair Renda</p>
              </div>
              <div className='flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-red-400 overflow-hidden group-hover:w-full group-hover:opacity-100 group-hover:blur-none dark:bg-chetwode-blue-700'>
                {moneyFormatter(income)}
              </div>
            </button>
          </li>
          <li>
            <button
              type='button'
              className='group flex justify-center relative w-full'
              onClick={() =>
                handleBalanceChange().remove(Math.abs(txnExpensesValue))
              }
            >
              <div className='flex items-center justify-center w-full p-2 rounded-lg gap-2 duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800'>
                <MdRemoveCircle className='text-xl' />
                <p>Subtrair Despesa do Mês</p>
              </div>
              <div className='flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-red-400 overflow-hidden group-hover:w-full group-hover:opacity-100 group-hover:blur-none dark:bg-chetwode-blue-700'>
                {moneyFormatter(Math.abs(txnExpensesValue))}
              </div>
            </button>
          </li>
          {selectedVault ? (
            <li>
              <button
                type='button'
                className='group flex justify-center relative w-full'
                onClick={() => handleBalanceChange().add(vaultSavedValue)}
              >
                <div className='flex items-center justify-center w-full p-2 rounded-lg gap-2 duration-300 ease-in-out text-chetwode-blue-50 bg-chetwode-blue-700 hover:bg-chetwode-blue-800'>
                  <MdAddCircle className='text-xl' />
                  <p>Adicionar valor do Cofre</p>
                </div>
                <div className='flex items-center justify-center absolute w-0 h-full rounded-lg duration-500 ease-in-out text-center opacity-50 blur-xs bg-chetwode-blue-900 text-green-400 overflow-hidden text-nowrap group-hover:w-full group-hover:opacity-100 group-hover:blur-none dark:bg-chetwode-blue-700'>
                  <b>{selectedVault?.name}:&nbsp;</b>
                  <span>{moneyFormatter(vaultSavedValue)}</span>
                </div>
              </button>
            </li>
          ) : (
            <li className='flex justify-center bg-chetwode-blue-200 p-2 rounded-lg text-chetwode-blue-950'>
              Selecione um Cofre
            </li>
          )}
        </ul>
      </fieldset>
      <Divider direction='horizontal' />
      <fieldset>
        <h3 className='subsubtitle'>Editar Saldo</h3>
        <div className='flex mt-2 gap-2'>
          <div className='flex-1 p-2 border-2 rounded-lg gap-2 border-chetwode-blue-100 shadow-md dark:border-chetwode-blue-700'>
            <Input
              id='balance'
              label='Editar valor do Saldo:'
              inputType='basic'
              state={valueToBalance}
              setState={setValueToBalance}
              type='number'
              step='0.01'
              minLimit={0}
              ref={inputRef}
            />
          </div>
          <div className='flex-1 p-2 border-2 rounded-lg gap-2 border-chetwode-blue-100 text-chetwode-blue-950 shadow-md dark:border-chetwode-blue-700 dark:text-chetwode-blue-50'>
            Valor final do Saldo:
            <div className='border-2 border-transparent p-1 rounded-lg bg-chetwode-blue-200 grayscale-100 dark:text-chetwode-blue-950'>
              {moneyFormatter(valueToBalance)}
            </div>
          </div>
        </div>
      </fieldset>
      {hasError && (
        <p className='text-red-600'>
          Parece que tem algum erro no formulário, certifique-se de escolher um
          nome, um limite e uma cor.
        </p>
      )}
      <ModalFooter cancelAction={handleCancel}>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold duration-300 ease-in-out modal-btn-update'
        >
          Editar Saldo
        </button>
      </ModalFooter>
    </form>
  );
}
