'use client';

import { MdAttachMoney, MdFilePresent } from 'react-icons/md';
import { useModalTransactionLogic } from '@/logic/transaction/useModalTransactionLogic';
import Checkbox from '@/ui/Checkbox';
import Divider from '@/ui/Divider';
import Input from '@/ui/Input';
import Radio from '@/ui/Radio';
import {
  ModalTransactionCategory,
  ModalTransactionVault,
} from './TransactionContent';

interface IModalTransactionProps {
  type: 'create' | 'update';
}

export default function ModalTransaction({ type }: IModalTransactionProps) {
  const {
    transactionName,
    setTransactionName,
    transactionValue,
    setTransactionValue,
    transactionDate,
    setTransactionDate,
    transactionCategory,
    setTransactionCategory,
    transactionType,
    setTransactionType,
    hasError,
    handleSubmit,
    handleCancel,
    integrateWithVault,
    setIntegrateWithVault,
    transactionVault,
    setTransactionVault,
  } = useModalTransactionLogic(type);

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Input
        label={`${type === 'update' ? 'Editar' : ''} Nome da transação`}
        id='name'
        inputType='decorated'
        icon={<MdFilePresent />}
        state={transactionName}
        setState={setTransactionName}
        type='text'
      />
      <fieldset className='flex flex-col gap-y-2'>
        <div className='flex-1'>
          <Input
            label={`${type === 'update' ? 'Editar' : ''} Valor da transação`}
            id='value'
            inputType='decorated'
            icon={<MdAttachMoney />}
            state={transactionValue}
            setState={setTransactionValue}
            type='number'
          />
        </div>
        <div className='flex justify-between flex-1 gap-2'>
          <div
            className={`w-full p-1 border-2 rounded-lg duration-300 ease-in-out ${
              transactionType === 'outcome'
                ? 'bg-red-300 border-red-600 dark:bg-red-800 dark:border-red-900'
                : 'bg-chetwode-blue-200 border-transparent dark:bg-chetwode-blue-600'
            }`}
          >
            <Radio
              id='outcome'
              label='Gasto'
              state={transactionType === 'outcome'}
              setState={() => setTransactionType('outcome')}
              name='type'
            />
          </div>
          <div
            className={`w-full p-1 border-2 rounded-lg duration-300 ease-in-out ${
              transactionType === 'income'
                ? 'bg-green-300 border-green-600 dark:bg-green-600 dark:border-green-900'
                : 'bg-chetwode-blue-200 border-transparent dark:bg-chetwode-blue-600'
            }`}
          >
            <Radio
              id='income'
              label='Ganho'
              state={transactionType === 'income'}
              setState={() => setTransactionType('income')}
              name='type'
            />
          </div>
        </div>
      </fieldset>
      <input
        type='date'
        className='mt-6 px-4 py-1.5 rounded-lg bg-chetwode-blue-200 text-chetwode-blue-950 duration-300 ease-in-out disabled:grayscale-75 disabled:opacity-40 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50'
        max={new Date().toISOString().split('T')[0]}
        value={transactionDate}
        onChange={(ev) => setTransactionDate(ev.target.value)}
      />
      <Divider direction='horizontal' className='mt-2' />
      <ModalTransactionCategory
        transactionCategory={transactionCategory}
        setTransactionCategory={setTransactionCategory}
      />
      <Divider direction='horizontal' className='mt-2' />
      {transactionType === 'income' && type === 'create' && (
        <>
          <h3 className='subsubtitle'>Cofre</h3>
          <Checkbox
            state={integrateWithVault}
            setState={setIntegrateWithVault}
            label='Integrar com Cofre'
          />
          {integrateWithVault && (
            <ModalTransactionVault
              transactionVault={transactionVault}
              setTransactionVault={setTransactionVault}
            />
          )}
          <Divider direction='horizontal' className='mt-2' />
        </>
      )}
      {hasError && (
        <p className='text-red-600 dark:text-red-400'>
          Parece que tem algum erro no formulário, certifique-se de escolher uma
          categoria, um nome e um valor.
          {integrateWithVault && ' Certifique-se de escolher um cofre'}
        </p>
      )}
      <div className='flex self-end gap-x-2'>
        <button
          type='button'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100'
          onClick={handleCancel}
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='w-fit mt-2 p-2 border-b-2 rounded-lg font-bold bg-chetwode-blue-200 text-chetwode-blue-950 border-chetwode-blue-600 duration-300 ease-in-out hover:bg-chetwode-blue-300 active:bg-chetwode-blue-500 active:text-chetwode-blue-100'
        >
          {type === 'create' ? 'Criar' : 'Editar'} Transação
        </button>
      </div>
    </form>
  );
}
