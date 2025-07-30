export interface IResult<T> {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
}
