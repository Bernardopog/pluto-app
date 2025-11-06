import { IMessage } from "@/interfaces/IMessage";

export interface IMethodsState<T, U, R> {
  fetch: () => void;
  create: (item: T) => Promise<IMessage<R>>;
  update: (id: number, item: U) => Promise<IMessage<R>>;
  delete: (id: number) => Promise<IMessage<null>>;
}

export interface IMethodsStateBasic<T> {
  fetch: () => void;
  create: (item: T) => Promise<IMessage<T>>;
}
