'use client';

import { MdClose } from 'react-icons/md';
import { type StatType, statsComponentMap } from '@/data/statsComponentMap';
import { useStatsStore } from '@/stores/useStatsStore';

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
  const removeStatFromList = useStatsStore((s) => s.removeStatFromList);

  return (
    <li className='flex-1'>
      {!isNull && keyName ? (
        <article className='size-full min-h-32 relative p-1 border-2 rounded-lg bg-chetwode-blue-100 border-chetwode-blue-600/25 dark:bg-chetwode-blue-800'>
          {statsComponentMap[keyName].component()}
          <button
            type='button'
            className='absolute top-1 right-1 p-0.5 rounded-full text-xl shadow-sm bg-chetwode-blue-800 text-chetwode-blue-50'
            onClick={() => {
              removeStatFromList(index!);
            }}
            aria-label='Remover este item'
          >
            <MdClose />
          </button>
        </article>
      ) : (
        <div className='flex items-center justify-center min-h-32 h-full p-1 border-2 border-dashed rounded-lg bg-chetwode-blue-100 border-chetwode-blue-600/25 dark:bg-chetwode-blue-600'>
          <p className='italic text-3xl text-chetwode-blue-950/25 dark:text-chetwode-blue-50/50'>
            Vazio
          </p>
        </div>
      )}
    </li>
  );
}
