import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

interface SidebarNavLinkProps {
  icon: React.ReactNode;
  text: string;
  link: string;
}

export default function SidebarNavLink({
  icon,
  text,
  link,
}: SidebarNavLinkProps) {
  return (
    <Link
      href={link}
      className={
        "flex items-center gap-x-2 p-2 py-3 hover:bg-light-background-200 rounded-md cursor-pointer text-light-text-100"
      }
    >
      {icon}
      <div className={"text-base"}>{text}</div>
    </Link>
  );
}
