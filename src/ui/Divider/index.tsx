interface IDividerProps {
  direction: 'horizontal' | 'vertical';
  className?: string;
}

export default function Divider({ direction, className }: IDividerProps) {
  return (
    <div
      className={`${
        direction === 'horizontal' ? 'h-0.5 w-full' : 'h-full w-0.5'
      } ${className} rounded-full bg-chetwode-blue-950/10 dark:bg-chetwode-blue-600/10`}
    />
  );
}
