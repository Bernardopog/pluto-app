import { moneyFormatter } from "@/utils/moneyFormatter"
import { MdWarning } from "react-icons/md"

interface IDashboardBudgetListItemProps {
  id: number,
  color: string,
  name: string,
  limit: number,
  expense: number
  rest: number
  typeOfLegend: "expenses-limit" | "rest"
}

export default function DashboardBudgetListItem({id, color, name, limit, expense, rest,typeOfLegend}:IDashboardBudgetListItemProps){

  const outOfLimit = Math.abs(expense) > limit

  return (
    <li
      key={id}
      className="border border-l-6 p-2 rounded-r-lg text-lg border-chetwode-blue-950/25 dark:border-chetwode-blue-50/25 md:border-l-4 md:text-base"
      style={{ borderLeftColor: `${color}` }}
    >
      {name}:{" "}
      {typeOfLegend === "expenses-limit" ? (
        <span>
          {moneyFormatter(Math.abs(expense))}
          <span className="inline-flex items-center gap-2 text-chetwode-blue-950/60 dark:text-chetwode-blue-50/60">
            {" "}
            /{moneyFormatter(limit)}
            {outOfLimit && (
              <MdWarning className="text-xl text-red-600/75 dark:text-red-400/75" />
            )}
          </span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">
          {moneyFormatter(rest)}{" "}
          <span>
            {rest < 0 && <MdWarning className="text-xl text-red-600/75 dark:text-red-400/75" />}
          </span>
        </span>
      )}
    </li>
  )
}