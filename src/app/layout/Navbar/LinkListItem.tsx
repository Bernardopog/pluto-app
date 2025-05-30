import Link from "next/link";
import { ReactNode } from "react";

interface ILinkListItemProps {
  href: string;
  label: string;
  isActive: boolean;
  icon: ReactNode;
}

export default function LinkListItem({
  href,
  label,
  isActive,
  icon,
}: ILinkListItemProps) {
  return (
    <li
      className={`flex items-center relative z-0 p-2 rounded-r-lg ${
        isActive
          ? "text-star-dust-950 font-bold"
          : "bg-transparent border-transparent font-medium"
      }`}
    >
      <div
        className={`absolute left-0 -z-10 h-full rounded-r-lg duration-300 ease-in-out ${
          isActive
            ? "w-full border-l-4 border-chetwode-blue-500 bg-star-dust-100"
            : "bg-transparent w-0 border-0"
        }`}
      ></div>
      <Link href={href} className="flex size-full gap-x-2">
        <span className="text-2xl">{icon}</span>
        {label}
      </Link>
    </li>
  );
}
