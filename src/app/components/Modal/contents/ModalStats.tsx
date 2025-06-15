"use client";

import { statsComponentMap, StatType } from "@/app/data/statsComponentMap";
import { useStatsStore } from "@/app/stores/useStatsStore";

export default function ModalStats() {
  const { addStatToList } = useStatsStore();

  return (
    <>
      <ul className="grid grid-cols-4 gap-2">
        {Array.from(Object.keys(statsComponentMap)).map((keyName, index) => (
          <li key={index} className="rounded-lg bg-chetwode-blue-100">
            <button
              className="size-full p-2"
              onClick={() => addStatToList(keyName as StatType)}
            >
              <h3 className="text-lg text-center text-chetwode-blue-950">
                {statsComponentMap[keyName as StatType].title}
              </h3>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
