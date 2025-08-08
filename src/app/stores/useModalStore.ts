import { create } from "zustand";

export type TransactionFilterType =
  | "filterDate"
  | "filterValue"
  | "filterCategory"
  | "filterType";

export type TransactionModalType =
  | "transactionCreate"
  | "transactionUpdate"
  | TransactionDeleteType;

type TransactionDeleteType =
  | "transactionDeleteGroup"
  | "transactionDeleteAll"
  | "transactionDelete";

export type BudgetModalType =
  | "budgetCreate"
  | "budgetUpdate"
  | "budgetDelete"
  | "budgetTransfer";

export type VaultModalType = "vaultCreate" | "vaultUpdate" | "vaultDelete";

export type VaultItemModalType =
  | "vaultAddItem"
  | "vaultUpdateItem"
  | "vaultDeleteItem";

export type ModalType =
  | null
  | "goals"
  | "stats"
  | "budgetCreate"
  | TransactionModalType
  | BudgetModalType
  | TransactionFilterType
  | VaultModalType
  | VaultItemModalType;

interface IModalStore {
  isModalOpen: boolean;
  selectedModal: ModalType;

  toggleModal: () => void;
  selectModalType: (type: ModalType) => void;
}

export const useModalStore = create<IModalStore>((set, get) => ({
  isModalOpen: false,
  selectedModal: null,
  toggleModal: () => set({ isModalOpen: !get().isModalOpen }),
  selectModalType: (type) => set({ selectedModal: type }),
}));
