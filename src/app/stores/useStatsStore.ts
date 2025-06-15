import { create } from "zustand";
import { StatType } from "../data/statsComponentMap";

interface IStatStore {
  statList: (StatType | null)[];
  addStatToList: (statKey: StatType) => void;
  removeStatFromList: (statIndex: number) => void;
}

export const useStatsStore = create<IStatStore>((set) => ({
  statList: [null, null, null],
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

      return { statList: newStatList };
    }),
  removeStatFromList: (statIndex: number) =>
    set((state) => ({
      statList: state.statList.map((stat, index) =>
        index === statIndex ? null : stat
      ),
    })),
}));
