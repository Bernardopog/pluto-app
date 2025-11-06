"use client";
import { ReactNode } from "react";

interface IOverviewCardActionProps {
  children: ReactNode;
  ariaLabel: string;
  icon: ReactNode;
  action: () => void;
}

export default function OverviewCardAction({
  children,
  ariaLabel,
  icon,
  action,
}: IOverviewCardActionProps) {
  return (
    <>
      <button
        type="button"
        className="absolute bottom-0 right-0 z-10 p-0.5 rounded-lg bg-chetwode-blue-600 text-2xl text-chetwode-blue-50 duration-300 ease-in-out dark:bg-chetwode-blue-950 dark:text-chetwode-blue-50"
        onClick={action}
        aria-label={ariaLabel}
        title={ariaLabel}
      >
        {icon}
      </button>
      {children}
    </>
  );
}
