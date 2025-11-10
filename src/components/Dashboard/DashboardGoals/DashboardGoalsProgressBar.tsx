import { getPercentage } from '@/utils/getPercentage';

interface IDashboardGoalsProgressBarProps {
  money: number;
  totalPrice: number;
}

export default function DashboardGoalsProgressBar({
  money,
  totalPrice,
}: IDashboardGoalsProgressBarProps) {
  const result = Number(getPercentage(money, totalPrice));

  return (
    <div className='w-full h-2 rounded-full bg-chetwode-blue-200'>
      <div
        className={`h-2 rounded-full ${
          result >= 100 ? 'bg-emerald-400' : 'bg-chetwode-blue-600'
        }`}
        style={{
          width: `${result > 100 ? 100 : result.toFixed(2)}%`,
        }}
      />
    </div>
  );
}
