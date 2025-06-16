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
    <section className="flex justify-between mt-2 text-chetwode-blue-950">
      <button
        type="button"
        className={`p-1 rounded-lg border border-chetwode-blue-800 ${
          state === "expenses-limit"
            ? "bg-chetwode-blue-300"
            : "bg-chetwode-blue-100"
        }`}
        onClick={() => handleLegendChange("expenses-limit")}
      >
        Mostrar Gasto / Limite
      </button>
      <button
        type="button"
        className={`p-1 rounded-lg border border-chetwode-blue-800 ${
          state === "rest" ? "bg-chetwode-blue-300" : "bg-chetwode-blue-100"
        }`}
        onClick={() => handleLegendChange("rest")}
      >
        Mostrar Disponível
      </button>
    </section>
  );
}
