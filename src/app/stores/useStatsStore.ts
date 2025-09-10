import { create } from "zustand";
import { StatType } from "../data/statsComponentMap";

interface IStatStore {
  statList: (StatType | null)[];
  setStatList: (statList: (StatType | null)[]) => void;
  addStatToList: (statKey: StatType) => void;
  removeStatFromList: (statIndex: number) => void;
}

export const useStatsStore = create<IStatStore>((set, get) => ({
  statList: [null, null, null],
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
