import { create } from "zustand";

interface IDashboardControllersStore {
  isTransactionFormOpen: boolean;
  toggleTransactionForm: () => void;
  transactionFilter: "income" | "expense" | "all";
  setTransactionFilter: (value: "income" | "expense" | "all") => void;
}

export const useDashboardControllersStore =
  create<IDashboardControllersStore>()((set) => ({
    isTransactionFormOpen: false,
    toggleTransactionForm: () =>
      set((state) => ({ isTransactionFormOpen: !state.isTransactionFormOpen })),
    transactionFilter: "all",
    setTransactionFilter: (value) => set({ transactionFilter: value }),
  }));
