import { IBudget } from "@/app/stores/useTransactionBudgetStore";
import { moneyFormatter } from "@/app/utils/moneyFormatter";
import Link from "next/link";
import { MdWarning } from "react-icons/md";
import { BudgetListItemTxnHistory, BudgetListItemActions } from "./";

interface IBudgetListItemProps extends IBudget {
  budgetLimit: number;
  expense: number;
}

export default function BudgetListItem({
  id,
  name,
  color,
  limit,
  budgetLimit,
  expense,
}: IBudgetListItemProps) {
  const formatColor = (
    color: string
  ): { type: "HEX" | "HSL" | "RGB"; colorWithAlpha: string | string[] } => {
    if (color.includes("#")) {
      let formattedHex: string = "";
      formattedHex = color.length >= 6 ? `${color}80` : `${color}8`;
      return { type: "HEX", colorWithAlpha: formattedHex };
    }
    if (color.includes("hsl")) {
      let formattedHsl: string[] = [];
      formattedHsl = color
        .replace("hsl(", "")
        .replace(")", "")
        .replaceAll(" ", "")
        .split(",");
      return {
        type: "HSL",
        colorWithAlpha: `hsla(${formattedHsl?.join(",")}, 0.5)`,
      };
    }
    if (color.includes("rgb")) {
      let formattedRgb: string[] = [];
      formattedRgb = color
        .replace("rgb(", "")
        .replace(")", "")
        .replaceAll(" ", "")
        .split(",");
      return { type: "RGB", colorWithAlpha: `rgba(${formattedRgb}, 0.5)` };
    }

    return { type: "HEX", colorWithAlpha: "#0000" };
  };

  const dataColor = formatColor(color);

  return (
    <li key={id} className="group flex flex-col items-center">
      <section
        style={{
          backgroundColor: `${dataColor.colorWithAlpha}`,
          borderColor: `${color}`,
        }}
        className="group flex flex-col relative w-full p-2 rounded-lg border-2"
      >
        <h3 className="subsubtitle inline-flex justify-between items-center pl-2 rounded-lg bg-chetwode-blue-100">
          Orçamento: {name}
          {Math.abs(expense) >= limit && (
            <span
              title="Limite excedido"
              className="flex items-center justify-center h-full w-8 rounded-r-lg bg-red-400 text-red-950"
            >
              <MdWarning />
            </span>
          )}
        </h3>
        <div className="flex text-star-dust-950">
          <p className="flex-1 inline-block mt-2 font-semibold">
            <span className="font-bold text-2xl">
              R$ {moneyFormatter(Math.abs(expense)).replace("R$", "")}
            </span>{" "}
            / {moneyFormatter(budgetLimit).replace("R$", "")}
          </p>
          <Link
            className="flex self-end font-semibold"
            href={`/transaction?category=${id}`}
          >
            Ver transações de {name}
          </Link>
        </div>
        <BudgetListItemTxnHistory id={id} />
      </section>
      <BudgetListItemActions id={id} />
    </li>
  );
}
