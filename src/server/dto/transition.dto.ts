export interface ITransactionCreateDTO {
  name: string;
  value: number;
  date: Date;
  categoryId: number;

  userId: number;
}

export interface ITransactionUpdateDTO {
  name: string;
  value: number;
  date: Date;
  categoryId: number;
}
