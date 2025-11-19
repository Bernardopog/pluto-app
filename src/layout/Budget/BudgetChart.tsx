'use client';

import type { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import { IoClose, IoEllipsisHorizontal } from 'react-icons/io5';
import {
  BudgetChartAssigned,
  BudgetChartSpend,
} from '@/components/BudgetPage/BudgetChart';
import BudgetChartDropdown from '@/components/BudgetPage/BudgetChart/BudgetChartDropdown';
import type { IBudget } from '@/interfaces/IBudget';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';

export interface IBudgetChartProps {
  options: ApexOptions;
  budgetList: IBudget[];
  isOverlay: boolean;
  windowWidth: number;
}

export type ChartToShowType = 'assigned' | 'overlay' | 'spend';

export default function BudgetChart() {
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

  const [chartToShow, setChartToShow] = useState<ChartToShowType>('assigned');

  const [excludedId, setExcludedId] = useState<number[]>([]);

  const budgetListFiltered = budgetList.filter(
    (bdgt) => !excludedId.includes(bdgt.id),
  );

  const addToExcluded = (id: number) => {
    setExcludedId([...excludedId, id]);
  };
  const removeFromExcluded = (id: number) => {
    setExcludedId(excludedId.filter((item) => item !== id));
  };

  const options: ApexOptions = {
    chart: {
      type: 'polarArea',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    labels: budgetListFiltered.map((bdgt) => bdgt.name),
    colors: budgetListFiltered.map((bdgt) => bdgt.color),
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 0,
    },
  };

  const budgetListLength = budgetList.length;

  const [showChart, setShowChart] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setShowChart(width >= 720);
      setWindowWidth(width);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', () => handleResize);
    };
  }, []);

  return (
    <section
      id='budget-chart'
      className='base-card flex flex-col relative min-w-0 overflow-x-auto scrollbar-style scrollbar-thinner'
    >
      <h2 className='subtitle'>Gráfico</h2>
      <button
        type='button'
        className='base-btn absolute top-2 right-2'
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-label='Abrir menu do Gráfico'
        title='Abrir menu do Gráfico'
      >
        {isDropdownOpen ? <IoClose /> : <IoEllipsisHorizontal />}
      </button>
      <BudgetChartDropdown
        isDropdownOpen={isDropdownOpen}
        budgetListLength={budgetListLength}
        setChartToShow={setChartToShow}
        addToExcluded={addToExcluded}
        removeFromExcluded={removeFromExcluded}
        excludedId={excludedId}
        chartToShow={chartToShow}
        budgetList={budgetList}
      />
      {showChart ? (
        budgetListLength > 0 ? (
          <div className='flex justify-center items-center flex-1 relative mt-4'>
            {chartToShow !== 'spend' && (
              <BudgetChartAssigned
                budgetList={budgetListFiltered}
                options={options}
                isOverlay={chartToShow === 'overlay'}
                windowWidth={windowWidth}
              />
            )}
            {chartToShow === 'overlay' && (
              <BudgetChartSpend
                budgetList={budgetListFiltered}
                options={options}
                isOverlay={true}
                windowWidth={windowWidth}
              />
            )}
            {chartToShow === 'spend' && (
              <BudgetChartSpend
                budgetList={budgetListFiltered}
                options={options}
                isOverlay={false}
                windowWidth={windowWidth}
              />
            )}
          </div>
        ) : (
          <p className='flex items-center justify-center flex-1 font-bold text-lg italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
            Crie um orçamento para ver o gráfico...
          </p>
        )
      ) : (
        <p className='flex items-center justify-center flex-1 font-bold text-lg italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
          Acesse em um dispositivo com tela maior...
        </p>
      )}
    </section>
  );
}
