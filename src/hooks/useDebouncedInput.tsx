import { useRef, useState } from 'react';

export const useDebouncedInput = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [value, setValue] = useState<string>('');

  const handleChangeDebounce = (value: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setValue(value);
    }, 500);
  };

  return { value, handleChangeDebounce };
};
