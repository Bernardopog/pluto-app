'use client';

import type { JSX } from 'react';
import { MdClose } from 'react-icons/md';

interface ITransactionFilterButtonProps {
  label: string;
  isActive: boolean;
  action: () => void;
  reset: () => void;
  icon: JSX.Element;
}

export default function TransactionFilterButton({
  label,
  isActive,
  action,
  reset,
  icon,
}: ITransactionFilterButtonProps) {
  return (
    <div className='relative'>
      <button
        type='button'
        className={`flex items-center justify-center w-full min-w-32 p-1.5 gap-2 rounded-lg duration-300 ease-in-out hover:brightness-95 active:brightness-75 ${
          isActive
            ? 'font-bold text-chetwode-blue-100 bg-chetwode-blue-800 dark:bg-chetwode-blue-200 dark:text-chetwode-blue-950'
            : 'text-chetwode-blue-950 bg-chetwode-blue-200 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50'
        }`}
        onClick={() => action()}
      >
        <span className='text-xl'>{icon}</span>
        {label}
      </button>
      {isActive && (
        <button
          type='button'
          className='absolute top-0 right-0 rounded-sm text-lg text-chetwode-blue-950 bg-chetwode-blue-100'
          onClick={() => reset()}
        >
          <MdClose />
        </button>
      )}
    </div>
  );
}
