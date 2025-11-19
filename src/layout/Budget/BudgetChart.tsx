'use client';

import type { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import {
  BudgetChartAssigned,
  BudgetChartController,
  BudgetChartShowController,
  BudgetChartSpend,
} from '@/components/BudgetPage/BudgetChart';
import type { IBudget } from '@/interfaces/IBudget';
import { useTransactionBudgetStore } from '@/stores/useTransactionBudgetStore';

export interface IBudgetChartProps {
  options: ApexOptions;
  budgetList: IBudget[];
  isOverlay: boolean;
}

export default function BudgetChart() {
  const budgetList = useTransactionBudgetStore((s) => s.budgetData.list);

  const [chartToShow, setChartToShow] = useState<
    'assigned' | 'overlay' | 'spend'
  >('assigned');

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

  useEffect(() => {
    if (window.innerWidth >= 720) {
      setShowChart(true);
    }

    window.addEventListener('resize', () => {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      setShowChart(width >= 720);
    });

    return () => {
      window.removeEventListener('resize', () => {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        setShowChart(width >= 720);
      });
    }
  }, []);

  return (
    <section
      id='budget-chart'
      className='base-card flex flex-col min-w-0 overflow-x-auto scrollbar-style scrollbar-thinner'
    >
      <h2 className='subtitle'>Gráfico</h2>
      {showChart ? <>
        {budgetListLength > 0 && (
          <BudgetChartController
            chartToShow={chartToShow}
            setChartToShow={setChartToShow}
          />
        )}
        {budgetListLength > 0 ? (
          <div className='flex justify-center items-center flex-1 relative min-h-9/10 mt-16'>
            {chartToShow !== 'spend' && (
              <BudgetChartAssigned
                budgetList={budgetListFiltered}
                options={options}
                isOverlay={chartToShow === 'overlay'}
              />
            )}
            {chartToShow === 'overlay' && (
              <BudgetChartSpend
                budgetList={budgetListFiltered}
                options={options}
                isOverlay={true}
              />
            )}
            {chartToShow === 'spend' && (
              <BudgetChartSpend
                budgetList={budgetListFiltered}
                options={options}
                isOverlay={false}
              />
            )}
          </div>
        ) : (
          <p className='flex items-center justify-center flex-1 font-bold text-lg italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
            Crie um orçamento para ver o gráfico...
          </p>
        )}
        {budgetListLength > 0 && (
          <BudgetChartShowController
            addToExcluded={addToExcluded}
            budgetList={budgetList}
            excludedId={excludedId}
            removeFromExcluded={removeFromExcluded}
          />
        )}
      </> : (
        <p className='flex items-center justify-center flex-1 font-bold text-lg italic text-chetwode-blue-950/75 dark:text-chetwode-blue-50/75'>
          Acesse em um dispositivo com tela maior...
        </p>
      )}
    </section>
  );
}
