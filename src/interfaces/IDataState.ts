interface IDataState {
  loading: boolean;
  fetched: boolean;
}

export interface IListDataState<T> extends IDataState {
  list: T[];
}

export interface IItemDataState<T> extends IDataState {
  item: T | null;
}
