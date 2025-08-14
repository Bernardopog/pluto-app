import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { MdAdd } from "react-icons/md";

export default function BudgetListItemButton({ id }: { id: number }) {
  const select = useTransactionBudgetStore((s) => s.budgetSelection.select);

  return (
    <button
      className="flex items-center justify-center h-full w-full rounded-b-lg duration-300 ease-in-out bg-chetwode-blue-900 text-chetwode-blue-50 group-hover:right-0 hover:brightness-95 active:brightness-75"
      title="Selecionar Orçamento"
      type="button"
      onClick={() => select(id)}
    >
      Selecionar Orçamento
      <MdAdd className="text-3xl" />
    </button>
  );
}
