"use client";

import { statsComponentMap, StatType } from "@/app/data/statsComponentMap";
import { useStatsStore } from "@/app/stores/useStatsStore";
import { MdClose } from "react-icons/md";

interface IDashboardStatsItemProps {
  keyName: StatType | null;
  isNull: boolean;
  index: number;
}

export default function DashboardStatsItem({
  keyName,
  isNull,
  index,
}: IDashboardStatsItemProps) {
  const { removeStatFromList } = useStatsStore();

  return (
    <>
      {!isNull && keyName ? (
        <article className="min-h-32 relative flex-1 p-1 border-2 rounded-lg bg-chetwode-blue-100 border-chetwode-blue-600/25">
          {statsComponentMap[keyName].component()}
          <button
            type="button"
            className="absolute top-1 right-1 p-0.5 rounded-full text-xl shadow-sm bg-chetwode-blue-800 text-chetwode-blue-50"
            onClick={() => {
              console.log("remove?");
              removeStatFromList(index!);
            }}
          >
            <MdClose />
          </button>
        </article>
      ) : (
        <div className="flex items-center justify-center flex-1 min-h-32 p-1 border-2 border-dashed rounded-lg bg-chetwode-blue-100 border-chetwode-blue-600/25">
          <p className="italic text-3xl text-chetwode-blue-950/25">Vazio</p>
        </div>
      )}
    </>
  );
}
