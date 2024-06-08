"use client";

import {
  Bell,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircleMore,
  Settings,
} from "lucide-react";
import Regenera from "../../vector-graphics/Regenera";
import Link from "next/link";
import NavbarCollapsedNavLink from "./NavbarCollapsedNavLink";
import { FrontendRoutesEnum } from "@/lib/routes";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { signOutMutationFn } from "@/lib/api/authApi";

interface SidebarProps {
  isSidebarOpen: Boolean;
  toggleSidebar: () => void;
}

export default function NavbarCollapsed({
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  const { status, data: session } = useSession();

  const handleSignOutClick = async () => {
    try {
      await signOutMutationFn(session?.accessToken!, session?.refreshToken!);
    } catch (error) {
      console.log(error);
    } finally {
      signOut({
        callbackUrl: FrontendRoutesEnum.SIGNIN.toString(),
        redirect: true,
      });
    }
  };

  return (
    <div
      className={`fixed left-0 top-0 flex h-screen w-screen bg-black bg-opacity-40 
        ${isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"} ttion-oransipacity z-50 justify-end duration-300 ease-in-out md:pointer-events-none md:opacity-0`}
    >
      <div
        className={`flex h-full w-5/6 flex-col gap-y-4 bg-light-background-100 px-6 py-3 text-end shadow
            transition-transform duration-200 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <Menu
            className={"cursor-pointer text-light-text-100"}
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
          {status === "authenticated" ? (
            <>
              <NavbarCollapsedNavLink
                icon={
                  <LayoutDashboard
                    size={20}
                    className={"text-light-text-100"}
                  />
                }
                link={FrontendRoutesEnum.DASHBOARD.toString()}
                title={"Dashboard"}
                description={"Your projects and profile"}
              />
              <NavbarCollapsedNavLink
                icon={
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
                }
                link={FrontendRoutesEnum.CHATS.toString()}
                title={"Chats"}
                description={"Your messages"}
              />
              <NavbarCollapsedNavLink
                icon={
                  <div className={"relative inline-block"}>
                    <Bell className={"text-light-text-100"} size={20} />
                    <span
                      className={
                        "absolute end-0 top-0 block size-1.5 rounded-full bg-light-accent-100 ring-2 ring-white"
                      }
                    ></span>
                  </div>
                }
                link={"/inbox"}
                title={"Inbox"}
                description={"Your notifications"}
              />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>

        {status === "authenticated" ? (
          <>
            <NavbarCollapsedNavLink
              icon={<Settings size={20} className={"text-light-text-100"} />}
              link={FrontendRoutesEnum.SETTINGS.toString()}
              title={"Settings"}
              description={"Web app settings"}
            />
            <div
              className={
                "flex items-center justify-between whitespace-nowrap rounded-md py-4 pe-2 ps-4 text-left text-base text-light-text-100 hover:bg-light-background-200"
              }
              onClick={handleSignOutClick}
            >
              <div className="flex items-center gap-x-4">
                <LogOut size={20} className={"text-light-text-100"} />
                <div className={"flex flex-col"}>
                  <div className={"text-base font-semibold"}>Sign out</div>
                  <div className={"text-sm"}>Sign out from your account</div>
                </div>
              </div>
              <ChevronRight size={20} className={"text-light-text-100"} />
            </div>
            <Link
              href={`/profiles/${session?.user.id}`}
              className="my-2 me-2 flex cursor-pointer items-center gap-x-4 rounded-md bg-light-background-200 p-4"
            >
              {session?.user.imageUrl ? (
                <Image
                  src={session?.user.imageUrl}
                  sizes="100vw"
                  width={0}
                  height={0}
                  className="size-12 rounded-full bg-light-background-300 object-cover"
                  alt="User Profile Image"
                />
              ) : (
                <div className="size-12 rounded-full bg-light-background-300" />
              )}
              <div className="flex flex-col items-start text-sm text-light-text-100">
                <div>Signed in as</div>
                <div className="font-semibold">{session?.user.username}</div>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link
              href={"/projects/create"}
              className={
                "rounded-full border-2 border-light-accent-100 px-4 py-2 text-center"
              }
            >
              <div
                className={"whitespace-nowrap text-base text-light-text-100"}
              >
                Start a project
              </div>
            </Link>
            <Link
              href={"/projects/create"}
              className={
                "rounded-full bg-light-accent-100 px-4 py-2 text-center"
              }
            >
              <div
                className={
                  "whitespace-nowrap text-base font-semibold text-light-background-100"
                }
              >
                Sign in
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
