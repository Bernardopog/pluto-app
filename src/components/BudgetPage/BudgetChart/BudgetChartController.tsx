import Radio from "@/ui/Radio";
import { Dispatch, SetStateAction } from "react";

interface IBudgetChartControllerProps {
  chartToShow: "assigned" | "overlay" | "spend";
  setChartToShow: Dispatch<SetStateAction<"assigned" | "overlay" | "spend">>;
}

export default function BudgetChartController({
  chartToShow,
  setChartToShow,
}: IBudgetChartControllerProps) {
  return (
    <header className="flex justify-evenly">
      <Radio
        state={chartToShow === "assigned"}
        setState={() => setChartToShow("assigned")}
        name="chartType"
        id="chartType"
        label="Limite"
      />
      <Radio
        state={chartToShow === "overlay"}
        setState={() => setChartToShow("overlay")}
        name="chartType"
        id="chartType"
        label="Sobreposição"
      />
      <Radio
        state={chartToShow === "spend"}
        setState={() => setChartToShow("spend")}
        name="chartType"
        id="chartType"
        label="Gasto"
      />
    </header>
  );
}
