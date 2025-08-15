export interface ISelectionState<T> {
  selected: T | null;
  select: (id: number) => void;
  unselect: () => void;
}
