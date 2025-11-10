export interface IGoalCreateDTO {
  name: string;
  targetAmount: number;
  deadline: Date | string | null;
  progress: 'balance' | 'vault';
  assignedVault: number | null;
}

export interface IGoalUpdateDTO {
  assignedVault: number;
}
