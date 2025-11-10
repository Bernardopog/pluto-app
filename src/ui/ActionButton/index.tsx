import type { ReactNode } from 'react';

interface IActionButtonProps {
  action: () => void;
  icon: ReactNode;
  label: string;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function ActionButton({
  action,
  icon,
  label,
  disabled,
  className,
  children,
}: IActionButtonProps) {
  return (
    <button
      type='button'
      onClick={action}
      className={`flex items-center p-1 pr-2 gap-x-2 rounded-full font-medium bg-chetwode-blue-200 text-chetwode-blue-950 ease-in-out duration-300 hover:brightness-95 active:brightness-75 disabled:grayscale-100 disabled:cursor-not-allowed disabled:bg-chetwode-blue-200 dark:bg-chetwode-blue-800 dark:text-chetwode-blue-50 dark:disabled:bg-chetwode-blue-400 dark:disabled:text-chetwode-blue-950 ${className}`}
      disabled={disabled}
    >
      <span className='p-0.5 rounded-full text-2xl bg-chetwode-blue-800 text-chetwode-blue-50 dark:bg-chetwode-blue-950'>
        {icon}
      </span>
      {label}
      {children}
    </button>
  );
}
