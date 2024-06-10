"use client";

import { useEffect, useRef, useState } from "react";
import ProfileTabsText from "./ProfileTabsMenu";
import ProfileAboutTabs from "./ProfileAboutTab";
import ProfileDonatedTab from "./ProfileDonatedTab";
import ProfileVolunteeredTab from "./ProfileVolunteeredTab";
import { MapPin } from "lucide-react";
import ProfileCreatedTab from "./ProfileCreatedTab";
import { UserProfileEntity } from "@/lib/model/user/user.entity";
import { profile } from "console";
import Image from "next/image";
import { useWindowScroll } from "@uidotdev/usehooks";

export enum ProfileTabEnum {
  ABOUT = "About",
  CREATED = "Created",
  DONATED = "Donated",
  VOLUNTEERED = "Volunteered",
}

const tabsDictionary = {
  [ProfileTabEnum.ABOUT]: { component: ProfileAboutTabs },
  [ProfileTabEnum.CREATED]: { component: ProfileCreatedTab },
  [ProfileTabEnum.DONATED]: { component: ProfileDonatedTab },
  [ProfileTabEnum.VOLUNTEERED]: { component: ProfileVolunteeredTab },
};

interface ProfileTabsProps {
  profileData: UserProfileEntity;
}

export default function ProfileTabs({ profileData }: ProfileTabsProps) {
  const [activeTab, setActiveTab] = useState<ProfileTabEnum>(
    ProfileTabEnum.ABOUT,
  );
  const handleActiveTab = (tab: ProfileTabEnum) => {
    window.scrollTo(0, 352);
    setActiveTab(tab);
  };

  const ActiveTabComponent = tabsDictionary[activeTab].component;

  const [{ x, y }, scrollTo] = useWindowScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }, [scrollTo]);

  useEffect(() => {
    if (y && y > 365) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [y]);

  return (
    <div className="h-full w-full">
      <div className="sticky top-[132px] z-30 w-full shadow md:top-[141.9px]">
        <div
          className={`fixed top-[60px] w-full transition-opacity duration-150 ease-in-out md:top-[69.6px] ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex w-full items-center justify-center bg-light-background-100">
            <div className="container m-auto bg-light-background-100">
              <div className="flex items-center gap-x-6 py-3">
                {profileData.user?.imageUrl ? (
                  <Image
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="size-12 rounded-full bg-light-background-300 object-cover"
                    src={profileData.user?.imageUrl}
                    alt="User Profile Image"
                  />
                ) : (
                  <div className="size-12 rounded-full bg-light-background-300" />
                )}
                <div className="flex flex-col justify-center">
                  <div className="text-lg font-medium">
                    {profileData.user?.username}
                  </div>
                  <div className="flex items-center gap-x-2 text-light-text-100">
                    <MapPin size={12} />
                    <div className="text-xs">
                      {profileData.address ?? "Unknown"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            className={`border-light-background-300 transition-opacity duration-0 ease-in-out ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <div className="flex w-full items-center justify-center bg-light-background-100">
          <div className="container flex flex-row items-center gap-6">
            <ProfileTabsText
              menu={ProfileTabEnum.ABOUT}
              activeTab={activeTab}
              onClick={handleActiveTab}
            />
            <ProfileTabsText
              menu={ProfileTabEnum.CREATED}
              activeTab={activeTab}
              onClick={handleActiveTab}
            />
            <ProfileTabsText
              menu={ProfileTabEnum.DONATED}
              activeTab={activeTab}
              onClick={handleActiveTab}
            />
            <ProfileTabsText
              menu={ProfileTabEnum.VOLUNTEERED}
              activeTab={activeTab}
              onClick={handleActiveTab}
            />
          </div>
        </div>
      </div>
      <div className="container m-auto flex h-full flex-col gap-4 py-4">
        <ActiveTabComponent profileData={profileData} />
      </div>
    </div>
  );
}
