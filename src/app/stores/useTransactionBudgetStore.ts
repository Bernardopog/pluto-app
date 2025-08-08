import { create } from "zustand";
import { ITransaction } from "@/interfaces/ITransaction";
import { IBudget } from "@/interfaces/IBudget";
import { fetcher } from "../utils/fetcher";
import { IBudgetCreateDTO, IBudgetUpdateDTO } from "@/server/dto/budget.dto";
import {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from "@/server/dto/transition.dto";
import { IMessage } from "@/interfaces/IMessage";

const showError = <U>(res: IMessage<U>) => {
  console.error(res.message, res.data);
};

interface ITransactionBudgetStore {
  transactionList: ITransaction[];
  budgetList: IBudget[];

  transactionListToDelete: number[];
  addToDelete: (id: number) => void;
  removeFromDelete: (id: number) => void;

  selectedTransaction: ITransaction | null;
  selectedBudget: IBudget | null;

  isDeletingManyTxn: boolean;
  setIsDeletingManyTxn: (value: boolean) => void;

  // Global
  loadTxnAndBudgets: () => void;

  // CRUD - Transaction
  selectTransaction: (id: number) => void;
  unselectTransaction: () => void;
  getTransactions: () => void;
  createTransation: (transaction: ITransactionCreateDTO) => void;
  updateTransaction: (id: number, transaction: ITransactionUpdateDTO) => void;
  deleteTransaction: (id: number) => void;
  deleteManyTransactions: () => void;
  deleteAllTransactions: () => void;

  selectBudget: (id: number) => void;
  unselectBudget: () => void;

  // CRUD - Budget
  getBudgets: () => void;
  createBudgetCategory: (budget: IBudgetCreateDTO) => void;
  updateBudgetCategory: (id: number, budget: IBudgetUpdateDTO) => void;
  deleteBudgetCategory: (id: number) => void;
  transferBudgetCategory: (fromId: number, toId: number) => void;

  getExpenses: (budgetId: number) => number;
  getBudgetLimit: (budgetId: number) => number;
  getBudgetRest: (budgetId: number) => number;

  getTotalExpenses: () => number;
  getTotalBudgetLimit: () => number;
}

const budgetFetcher = fetcher<IBudget[] | IBudget>("/api/budgets");
const transactionFetcher = fetcher<ITransaction[] | ITransaction>(
  "/api/transactions"
);

export const useTransactionBudgetStore = create<ITransactionBudgetStore>(
  (set, get) => ({
    transactionList: [],
    budgetList: [],
    transactionListToDelete: [],
    selectedTransaction: null,
    selectedBudget: null,

    isDeletingManyTxn: false,
    setIsDeletingManyTxn: (value) => {
      if (value) {
        set({ isDeletingManyTxn: value });
      } else set({ isDeletingManyTxn: false, transactionListToDelete: [] });
    },

    addToDelete: (id) =>
      set((state) => ({
        transactionListToDelete: [...state.transactionListToDelete, id],
        selectedTransaction: null,
      })),
    removeFromDelete: (id) =>
      set((state) => ({
        transactionListToDelete: state.transactionListToDelete.filter(
          (item) => item !== id
        ),
        selectedTransaction: null,
      })),

    loadTxnAndBudgets: () => {
      get().getTransactions();
      get().getBudgets();
    },

    selectTransaction: (id) => {
      if (get().isDeletingManyTxn) return;
      set((state) => ({
        selectedTransaction: state.transactionList.find(
          (item) => item.id === id
        ),
      }));
    },
    unselectTransaction: () => set({ selectedTransaction: null }),
    getTransactions: async () => {
      set({
        transactionList: (await transactionFetcher.get())
          .data as ITransaction[],
      });
    },
    createTransation: async (transaction) => {
      const res = await transactionFetcher.post(transaction);
      if (res.status >= 400) showError(res);
      set((state) => ({
        transactionList: [...state.transactionList, res.data as ITransaction],
      }));
    },
    updateTransaction: async (id, transaction) => {
      const res = await transactionFetcher.put(id, transaction);
      if (res.status >= 400) showError(res);
      console.log(res.data);
      set((state) => ({
        transactionList: state.transactionList.map((item) =>
          item.id === id ? (res.data as ITransaction) : item
        ),
      }));
    },
    deleteTransaction: async (id) => {
      if (get().isDeletingManyTxn) return;
      const res = await transactionFetcher.delete(id);
      if (res.status >= 400) showError(res);
      set((state) => ({
        transactionList: state.transactionList.filter((txn) => txn.id !== id),
      }));
    },
    deleteManyTransactions: async () => {
      if (get().transactionListToDelete.length === 0) return;
      const ids = get().transactionListToDelete;
      const res = await transactionFetcher.deleteManyTxn(ids);
      if (res.status >= 400) showError(res);
      set((state) => ({
        transactionList: state.transactionList.filter(
          (txn) => !ids.includes(txn.id)
        ),
      }));
    },
    deleteAllTransactions: async () => {
      if (get().isDeletingManyTxn) return;
      const res = await transactionFetcher.deleteAllTxn();
      if (res.status >= 400) showError(res);
      set({ transactionList: [] });
    },
    selectBudget: (id) =>
      set({ selectedBudget: get().budgetList.find((bdgt) => bdgt.id === id) }),
    unselectBudget: () => set({ selectedBudget: null }),
    getBudgets: async () => {
      set({
        budgetList: (await budgetFetcher.get()).data as IBudget[],
      });
    },
    createBudgetCategory: async (budget) => {
      const res = await budgetFetcher.post(budget);
      if (res.status >= 400) showError(res);
      set((state) => ({
        budgetList: [...state.budgetList, res.data as IBudget],
      }));
    },
    updateBudgetCategory: async (id, budget) => {
      const res = await budgetFetcher.put(id, budget);
      if (res.status >= 400) showError(res);
      set((state) => ({
        budgetList: state.budgetList.map((bdgt) =>
          bdgt.id === id ? (res.data as IBudget) : bdgt
        ),
      }));
    },
    deleteBudgetCategory: async (id) => {
      const res = await budgetFetcher.delete(id);
      if (res.status >= 400) showError(res);
      set(() => ({
        budgetList: get().budgetList.filter((bdgt) => bdgt.id !== id),
        transactionList: get().transactionList.filter(
          (txn) => txn.categoryId !== id
        ),
      }));
    },
    transferBudgetCategory: async (fromId, toId) => {
      const res = await budgetFetcher.moveTxn(fromId, { toId });
      if (res.status >= 400) showError(res);
      set(() => ({
        budgetList: get().budgetList.filter((bdgt) => bdgt.id !== fromId),
        transactionList: get().transactionList.map((txn) =>
          txn.categoryId === fromId ? { ...txn, categoryId: toId } : txn
        ),
      }));
    },
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
    getTotalBudgetLimit: () =>
      get().budgetList.reduce((acc, b) => acc + b.limit, 0),
  })
);
