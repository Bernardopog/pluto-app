"use client";

import { statsComponentMap, StatType } from "@/app/data/statsComponentMap";
import { useStatsStore } from "@/app/stores/useStatsStore";
import { MdClose } from "react-icons/md";

export default function ModalStats() {
  const addStatToList = useStatsStore((s) => s.addStatToList);
  const removeMany = useStatsStore((s) => s.clearManyInList);
  const statList = useStatsStore((s) => s.statList);

  return (
    <>
      <ul className="grid grid-cols-4 gap-2">
        {Array.from(Object.keys(statsComponentMap)).map((keyName, index) => (
          <li
            key={index}
            className={`relative rounded-lg duration-300 ease-in-out ${
              statList.includes(keyName as StatType)
                ? "bg-chetwode-blue-900 text-chetwode-blue-100 hover:bg-chetwode-blue-800 active:bg-chetwode-blue-700 dark:bg-chetwode-blue-200 dark:text-chetwode-blue-950 dark:hover:bg-chetwode-blue-300 dark:active:bg-chetwode-blue-400"
                : "bg-chetwode-blue-100 text-chetwode-blue-950 hover:bg-chetwode-blue-200 active:bg-chetwode-blue-300 dark:bg-chetwode-blue-700 dark:text-chetwode-blue-50 dark:hover:bg-chetwode-blue-600 dark:active:bg-chetwode-blue-500"
            }`}
          >
            {statList.includes(keyName as StatType) && (
              <button
                className={
                  "absolute p-0.5 rounded-lg bg-chetwode-blue-100 text-chetwode-blue-950 top-0 right-0 dark:bg-chetwode-blue-400"
                }
                onClick={() => removeMany(keyName as StatType)}
              >
                <MdClose />
              </button>
            )}
            <button
              className="size-full p-2"
              onClick={() => addStatToList(keyName as StatType)}
            >
              <h3 className="text-lg text-center">
                {statsComponentMap[keyName as StatType].title}
              </h3>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
