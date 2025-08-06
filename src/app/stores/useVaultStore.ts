import { create } from "zustand";
import { VAULTITEMPLACEHOLDER, VAULTPLACEHOLDER } from "../mock/placeholders";
import { IVault, IVaultItem } from "@/interfaces/IVault";

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
  removeVaultItem: (id: number) => void;
  editVaultItem: (id: number, updatedItem: IVaultItem) => void;

  selectedVaultItem: IVaultItem | null;
  selectVaultItem: (id: number) => void;
  unselectVaultItem: () => void;

  selectedDashboardVault: number | null;
  selectDashboardVault: (id: number) => void;

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
      selectedVault: null,
    })),
  updateVault: (id, vault) =>
    set((state) => ({
      vaultList: state.vaultList.map((item) => (item.id === id ? vault : item)),
      selectedVault: null,
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

  selectedVaultItem: null,
  selectVaultItem: (id) =>
    set((state) => ({
      selectedVaultItem: state.vaultItemList.find((item) => item.id === id),
    })),
  unselectVaultItem: () => set({ selectedVaultItem: null }),

  selectedDashboardVault: null,
  selectDashboardVault: (id) => set({ selectedDashboardVault: id }),

  getTotalMoneySavedFromVault: (vaultId) =>
    get()
      .vaultItemList.filter((item) => item.vaultId === vaultId)
      .reduce((acc, item) => acc + item.value, 0),
}));
