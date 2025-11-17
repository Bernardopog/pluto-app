import type { Dispatch, Ref, SetStateAction } from 'react';

interface IRadioProps {
  state: boolean;
  setState: Dispatch<SetStateAction<'balance' | 'vault'>>;
  label: string;
  id: string;
  name: string;
  ref?: Ref<HTMLInputElement>;
}

export default function Radio({
  state,
  setState,
  label,
  id,
  name,
  ref,
}: IRadioProps) {
  const handleRadioChange = (typeOfProgress: 'balance' | 'vault') => {
    setState(typeOfProgress);
  };

  return (
    <label className='flex items-center gap-x-2 cursor-pointer'>
      <input
        type='radio'
        name={name}
        id={id}
        onChange={() => handleRadioChange(id as 'balance' | 'vault')}
        className='peer sr-only'
        checked={state}
        ref={ref}
      />
      <div className='flex items-center justify-center size-4.5 rounded-full bg-chetwode-blue-400 duration-300 ease-in-out peer-checked:bg-chetwode-blue-700 dark:peer-checked:bg-chetwode-blue-950'>
        <div className='size-3 rounded-full bg-chetwode-blue-50' />
      </div>
      <span className='text-chetwode-blue-950 font-bold peer-focus:text-chetwode-blue-700 peer-focus:underline dark:text-chetwode-blue-50 dark:peer-focus:text-chetwode-blue-200'>
        {label}
      </span>
    </label>
  );
}
