import { create } from "zustand";

interface IDashboardControllersStore {
  isTransactionFormOpen: boolean;
  toggleTransactionForm: () => void;
}

export const useDashboardControllersStore =
  create<IDashboardControllersStore>()((set) => ({
    isTransactionFormOpen: false,
    toggleTransactionForm: () =>
      set((state) => ({ isTransactionFormOpen: !state.isTransactionFormOpen })),
  }));
