import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';

interface IModalTransactionCategoryProps {
  transactionCategory: number | null;
  setTransactionCategory: (id: number) => void;
}

export default function ModalTransactionCategory({
  transactionCategory,
  setTransactionCategory,
}: IModalTransactionCategoryProps) {
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

  return (
    <>
      <h3 className='subsubtitle'>Categorias</h3>
      <ul className='flex flex-wrap gap-2'>
        {budgetList.length > 0 ? (
          budgetList.map((category) => (
            <li
              key={category.id}
              className={`flex-1 rounded-lg border-2 text-center duration-300 ease-in-out ${
                transactionCategory === category.id
                  ? 'bg-chetwode-blue-300 border-chetwode-blue-600 dark:bg-chetwode-blue-900 dark:border-chetwode-blue-950'
                  : 'bg-chetwode-blue-200 border-transparent dark:bg-chetwode-blue-800'
              }`}
            >
              <button
                type='button'
                className='w-full p-2 rounded-lg'
                onClick={() => setTransactionCategory(category.id)}
              >
                <p className='text-nowrap text-chetwode-blue-950 dark:text-chetwode-blue-50'>
                  {category.name}
                </p>
              </button>
            </li>
          ))
        ) : (
          <p className='italic text-center text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
            Você ainda não possui nenhuma Categoria
          </p>
        )}
      </ul>
    </>
  );
}
