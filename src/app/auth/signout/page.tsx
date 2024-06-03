import SignOutOptions from "@/components/pages/auth/signout/SignOutOptions";
import Regenera from "@/components/vector-graphics/Regenera";
import { FrontendRoutesEnum } from "@/lib/routes";
import { CircleHelp } from "lucide-react";
import Link from "next/link";

export default function SignOut() {
  return (
    <main className={"w-full flex justify-center"}>
      <div className={"w-[418px] flex flex-col gap-4"}>
        <Link
          href={FrontendRoutesEnum.HOME.toString()}
          className={"px-8 md:px-0 flex items-center gap-2"}
        >
          <Regenera className={"fill-light-text-100"} />
          <div className={"text-2xl font-medium text-light-text-100"}>
            Regenera
          </div>
        </Link>
        <div
          className={
            "bg-light-background-100 text-light-text-100 rounded border border-light-background-300 md:shadow-sm flex flex-col items-center justify-center gap-4 py-8 px-16"
          }
        >
          <CircleHelp size={32} />
          <div>Are you sure you want to sign out?</div>
          <SignOutOptions />
        </div>
        <div className={"text-light-text-100 text-xs px-8 md:px-0"}>
          © 2024 SROOMY. All rights reserved.
        </div>
      </div>
    </main>
  );
}
