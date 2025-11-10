import { create } from 'zustand';

export type DateType = 'all' | 'between' | 'before' | 'after' | 'exactly';
export type ValueType = 'all' | 'between' | 'positive' | 'negative' | 'exactly';
export type TransactionType = 'all' | 'revenue' | 'expenses';

interface ITransactionFilterStore {
  resetFullFilter: () => void;
  resetFullDateFilter: () => void;
  resetFullValueFilter: () => void;
  resetFullTypeFilter: () => void;
  resetFullCategoryFilter: () => void;
  resetFullSearchFilter: () => void;

  dateFilter: DateType;
  setDateFilter: (value: DateType) => void;

  firstDate: Date;
  secondDate: Date | null;
  setFirstDate: (firstDate: Date) => void;
  setSecondDate: (secondDate: Date | null) => void;
  resetDates: () => void;

  valueFilter: ValueType;
  setValueFilter: (value: ValueType) => void;

  firstValue: number;
  secondValue: number;
  setFirstValue: (firstValue: number) => void;
  setSecondValue: (secondValue: number) => void;
  resetValues: () => void;

  categoryFilter: number | null;
  setCategoryFilter: (value: number | null) => void;

  transactionTypeFilter: TransactionType;
  setTransactionTypeFilter: (value: TransactionType) => void;

  searchFilter: string;
  setSearchFilter: (value: string) => void;
}

export const useTransactionFilterStore = create<ITransactionFilterStore>(
  (set, get) => ({
    resetFullFilter: () => (
      get().resetFullDateFilter(),
      get().resetFullValueFilter(),
      get().resetFullTypeFilter(),
      get().resetFullCategoryFilter(),
      get().resetFullSearchFilter()
    ),

    resetFullDateFilter: () =>
      set({ dateFilter: 'all', firstDate: new Date(), secondDate: null }),
    resetFullTypeFilter: () => set({ transactionTypeFilter: 'all' }),
    resetFullValueFilter: () =>
      set({ valueFilter: 'all', firstValue: 0, secondValue: 0 }),
    resetFullCategoryFilter: () => set({ categoryFilter: null }),
    resetFullSearchFilter: () => set({ searchFilter: '' }),

    dateFilter: 'all',
    setDateFilter: (value) => set({ dateFilter: value }),

    firstDate: new Date(),
    secondDate: null,
    setFirstDate: (firstDate) => set({ firstDate }),
    setSecondDate: (secondDate) => set({ secondDate }),
    resetDates: () => set({ firstDate: new Date(), secondDate: null }),

    valueFilter: 'all',
    setValueFilter: (value) => set({ valueFilter: value }),

    firstValue: 0,
    secondValue: 0,
    setFirstValue: (firstValue) => set({ firstValue }),
    setSecondValue: (secondValue) => set({ secondValue }),
    resetValues: () => set({ firstValue: 0, secondValue: 0 }),

    categoryFilter: null,
    setCategoryFilter: (value) => set({ categoryFilter: value }),

    transactionTypeFilter: 'all',
    setTransactionTypeFilter: (value) => set({ transactionTypeFilter: value }),

    searchFilter: '',
    setSearchFilter: (value) => set({ searchFilter: value }),
  }),
);
