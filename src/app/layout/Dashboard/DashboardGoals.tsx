import {
  DashboardGoalsSelect,
  DashboardGoalsSelectedGoal,
} from "@/app/components/Dashboard/DashboardGoals";

export default function DashboardGoals() {
  return (
    <article id="dashboard-goals" className="base-card flex flex-col">
      <header className="flex justify-between">
        <h2 className="sub-title">Objetivo</h2>
        <DashboardGoalsSelect />
      </header>
      <DashboardGoalsSelectedGoal />
    </article>
  );
}
