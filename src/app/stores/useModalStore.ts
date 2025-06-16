import { create } from "zustand";

export type ModalType = null | "goals" | "stats" | "transactionCreate";

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
