export function getPercentage(value: number, totalPrice: number) {
  if (totalPrice === 0) return 0;

  const percentage = (value * 100) / totalPrice;
  return percentage.toFixed(2);
}
