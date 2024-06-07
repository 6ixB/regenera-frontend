import {
  LayoutDashboard,
  Award,
  LeafyGreen,
  Target,
  Trophy,
} from "lucide-react";
import DashboardSidebarNavLink from "./DashboardSidebarNavLink";
import Link from "next/link";
import { FrontendRoutesEnum } from "@/lib/routes";

export default function DashboardSidebar() {
  return (
    <div
      className={
        "flex h-full w-[18rem] min-w-[18rem] flex-col gap-y-8 self-start overflow-y-hidden bg-light-background-100 px-8 py-6 drop-shadow-md hover:overflow-y-auto"
      }
      style={{ scrollbarGutter: "stable" }}
    >
      <div className={"flex flex-col gap-y-2"}>
        <div className={"flex flex-col gap-y-2 py-2"}>
          <Link
            href={"/projects/create"}
            className={
              "rounded-full border-2 border-light-accent-100 px-4 py-2 hover:opacity-75"
            }
          >
            <div
              className={
                "whitespace-nowrap text-center text-base text-light-text-100"
              }
            >
              Start a project
            </div>
          </Link>
          <div className="flex items-center px-4 text-sm text-gray-800 before:me-2 before:flex-1 before:border-t before:border-light-background-300 after:ms-2 after:flex-1 after:border-t after:border-light-background-300">
            or
          </div>
          <Link
            href={"/discover"}
            className={
              "rounded-full bg-light-accent-100 px-4 py-2 hover:opacity-75"
            }
          >
            <div
              className={
                "whitespace-nowrap text-center text-base text-light-background-100"
              }
            >
              Discover projects
            </div>
          </Link>
        </div>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <div className={"flex flex-col gap-y-1"}>
          <DashboardSidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD.toString()}
            icon={
              <LayoutDashboard size={20} className={"text-light-text-100"} />
            }
            text={"Dashboard"}
          />
          <DashboardSidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD_PROJECTS.toString()}
            icon={<LeafyGreen size={20} className={"text-light-text-100"} />}
            text={"My projects"}
          />
          <DashboardSidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD_PROJECTS_JOINED.toString()}
            icon={<Target size={20} className={"text-light-text-100"} />}
            text={"Joined projects"}
          />
          <DashboardSidebarNavLink
            link={FrontendRoutesEnum.DASHBOARD_ACHIEVEMENTS.toString()}
            icon={<Award size={20} className={"text-light-text-100"} />}
            text={"Achievements"}
          />
          <DashboardSidebarNavLink
            link={FrontendRoutesEnum.LEADERBOARD.toString()}
            icon={<Trophy size={20} className={"text-light-text-100"} />}
            text={"Leaderboard"}
          />
        </div>
      </div>
      <div className={"flex flex-col gap-y-2"}>
        <div className={"text-base font-semibold text-light-text-100"}>
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
            "rounded-md border-none bg-gradient-to-r from-light-primary-200 to-light-primary-100 p-3 text-center text-light-background-100 hover:opacity-75"
          }
        >
          Help Center
        </Link>
      </div>
      <div className={"flex flex-wrap gap-2 text-sm text-light-text-100"}>
        <div className={"text-base font-semibold"}>Learn more</div>
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
      <div className={"text-xs text-light-text-100"}>
        © 2024 SROOMY. All rights reserved.
      </div>
    </div>
  );
}
