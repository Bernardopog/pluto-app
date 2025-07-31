export interface ITransactionCreateDTO {
  name: string;
  value: number;
  date: Date;
  categoryId: number;
}

export interface ITransactionUpdateDTO {
  name: string;
  value: number;
  date: Date;
  categoryId: number;
}
