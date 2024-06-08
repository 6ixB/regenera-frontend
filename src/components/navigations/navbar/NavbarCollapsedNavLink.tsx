import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavbarCollapsedNavLinkProps {
  link: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function NavbarCollapsedNavLink({
  link,
  title,
  description,
  icon,
}: NavbarCollapsedNavLinkProps) {
  return (
    <Link href={link}>
      <div
        className={
          "flex items-center justify-between whitespace-nowrap rounded-md py-4 pe-2 ps-4 text-left text-base text-light-text-100 hover:bg-light-background-200"
        }
      >
        <div className="flex items-center gap-x-4">
          {icon && icon}
          <div className={"flex flex-col"}>
            <div className={"text-base font-semibold"}>{title}</div>
            <div className={"text-sm"}>{description}</div>
          </div>
        </div>
        <ChevronRight size={20} className={"text-light-text-100"} />
      </div>
    </Link>
  );
}
