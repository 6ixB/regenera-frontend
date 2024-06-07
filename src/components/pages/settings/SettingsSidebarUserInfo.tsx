"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function SettingsSidebarUserInfo() {
  const session = useSession();

  return (
    <Link
      href={`/profiles/${session?.data?.user.id}`}
      className="my-2 flex items-center gap-x-4 rounded-md p-2 hover:bg-light-background-200"
    >
      {session?.data?.user.imageUrl ? (
        <Image
          src={session?.data?.user.imageUrl}
          sizes="100vw"
          width={0}
          height={0}
          className="size-12 rounded-full bg-light-background-300 object-cover"
          alt="User Profile Image"
        />
      ) : (
        <div className="size-12 rounded-full bg-light-background-300" />
      )}
      <div className="text-sm text-light-text-100">
        <div>Signed in as</div>
        <div className="font-semibold">{session?.data?.user.username}</div>
      </div>
    </Link>
  );
}
