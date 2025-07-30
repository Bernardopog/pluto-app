export interface IBudgetCreateDTO {
  name: string;
  color: string;
  limit: number;

  userId: number;
}

export interface IBudgetUpdateDTO {
  name: string;
  color: string;
  limit: number;
}
