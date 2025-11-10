'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  value: string;
  setSearchFilter: (val: string) => void;
  setCategoryFilter: (val: number) => void;
};

export default function TransactionSearchParams({
  value,
  setSearchFilter,
  setCategoryFilter,
}: Props) {
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearchFilter(value);
    if (searchParams.has('category')) {
      setCategoryFilter(Number(searchParams.get('category')));
    }
  }, [value, setSearchFilter, searchParams, setCategoryFilter]);

  return null;
}
