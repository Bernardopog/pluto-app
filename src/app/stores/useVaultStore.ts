import { create } from "zustand";
import { VAULTITEMPLACEHOLDER, VAULTPLACEHOLDER } from "../mock/placeholders";
import { iconNameType } from "../data/iconMap";

export interface IVaultItem {
  id: string;
  name: string;
  value: number;
  vaultId: number;
}

export interface IVault {
  id: number;
  name: string;
  targetPrice: number;
  icon: iconNameType;
}

interface IVaultState {
  vaultList: IVault[];
  createVault: (vault: IVault) => void;
  deleteVault: (id: number) => void;
  updateVault: (id: number, vault: IVault) => void;

  selectedVault: IVault | null;
  selectVault: (id: number) => void;
  unselectVault: () => void;

  vaultItemList: IVaultItem[];
  addVaultItem: (item: IVaultItem) => void;
  removeVaultItem: (id: string) => void;
  editVaultItem: (id: string, updatedItem: IVaultItem) => void;

  getTotalMoneySavedFromVault: (vaultId: number) => number;
}

export const useVaultStore = create<IVaultState>((set, get) => ({
  vaultList: [...VAULTPLACEHOLDER],

  createVault: (vault) =>
    set((state) => ({
      vaultList:
        get().vaultList.length < 4
          ? [...state.vaultList, vault]
          : state.vaultList,
    })),
  deleteVault: (id) =>
    set((state) => ({
      vaultList: state.vaultList.filter((item) => item.id !== id),
    })),
  updateVault: (id, vault) =>
    set((state) => ({
      vaultList: state.vaultList.map((item) => (item.id === id ? vault : item)),
    })),

  selectedVault: null,
  selectVault: (id) =>
    set((state) => ({
      selectedVault: state.vaultList.find((item) => item.id === id),
    })),
  unselectVault: () => set({ selectedVault: null }),

  vaultItemList: [...VAULTITEMPLACEHOLDER],

  addVaultItem: (item) =>
    set((state) => ({ vaultItemList: [...state.vaultItemList, item] })),
  removeVaultItem: (id) =>
    set((state) => ({
      vaultItemList: state.vaultItemList.filter((item) => item.id !== id),
    })),
  editVaultItem: (id, updatedItem) =>
    set((state) => ({
      vaultItemList: state.vaultItemList.map((item) =>
        item.id === id ? updatedItem : item
      ),
    })),

  getTotalMoneySavedFromVault: (vaultId) =>
    get()
      .vaultItemList.filter((item) => item.vaultId === vaultId)
      .reduce((acc, item) => acc + item.value, 0),
}));
