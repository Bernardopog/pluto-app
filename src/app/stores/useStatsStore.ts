import { create } from "zustand";
import { StatType } from "../data/statsComponentMap";
import { IItemDataState } from "../interfaces/IDataState";
import { IStats } from "@/interfaces/IStat";

interface IStatStore {
  statsData: IItemDataState<IStats>;
  statList: (StatType | null)[];

  completeGoal: () => void;
  cancelGoal: () => void;
  createGoal: () => void;

  setStatsData: (data: IItemDataState<IStats>) => void;
  setStatList: (statList: (StatType | null)[]) => void;
  addStatToList: (statKey: StatType) => void;
  removeStatFromList: (statIndex: number) => void;
}

export const useStatsStore = create<IStatStore>((set, get) => ({
  statsData: { item: null, fetched: false, loading: true },
  statList: [null, null, null],

  completeGoal: () =>
    set((state) => {
      if (!state.statsData.item) return {};
      const { completedGoals, totalGoals, failedGoals, ...rest } =
        state.statsData.item;
      return {
        statsData: {
          ...state.statsData,
          item: {
            ...rest,
            completedGoals: completedGoals + 1,
            totalGoals: totalGoals ?? 0,
            failedGoals: failedGoals ?? 0,
          },
        },
      };
    }),

  cancelGoal: () =>
    set((state) => {
      if (!state.statsData.item) return {};
      const { completedGoals, totalGoals, failedGoals, ...rest } =
        state.statsData.item;
      return {
        statsData: {
          ...state.statsData,
          item: {
            ...rest,
            completedGoals: completedGoals ?? 0,
            totalGoals: totalGoals ?? 0,
            failedGoals: failedGoals + 1,
          },
        },
      };
    }),

  createGoal: () =>
    set((state) => {
      if (!state.statsData.item) return {};
      const { completedGoals, totalGoals, failedGoals, ...rest } =
        state.statsData.item;
      return {
        statsData: {
          ...state.statsData,
          item: {
            ...rest,
            completedGoals: completedGoals ?? 0,
            totalGoals: totalGoals + 1,
            failedGoals: failedGoals ?? 0,
          },
        },
      };
    }),

  setStatsData: (data: IItemDataState<IStats>) => set({ statsData: data }),

  setStatList: (statList: (StatType | null)[]) => set({ statList }),
  addStatToList: (statKey: StatType) =>
    set((state) => {
      let inserted = false;

      const newStatList = state.statList.map((stat) => {
        if (stat === null && !inserted) {
          inserted = true;
          return statKey;
        }
        return stat;
      });

      const localStorage = window.localStorage;
      localStorage.setItem("statList", JSON.stringify(newStatList));
      return { statList: newStatList };
    }),
  removeStatFromList: (statIndex: number) => {
    set((state) => ({
      statList: state.statList.map((stat, index) =>
        index === statIndex ? null : stat
      ),
    }));
    const localStorage = window.localStorage;
    localStorage.setItem(
      "statList",
      JSON.stringify(
        get().statList.map((stat, index) => (index === statIndex ? null : stat))
      )
    );
  },
}));
