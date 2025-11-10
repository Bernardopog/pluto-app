'use client';
import { MdPlayArrow } from 'react-icons/md';
import { useShallow } from 'zustand/shallow';
import type { ITransaction } from '@/interfaces/ITransaction';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';
import { moneyFormatter } from '@/utils/moneyFormatter';

interface ITransactionTableRowDataProps {
  transaction: ITransaction;
  index: number;
  selectedToDeleted: boolean;
}

export default function TransactionTableRowData({
  transaction,
  index,
  selectedToDeleted,
}: ITransactionTableRowDataProps) {
  const { budgetList, transactionSelection } = useTransactionBudgetStore(
    useShallow((s) => ({
      budgetList: s.budgetData.list,
      transactionSelection: s.transactionSelection,
    })),
  );

  const date = new Date(transaction.date);

  return (
    <div
      role='row'
      key={index}
      className={`group grid grid-cols-4 flex-1 p-1 gap-1 rounded-lg cursor-pointer hover:brightness-105 sm:grid-cols-3 lg:grid-cols-[0.35fr_2fr_0.5fr_0.5fr] lg:p-0 ${
        transactionSelection.selected?.id === transaction.id &&
        !selectedToDeleted
          ? 'outline-2 outline-offset-2 outline-chetwode-blue-600 dark:outline-chetwode-blue-300'
          : ''
      }`}
      onClick={() => transactionSelection.select(transaction.id)}
    >
      <div
        role='cell'
        className='order-1 col-span-2 p-2 border-2 rounded-l-lg rounded-r-sm text-center border-chetwode-blue-950/25 ease-in-out duration-300 group-hover:border-chetwode-blue-600 dark:group-hover:border-chetwode-blue-300 sm:col-span-1'
      >
        {date.getUTCDate().toString().padStart(2, '0')}/
        {(date.getUTCMonth() + 1).toString().padStart(2, '0')}/
        {date.getUTCFullYear()}
      </div>
      <div
        role='cell'
        className='col-span-4 p-2 border-2 rounded-lg border-chetwode-blue-950/25 truncate ease-in-out duration-300 group-hover:border-chetwode-blue-600 dark:group-hover:border-chetwode-blue-300 sm:col-span-3 lg:col-span-1 lg:order-1 lg:rounded-sm'
      >
        {transaction.name}
      </div>
      <div
        role='cell'
        className={`inline-flex items-center justify-between order-3 col-span-4 p-2 border-2 rounded-lg border-chetwode-blue-950/25 font-medium ease-in-out duration-300 group-hover:border-chetwode-blue-600 dark:group-hover:border-chetwode-blue-300 sm:col-span-1 sm:order-2 lg:rounded-sm ${
          transaction.value < 0
            ? `${
                selectedToDeleted
                  ? 'bg-red-100/75 text-red-900 dark:bg-red-800/75 dark:text-red-50'
                  : 'bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-50'
              }`
            : `${
                selectedToDeleted
                  ? 'bg-green-100/75 text-green-900 dark:bg-green-700/75 dark:text-green-50'
                  : 'bg-green-100 text-green-900 dark:bg-green-700 dark:text-green-50'
              }`
        }`}
      >
        {moneyFormatter(transaction.value)}
        {transaction.value < 0 ? (
          <MdPlayArrow className='rotate-90' />
        ) : (
          <MdPlayArrow className='rotate-270' />
        )}
      </div>
      <div
        role='cell'
        className='order-2 col-span-2 p-2 border-2 rounded-r-lg rounded-l-sm border-chetwode-blue-950/25 ease-in-out duration-300 group-hover:border-chetwode-blue-600 dark:group-hover:border-chetwode-blue-300 sm:col-span-1 sm:order-3'
      >
        {budgetList.find((b) => b.id === transaction.categoryId)?.name}
      </div>
    </div>
  );
}
