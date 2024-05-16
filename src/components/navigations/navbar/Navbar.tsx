"use client";

import Regenera from "../../vector-graphics/Regenera";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import NavbarCollapsed from "./NavbarCollapsed";
import NavbarNotAuthenticated from "./NavbarNotAuthenticated";
import { SessionEntity } from "@/lib/model/session/session.entity";
import NavbarAuthenticated from "./NavbarAuthenticated";
import InputGroup from "@/components/forms/InputGroup";
import CollapsedInputGroup from "@/components/forms/CollapsedInputGroup";

interface Navbar {
  pill: Boolean;
  session?: SessionEntity | null;
}

export default function Navbar({ pill, session = null }: Navbar) {
  const [isShrinked, setIsShrinked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (pill) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;

        setIsShrinked(scrollTop > 0);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className={`flex z-50 fixed justify-center items-center user-select-none transition-all duration-200 bg-light-background-100
      shadow px-8
      ${isShrinked ? 'top-0 w-full rounded-none md:w-10/12 md:top-4 md:rounded-full lg:container': 'top-0 w-full'}`}
    >
      {session === null ? (
        <NavbarNotAuthenticated />
      ) : (
        <NavbarAuthenticated session={session} />
      )}

      <nav
        className={`max-w-[67rem] w-full py-3 flex items-center justify-between gap-6 md:hidden
          group
        `}
      >
        <CollapsedInputGroup icon={<Search className={"text-light-text-100"} />} placeholder={'Search projects, creators, and categories'} variant={'no-outlined'}
          className={'flex w-0 max-w-full group-focus-within:w-full transition-all ease-out duration-500'}
        />
        <div className={"w-[16rem] flex items-center justify-center gap-x-4 group-focus-within:hidden"}>
          <Link href={"/"} className={"flex items-center gap-2"}>
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

      <NavbarCollapsed
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </header>
  );
}
