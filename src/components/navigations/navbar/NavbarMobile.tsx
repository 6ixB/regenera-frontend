import CollapsedInputGroup from "@/components/forms/CollapsedInputGroup";
import Regenera from "@/components/vector-graphics/Regenera";
import { FrontendRoutesEnum } from "@/lib/routes";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

interface NavbarMobileProps {
  toggleSidebar: () => void;
}

export default function NavbarMobile({ toggleSidebar }: NavbarMobileProps) {
  return (
    <nav
      className={`group flex w-full max-w-[67rem] items-center justify-between gap-x-6 py-3 md:hidden
        `}
    >
      <CollapsedInputGroup
        icon={<Search className={"text-light-text-100 "} />}
        placeholder={"Search projects, creators, and categories"}
        variant={"no-outlined"}
        className={
          "flex w-0 max-w-full transition-all duration-500 ease-out group-focus-within:w-full"
        }
      />
      <div
        className={
          "flex w-[16rem] items-center justify-center gap-x-4 group-focus-within:hidden"
        }
      >
        <Link
          href={FrontendRoutesEnum.HOME.toString()}
          className={"flex items-center gap-2"}
        >
          <Regenera className={"fill-light-text-100"} />
          <div className={"text-lg font-medium text-light-text-100"}>
            Regenera
          </div>
        </Link>
      </div>
      <Menu
        className={
          "min-w-6 cursor-pointer text-light-text-100 group-focus-within:block"
        }
        onClick={toggleSidebar}
      />
    </nav>
  );
}
