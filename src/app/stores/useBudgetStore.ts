import { create } from "zustand";
import { BUDGETPLACEHOLDER } from "../mock/placeholders";

export interface IBudgetItem {
  name: string;
  value: number;
  color: string;
}
interface IBudget {
  budget: IBudgetItem[];
  addBudgetItem: (item: IBudgetItem) => void;
  updateBudgetItem: (name: string, value: number, color: string) => void;
  removeBudgetItem: (name: string) => void;
  totalExpenses: () => number;
}

export const useBudgetStore = create<IBudget>((set, get) => ({
  budget: [...BUDGETPLACEHOLDER],

  addBudgetItem: (item) =>
    set((state) => ({ budget: [...state.budget, item] })),

  updateBudgetItem: (name, value, color) =>
    set((state) => ({
      budget: state.budget.map((item) =>
        item.name === name ? { ...item, value, color } : item
      ),
    })),

  removeBudgetItem: (name) =>
    set((state) => ({
      budget: state.budget.filter((item) => item.name !== name),
    })),

  totalExpenses: () => get().budget.reduce((acc, item) => acc + item.value, 0),
}));
