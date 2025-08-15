"use client";

import { useState } from "react";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import Checkbox from "@/app/ui/Checkbox";
import {
  BudgetChartAssigned,
  BudgetChartSpend,
} from "@/app/components/BudgetPage/BudgetChart";
import { ApexOptions } from "apexcharts";
import { IBudget } from "@/interfaces/IBudget";
import Radio from "@/app/ui/Radio";

export interface IBudgetChartProps {
  options: ApexOptions;
  budgetList: IBudget[];
  isOverlay: boolean;
}

export default function BudgetChart() {
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

  const [chartToShow, setChartToShow] = useState<
    "assigned" | "overlay" | "spend"
  >("assigned");

  const [excludedId, setExcludedId] = useState<number[]>([]);

  const budgetListFiltered = budgetList.filter(
    (bdgt) => !excludedId.includes(bdgt.id)
  );

  const addToExcluded = (id: number) => {
    setExcludedId([...excludedId, id]);
  };
  const removeFromExcluded = (id: number) => {
    setExcludedId(excludedId.filter((item) => item !== id));
  };

  const options: ApexOptions = {
    chart: {
      type: "polarArea",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    labels: budgetListFiltered.map((bdgt) => bdgt.name),
    colors: budgetListFiltered.map((bdgt) => bdgt.color),
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 0,
    },
  };

  return (
    <section
      id="budget-chart"
      className="base-card flex flex-col min-w-0 overflow-x-auto scrollbar-style scrollbar-thinner"
    >
      <h2 className="subtitle">Gráfico</h2>
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
      <div className="flex justify-center items-center flex-1 relative min-h-9/10">
        {chartToShow !== "spend" && (
          <BudgetChartAssigned
            budgetList={budgetListFiltered}
            options={options}
            isOverlay={chartToShow === "overlay"}
          />
        )}
        {chartToShow === "overlay" && (
          <BudgetChartSpend
            budgetList={budgetListFiltered}
            options={options}
            isOverlay={true}
          />
        )}
        {chartToShow === "spend" && (
          <BudgetChartSpend
            budgetList={budgetListFiltered}
            options={options}
            isOverlay={false}
          />
        )}
      </div>
      <div>
        <h3 className="subsubtitle">Remover do Gráfico:</h3>
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {budgetList.map((bdgt) => (
            <li key={bdgt.id} className="rounded-lg bg-chetwode-blue-200">
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
    </section>
  );
}
