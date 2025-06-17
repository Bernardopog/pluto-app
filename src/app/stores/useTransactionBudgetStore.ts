import { create } from "zustand";
import {
  BUDGETPLACEHOLDER,
  TRANSACTIONPLACEHOLDER,
} from "../mock/placeholders";

export interface IBudget {
  id: number;
  name: string;
  color: string;
  limit: number;
}

export interface ITransaction {
  id: number;
  name: string;
  value: number;
  date: Date;
  categoryId: number;
}

interface ITransactionBudgetStore {
  transactionList: ITransaction[];
  budgetList: IBudget[];

  selectedTransaction: ITransaction | null;

  selectTransaction: (id: number) => void;
  unselectTransaction: () => void;
  createTransation: (transaction: ITransaction) => void;
  deleteTransaction: (id: number) => void;
  updateTransaction: (id: number, transaction: ITransaction) => void;

  createBudgetCategory: (budget: IBudget) => void;
  updateBudgetCategory: (id: number, budget: IBudget) => void;
  deleteBudgetCategory: (id: number) => void;

  getExpenses: (budgetId: number) => number;
  getBudgetLimit: (budgetId: number) => number;
  getBudgetRest: (budgetId: number) => number;
  getTotalExpenses: () => number;
}

export const useTransactionBudgetStore = create<ITransactionBudgetStore>(
  (set, get) => ({
    transactionList: [...TRANSACTIONPLACEHOLDER],
    budgetList: [...BUDGETPLACEHOLDER],
    selectedTransaction: null,
    selectTransaction: (id) =>
      set((state) => ({
        selectedTransaction: state.transactionList.find(
          (item) => item.id === id
        ),
      })),
    unselectTransaction: () => set({ selectedTransaction: null }),
    createTransation: (transaction) =>
      set((state) => ({
        transactionList: [...state.transactionList, transaction],
      })),
    deleteTransaction: (id) =>
      set((state) => ({
        transactionList: state.transactionList.filter((item) => item.id !== id),
      })),
    updateTransaction: (id, transaction) =>
      set((state) => ({
        transactionList: state.transactionList.map((item) =>
          item.id === id ? transaction : item
        ),
      })),
    createBudgetCategory: (budget) =>
      set((state) => ({
        budgetList: [...state.budgetList, budget],
      })),
    updateBudgetCategory: (id, budget) =>
      set((state) => ({
        budgetList: state.budgetList.map((item) =>
          item.id === id ? budget : item
        ),
      })),
    deleteBudgetCategory: (id) =>
      set((state) => ({
        budgetList: state.budgetList.filter((item) => item.id !== id),
      })),
    getExpenses: (budgetId) =>
      get()
        .transactionList.filter((t) => t.categoryId === budgetId)
        .filter((t) => t.value < 0)
        .reduce((acc, t) => acc + t.value, 0),
    getBudgetLimit: (budgetId) =>
      get().budgetList.find((b) => b.id === budgetId)?.limit || 0,
    getBudgetRest: (budgetId) =>
      get().getBudgetLimit(budgetId) + get().getExpenses(budgetId),
    getTotalExpenses: () =>
      get()
        .transactionList.filter((t) => t.value < 0)
        .reduce((acc, t) => acc + t.value, 0),
  })
);
