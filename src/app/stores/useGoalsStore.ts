import { IGoal } from "@/interfaces/IGoal";
import { create } from "zustand";
import { fetcher } from "@/app/utils/fetcher";
import { showError } from "../helpers/showError";
import { IMethodsStateBasic } from "../interfaces/IMethodsState";
import { IGoalCreateDTO } from "@/server/dto/goal.dto";
import { IItemDataState } from "../interfaces/IDataState";

interface IGoalMethodsState extends IMethodsStateBasic<IGoalCreateDTO> {
  complete: () => void;
  cancel: () => void;
  reassign: (newVaultId: number) => void;
}

interface IGoalsStore {
  goalData: IItemDataState<IGoal>;
  setGoalData: (data: {
    item: IGoal | null;
    fetched: boolean;
    loading: boolean;
  }) => void;

  goalMethods: IGoalMethodsState;
}

const goalFetcher = fetcher<IGoal | null>(`/api/goals`);

export const useGoalsStore = create<IGoalsStore>((set) => ({
  goalData: { item: null, fetched: false, loading: true },
  setGoalData: (data) => set({ goalData: data }),

  goalMethods: {
    fetch: async () => {
      const res = await goalFetcher.get();
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as IGoal,
          fetched: true,
          loading: false,
        },
      }));
    },
    create: async (goal: IGoalCreateDTO) => {
      const res = await goalFetcher.post(goal);
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as null,
          fetched: true,
          loading: false,
        },
      }));
    },
    complete: async () => {
      const res = await goalFetcher.finishGoal("complete");
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as null,
          fetched: true,
          loading: false,
        },
      }));
    },
    cancel: async () => {
      const res = await goalFetcher.finishGoal("cancel");
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as IGoal | null,
          fetched: true,
          loading: false,
        },
      }));
    },
    reassign: async (newVaultId) => {
      const res = await goalFetcher.reassign(newVaultId);
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as IGoal,
          fetched: true,
          loading: false,
        },
      }));
    },
  },
}));
