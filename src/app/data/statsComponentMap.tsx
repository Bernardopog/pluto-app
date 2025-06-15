import { ReactNode } from "react";
import { moneyFormatter } from "../utils/moneyFormatter";

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
      <>
        <h3 className="subsubtitle">Metas Concluídas</h3>
        <p className="stat-result">5</p>
      </>
    ),
    title: "Metas Concluídas",
  },
  totalGoals: {
    component: () => (
      <>
        <h3 className="subsubtitle">Metas Total</h3>
        <p className="stat-result">7</p>
      </>
    ),
    title: "Metas Total",
  },
  failedGoals: {
    component: () => (
      <>
        <h3 className="subsubtitle">Metas Falhadas</h3>
        <p className="stat-result">2</p>
      </>
    ),
    title: "Metas Falhadas",
  },
  mostMoneySaved: {
    component: () => (
      <>
        <h3 className="subsubtitle">Dinheiro Poupado</h3>
        <p className="stat-result">{moneyFormatter(2400)}</p>
      </>
    ),
    title: "Dinheiro Poupado",
  },
  mostMoneySpent: {
    component: () => (
      <>
        <h3 className="subsubtitle">Dinheiro Gasto</h3>
        <p className="stat-result">{moneyFormatter(500)}</p>
      </>
    ),
    title: "Dinheiro Gasto",
  },
};
