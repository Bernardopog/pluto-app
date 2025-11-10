import { getPercentage } from '@/utils/getPercentage';

interface IDashboardGoalsPercentageDisplayProps {
  money: number;
  totalPrice: number;
}

export default function DashboardGoalsPercentageDisplay({
  money,
  totalPrice,
}: IDashboardGoalsPercentageDisplayProps) {
  const result = Number(getPercentage(money, totalPrice));

  return (
    <div className='flex-1 relative mt-12 text-center text-xl'>
      {result > 100 ? 100 : result.toFixed(2)}%
    </div>
  );
}
