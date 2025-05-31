import { moneyFormatter } from "@/app/utils/moneyFormatter";
import { ReactNode } from "react";
import { MdOutlineWarning } from "react-icons/md";

interface IOverviewCardProps {
  title: string;
  money: number;
  icon: ReactNode;
}

export default function OverviewCard({
  title,
  money,
  icon,
}: IOverviewCardProps) {
  const isNegative = money < 0;

  return (
    <article
      className={`relative py-2 px-4 rounded-lg  shadow-md overflow-hidden duration-300 ease-in-out border-b-2 border-transparent hover:-translate-y-2 hover:shadow-lg hover:border-chetwode-blue-700 ${
        isNegative ? "bg-red-400" : "bg-star-dust-50"
      }`}
      aria-label={`${title}: R$ ${moneyFormatter(money).replace("R$", "")}`}
    >
      <h3 className="flex justify-between font-medium text-lg text-chetwode-blue-950/75">
        {title}
        <span className="text-2xl text-chetwode-blue-950/25">{icon}</span>
      </h3>
      {isNegative && (
        <span className="absolute right-8 bottom-2 text-6xl text-red-600/50">
          <MdOutlineWarning />
        </span>
      )}
      <p className="mt-2 font-bold text-3xl text-chetwode-blue-950">
        <span className="mr-1 text-xl text-chetwode-blue-700">R$</span>
        {moneyFormatter(money).replace("R$", "")}
      </p>
    </article>
  );
}
