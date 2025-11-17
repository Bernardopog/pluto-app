'use client';

import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import type { ITransaction } from '@/interfaces/ITransaction';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { moneyFormatter } from '@/utils/moneyFormatter';
import Inert from '../../Inert';

export default function BudgetListItemTxnHistory({ id }: { id: number }) {
  const [isShownTransactionHistory, setIsShownTransactionHistory] =
    useState<boolean>(false);

  const transactionList = useTransactionBudgetStore(
    (s) => s.transactionData.list,
  );

  let txns: (ITransaction | null)[] = transactionList
    .filter((txn) => txn.categoryId === id)
    .toReversed()
    .slice(0, 6);

  if (txns.length === 0) txns = Array(6).fill(null);

  for (let i = 0; i < txns.length; i++) {
    if (txns.length < 6) {
      txns.push(null);
    }
  }

  return (
    <div
      className={`p-2 rounded-lg min-h-12 duration-300 ease-in-out overflow-clip bg-chetwode-blue-100 dark:bg-chetwode-blue-900 ${
        isShownTransactionHistory ? 'h-64' : 'h-12'
      }`}
    >
      <header className='flex items-center justify-between'>
        <h4 className='subsubsubtitle'>Transações Recentes</h4>
        <button
          type='button'
          className='p-1 rounded-lg bg-chetwode-blue-300'
          aria-label={isShownTransactionHistory ? 'Ocultar' : 'Mostrar'}
          onClick={() =>
            setIsShownTransactionHistory(!isShownTransactionHistory)
          }
        >
          {isShownTransactionHistory ? (
            <IoMdEyeOff className='text-2xl text-chetwode-blue-950' />
          ) : (
            <IoMdEye className='text-2xl text-chetwode-blue-950' />
          )}
        </button>
      </header>
      {isShownTransactionHistory && (
        <Inert isVisible={isShownTransactionHistory}>
          <ul className='flex flex-col mt-2 gap-1'>
            {txns.map((txn, idx) => {
              if (!txn)
                return (
                  <li
                    key={`txn-empty-${
                      // biome-ignore lint/suspicious/noArrayIndexKey: <Imutable>
                      idx
                    }`}
                    className='flex justify-between p-1 border-b-2 rounded-lg bg-star-dust-200 text-star-dust-950 border-star-dust-600/75'
                  >
                    <p className='text-sm'>Vazio</p>
                  </li>
                );

              const value = txn.value;

              return (
                <li
                  key={`txn-${txn.id}`}
                  className={`flex justify-between p-1 border-b-2 rounded-lg ${
                    value < 0
                      ? 'bg-red-200 text-red-950 border-red-600/75'
                      : 'bg-green-200 text-green-950 border-green-600/75'
                  }`}
                >
                  <p className='text-sm'>{txn.name}</p>
                  <p className={'text-sm'}>{moneyFormatter(txn.value)}</p>
                </li>
              );
            })}
          </ul>
        </Inert>
      )}
    </div>
  );
}
