"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { Dispatch, SetStateAction, useState } from "react";
import Select from "@/app/ui/Select";
import Input from "@/app/ui/Input";
import { MdCalendarToday } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TransactionChartPage() {
  const [passedDays, setPassedDays] = useState<number>(7);
  const [chartType, setChartType] = useState<"all" | "income" | "expenses">(
    "all"
  );

  const { transactionData } = useTransactionBudgetStore();
  const transactionList = transactionData.list;

  const getLastDays = (lastDays: number) => {
    const days = [];
    const today = new Date();

    for (let i = lastDays; i >= 0; i--) {
      const day = new Date();
      day.setDate(today.getDate() - i);
      days.push(day.toISOString().split("T")[0]);
    }

    return days;
  };
  const lastDays = getLastDays(passedDays);

  const getTransactionOfLastDays = () => {
    const negativeValues = lastDays
      .map((date) =>
        transactionList
          .filter((txn) => txn.value < 0)
          .filter(
            (txn) => new Date(txn.date).toISOString().split("T")[0] === date
          )
          .reduce((acc, txn) => acc + txn.value, 0)
      )
      .map((value) => Math.abs(value));

    const positiveValues = lastDays
      .map((date) =>
        transactionList
          .filter((txn) => txn.value > 0)
          .filter(
            (txn) => new Date(txn.date).toISOString().split("T")[0] === date
          )
          .reduce((acc, txn) => acc + txn.value, 0)
      )
      .map((value) => value);

    return { negativeValues, positiveValues };
  };

  const { negativeValues, positiveValues } = getTransactionOfLastDays();

  const transfromDaysToWeekDays = (days: number) => {
    switch (days) {
      case 0:
        return "Dom";
      case 1:
        return "Seg";
      case 2:
        return "Ter";
      case 3:
        return "Qua";
      case 4:
        return "Qui";
      case 5:
        return "Sex";
      case 6:
        return "Sáb";
    }
  };

  const lastDaysFormatter = lastDays.map((date: string) => {
    const day = new Date(date + "T00:00:00").getDay();
    return { weekDay: transfromDaysToWeekDays(day), date };
  });

  const data = {
    labels: lastDaysFormatter.map((item) => `${item.weekDay} / ${item.date}`),
    datasets: [
      {
        label: "Gasto Total no Dia",
        data: negativeValues,
        backgroundColor: "#df4444",
        categoryPercentage: 0.5,
        hoverBackgroundColor: "#df8888",
        borderWidth: 1,
      },
      {
        label: "Receita Total no Dia",
        data: positiveValues,
        backgroundColor: "#4444df",
        categoryPercentage: 0.5,
        hoverBackgroundColor: "#8888df",
        borderWidth: 1,
      },
    ],
  };

  const incomeData = { ...data, datasets: [data.datasets[1]] };

  const expenseData = { ...data, datasets: [data.datasets[0]] };

  return (
    <div className="flex flex-col h-[calc(100vh-104px)]">
      <div className="self-end flex flex-col min-w-72 w-1/5 gap-2">
        <Input
          type="number"
          inputType="decorated"
          icon={<MdCalendarToday />}
          label="Dias"
          name="days"
          id="days"
          state={passedDays}
          setState={setPassedDays}
          minLimit={4}
          maxLimit={24}
          step="1"
        />
        <Select
          list={[
            { id: "all", name: "Todos", value: "all" },
            { id: "income", name: "Receitas", value: "income" },
            { id: "expenses", name: "Despesas", value: "expenses" },
          ]}
          state={chartType}
          setState={setChartType as Dispatch<SetStateAction<string | number>>}
          className="z-30"
        />
      </div>
      <div className="relative mx-auto w-9/10 min-h-1/2">
        <Bar
          options={{ maintainAspectRatio: false, responsive: true }}
          data={
            chartType === "all"
              ? data
              : chartType === "income"
              ? incomeData
              : expenseData
          }
        />
      </div>
    </div>
  );
}
