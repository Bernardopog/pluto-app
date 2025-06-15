"use client";

import { useStatsStore } from "@/app/stores/useStatsStore";
import DashboardStatsItem from "./DashboardStatsItem";

export default function DashboardStatsList() {
  const { statList } = useStatsStore();

  return (
    <ul className="flex flex-col flex-1 mt-1 p-2 gap-2 rounded-lg bg-chetwode-blue-200 lg:flex-row xl:flex-col">
      {statList.map((keyName, index) => (
        <DashboardStatsItem
          key={index}
          keyName={keyName} // < -- Key to search in Component Map -- >
          index={index}
          isNull={keyName === null}
        />
      ))}
    </ul>
  );
}
