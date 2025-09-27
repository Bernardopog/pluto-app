import { ReactNode } from "react";
import { MdOutlineWarning } from "react-icons/md";

interface IOverviewCardProps {
  title: string;
  value: number | string;
  valueType: "currency" | "number";
  icon: ReactNode;
  complement?: string;
}

export default function OverviewCard({
  title,
  value,
  valueType,
  icon,
  complement,
}: IOverviewCardProps) {
  let isNegative: boolean = false;
  if (valueType === "currency") isNegative = (value as number) < 0;

  return (
    <article
      className={`relative h-full py-2 px-4 rounded-lg shadow-md overflow-hidden duration-300 ease-in-out border-b-2 border-transparent hover:-translate-y-2 hover:shadow-lg hover:border-chetwode-blue-700 dark:hover:border-chetwode-blue-600 ${
        valueType === "currency" && isNegative
          ? "bg-red-400"
          : "bg-star-dust-50 dark:bg-chetwode-blue-900"
      }`}
      aria-label={`${title} = ${valueType === "currency" ? "R$" : ""}${value}`}
    >
      <h3 className="flex justify-between font-medium text-lg text-chetwode-blue-950/75 dark:text-chetwode-blue-50">
        {title}
        <span className="text-2xl text-chetwode-blue-950/25 dark:text-chetwode-blue-50/75">
          {icon}
        </span>
      </h3>
      {isNegative && (
        <span className="absolute right-8 bottom-2 text-6xl text-red-600/50">
          <MdOutlineWarning />
        </span>
      )}
      <p className="mt-2 font-bold text-3xl text-chetwode-blue-950 dark:text-chetwode-blue-50">
        {valueType === "currency" && (
          <span className="mr-1 text-xl text-chetwode-blue-700 dark:text-chetwode-blue-300">
            R$
          </span>
        )}
        {value} <span className="text-sm">{complement}</span>
      </p>
    </article>
  );
}
