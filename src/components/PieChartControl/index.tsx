import { PieChartType } from "@/layout/Dashboard/DashboardBudget";
import Checkbox from "@/ui/Checkbox";
import { Dispatch, SetStateAction } from "react";
import { MdBarChart, MdPieChart } from "react-icons/md";

interface IPieChartControlProps {
  chartType: "pie" | "bar";
  setChartType: Dispatch<SetStateAction<"pie" | "bar">>;
  pieChartType: PieChartType;
  setPieChartType: Dispatch<SetStateAction<PieChartType>>;
  showRest: boolean;
  setShowRest: Dispatch<SetStateAction<boolean>>;
}

export default function PieChartControl({
  chartType,
  setChartType,
  pieChartType,
  setPieChartType,
  showRest,
  setShowRest,
}: IPieChartControlProps) {
  const handleChartChange = (type: "pie" | "bar") => {
    setChartType(type);
  };

  return (
    <div className="flex flex-col p-2 rounded-lg bg-chetwode-blue-200 text-chetwode-blue-900 dark:bg-chetwode-blue-800 dark:text-chetwode-blue-100">
      <p className="font-medium text-center">Tipo de Gráfico:</p>

      <div className="flex justify-between px-2 gap-2">
        <button
          type="button"
          className={`flex flex-1 items-center justify-center py-1 px-2 border rounded-lg gap-2 text-2xl ${
            chartType === "pie"
              ? "bg-chetwode-blue-950 text-chetwode-blue-50"
              : "bg-chetwode-blue-600 text-chetwode-blue-950"
          }`}
          onClick={() => handleChartChange("pie")}
        >
          <MdPieChart /> <span className="text-base">Pizza</span>
        </button>
        <button
          type="button"
          className={`flex flex-1 items-center justify-center py-1 px-2 border rounded-lg gap-2 text-2xl ${
            chartType === "bar"
              ? "bg-chetwode-blue-950 text-chetwode-blue-50"
              : "bg-chetwode-blue-600 text-chetwode-blue-950"
          }`}
          onClick={() => handleChartChange("bar")}
        >
          <MdBarChart /> <span className="text-base">Barra</span>
        </button>
      </div>

      {chartType === "pie" && (
        <>
          <p className="mt-2 font-medium text-center">
            Tipo de Gráfico de Pizza:
          </p>

          <div className="px-2 flex justify-between gap-2">
            <button
              type="button"
              className={`flex flex-1 items-center justify-center py-1 px-2 border rounded-lg gap-2 text-2xl ${
                pieChartType === "full"
                  ? "bg-chetwode-blue-950 text-chetwode-blue-50"
                  : "bg-chetwode-blue-600 text-chetwode-blue-950"
              }`}
              onClick={() => setPieChartType("full")}
            >
              <span className="text-base">Completo</span>
            </button>
            <button
              type="button"
              className={`flex flex-1 items-center justify-center py-1 px-2 border rounded-lg gap-2 text-2xl ${
                pieChartType === "half"
                  ? "bg-chetwode-blue-950 text-chetwode-blue-50"
                  : "bg-chetwode-blue-600 text-chetwode-blue-950"
              }`}
              onClick={() => setPieChartType("half")}
            >
              <span className="text-base">Metade</span>
            </button>
          </div>
          <div className="mt-2 px-2">
            <Checkbox
              state={showRest}
              setState={setShowRest}
              label="Mostrar Restante"
            />
          </div>
        </>
      )}
    </div>
  );
}
