import { ChevronRight, Menu } from "lucide-react";
import Regenera from "../../vector-graphics/Regenera";
import Link from "next/link";
import NavbarCollapsedNavLink from "./NavbarCollapsedNavLink";
import { FrontendRoutesEnum } from "@/lib/routes";

interface SidebarProps {
  isSidebarOpen: Boolean;
  toggleSidebar: () => void;
}

export default function NavbarCollapsed({
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  return (
    <div
      className={`fixed flex top-0 left-0 w-screen h-screen bg-black bg-opacity-40 
        ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"} justify-end z-50 ttion-oransipacity ease-in-out duration-300 md:opacity-0 md:pointer-events-none`}
    >
      <div
        className={`flex flex-col w-5/6 h-full bg-light-background-100 shadow py-3 px-6 gap-y-4 text-end
            transition-transform duration-200 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
        <div className="flex w-full justify-between flex-row-reverse items-center">
          <Menu
            className={"text-light-text-100 cursor-pointer"}
            onClick={toggleSidebar}
          />
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

        <div className={"flex flex-col"}>
          <NavbarCollapsedNavLink
            link={FrontendRoutesEnum.ABOUT.toString()}
            title={"About"}
            description={"How it works"}
          />
          <NavbarCollapsedNavLink
            link={"/help"}
            title={"Help Center"}
            description={"Technical support and help"}
          />
        </div>

        <Link
          href={"/projects/create"}
          className={
            "px-4 py-2 rounded-full border-2 border-light-accent-100 text-center"
          }
        >
          <div className={"text-base text-light-text-100 whitespace-nowrap"}>
            Start a project
          </div>
        </Link>
        <Link
          href={"/projects/create"}
          className={"px-4 py-2 rounded-full bg-light-accent-100 text-center"}
        >
          <div
            className={
              "text-base font-semibold text-light-background-100 whitespace-nowrap"
            }
          >
            Sign in
          </div>
        </Link>
      </div>
    </div>
  );
}
