import { create } from 'zustand';
import type { IMessage } from '@/interfaces/IMessage';
import type { IVault, IVaultItem } from '@/interfaces/IVault';
import type { IVaultCreateDTO, IVaultUpdateDTO } from '@/server/dto/vault.dto';
import type {
  IVaultItemCreateDTO,
  IVaultItemUpdateDTO,
} from '@/server/dto/vaultItem.dto';
import { showError } from '../helpers/showError';
import type { IListDataState } from '../interfaces/IDataState';
import type { IMethodsState } from '../interfaces/IMethodsState';
import type { ISelectionState } from '../interfaces/ISelectionState';
import { fetcher } from '../utils/fetcher';

type IVaultMethodsState = IMethodsState<
  IVaultCreateDTO,
  IVaultUpdateDTO,
  IVault
>;

interface IVaultState {
  vaultData: IListDataState<IVault>;
  vaultMethods: IVaultMethodsState;
  vaultSelection: ISelectionState<IVault>;

  setVaultData: (data: IListDataState<IVault>) => void;

  vaultItemData: IListDataState<IVaultItem>;
  vaultItemMethods: IMethodsState<
    IVaultItemCreateDTO,
    IVaultItemUpdateDTO,
    IVaultItem
  >;
  vaultItemSelection: ISelectionState<IVaultItem>;

  setVaultItemsData: (data: IListDataState<IVaultItem>) => void;

  selectedDashboardVault: number | null;
  selectDashboardVault: (id: number) => void;

  getTotalMoneySavedFromVault: (vaultId: number) => number;
}

const vaultFetcher = fetcher<IVault[] | IVault | null>('/api/vaults');
const vaultItemFetcher = fetcher<IVaultItem[] | IVaultItem | null>(
  '/api/vaultitems',
);

export const useVaultStore = create<IVaultState>((set, get) => ({
  vaultData: { list: [], fetched: false, loading: true },
  setVaultData: (data) => set({ vaultData: data }),

  vaultItemData: { list: [], fetched: false, loading: true },
  setVaultItemsData: (data) => set({ vaultItemData: data }),

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
      const res = (await vaultFetcher.post(vault)) as IMessage<IVault>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultData: {
          ...state.vaultData,
          list: [...state.vaultData.list, res.data as IVault],
        },
      }));
      return res;
    },
    update: async (id, vault) => {
      const res = (await vaultFetcher.put(id, vault)) as IMessage<IVault>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultData: {
          ...state.vaultData,
          list: state.vaultData.list.map((item) =>
            item.id === id ? (res.data as IVault) : item,
          ),
        },
      }));
      return res;
    },
    delete: async (id) => {
      const res = (await vaultFetcher.delete(id)) as IMessage<null>;
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
      return res;
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
      const res = (await vaultItemFetcher.post(item)) as IMessage<IVaultItem>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: [...state.vaultItemData.list, res.data as IVaultItem],
        },
      }));
      return res;
    },
    update: async (id, item) => {
      const res = (await vaultItemFetcher.put(
        id,
        item,
      )) as IMessage<IVaultItem>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: state.vaultItemData.list.map((item) =>
            item.id === id ? (res.data as IVaultItem) : item,
          ),
        },
      }));
      return res;
    },
    delete: async (id) => {
      const res = (await vaultItemFetcher.delete(id)) as IMessage<null>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        vaultItemData: {
          ...state.vaultItemData,
          list: state.vaultItemData.list.filter((item) => item.id !== id),
        },
      }));
      return res;
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
