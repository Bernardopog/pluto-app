import { useStatsStore } from "@/app/stores/useStatsStore";

interface IStatGoalsProps {
  title: string;
  type: "completedGoals" | "totalGoals" | "failedGoals";
}

export default function StatGoals({ title, type }: IStatGoalsProps) {
  const goalStats = useStatsStore((s) => s.statsData.item);

  return (
    <>
      <h3 className="subsubtitle">{title}</h3>
      {goalStats && <p className="stat-result">{goalStats[type]}</p>}
    </>
  );
}
