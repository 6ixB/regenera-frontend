import { UserProfileEntity } from "@/lib/model/user/user.entity";
import {
  Cake,
  Facebook,
  Info,
  Instagram,
  Linkedin,
  Smartphone,
  Star,
  Twitter,
  Waypoints,
} from "lucide-react";
import Link from "next/link";

function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const monthDiff = now.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

interface ProfileAboutInformationProps {
  profileData: UserProfileEntity;
}

export default function ProfileAboutInformation({
  profileData,
}: ProfileAboutInformationProps) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="flex w-2/3 flex-col gap-8 rounded-md bg-light-background-100 p-6 shadow">
      <div className="flex w-full gap-x-8 py-2">
        <div className="w-2/6 md:w-1/6">
          <div className="flex w-32 items-center gap-x-2 text-light-text-100">
            <Star size={18} />
            <div className="text-base font-semibold">Rating</div>
          </div>
        </div>
        <div className="flex w-full items-center gap-x-1">
          <p className="text-base font-medium text-light-text-100">
            {profileData?.user?.rating ? (
              <>
                {profileData.user.rating}
                <span className="font-medium"> (#1023)</span>
              </>
            ) : (
              "Unavailable"
            )}
          </p>
        </div>
      </div>

      <div className="flex w-full gap-x-8 py-2">
        <div className="w-2/6 md:w-1/6">
          <div className="flex w-32 items-center gap-x-2 text-light-text-100">
            <Cake size={20} />
            <div className="text-base font-semibold">Birthdate</div>
          </div>
        </div>
        <div className="flex w-full items-center gap-1">
          <p className="text-base text-light-text-100">
            {profileData?.birthDate ? (
              <>
                {new Date(profileData.birthDate).toLocaleDateString(
                  "en-GB",
                  dateOptions,
                )}
                <span className="ms-2 font-medium">
                  {`(${calculateAge(new Date(profileData.birthDate).toDateString())} years)`}
                </span>
              </>
            ) : (
              "Unavailable"
            )}
          </p>
        </div>
      </div>

      <div className="flex w-full gap-x-8 py-2">
        <div className="w-2/6 md:w-1/6">
          <div className="flex w-32 items-center gap-x-2 text-light-text-100">
            <Smartphone size={20} />
            <div className="text-base font-semibold">Phone</div>
          </div>
        </div>
        <div className="flex w-full items-center gap-1">
          <p className="text-base text-light-text-100">
            {profileData?.phone ? profileData.phone : "Unavailable"}
          </p>
        </div>
      </div>

      <div className="flex h-full w-full flex-1 gap-x-8">
        <div className="w-2/6 md:w-1/6">
          <div className="flex w-32 items-center gap-x-2 text-light-text-100">
            <Info size={18} />
            <div className="text-base font-semibold">Biography</div>
          </div>
        </div>
        <div className="me-8 flex w-full flex-col gap-y-2">
          <p className="w-full text-base text-light-text-100">
            {profileData?.bio ? <>{profileData.bio}</> : "Unavailable"}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center gap-x-8">
        <div className="w-2/6 md:w-1/6">
          <div className="flex w-32 items-center gap-x-2 text-light-text-100">
            <Waypoints size={18} />
            <div className="text-base font-semibold">Socials</div>
          </div>
        </div>
        <div className="me-8 flex w-full flex-wrap gap-1 text-light-text-100">
          {!profileData?.instagramUrl &&
            !profileData?.twitterUrl &&
            !profileData?.facebookUrl &&
            !profileData?.linkedinUrl &&
            "Unavailable"}
          {profileData?.instagramUrl && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={profileData.instagramUrl}
              className="flex cursor-pointer items-center rounded p-2 hover:bg-light-background-200"
            >
              <Instagram size={20} />
            </Link>
          )}
          {profileData?.twitterUrl && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={profileData.twitterUrl}
              className="flex cursor-pointer items-center rounded p-2 hover:bg-light-background-200"
            >
              <Twitter size={20} />
            </Link>
          )}
          {profileData?.facebookUrl && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={profileData.facebookUrl}
              className="flex cursor-pointer items-center rounded p-2 hover:bg-light-background-200"
            >
              <Facebook size={20} />
            </Link>
          )}
          {profileData?.linkedinUrl && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={profileData.linkedinUrl}
              className="flex cursor-pointer items-center rounded p-2 hover:bg-light-background-200"
            >
              <Linkedin size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
