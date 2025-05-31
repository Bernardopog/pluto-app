import { create } from "zustand";
import { INCOMEPLACEHOLDER } from "../mock/placeholders";

interface IFinanceState {
  income: number;
  setIncome: (value: number) => void;
}

export const useFinanceStore = create<IFinanceState>((set) => ({
  income: INCOMEPLACEHOLDER,
  setIncome: (value) => set({ income: value }),
}));
