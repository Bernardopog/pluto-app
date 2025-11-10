'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface ILinkListItemProps {
  href: string;
  label: string;
  isActive: boolean;
  icon: ReactNode;
  handleSidebar: () => void;
}

export default function LinkListItem({
  href,
  label,
  isActive,
  icon,
  handleSidebar,
}: ILinkListItemProps) {
  return (
    <li
      className={`flex items-center relative z-0 rounded-r-lg duration-300 ease-in-out ${
        isActive
          ? 'border-l-4 font-bold border-chetwode-blue-500 bg-star-dust-100 text-star-dust-950 hover:bg-chetwode-blue-300'
          : 'bg-transparent border-transparent font-medium hover:bg-chetwode-blue-900'
      }`}
    >
      <Link
        href={href}
        className='flex size-full p-2 gap-x-2'
        onClick={handleSidebar}
      >
        <span className='text-2xl'>{icon}</span>
        {label}
      </Link>
    </li>
  );
}
