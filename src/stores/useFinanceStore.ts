import { create } from 'zustand';
import type { IFinance } from '@/interfaces/IFinance';
import { showError } from '../helpers/showError';
import { fetcher } from '../utils/fetcher';

interface IFinanceMethodsState {
  patch: (type: 'balance' | 'income', value: number) => Promise<void>;
}

interface IFinanceState {
  financeData: { item: IFinance; fetched: boolean; loading: boolean };
  setFinanceData: (data: {
    item: IFinance;
    fetched: boolean;
    loading: boolean;
  }) => void;

  financeMethods: IFinanceMethodsState;
}

const financeFetcher = fetcher<IFinance>(`/api/finance`);

export const useFinanceStore = create<IFinanceState>((set) => ({
  financeData: {
    item: { balance: 0, income: 0 },
    fetched: false,
    loading: true,
  },
  setFinanceData: (data) => set({ financeData: data }),

  financeMethods: {
    patch: async (type, value) => {
      const res = await financeFetcher.financePatch(type, value);
      if (res.status >= 400) showError(res);
      set((state) => ({
        financeData: {
          ...state.financeData,
          item: res.data as IFinance,
        },
      }));
    },
  },
}));
