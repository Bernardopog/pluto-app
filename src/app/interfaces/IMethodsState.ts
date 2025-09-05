export interface IMethodsState<T, U> {
  fetch: () => void;
  create: (item: T) => void;
  update: (id: number, item: U) => void;
  delete: (id: number) => void;
}

export interface IMethodsStateBasic<T> {
  fetch: () => void;
  create: (item: T) => void;
}
