'use client';

import { useEffect } from 'react';
import { useStatsStore } from '@/stores/useStatsStore';
import DashboardStatsItem from './DashboardStatsItem';

export default function DashboardStatsList() {
  const statList = useStatsStore((s) => s.statList);
  const setStatList = useStatsStore((s) => s.setStatList);

  useEffect(() => {
    const localStorage = window.localStorage;
    const statList = localStorage.getItem('statList');
    if (statList) setStatList(JSON.parse(statList));
  }, [setStatList]);

  return (
    <ul className='flex flex-col flex-1 mt-1 p-2 gap-2 rounded-lg bg-chetwode-blue-200 dark:bg-chetwode-blue-950 lg:flex-row xl:flex-col'>
      {statList.map((keyName, index) => (
        <DashboardStatsItem
          // biome-ignore lint/suspicious/noArrayIndexKey: <Static list>
          key={index}
          keyName={keyName} // < -- Key to search in Component Map -- >
          index={index}
          isNull={keyName === null}
        />
      ))}
    </ul>
  );
}
