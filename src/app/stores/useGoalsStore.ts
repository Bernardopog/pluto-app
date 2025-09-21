import { IGoal } from "@/interfaces/IGoal";
import { create } from "zustand";
import { fetcher } from "@/app/utils/fetcher";
import { showError } from "../helpers/showError";
import { IMethodsStateBasic } from "../interfaces/IMethodsState";
import { IGoalCreateDTO } from "@/server/dto/goal.dto";
import { IItemDataState } from "../interfaces/IDataState";
import { IMessage } from "@/interfaces/IMessage";

interface IGoalMethodsState extends IMethodsStateBasic<IGoalCreateDTO> {
  complete: () => Promise<IMessage<null>>;
  cancel: () => Promise<IMessage<null>>;
  reassign: (newVaultId: number) => Promise<IMessage<IGoal>>;
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
      const res = (await goalFetcher.post(goal)) as IMessage<IGoal>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as IGoal,
          fetched: true,
          loading: false,
        },
      }));
      return res;
    },
    complete: async () => {
      const res = (await goalFetcher.finishGoal("complete")) as IMessage<null>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as null,
          fetched: true,
          loading: false,
        },
      }));
      return res;
    },
    cancel: async () => {
      const res = (await goalFetcher.finishGoal("cancel")) as IMessage<null>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as IGoal | null,
          fetched: true,
          loading: false,
        },
      }));
      return res;
    },
    reassign: async (newVaultId) => {
      const res = (await goalFetcher.reassign(newVaultId)) as IMessage<IGoal>;
      if (res.status >= 400) showError(res);
      set((state) => ({
        goalData: {
          ...state.goalData,
          item: res.data as IGoal,
          fetched: true,
          loading: false,
        },
      }));
      return res;
    },
  },
}));
