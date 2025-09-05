import {
  DashboardGoalsController,
  DashboardGoalsCurrentGoal,
} from "@/app/components/Dashboard/DashboardGoals";

export default function DashboardGoals() {
  return (
    <article id="dashboard-goals" className="base-card flex flex-col">
      <header className="flex justify-between">
        <h2 className="subtitle">Objetivo</h2>
        <DashboardGoalsController />
      </header>
      <DashboardGoalsCurrentGoal />
    </article>
  );
}
