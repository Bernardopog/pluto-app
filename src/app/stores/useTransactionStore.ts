import { create } from "zustand";
import { TRANSACTIONPLACEHOLDER } from "../mock/placeholders";

export interface ITransaction {
  id: string;
  name: string;
  value: number;
  date: Date;
}

interface ITransactionStore {
  transactionList: ITransaction[];
  addTransaction: (transaction: ITransaction) => void;
  updateTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (id: string) => void;
}

export const useTransactionStore = create<ITransactionStore>((set) => ({
  transactionList: [...TRANSACTIONPLACEHOLDER],

  addTransaction: (transaction) =>
    set((state) => ({
      transactionList: [...state.transactionList, transaction],
    })),
  updateTransaction: (transaction) =>
    set((state) => ({
      transactionList: state.transactionList.map((item) =>
        item.id === transaction.id ? transaction : item
      ),
    })),

  deleteTransaction: (id) =>
    set((state) => ({
      transactionList: state.transactionList.filter((item) => item.id !== id),
    })),
}));
