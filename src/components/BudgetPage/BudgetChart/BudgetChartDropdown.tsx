import type { Dispatch, SetStateAction } from 'react';
import Inert from '@/components/Inert';
import type { IBudget } from '@/interfaces/IBudget';
import type { ChartToShowType } from '@/layout/Budget/BudgetChart';
import Divider from '@/ui/Divider';
import BudgetChartController from './BudgetChartController';
import BudgetChartShowController from './BudgetChartShowController';

interface IBudgetChartDropdownProps {
  isDropdownOpen: boolean;
  budgetListLength: number;
  chartToShow: ChartToShowType;
  setChartToShow: Dispatch<SetStateAction<ChartToShowType>>;
  addToExcluded: (id: number) => void;
  removeFromExcluded: (id: number) => void;
  budgetList: IBudget[];
  excludedId: number[];
}

export default function BudgetChartDropdown({
  isDropdownOpen,
  budgetListLength,
  chartToShow,
  setChartToShow,
  addToExcluded,
  removeFromExcluded,
  budgetList,
  excludedId,
}: IBudgetChartDropdownProps) {
  return (
    <Inert
      isVisible={isDropdownOpen}
      className={`absolute top-10 right-2 z-30 bg-chetwode-blue-200 text-chetwode-blue-950 duration-300 ease-in-out dark:bg-chetwode-blue-800 ${
        isDropdownOpen
          ? 'w-60 min-h-48 mt-1 p-2 px-4 rounded-lg shadow-md overflow-y-auto scrollbar-thinner scrollbar-style'
          : 'min-h-0 h-0 w-0 overflow-hidden'
      }`}
    >
      <div className='flex flex-col gap-2'>
        {budgetListLength > 0 && (
          <BudgetChartController
            chartToShow={chartToShow}
            setChartToShow={setChartToShow}
          />
        )}
        <Divider direction='horizontal' />
        {budgetListLength > 0 && (
          <BudgetChartShowController
            addToExcluded={addToExcluded}
            budgetList={budgetList}
            excludedId={excludedId}
            removeFromExcluded={removeFromExcluded}
          />
        )}
      </div>
    </Inert>
  );
}
