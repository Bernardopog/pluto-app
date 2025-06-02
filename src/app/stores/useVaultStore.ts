import { create } from "zustand";
import { VAULTPLACEHOLDER } from "../mock/placeholders";

export interface ISavedItem {
  id: string;
  name: string;
  value: number;
}

interface IVaultState {
  savedHistory: ISavedItem[];
  addSavedItem: (item: ISavedItem) => void;
  removeSavedItem: (id: string) => void;
  getTotalMoneySaved: () => number;
}

export const useVaultStore = create<IVaultState>((set, get) => ({
  savedHistory: [...VAULTPLACEHOLDER],

  addSavedItem: (item) =>
    set((state) => ({ savedHistory: [...state.savedHistory, item] })),
  removeSavedItem: (id) =>
    set((state) => ({
      savedHistory: state.savedHistory.filter((item) => item.id !== id),
    })),
  getTotalMoneySaved: () =>
    get().savedHistory.reduce((acc, item) => acc + item.value, 0),
}));
