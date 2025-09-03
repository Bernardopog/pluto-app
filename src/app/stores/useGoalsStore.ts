import { IGoal } from "@/interfaces/IGoal";
import { create } from "zustand";

interface IGoalsStore {
  goal: IGoal | null;
  createGoal: (goal: IGoal) => void;
  completeGoal: () => void;
  cancelGoal: () => void;
}

export const useGoalsStore = create<IGoalsStore>((set) => ({
  goal: null,
  createGoal: (goal: IGoal) =>
    set(() => ({
      goal: goal,
    })),
  completeGoal: () => set(() => ({ goal: null })),
  cancelGoal: () => set(() => ({ goal: null })),
}));
