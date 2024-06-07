import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NavbarCollapsedNavLinkProps {
  link: string;
  title: string;
  description: string;
}

export default function NavbarCollapsedNavLink({
  link,
  title,
  description,
}: NavbarCollapsedNavLinkProps) {
  return (
    <Link href={link}>
      <div
        className={
          "text-base text-light-text-100 whitespace-nowrap text-left ps-4 py-4 pe-2 flex items-center justify-between rounded-md hover:bg-light-background-200"
        }
      >
        <div className={"flex flex-col"}>
          <div className={"text-base font-semibold"}>{title}</div>
          <div className={"text-sm"}>{description}</div>
        </div>
        <ChevronRight size={20} className={"text-light-text-100"} />
      </div>
    </Link>
  );
}
