'use client';

import type { Dispatch, SetStateAction } from 'react';

interface ICheckboxProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  label?: string;
}

export default function Checkbox({ state, setState, label }: ICheckboxProps) {
  const handleCheckboxChange = () => {
    setState(!state);
  };

  return (
    <label className='flex items-center gap-x-2 cursor-pointer'>
      <input
        type='checkbox'
        className='peer hidden'
        onChange={handleCheckboxChange}
      />
      <div className='flex items-center justify-center size-4.5 rounded-sm bg-chetwode-blue-400 peer-checked:bg-chetwode-blue-700 dark:bg-chetwode-blue-600 dark:peer-checked:bg-chetwode-blue-950'>
        <div className='size-3 rounded-sm bg-chetwode-blue-50' />
      </div>
      <span className='text-chetwode-blue-950 dark:text-chetwode-blue-50'>
        {label}
      </span>
    </label>
  );
}
