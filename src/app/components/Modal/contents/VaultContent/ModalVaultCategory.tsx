import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";

interface IModalVaultCategoryProps {
  vaultItemBudgetAssignedId: number | null;
  setVaultItemBudgetAssignedId: (id: number) => void;
}

export default function ModalVaultCategory({
  vaultItemBudgetAssignedId,
  setVaultItemBudgetAssignedId,
}: IModalVaultCategoryProps) {
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

  return (
    <>
      <p className="mt-2 text-chetwode-blue-950 dark:text-chetwode-blue-50">
        Selecione qual categoria deve receber o item
      </p>
      <ul className="grid grid-cols-4 gap-4">
        {budgetList.map((bdgt) => (
          <li
            key={bdgt.id}
            style={{ borderLeftColor: bdgt.color }}
            className={`border-l-8 rounded-lg duration-300 ease-in-out ${
              bdgt.id === vaultItemBudgetAssignedId
                ? "bg-chetwode-blue-900 text-chetwode-blue-100 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-700 dark:bg-chetwode-blue-700"
                : "bg-chetwode-blue-200 text-chetwode-blue-950 hover:bg-chetwode-blue-300 active:bg-chetwode-blue-400"
            }`}
          >
            <button
              type="button"
              className="flex items-center justify-between w-full p-2 rounded-lg"
              onClick={() => setVaultItemBudgetAssignedId(bdgt.id)}
            >
              {bdgt.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
