export interface IGoal {
  name: string;
  targetAmount: number;
  deadline: Date | string | null;
  progress: "balance" | "vault";
  assignedVault: number | null;
  completed: boolean;
}
