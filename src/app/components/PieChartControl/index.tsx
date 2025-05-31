import { PieChartType } from "@/app/layout/Dashboard/DashboardBudget";
import { Dispatch, SetStateAction } from "react";

interface IPieChartControlProps {
  state: PieChartType;
  setState: Dispatch<SetStateAction<PieChartType>>;
}

export default function PieChartControl({
  state,
  setState,
}: IPieChartControlProps) {
  const handleChartChange = (type: PieChartType) => setState(type);

  return (
    <div className="flex flex-col p-2 rounded-lg bg-chetwode-blue-200 text-chetwode-blue-900">
      <p className="font-medium text-center">Estilo de Gráfico</p>
      <div className="px-8 flex justify-between">
        <button
          className={`border py-1 px-2 rounded-lg ${
            state === "full" && "bg-chetwode-blue-300"
          }`}
          onClick={() => handleChartChange("full")}
        >
          Completo
        </button>
        <div className="w-0.5 h-8 bg-chetwode-blue-900/25"></div>
        <button
          className={`border py-1 px-2 rounded-lg ${
            state === "half" && "bg-chetwode-blue-300"
          }`}
          onClick={() => handleChartChange("half")}
        >
          Cortado
        </button>
      </div>
    </div>
  );
}
