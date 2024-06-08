import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { auth } from "@/lib/next-auth/auth";
import { FrontendRoutesEnum } from "@/lib/routes";
import { MapPin, SquarePen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProfileHeaderProps {
  profileData: UserProfileEntity;
}

export default async function ProfileHeader({
  profileData,
}: ProfileHeaderProps) {
  const session = await auth();

  return (
    <>
      <div className="h-fit w-full bg-light-background-100">
        {profileData.bannerUrl ? (
          <Image
            sizes="100vw"
            width={0}
            height={0}
            src={profileData.bannerUrl}
            alt="User Profile Banner"
            className="h-80 w-full bg-light-background-300 object-cover"
          />
        ) : (
          <div className="h-80 w-full bg-light-background-300"></div>
        )}

        <div className="container m-auto flex h-44 gap-6">
          {profileData.user?.imageUrl ? (
            <Image
              sizes="100vw"
              width={0}
              height={0}
              src={profileData.user?.imageUrl}
              alt="User Profile Image"
              className="aspect-square h-[130%] w-auto -translate-y-1/2 rounded-full border-4 border-light-background-100 bg-light-background-300 object-cover"
            />
          ) : (
            <div className="aspect-square h-[130%] w-auto -translate-y-1/2 rounded-full border-4 border-light-background-100 bg-light-background-300"></div>
          )}

          <div className="flex flex-col gap-y-2 py-6">
            <div className="flex items-center gap-x-4 text-light-text-100">
              <h2 className="text-3xl font-medium">
                {profileData.user?.username}
              </h2>
              {session?.user.id === profileData.user?.id && (
                <div className="hs-tooltip inline-block">
                  <Link
                    href={FrontendRoutesEnum.SETTINGS_PROFILE.toString()}
                    className="hs-tooltip-toggle inline-flex items-center justify-center gap-2 rounded p-2 text-light-text-100 hover:bg-light-background-200"
                  >
                    <SquarePen size={20} />
                    <span
                      className="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-light-primary-100 px-2 py-1 text-xs font-medium text-light-background-100 opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
                      role="tooltip"
                    >
                      Edit user profile
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <div className="flex items-center gap-x-2 text-light-text-100">
              <MapPin size={14} />
              <div className="text-sm">{profileData.address ?? "Unknown"}</div>
            </div>
          </div>
        </div>
      </div>

      <hr className={"border-light-background-300"} />
    </>
  );
}
