"use client";

import { useTransactionBudgetStore } from "@/app/stores/useTransactionBudgetStore";
import { useState } from "react";
import dynamic from "next/dynamic";

import { ApexOptions } from "apexcharts";
import TransactionChartController from "@/app/components/TransactionPage/TransactionChartController";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export type TransactionChartType =
  | "all"
  | "income"
  | "expense"
  | "budget-all"
  | "budget-income"
  | "budget-expense";

export default function TransactionChartPage() {
  const [passedDays, setPassedDays] = useState<number>(7);
  const [chartType, setChartType] = useState<TransactionChartType>("all");

  const transactionList = useTransactionBudgetStore(
    (s) => s.transactionData.list
  );
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

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

  const getTransactionOfLastDaysByBudget = (budgetId: number) => {
    const negativeValues = lastDays
      .map((date) =>
        transactionList
          .filter((txn) => txn.categoryId === budgetId)
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
          .filter((txn) => txn.categoryId === budgetId)
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

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      onItemClick: {
        toggleDataSeries: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: passedDays <= 10 || !chartType.includes("budget"),
    },
    xaxis: {
      categories: lastDaysFormatter.map((item) => item.date),
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val: number) => `R$ ${val.toFixed(2)}`.replace(".", ","),
      },
    },
  };

  const seriesBudgetsContructor = (type: "income" | "expense") => {
    if (type === "income") {
      const series = budgetList.map((bdgt) => ({
        name: bdgt.name,
        color: bdgt.color,
        data: [...getTransactionOfLastDaysByBudget(bdgt.id).positiveValues],
      }));
      return series;
    } else if (type === "expense") {
      const series = budgetList.map((bdgt) => ({
        name: bdgt.name,
        color: bdgt.color,
        data: [...getTransactionOfLastDaysByBudget(bdgt.id).negativeValues],
      }));
      return series;
    }
  };

  const baseSeries = [
    {
      name: "Receitas",
      data: positiveValues,
      color: "#4444df",
    },
    {
      name: "Despesas",
      data: negativeValues,
      color: "#df4444",
    },
  ];
  const incomeSeries = [baseSeries[0]];
  const expenseSeries = [baseSeries[1]];

  const incomeBudgetSeries = seriesBudgetsContructor("income");
  const expenseBudgetSeries = seriesBudgetsContructor("expense");

  let typeOfChart = null;
  switch (chartType) {
    case "all":
      typeOfChart = baseSeries;
      break;
    case "income":
      typeOfChart = incomeSeries;
      break;
    case "expense":
      typeOfChart = expenseSeries;
      break;
    case "budget-income":
      typeOfChart = incomeBudgetSeries;
      break;
    case "budget-expense":
      typeOfChart = expenseBudgetSeries;
      break;
    default:
      typeOfChart = baseSeries;
      break;
  }

  return (
    <div className="flex flex-col h-[calc(100vh-104px)]">
      <TransactionChartController
        {...{ chartType, setChartType, passedDays, setPassedDays }}
      />
      <div className="relative mx-auto w-9/10 h-full">
        <Chart
          height={"100%"}
          options={options}
          series={typeOfChart}
          type="bar"
        />
      </div>
    </div>
  );
}
