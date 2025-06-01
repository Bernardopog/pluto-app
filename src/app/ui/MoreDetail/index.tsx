import Link from "next/link";
import { MdArrowDropDown } from "react-icons/md";

interface IMoreDetailProps {
  href: string;
}

export default function MoreDetail({ href }: IMoreDetailProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center relative text-chetwode-blue-950"
    >
      Ver Detalhes{" "}
      <span className="text-2xl rotate-270 text-chetwode-blue-950/50">
        <MdArrowDropDown />
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 rounded-lg bg-chetwode-blue-600 duration-300 ease-in-out transition-[width] group-hover:w-[95%]" />
    </Link>
  );
}
