import { useTransactionBudgetStore } from "@/stores/useTransactionBudgetStore";
import { MdAdd } from "react-icons/md";

interface IBudgetListItemButtonProps {
  id: number;
  open: boolean
}

export default function BudgetListItemButton({ id }: IBudgetListItemButtonProps) {
  const select = useTransactionBudgetStore((s) => s.budgetSelection.select);

  return (
    <button
      className="flex items-center justify-center h-full w-full rounded-b-lg duration-300 ease-in-out bg-chetwode-blue-900 text-chetwode-blue-50 overflow-hidden group-hover:right-0 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-700 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-950 dark:hover:bg-chetwode-blue-700 dark:hover:text-chetwode-blue-50 dark:active:bg-chetwode-blue-800"
      title="Selecionar Orçamento"
      type="button"
      onClick={() => select(id)}
    >
      Selecionar Orçamento
      <MdAdd className="text-3xl" />
    </button>
  );
}
