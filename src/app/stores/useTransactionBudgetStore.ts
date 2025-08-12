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

interface ITransactionMethodsState {
  fetch: () => void;
  create: (transaction: ITransactionCreateDTO) => void;
  update: (id: number, transaction: ITransactionUpdateDTO) => void;
  delete: (id: number) => void;
  deleteMany: () => void;
  deleteAll: () => void;
}

interface ITransactionDeletionState {
  list: number[];
  isDeleting: boolean;
  add: (id: number) => void;
  remove: (id: number) => void;
  setIsDeleting: (value: boolean) => void;
}

interface IBudgetMethodsState {
  fetch: () => void;
  create: (budget: IBudgetCreateDTO) => void;
  update: (id: number, budget: IBudgetUpdateDTO) => void;
  delete: (id: number) => void;
  transfer: (fromId: number, toId: number) => void;
}

interface IDataState<T> {
  list: T[];
  loading: boolean;
  fetched: boolean;
}

interface ISelectionState<T> {
  selected: T | null;
  select: (id: number) => void;
  unselect: () => void;
}

interface ITransactionBudgetStore {
  // Transaction
  transactionData: IDataState<ITransaction>;
  transactionMethods: ITransactionMethodsState;
  transactionDeletion: ITransactionDeletionState;
  transactionSelection: ISelectionState<ITransaction>;

  // Budget
  budgetData: IDataState<IBudget>;
  budgetMethods: IBudgetMethodsState;
  budgetSelection: ISelectionState<IBudget>;

  // Global
  loadTxnAndBudgets: () => void;

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
    // Transaction
    // Data
    transactionData: { list: [], loading: true, fetched: false },

    // Methods
    transactionMethods: {
      fetch: async () => {
        const res = await transactionFetcher.get();
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: res.data as ITransaction[],
            loading: false,
            fetched: true,
          },
        }));
      },
      create: async (transaction) => {
        const res = await transactionFetcher.post(transaction);
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: [...state.transactionData.list, res.data as ITransaction],
          },
        }));
      },
      update: async (id, transaction) => {
        const res = await transactionFetcher.put(id, transaction);
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.map((item) =>
              item.id === id ? (res.data as ITransaction) : item
            ),
          },
        }));
      },
      delete: async (id) => {
        const res = await transactionFetcher.delete(id);
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.filter((txn) => txn.id !== id),
          },
        }));
      },
      deleteMany: async () => {
        if (get().transactionDeletion.list.length === 0) return;
        const ids = get().transactionDeletion.list;
        const res = await transactionFetcher.deleteManyTxn(ids);
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.filter(
              (txn) => !ids.includes(txn.id)
            ),
          },
        }));
      },
      deleteAll: async () => {
        const res = await transactionFetcher.deleteManyTxn([]);
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: [],
          },
        }));
      },
    },

    // Selection
    transactionSelection: {
      selected: null,
      select: (id) =>
        set({
          transactionSelection: {
            ...get().transactionSelection,
            selected:
              get().transactionData.list.find((txn) => txn.id === id) || null,
          },
        }),
      unselect: () =>
        set({
          transactionSelection: {
            ...get().transactionSelection,
            selected: null,
          },
        }),
    },

    // Deletion
    transactionDeletion: {
      list: [],
      isDeleting: false,
      add(id) {
        if (get().transactionDeletion.list.includes(id)) return;
        set((state) => ({
          transactionDeletion: {
            ...state.transactionDeletion,
            list: [...state.transactionDeletion.list, id],
          },
          selectedTransaction: null,
        }));
      },
      remove(id) {
        set((state) => ({
          transactionDeletion: {
            ...state.transactionDeletion,
            list: state.transactionDeletion.list.filter((item) => item !== id),
          },
          selectedTransaction: null,
        }));
      },
      setIsDeleting(value) {
        if (value) {
          set({
            transactionDeletion: {
              ...get().transactionDeletion,
              isDeleting: value,
            },
          });
        } else
          set({
            transactionDeletion: {
              ...get().transactionDeletion,
              isDeleting: false,
              list: [],
            },
          });
      },
    },

    // Budget
    // Data
    budgetData: { list: [], loading: true, fetched: false },

    // Methods
    budgetMethods: {
      fetch: async () => {
        const res = await budgetFetcher.get();
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: res.data as IBudget[],
            loading: false,
            fetched: true,
          },
        }));
      },
      create: async (budget) => {
        const res = await budgetFetcher.post(budget);
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: [...state.budgetData.list, res.data as IBudget],
          },
        }));
      },
      update: async (id, budget) => {
        const res = await budgetFetcher.put(id, budget);
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: state.budgetData.list.map((item) =>
              item.id === id ? (res.data as IBudget) : item
            ),
          },
        }));
      },
      delete: async (id) => {
        const res = await budgetFetcher.delete(id);
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: state.budgetData.list.filter((bdgt) => bdgt.id !== id),
          },
        }));
      },
      transfer: async (fromId, toId) => {
        const res = await budgetFetcher.moveTxn(fromId, { toId });
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: state.budgetData.list.filter((bdgt) => bdgt.id !== fromId),
          },
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.map((txn) =>
              txn.categoryId === fromId ? { ...txn, categoryId: toId } : txn
            ),
          },
        }));
      },
    },

    budgetSelection: {
      selected: null,
      select(id) {
        set({
          budgetSelection: {
            ...get().budgetSelection,
            selected:
              get().budgetData.list.find((bdgt) => bdgt.id === id) || null,
          },
        });
      },
      unselect() {
        set({
          budgetSelection: {
            ...get().budgetSelection,
            selected: null,
          },
        });
      },
    },

    loadTxnAndBudgets: () => {
      get().transactionMethods.fetch();
      get().budgetMethods.fetch();
    },

    getExpenses: (budgetId) =>
      get()
        .transactionData.list.filter((t) => t.categoryId === budgetId)
        .filter((t) => t.value < 0)
        .reduce((acc, t) => acc + t.value, 0),
    getBudgetLimit: (budgetId) =>
      get().budgetData.list.find((b) => b.id === budgetId)?.limit || 0,
    getBudgetRest: (budgetId) =>
      get().getBudgetLimit(budgetId) + get().getExpenses(budgetId),
    getTotalExpenses: () =>
      get()
        .transactionData.list.filter((t) => t.value < 0)
        .reduce((acc, t) => acc + t.value, 0),
    getTotalBudgetLimit: () =>
      get().budgetData.list.reduce((acc, b) => acc + b.limit, 0),
  })
);
