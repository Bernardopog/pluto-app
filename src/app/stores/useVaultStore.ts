import { create } from "zustand";
import { IVault, IVaultItem } from "@/interfaces/IVault";
import { IVaultCreateDTO, IVaultUpdateDTO } from "@/server/dto/vault.dto";
import { IMethodsState } from "../interfaces/IMethodsState";
import { ISelectionState } from "../interfaces/ISelectionState";
import { IDataState } from "../interfaces/IDataState";
import { fetcher } from "../utils/fetcher";
import { showError } from "../helpers/showError";
import {
  IVaultItemCreateDTO,
  IVaultItemUpdateDTO,
} from "@/server/dto/vaultItem.dto";

type IVaultMethodsState = IMethodsState<IVaultCreateDTO, IVaultUpdateDTO>;

interface IVaultState {
  vaultData: IDataState<IVault>;
  vaultMethods: IVaultMethodsState;
  vaultSelection: ISelectionState<IVault>;

  vaultItemData: IDataState<IVaultItem>;
  vaultItemMethods: IMethodsState<IVaultItemCreateDTO, IVaultItemUpdateDTO>;
  vaultItemSelection: ISelectionState<IVaultItem>;

  selectedDashboardVault: number | null;
  selectDashboardVault: (id: number) => void;

  getTotalMoneySavedFromVault: (vaultId: number) => number;
}

const vaultFetcher = fetcher<IVault[] | IVault>("/api/vaults");
const vaultItemFetcher = fetcher<IVaultItem[] | IVaultItem>("/api/vaultitems");

export const useVaultStore = create<IVaultState>((set, get) => ({
  vaultData: { list: [], fetched: false, loading: true },
  vaultItemData: { list: [], fetched: false, loading: true },

  vaultMethods: {
    fetch: async () => {
      const res = await vaultFetcher.get();
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultData: {
          ...state.vaultData,
          list: res.data as IVault[],
          fetched: true,
          loading: false,
        },
      }));
    },
    create: async (vault) => {
      const res = await vaultFetcher.post(vault);
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultData: {
          ...state.vaultData,
          list: [...state.vaultData.list, res.data as IVault],
        },
      }));
    },
    update: async (id, vault) => {
      const res = await vaultFetcher.put(id, vault);
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultData: {
          ...state.vaultData,
          list: state.vaultData.list.map((item) =>
            item.id === id ? (res.data as IVault) : item
          ),
        },
      }));
    },
    delete: async (id) => {
      const res = await vaultFetcher.delete(id);
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultData: {
          ...state.vaultData,
          list: state.vaultData.list.filter((item) => item.id !== id),
        },
        vaultSelection: {
          ...state.vaultSelection,
          selected: null,
        },
        selectedDashboardVault: null,
      }));
    },
  },

  vaultSelection: {
    selected: null,
    select(id) {
      set((state) => ({
        vaultSelection: {
          ...state.vaultSelection,
          selected: state.vaultData.list.find((item) => item.id === id) || null,
        },
      }));
    },
    unselect() {
      set((state) => ({
        vaultSelection: {
          ...state.vaultSelection,
          selected: null,
        },
      }));
    },
  },

  vaultItemMethods: {
    fetch: async () => {
      const res = await vaultItemFetcher.get();
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: res.data as IVaultItem[],
          fetched: true,
          loading: false,
        },
      }));
    },
    create: async (item) => {
      const res = await vaultItemFetcher.post(item);
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: [...state.vaultItemData.list, res.data as IVaultItem],
        },
      }));
    },
    update: async (id, item) => {
      const res = await vaultItemFetcher.put(id, item);
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: state.vaultItemData.list.map((item) =>
            item.id === id ? (res.data as IVaultItem) : item
          ),
        },
      }));
    },
    delete: async (id) => {
      const res = await vaultItemFetcher.delete(id);
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: state.vaultItemData.list.filter((item) => item.id !== id),
        },
      }));
    },
  },

  vaultItemSelection: {
    selected: null,
    select(id) {
      set((state) => ({
        vaultItemSelection: {
          ...state.vaultItemSelection,
          selected:
            state.vaultItemData.list.find((item) => item.id === id) || null,
        },
      }));
    },
    unselect() {
      set((state) => ({
        vaultItemSelection: {
          ...state.vaultItemSelection,
          selected: null,
        },
      }));
    },
  },

  selectedDashboardVault: null,
  selectDashboardVault: (id) => set({ selectedDashboardVault: id }),

  getTotalMoneySavedFromVault: (vaultId) =>
    get()
      .vaultItemData.list.filter((item) => item.vaultId === vaultId)
      .reduce((acc, item) => acc + item.value, 0),
}));
