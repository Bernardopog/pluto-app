import { create } from "zustand";
import { ITransaction } from "@/interfaces/ITransaction";
import { IBudget } from "@/interfaces/IBudget";
import { fetcher } from "../utils/fetcher";
import { IBudgetCreateDTO, IBudgetUpdateDTO } from "@/server/dto/budget.dto";
import {
  ITransactionCreateDTO,
  ITransactionUpdateDTO,
} from "@/server/dto/transition.dto";
import { IListDataState } from "../interfaces/IDataState";
import { ISelectionState } from "../interfaces/ISelectionState";
import { IMethodsState } from "../interfaces/IMethodsState";
import { showError } from "../helpers/showError";
import { IMessage } from "@/interfaces/IMessage";

interface ITransactionMethodsState
  extends IMethodsState<
    ITransactionCreateDTO,
    ITransactionUpdateDTO,
    ITransaction
  > {
  deleteMany: () => Promise<IMessage<null>>;
  deleteAll: () => Promise<IMessage<null>>;
}
interface IBudgetMethodsState
  extends IMethodsState<IBudgetCreateDTO, IBudgetUpdateDTO, IBudget> {
  transfer: (fromId: number, toId: number) => Promise<IMessage<null>>;
}

interface ITransactionDeletionState {
  list: number[];
  isDeleting: boolean;
  add: (id: number) => void;
  remove: (id: number) => void;
  setIsDeleting: (value: boolean) => void;
}

interface ITransactionBudgetStore {
  // Transaction
  transactionData: IListDataState<ITransaction>;
  transactionMethods: ITransactionMethodsState;
  transactionDeletion: ITransactionDeletionState;
  transactionSelection: ISelectionState<ITransaction>;

  setTransactionData: (data: IListDataState<ITransaction>) => void;

  // Budget
  budgetData: IListDataState<IBudget>;
  budgetMethods: IBudgetMethodsState;
  budgetSelection: ISelectionState<IBudget>;

  setBudgetData: (data: IListDataState<IBudget>) => void;

  // Global
  loadTxnAndBudgets: () => void;

  getExpenses: (budgetId: number) => number;
  getBudgetLimit: (budgetId: number) => number;
  getBudgetRest: (budgetId: number) => number;
  getMonthBudgetRest: (budgetId: number) => number;

  getTotalExpenses: () => number;
  getTotalMonthlyExpenses: () => number;
  getTotalBudgetLimit: () => number;
  getExpenseFromCurrentMonth: (budgetId: number) => number;

  // Internal
  isCurrentMonth: (date: string | Date) => boolean;
}

const budgetFetcher = fetcher<IBudget[] | IBudget | null>("/api/budgets");
const transactionFetcher = fetcher<ITransaction[] | ITransaction | null>(
  "/api/transactions"
);

export const useTransactionBudgetStore = create<ITransactionBudgetStore>(
  (set, get) => ({
    // Transaction
    // Data
    transactionData: { list: [], loading: true, fetched: false },
    setTransactionData: (data) => set({ transactionData: data }),

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
        const res = (await transactionFetcher.post(
          transaction
        )) as IMessage<ITransaction>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: [res.data as ITransaction, ...state.transactionData.list],
          },
        }));
        return res;
      },
      update: async (id, transaction) => {
        const res = (await transactionFetcher.put(
          id,
          transaction
        )) as IMessage<ITransaction>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.map((item) =>
              item.id === id ? (res.data as ITransaction) : item
            ),
          },
        }));
        return res;
      },
      delete: async (id) => {
        const res = (await transactionFetcher.delete(id)) as IMessage<null>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.filter((txn) => txn.id !== id),
          },
        }));
        return res;
      },
      deleteMany: async () => {
        if (get().transactionDeletion.list.length === 0)
          return {
            message: "Nenhuma transação selecionada",
            status: 400,
          } as IMessage<null>;
        const ids = get().transactionDeletion.list;
        const res = (await transactionFetcher.deleteManyTxn(
          ids
        )) as IMessage<null>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: state.transactionData.list.filter(
              (txn) => !ids.includes(txn.id)
            ),
          },
        }));
        return res;
      },
      deleteAll: async () => {
        if (get().transactionData.list.length === 0)
          return {
            message: "Nenhuma transação encontrada",
            status: 400,
          } as IMessage<null>;
        const res = (await transactionFetcher.deleteAllTxn()) as IMessage<null>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          transactionData: {
            ...state.transactionData,
            list: [],
          },
        }));
        return res;
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
    setBudgetData: (data) => set({ budgetData: data }),

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
        if (get().budgetData.list.length >= 10)
          return {
            message: "Limite de 10 orcamentos atingido",
            status: 400,
          };
        const res = (await budgetFetcher.post(budget)) as IMessage<IBudget>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: [...state.budgetData.list, res.data as IBudget],
          },
        }));
        return res;
      },
      update: async (id, budget) => {
        const res = (await budgetFetcher.put(id, budget)) as IMessage<IBudget>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: state.budgetData.list.map((item) =>
              item.id === id ? (res.data as IBudget) : item
            ),
          },
        }));
        return res;
      },
      delete: async (id) => {
        const res = (await budgetFetcher.delete(id)) as IMessage<null>;
        if (res.status >= 400) showError(res);
        set((state) => ({
          budgetData: {
            ...state.budgetData,
            list: state.budgetData.list.filter((bdgt) => bdgt.id !== id),
          },
        }));
        return res;
      },
      transfer: async (fromId, toId) => {
        const res = (await budgetFetcher.moveTxn(fromId, {
          toId,
        })) as IMessage<null>;
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
        return res;
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
    getBudgetRest: (budgetId) => {
      const store = get();
      return store.getBudgetLimit(budgetId) + store.getExpenses(budgetId);
    },
    getMonthBudgetRest: (budgetId) => {
      const store = get();
      return (
        store.getBudgetLimit(budgetId) +
        store.getExpenseFromCurrentMonth(budgetId)
      );
    },
    getTotalExpenses: () =>
      get()
        .transactionData.list.filter((t) => t.value < 0)
        .reduce((acc, t) => acc + t.value, 0),
    getTotalMonthlyExpenses: () =>
      get()
        .transactionData.list.filter((t) => get().isCurrentMonth(t.date))
        .filter((t) => t.value < 0)
        .reduce((acc, t) => acc + t.value, 0),
    getExpenseFromCurrentMonth: (budgetId) => {
      return get()
        .transactionData.list.filter((t) => get().isCurrentMonth(t.date))
        .filter((t) => t.categoryId === budgetId && t.value < 0)
        .reduce((acc, t) => acc + t.value, 0);
    },
    getTotalBudgetLimit: () =>
      get().budgetData.list.reduce((acc, b) => acc + b.limit, 0),
    isCurrentMonth(date) {
      const itemDate = new Date(date);
      const now = new Date();
      return (
        itemDate.getMonth() === now.getMonth() &&
        itemDate.getFullYear() === now.getFullYear()
      );
    },
  })
);
