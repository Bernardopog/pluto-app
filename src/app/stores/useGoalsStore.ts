import { create } from "zustand";

export interface IGoal {
  name: string;
  price: number;
  deadline: string | null;
  progress: "balance" | "vault";
  assignedVault: number | null;
}

interface IGoalsStore {
  goal: IGoal | null;
  createGoal: (goal: IGoal) => void;
  completeGoal: () => void;
}

export const useGoalsStore = create<IGoalsStore>((set) => ({
  goal: null,
  createGoal: (goal: IGoal) =>
    set(() => ({
      goal: goal,
    })),
  completeGoal: () => set(() => ({ goal: null })),
}));
