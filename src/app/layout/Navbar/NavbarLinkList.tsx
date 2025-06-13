"use client";
import {
  MdAttachMoney,
  MdDashboard,
  MdOutlineTableChart,
} from "react-icons/md";
import LinkListItem from "./LinkListItem";
import { usePathname } from "next/navigation";
import { BsPiggyBank } from "react-icons/bs";

export default function NavbarLinkList() {
  const path = usePathname();

  return (
    <ul className="flex flex-col mt-8 pr-4 gap-y-2">
      <LinkListItem
        href="/dashboard"
        label="Dashboard"
        isActive={path === "/dashboard"}
        icon={<MdDashboard />}
      />
      <LinkListItem
        href="/budget"
        label="Orçamento"
        isActive={path === "/budget"}
        icon={<MdAttachMoney />}
      />
      <LinkListItem
        href="/vault"
        label="Cofre"
        isActive={path === "/vault"}
        icon={<BsPiggyBank className="scale-x-[-1]" />}
      />
      <LinkListItem
        href="/transaction"
        label="Transações"
        isActive={path === "/transaction"}
        icon={<MdOutlineTableChart />}
      />
    </ul>
  );
}
