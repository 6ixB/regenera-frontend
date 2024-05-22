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
      className={`max-w-[67rem] w-full py-3 flex items-center justify-between md:hidden
        `}
    >
      <Search className={"text-light-text-100"} />
      <div className={"w-[16rem] flex items-center justify-center gap-x-4"}>
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
        className={"text-light-text-100 cursor-pointer"}
        onClick={toggleSidebar}
      />
    </nav>
  );
}
