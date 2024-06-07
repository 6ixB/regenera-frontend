import { signOutMutationFn } from "@/lib/api/authApi";
import { FrontendRoutesEnum } from "@/lib/routes";
import { ChevronDown, CircleUserRound, LogOut, Settings } from "lucide-react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface NavbarUserDropdownProps {
  session: Session | null;
}

export default function NavbarUserDropdown({
  session,
}: NavbarUserDropdownProps) {
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
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-with-header"
        type="button"
        className="hs-dropdown-toggle flex cursor-pointer items-center justify-center gap-2 rounded-md p-2 hover:bg-light-background-200 disabled:pointer-events-none disabled:opacity-50"
      >
        <div className={"relative inline-block"}>
          {session?.user.imageUrl ? (
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              className={
                "inline-block size-6 cursor-pointer rounded-full bg-light-background-300 object-cover"
              }
              src={session.user.imageUrl}
              alt={"Image Description"}
            />
          ) : (
            <div
              className={
                "inline-block size-6 cursor-pointer rounded-full bg-light-background-300"
              }
            />
          )}
          <span
            className={
              "absolute end-0 top-0 block size-1.5 rounded-full bg-light-accent-100 ring-2 ring-white"
            }
          ></span>
        </div>
        <ChevronDown
          size={16}
          className={"text-light-text-100 hs-dropdown-open:rotate-180"}
        />
      </button>

      <div
        className="hs-dropdown-menu duration mt-2 hidden min-w-60 rounded-lg bg-light-background-100 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100"
        aria-labelledby="hs-dropdown-with-header ring"
      >
        <div className="flex items-center gap-x-4 rounded-t-lg px-5 py-3">
          {session?.user.imageUrl ? (
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              className={
                "inline-block size-8 cursor-pointer rounded-full bg-light-background-300 object-cover"
              }
              src={session.user.imageUrl}
              alt={"Image Description"}
            />
          ) : (
            <div
              className={
                "inline-block size-8 cursor-pointer rounded-full bg-light-background-300"
              }
            />
          )}
          <div>
            <p className="text-sm text-light-text-100">Signed in as</p>
            <p className="text-sm font-medium text-light-text-100">
              {session?.user?.username}
            </p>
          </div>
        </div>
        <hr />
        <div className="first:pt-0 last:pb-0">
          <Link
            className="m-2 flex items-center gap-x-3.5 rounded-lg px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            href={`/profiles/${session?.user?.id}`}
          >
            <CircleUserRound size={20} className={"text-light-text-100"} />
            Profile
          </Link>
          <Link
            className="m-2 flex items-center gap-x-3.5 rounded-lg px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
            href={FrontendRoutesEnum.SETTINGS.toString()}
          >
            <Settings size={20} className={"text-light-text-100"} />
            Settings
          </Link>
          <hr />
          <div
            onClick={handleSignOutClick}
            className="m-2 flex cursor-pointer items-center gap-x-3.5 rounded-lg px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
          >
            <LogOut size={20} className={"text-light-text-100"} />
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}
