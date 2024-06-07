import SignInForm from "@/components/pages/auth/signin/SignInForm";
import SignInToast from "@/components/pages/auth/signin/SignInToast";
import Regenera from "@/components/vector-graphics/Regenera";
import { FrontendRoutesEnum } from "@/lib/routes";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className={"flex w-full justify-center"}>
      <SignInToast />
      <div className={"flex w-[418px] flex-col gap-4"}>
        <Link
          href={FrontendRoutesEnum.HOME.toString()}
          className={"flex items-center gap-2 px-8 md:px-0"}
        >
          <Regenera className={"fill-light-text-100"} />
          <div className={"text-2xl font-medium text-light-text-100"}>
            Regenera
          </div>
        </Link>
        <SignInForm />
        <div className={"px-8 text-xs text-light-text-100 md:px-0"}>
          © 2024 SROOMY. All rights reserved.
        </div>
      </div>
    </main>
  );
}
