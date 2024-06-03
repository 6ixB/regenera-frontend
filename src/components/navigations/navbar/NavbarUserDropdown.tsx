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
        className="hs-dropdown-toggle flex justify-center items-center p-2 gap-2 rounded-md cursor-pointer hover:bg-light-background-200 disabled:opacity-50 disabled:pointer-events-none"
      >
        <div className={"relative inline-block"}>
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            className={"inline-block size-6 rounded-full cursor-pointer"}
            src={
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            }
            alt={"Image Description"}
          />
          <span
            className={
              "absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-light-accent-100"
            }
          ></span>
        </div>
        <ChevronDown
          size={16}
          className={"hs-dropdown-open:rotate-180 text-light-text-100"}
        />
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-light-background-100 shadow-md rounded-lg mt-2"
        aria-labelledby="hs-dropdown-with-header ring"
      >
        <div className="py-3 px-5 rounded-t-lg flex items-center gap-x-4">
          <Image
            width={0}
            height={0}
            sizes={"100vw"}
            className={"inline-block size-8 rounded-full cursor-pointer"}
            src={
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            }
            alt={"Image Description"}
          />
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
            className="flex items-center gap-x-3.5 px-4 py-3 m-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href={`/profiles/${session?.user?.id}`}
          >
            <CircleUserRound size={20} className={"text-light-text-100"} />
            Profile
          </Link>
          <Link
            className="flex items-center gap-x-3.5 px-4 py-3 m-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            href={"/settings"}
          >
            <Settings size={20} className={"text-light-text-100"} />
            Settings
          </Link>
          <hr />
          <div
            onClick={handleSignOutClick}
            className="flex items-center gap-x-3.5 px-4 py-3 m-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer"
          >
            <LogOut size={20} className={"text-light-text-100"} />
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}
