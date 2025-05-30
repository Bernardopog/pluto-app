"use client";
import { MdAttachMoney, MdDashboard } from "react-icons/md";
import LinkListItem from "./LinkListItem";
import { usePathname } from "next/navigation";

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
    </ul>
  );
}
