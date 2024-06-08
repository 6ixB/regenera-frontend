import Regenera from "@/components/vector-graphics/Regenera";
import { FrontendRoutesEnum } from "@/lib/routes";
import { CircleArrowLeft, CircleUserRound, Settings } from "lucide-react";
import Link from "next/link";
import SettingsSidebarNavLink from "./SettingsSidebarNavLink";
import SettingsSidebarUserInfo from "@/components/pages/settings/SettingsSidebarUserInfo";

export default function SettingsSidebar() {
  return (
    <div
      className={
        "flex h-full w-[18rem] min-w-[18rem] flex-col gap-y-4 self-start overflow-y-hidden bg-light-background-100 px-8 py-6 drop-shadow-md hover:overflow-y-auto"
      }
      style={{ scrollbarGutter: "stable" }}
    >
      <Link
        prefetch={false}
        href={FrontendRoutesEnum.HOME.toString()}
        className={"flex items-center gap-2"}
      >
        <Regenera className={"fill-light-text-100"} />
        <div className={"text-lg font-medium text-light-text-100"}>
          Regenera
        </div>
      </Link>
      <SettingsSidebarUserInfo />
      <div className={"flex flex-col gap-y-1"}>
        <SettingsSidebarNavLink
          link={FrontendRoutesEnum.DASHBOARD.toString()}
          icon={<CircleArrowLeft size={20} />}
          text={"Back"}
        />
        <SettingsSidebarNavLink
          link={FrontendRoutesEnum.SETTINGS.toString()}
          icon={<Settings size={20} />}
          text={"Settings"}
        />
        <SettingsSidebarNavLink
          link={FrontendRoutesEnum.SETTINGS_PROFILE.toString()}
          icon={<CircleUserRound size={20} />}
          text={"Profile"}
        />
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
      <div className={"text-xs text-light-text-100"}>
        © 2024 SROOMY. All rights reserved.
      </div>
    </div>
  );
}
