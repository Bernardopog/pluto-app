export interface IGoalCreateDTO {
  name: string;
  targetAmount: number;
  deadline: Date | string | null;
  progress: "balance" | "vault";
  assignedVault: number | null;
}
