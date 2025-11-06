import Checkbox from "@/ui/Checkbox";
import { IBudget } from "@/interfaces/IBudget";

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
  return (
    <div>
      <h3 className="subsubtitle">Remover do Gráfico:</h3>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {budgetList.map((bdgt) => (
          <li
            key={bdgt.id}
            className="rounded-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-800"
          >
            <Checkbox
              label={bdgt.name}
              state={excludedId.includes(bdgt.id) ? true : false}
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
