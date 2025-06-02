import { moneyFormatter } from "@/app/utils/moneyFormatter";

interface IDashboardBudgetLegendProps {
  budget: { name: string; value: number; color: string }[];
  rest: number;
}

export default function DashboardBudgetLegend({
  budget,
  rest,
}: IDashboardBudgetLegendProps) {
  return (
    <ul className="grid grid-cols-1 mt-4 gap-2 font-medium text-chetwode-blue-950 md:grid-cols-2 lg:flex lg:flex-col">
      <li className="border-l-4 pl-2" style={{ borderColor: `#a9a9a9` }}>
        Renda Restante: {moneyFormatter(rest)}
      </li>
      {budget.map((budgetItem) => (
        <li
          key={budgetItem.name}
          className="border-l-4 pl-2"
          style={{ borderColor: `${budgetItem.color}` }}
        >
          {budgetItem.name}: {moneyFormatter(budgetItem.value)}
        </li>
      ))}
    </ul>
  );
}
