"use client";

import { Dispatch, SetStateAction } from "react";
import { LegendType } from "./DashboardBudgetLegend";

interface IDashboardBudgetLegendControllerProps {
  state: LegendType;
  setState: Dispatch<SetStateAction<LegendType>>;
}

export default function DashboardBudgetLegendController({
  state,
  setState,
}: IDashboardBudgetLegendControllerProps) {
  const handleLegendChange = (legendType: LegendType) => {
    setState(legendType);
  };

  return (
    <section className="flex flex-col justify-between mt-2 gap-2 md:flex-row md:gap-0 lg:flex-col lg:gap-2">
      <button
        type="button"
        className={`p-1 rounded-lg border ${
          state === "expenses-limit"
            ? "bg-chetwode-blue-950 text-chetwode-blue-50 border-chetwode-blue-950"
            : "bg-chetwode-blue-50 text-chetwode-blue-950 border-chetwode-blue-800 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-950 dark:border-chetwode-blue-950"
        }`}
        onClick={() => handleLegendChange("expenses-limit")}
      >
        Mostrar Gasto / Limite
      </button>
      <button
        type="button"
        className={`p-1 rounded-lg border border-chetwode-blue-800 ${
          state === "rest"
            ? "bg-chetwode-blue-950 text-chetwode-blue-50 border-chetwode-blue-950"
            : "bg-chetwode-blue-50 text-chetwode-blue-950 border-chetwode-blue-800 dark:bg-chetwode-blue-600 dark:text-chetwode-blue-950 dark:border-chetwode-blue-950"
        }`}
        onClick={() => handleLegendChange("rest")}
      >
        Mostrar Disponível
      </button>
    </section>
  );
}
