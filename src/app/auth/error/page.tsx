import AuthErrorMessage from "@/components/pages/auth/error/AuthErrorMessage";
import Regenera from "@/components/vector-graphics/Regenera";
import { FrontendRoutesEnum } from "@/lib/routes";
import { CircleAlert } from "lucide-react";
import Link from "next/link";

export default function AuthError() {
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
            "bg-light-background-100 rounded border border-light-background-300 md:shadow-sm flex flex-col items-center justify-center gap-4 py-8 px-16"
          }
        >
          <CircleAlert size={32} className={"text-light-accent-100"} />
          <div className="flex flex-col justify-center gap-y-2">
            <div
              className={"flex flex-col gap-y-4 text-base text-light-text-100"}
            >
              <div className="text-light-accent-100">
                Oops something went wrong!
              </div>
              <AuthErrorMessage />
            </div>
            <Link
              href={FrontendRoutesEnum.SIGNIN}
              className={
                "py-2 text-base text-hyperlink focus:outline-light-primary-100 hover:opacity-75"
              }
            >
              Go back to sign in
            </Link>
          </div>
        </div>
        <div className={"text-light-text-100 text-xs px-8 md:px-0"}>
          © 2024 SROOMY. All rights reserved.
        </div>
      </div>
    </main>
  );
}
