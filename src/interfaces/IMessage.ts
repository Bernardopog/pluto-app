export interface IMessage<T> {
  message: string;
  status: number;
  data?: T;
}
