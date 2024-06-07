"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface DashboardSidebarNavLinkProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

export default function DashboardSidebarNavLink({
  icon,
  text,
  link,
}: DashboardSidebarNavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <Link
      href={link}
      className={`${isActive && "bg-light-background-200"} flex items-center gap-x-2 p-2 py-3 hover:bg-light-background-200 rounded-md cursor-pointer text-light-text-100`}
    >
      {icon}
      <div className={"text-base"}>{text}</div>
    </Link>
  );
}
