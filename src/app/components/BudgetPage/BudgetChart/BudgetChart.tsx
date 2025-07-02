"use client";

import { PolarArea } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import Checkbox from "@/app/ui/Checkbox";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function BudgetChart() {
  const { budgetList, getExpenses } = useTransactionBudgetStore();

  const [showLegend, setShowLegend] = useState<boolean>(true);

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

  const dataAssignedBudget = {
    labels: [...budgetListFiltered.map((bdgt) => bdgt.name)],
    datasets: [
      {
        label: "Limite",
        data: [...budgetListFiltered.map((bdgt) => bdgt.limit)],
        backgroundColor: [...budgetListFiltered.map((bdgt) => bdgt.color)],
      },
    ],
  };
  const dataSpendChart = {
    labels: [
      ...budgetList
        .filter((bdgt) => !excludedId.includes(bdgt.id))
        .map((bdgt) => bdgt.name),
    ],
    datasets: [
      {
        label: "Gasto",
        data: [
          ...budgetListFiltered.map((bdgt) => Math.abs(getExpenses(bdgt.id))),
        ],
        backgroundColor: [...budgetListFiltered.map((bdgt) => bdgt.color)],
      },
    ],
  };

  return (
    <section
      id="budget-chart"
      className="base-card flex flex-col min-w-0 overflow-x-auto scrollbar-style scrollbar-thinner"
    >
      <h2 className="subtitle">Gráfico</h2>
      <header className="flex justify-center">
        <button
          className="p-1 border rounded-lg text-chetwode-blue-900 bg-chetwode-blue-300 duration-300 ease-in-out"
          onClick={() => setShowLegend(!showLegend)}
        >
          Mesclar Gráficos
        </button>
      </header>
      <div className="flex flex-1 relative min-h-9/10">
        <div
          className={`flex-1 duration-700 ease-in-out ${
            showLegend
              ? "relative left-0 opacity-100"
              : "absolute left-1/2 -translate-x-1/2 top-0 opacity-50"
          }`}
        >
          <PolarArea
            data={dataAssignedBudget}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                r: {
                  max: Math.max(
                    ...budgetList.map((bdgt) => bdgt.limit),
                    ...budgetList.map((bdgt) => Math.abs(getExpenses(bdgt.id)))
                  ),
                },
              },
            }}
          />
        </div>
        <div
          className={`flex-1 duration-700 ease-in-out ${
            showLegend
              ? "relative right-0 opacity-100"
              : "absolute right-1/2 translate-x-1/2 top-0 opacity-50"
          }`}
        >
          <PolarArea
            data={dataSpendChart}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                r: {
                  max: Math.max(
                    ...budgetList.map((bdgt) => bdgt.limit),
                    ...budgetList.map((bdgt) => Math.abs(getExpenses(bdgt.id)))
                  ),
                },
              },
            }}
          />
        </div>
      </div>
      <div>
        <h3 className="subsubtitle">Remover do Gráfico:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3">
          {budgetList.map((bdgt) => (
            <Checkbox
              key={bdgt.id}
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
          ))}
        </ul>
      </div>
    </section>
  );
}
