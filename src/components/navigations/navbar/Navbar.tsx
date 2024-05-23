"use client";

import Regenera from "../../vector-graphics/Regenera";
import Link from "next/link";
import { Search, MessageCircleMore, Bell } from "lucide-react";
import { useEffect, useState } from "react";
import NavbarCollapsed from "./NavbarCollapsed";
import NavbarMobile from "./NavbarMobile";
import InputGroup from "@/components/forms/InputGroup";
import { FrontendRoutesEnum } from "@/lib/routes";
import { useSession } from "next-auth/react";
import NavbarUserDropdown from "./NavbarUserDropdown";
import { usePathname } from "next/navigation";

function isStaticPage(pathname: string) {
  const staticPages = [
    FrontendRoutesEnum.HOME.toString(),
    FrontendRoutesEnum.ABOUT.toString(),
  ];

  return staticPages.includes(pathname);
}

export default function Navbar() {
  const pathname = usePathname();
  const { status } = useSession();
  const [isShrinked, setIsShrinked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const pill = isStaticPage(pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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

  return (
    <header
      className={`flex z-50 fixed justify-center items-center user-select-none transition-all duration-200 bg-light-background-100
    shadow px-8
    ${isShrinked ? "top-0 w-full rounded-none md:w-10/12 md:top-4 md:rounded-full lg:container lg:px-8 lg:py-0" : "top-0 w-full"}`}
    >
      <nav
        className={`container w-full px-0 py-3 items-center justify-between gap-x-4 hidden md:flex
        `}
      >
        {/* Left Section */}
        <div className={"w-[16rem] flex items-center justify-start gap-x-4"}>
          <Link
            href={FrontendRoutesEnum.HOME.toString()}
            className={"flex items-center gap-2"}
          >
            <Regenera className={"fill-light-text-100"} />
            <div className={"text-lg font-medium text-light-text-100"}>
              Regenera
            </div>
          </Link>
          <Link
            href={
              status === "authenticated"
                ? FrontendRoutesEnum.DASHBOARD.toString()
                : FrontendRoutesEnum.ABOUT.toString()
            }
          >
            <div className={"text-base text-light-text-100 whitespace-nowrap"}>
              {status === "authenticated" ? "Dashboard" : "How it works"}
            </div>
          </Link>
        </div>

        {/* Search Bar */}
        <InputGroup
          icon={<Search className={"text-light-text-100"} />}
          placeholder={"Search projects, creators, and categories"}
        />

        {/* Right Section */}
        <div className={"w-[16rem] flex items-center justify-end gap-x-4"}>
          {status === "authenticated" ? (
            // Authenticated
            <>
              <div
                className={
                  "flex justify-center items-center p-2 rounded-md cursor-pointer hover:bg-light-background-200"
                }
              >
                <div className={"relative inline-block"}>
                  <MessageCircleMore
                    className={"text-light-text-100"}
                    size={20}
                  />
                  <span
                    className={
                      "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-light-accent-100"
                    }
                  ></span>
                </div>
              </div>
              <div
                className={
                  "flex justify-center items-center p-2 rounded-md cursor-pointer hover:bg-light-background-200"
                }
              >
                <div className={"relative inline-block"}>
                  <Bell className={"text-light-text-100"} size={20} />
                  <span
                    className={
                      "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-light-accent-100"
                    }
                  ></span>
                </div>
              </div>
              <NavbarUserDropdown />
            </>
          ) : (
            // Unauthenticated
            <>
              <Link href={FrontendRoutesEnum.SIGNIN.toString()}>
                <div
                  className={"text-base text-light-text-100 whitespace-nowrap"}
                >
                  Sign in
                </div>
              </Link>
              <Link
                href={"/projects/create"}
                className={
                  "px-4 py-2 rounded-full border-2 border-light-accent-100"
                }
              >
                <div
                  className={"text-base text-light-text-100 whitespace-nowrap"}
                >
                  Start a project
                </div>
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Nav */}
      <NavbarMobile toggleSidebar={toggleSidebar} />

      <NavbarCollapsed
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </header>
  );
}
