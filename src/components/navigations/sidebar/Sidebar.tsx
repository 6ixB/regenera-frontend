import { LeafyGreen, Target, Trophy } from "lucide-react";
import SidebarNavLink from "./SidebarNavLink";
import Link from "next/link";
import { FrontendRoutesEnum } from "@/lib/routes";

export default function Sidebar() {
  return (
    <div
      className={
        "self-start min-w-[18rem] w-[18rem] h-full flex flex-col gap-y-8 bg-light-background-100 drop-shadow-md ps-8 pe-8 py-6 overflow-y-hidden hover:overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-light-background-100 [&::-webkit-scrollbar-thumb]:bg-light-background-300 [&::-webkit-scrollbar-thumb]:rounded-full"
      }
      style={{ scrollbarGutter: "stable" }}
    >
      <div className={"flex flex-col gap-y-2"}>
        <div className={"font-semibold text-base text-light-text-100"}>
          Dashboard
        </div>
        <div className={"flex flex-col gap-y-2 py-2"}>
          <Link
            href={"/projects/create"}
            className={
              "px-4 py-2 rounded-full border-2 border-light-accent-100 hover:opacity-75"
            }
          >
            <div
              className={
                "text-base text-light-text-100 whitespace-nowrap text-center"
              }
            >
              Start a project
            </div>
          </Link>
          <div className="flex items-center text-sm px-4 text-gray-800 before:flex-1 before:border-t before:border-light-background-300 before:me-2 after:flex-1 after:border-t after:border-light-background-300 after:ms-2">
            or
          </div>
          <Link
            href={"/discover"}
            className={
              "px-4 py-2 rounded-full bg-light-accent-100 hover:opacity-75"
            }
          >
            <div
              className={
                "text-base text-light-background-100 whitespace-nowrap text-center"
              }
            >
              Discover projects
            </div>
          </Link>
        </div>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <div className={"font-semibold text-base text-light-text-100"}>
          Projects
        </div>
        <div className={"flex flex-col"}>
          <SidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD.toString()}
            icon={<LeafyGreen size={20} className={"text-light-text-100"} />}
            text={"My projects"}
          />
          <SidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD.toString()}
            icon={<Target size={20} className={"text-light-text-100"} />}
            text={"Joined projects"}
          />
          <SidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD.toString()}
            icon={<Trophy size={20} className={"text-light-text-100"} />}
            text={"Scoreboard"}
          />
        </div>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <div className={"font-semibold text-base text-light-text-100"}>
          Need help?
        </div>
        <div className={"text-sm text-light-text-100"}>
          The information and support you need, when you need it. The help
          center contains a number of articles aimed at getting you started with
          your journey here at Regenera.
        </div>
        <Link
          href={"/"}
          className={
            "p-3 rounded-md text-center bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none hover:opacity-75 text-light-background-100"
          }
        >
          Help Center
        </Link>
      </div>
      <div className={"flex flex-wrap gap-2 text-light-text-100 text-sm"}>
        <div className={"font-semibold text-base"}>Learn more</div>
        <Link href={FrontendRoutesEnum.ABOUT.toString()}>
          <div className="text-xs md:text-sm">How Regenera Works</div>
        </Link>
        <Link href={"/"}>
          <div className="text-xs md:text-sm">Why Regenera</div>
        </Link>
        <Link href={"/"}>
          <div className="text-xs md:text-sm">Common questions</div>
        </Link>
        <Link href={"/"}>
          <div className="text-xs md:text-sm">Success stories</div>
        </Link>
      </div>
      <div className={"text-light-text-100 text-xs"}>
        © 2024 SROOMY. All rights reserved.
      </div>
    </div>
  );
}
