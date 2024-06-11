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
import { usePathname, useRouter } from "next/navigation";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useAppDispatch, useAppSelector } from "@/lib/state/hooks";
import { RootState } from "@/lib/state/store";
import { setSearchValue } from "@/lib/state/features/search/searchSlice";

function isStaticPage(pathname: string) {
  const staticPages = [
    FrontendRoutesEnum.HOME.toString(),
    FrontendRoutesEnum.ABOUT.toString(),
  ];

  return staticPages.includes(pathname);
}

function isNotCentered(pathname: string) {
  const nonCenteredPages = [
    FrontendRoutesEnum.DASHBOARD.toString(),
    FrontendRoutesEnum.CHATS.toString(),
    FrontendRoutesEnum.SETTINGS.toString(),
  ];

  if (
    pathname.startsWith(FrontendRoutesEnum.DASHBOARD.toString()) ||
    pathname.startsWith(FrontendRoutesEnum.CHATS.toString()) ||
    pathname.startsWith(FrontendRoutesEnum.SETTINGS.toString())
  ) {
    return true;
  }

  return nonCenteredPages.includes(pathname);
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const { status, data: session } = useSession();

  const [isShrinked, setIsShrinked] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [{ x, y }, scrollTo] = useWindowScroll();

  const searchValue = useAppSelector((state: RootState) => state.search.value);

  const dispatch = useAppDispatch();

  const pill = isStaticPage(pathname);
  const centered = !isNotCentered(pathname);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [scrollTo]);

  useEffect(() => {
    if (searchValue) {
      setIsShrinked(false);
      return;
    }

    if (pill && y && y > 0) {
      setIsShrinked(true);
    } else {
      setIsShrinked(false);
    }
  }, [pill, searchValue, y]);

  return (
    <header
      className={`user-select-none fixed top-0 z-50 flex items-center justify-center bg-light-background-100 px-8 ${!searchValue && "shadow"}
    transition-all duration-200
    ${isShrinked ? "top-0 w-full rounded-none lg:container md:top-4 md:w-10/12 md:rounded-full lg:px-8 lg:py-0" : "top-0 w-full"}`}
    >
      <nav
        className={`${centered && "container"} hidden w-full items-center justify-between gap-x-4 px-0 py-3 md:flex
        `}
      >
        {/* Left Section */}
        <div className={"flex w-[16rem] items-center justify-start gap-x-4"}>
          <Link
            href={FrontendRoutesEnum.HOME.toString()}
            className={"flex items-center gap-2"}
          >
            <Regenera className={"fill-light-text-100"} />
            <div className={"text-lg font-medium text-light-text-100"}>
              Regenera
            </div>
          </Link>
          {!pathname.includes(FrontendRoutesEnum.DASHBOARD.toString()) && (
            <Link
              href={
                status === "authenticated"
                  ? FrontendRoutesEnum.DASHBOARD.toString()
                  : FrontendRoutesEnum.ABOUT.toString()
              }
            >
              <div
                className={"whitespace-nowrap text-base text-light-text-100"}
              >
                {status === "authenticated" ? "Dashboard" : "How it works"}
              </div>
            </Link>
          )}
        </div>

        {/* Search Bar */}
        <InputGroup
          icon={<Search className={"text-light-text-100"} />}
          placeholder={"Search projects, creators, and categories"}
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value;

            dispatch(setSearchValue(value));
          }}
          onKeyDown={(e) => {
            const { key } = e;

            if (key === "Enter" && searchValue.trim()) {
              window.location.assign(
                `/search?query=${searchValue.trim()}&page=1&limit=5`,
              );
            }
          }}
        />

        {/* Right Section */}
        <div className={"flex w-[16rem] items-center justify-end gap-x-4"}>
          {status === "authenticated" ? (
            // Authenticated
            <>
              <div
                onClick={() => {
                  router.push("/chats");
                  router.refresh();
                }}
                className={
                  "flex cursor-pointer select-none items-center justify-center rounded-md p-2 hover:bg-light-background-200"
                }
              >
                <div className={"relative inline-block"}>
                  <MessageCircleMore
                    className={"text-light-text-100"}
                    size={20}
                  />
                  <span
                    className={
                      "absolute end-0 top-0 block size-1.5 rounded-full bg-light-accent-100 ring-2 ring-white"
                    }
                  ></span>
                </div>
              </div>
              <div
                className={
                  "flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-light-background-200"
                }
              >
                <div className={"relative inline-block"}>
                  <Bell className={"text-light-text-100"} size={20} />
                  <span
                    className={
                      "absolute end-0 top-0 block size-1.5 rounded-full bg-light-accent-100 ring-2 ring-white"
                    }
                  ></span>
                </div>
              </div>
              <NavbarUserDropdown session={session} />
            </>
          ) : (
            // Unauthenticated
            <>
              <Link href={FrontendRoutesEnum.SIGNIN.toString()}>
                <div
                  className={"whitespace-nowrap text-base text-light-text-100"}
                >
                  Sign in
                </div>
              </Link>
              <Link
                href={"/projects/create"}
                className={
                  "rounded-full border-2 border-light-accent-100 px-4 py-2"
                }
              >
                <div
                  className={"whitespace-nowrap text-base text-light-text-100"}
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
