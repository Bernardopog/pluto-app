import {
  DashboardStatsHeader,
  DashboardStatsList,
} from "@/components/Dashboard/DashboardStats";

export default function DashboardStats() {
  return (
    <article id="dashboard-stats" className="base-card flex flex-col w-full">
      <DashboardStatsHeader />
      <DashboardStatsList />
    </article>
  );
}
