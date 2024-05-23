import Regenera from "@/components/vector-graphics/Regenera";
import Link from "next/link";
import SignUpForm from "@/components/pages/auth/signup/SignUpForm";
import { FrontendRoutesEnum } from "@/lib/routes";

export default function SignUp() {
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
        <SignUpForm />
        <div className={"text-light-text-100 text-xs px-8 md:px-0"}>
          © 2024 SROOMY. All rights reserved.
        </div>
      </div>
    </main>
  );
}
