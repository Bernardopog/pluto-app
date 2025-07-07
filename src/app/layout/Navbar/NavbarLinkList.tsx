"use client";
import {
  MdAttachMoney,
  MdDashboard,
  MdOutlineTableChart,
} from "react-icons/md";
import LinkListItem from "./LinkListItem";
import { usePathname } from "next/navigation";
import { BsPiggyBank } from "react-icons/bs";

export default function NavbarLinkList({
  handleSidebar,
}: {
  handleSidebar: () => void;
}) {
  const path = usePathname();

  return (
    <ul className="flex flex-col mt-8 pr-4 gap-y-2">
      <LinkListItem
        href="/dashboard"
        label="Dashboard"
        isActive={path === "/dashboard"}
        icon={<MdDashboard />}
        handleSidebar={handleSidebar}
      />
      <LinkListItem
        href="/budget"
        label="Orçamento"
        isActive={path === "/budget"}
        icon={<MdAttachMoney />}
        handleSidebar={handleSidebar}
      />
      <LinkListItem
        href="/vault"
        label="Cofre"
        isActive={path === "/vault"}
        icon={<BsPiggyBank className="scale-x-[-1]" />}
        handleSidebar={handleSidebar}
      />
      <LinkListItem
        href="/transaction"
        label="Transações"
        isActive={path === "/transaction"}
        icon={<MdOutlineTableChart />}
        handleSidebar={handleSidebar}
      />
    </ul>
  );
}
