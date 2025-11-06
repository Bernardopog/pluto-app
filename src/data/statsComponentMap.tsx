import { ReactNode } from "react";
import {
  StatGoals,
  StatMoneySpent,
  StatSavedMoney,
} from "../components/Dashboard/DashboardStats/contents";

export type StatType =
  | "completedGoals"
  | "totalGoals"
  | "failedGoals"
  | "mostMoneySaved"
  | "mostMoneySpent";

type IStatsComponentMap = {
  [Key in StatType]: { component(): ReactNode; title: string };
};

export const statsComponentMap: IStatsComponentMap = {
  completedGoals: {
    component: () => (
      <StatGoals title="Metas Concluídas" type="completedGoals" />
    ),
    title: "Metas Concluídas",
  },
  totalGoals: {
    component: () => <StatGoals title="Metas Totais" type="totalGoals" />,
    title: "Metas Totais",
  },
  failedGoals: {
    component: () => <StatGoals title="Metas Falhadas" type="failedGoals" />,
    title: "Metas Falhadas",
  },
  mostMoneySaved: {
    component: () => <StatSavedMoney />,
    title: "Dinheiro Poupado",
  },
  mostMoneySpent: {
    component: () => <StatMoneySpent />,
    title: "Dinheiro Gasto",
  },
};
