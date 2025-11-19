import type { IBudget } from '@/interfaces/IBudget';
import Checkbox from '@/ui/Checkbox';

interface IBudgetChartShowControllerProps {
  budgetList: IBudget[];
  excludedId: number[];
  removeFromExcluded: (id: number) => void;
  addToExcluded: (id: number) => void;
}

export default function BudgetChartShowController({
  budgetList,
  excludedId,
  removeFromExcluded,
  addToExcluded,
}: IBudgetChartShowControllerProps) {
  const budgetLength = budgetList.length;

  return (
    <div>
      <h3 className='subsubtitle'>Remover do Gráfico:</h3>
      <ul
        className={`gap-2 ${budgetLength > 5 ? 'grid grid-cols-2' : 'flex flex-col'}`}
      >
        {budgetList.map((bdgt) => (
          <li
            key={bdgt.id}
            className='rounded-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-800 text-sm'
          >
            <Checkbox
              label={bdgt.name}
              state={excludedId.includes(bdgt.id)}
              setState={() => {
                if (excludedId.includes(bdgt.id)) {
                  removeFromExcluded(bdgt.id);
                } else {
                  addToExcluded(bdgt.id);
                }
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
