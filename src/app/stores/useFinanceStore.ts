import { create } from "zustand";
import { INCOMEPLACEHOLDER } from "../mock/placeholders";

interface IFinanceState {
  balance: number;
  income: number;
  setIncome: (value: number) => void;
}

export const useFinanceStore = create<IFinanceState>((set) => ({
  balance: INCOMEPLACEHOLDER * 10,
  income: INCOMEPLACEHOLDER,
  setIncome: (value) => set({ income: value }),
}));
