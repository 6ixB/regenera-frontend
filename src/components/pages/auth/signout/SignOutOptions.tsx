"use client";

import { signOutMutationFn } from "@/lib/api/authApi";
import { FrontendRoutesEnum } from "@/lib/routes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignOutOptions() {
  const { data } = useSession();

  const handleSignOutClick = async () => {
    if (new Date().getTime() < data?.expiresIn!) {
      await signOutMutationFn(data?.accessToken!);
    }

    signOut({
      callbackUrl: FrontendRoutesEnum.SIGNIN.toString(),
      redirect: true,
    });
  };

  return (
    <div className={"w-full flex items-center justify-center gap-x-16"}>
      <button
        onClick={handleSignOutClick}
        type={"button"}
        className={
          "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-light-background-300 text-light-text-100 hover:border-light-accent-100 hover:text-light-accent-100 disabled:opacity-50 disabled:pointer-events-none"
        }
      >
        Yes
      </button>
      <Link
        href={FrontendRoutesEnum.HOME.toString()}
        className={
          "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-light-background-300 text-light-text-100 hover:border-light-primary-100 hover:text-light-primary-100 disabled:opacity-50 disabled:pointer-events-none"
        }
      >
        No
      </Link>
    </div>
  );
}
