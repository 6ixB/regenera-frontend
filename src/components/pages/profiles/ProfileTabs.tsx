"use client";

import { useEffect, useState } from "react";
import ProfileTabsText from "./ProfileTabsMenu";
import ProfileAboutTabs from "./ProfileAboutTab";
import ProfileDonatedTab from "./ProfileDonatedTab";
import ProfileVolunteeredTab from "./ProfileVolunteeredTab";
import { MapPin } from "lucide-react";
import ProfileCreatedTab from "./ProfileCreatedTab";

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

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState<ProfileTabEnum>(
    ProfileTabEnum.ABOUT
  );
  const handleActiveTab = (tab: ProfileTabEnum) => {
    window.scrollTo(0, 352);
    setActiveTab(tab);
  };

  const ActiveTabComponent = tabsDictionary[activeTab].component;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setIsScrolled(scrollTop >= 356);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full sticky top-[132px] md:top-[141.9px] z-40 shadow">
        <div
          className={`w-full fixed top-[60px] md:top-[69.6px] transition-opacity duration-150 ease-in-out ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full bg-light-background-100 flex items-center justify-center">
            <div className="container bg-light-background-100 m-auto">
              <div className="flex items-center gap-x-6 py-3">
                <div className="size-12 bg-light-background-300 rounded-full" />
                <div className="flex flex-col justify-center">
                  <div className="text-lg font-medium">Robert William</div>
                  <div className="flex items-center gap-x-2 text-light-text-100">
                    <MapPin size={12} />
                    <div className="text-xs">Kemanggisan, Jakarta Barat</div>
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
        <div className="w-full bg-light-background-100 flex items-center justify-center">
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
      <div className="h-full container flex flex-col gap-4 m-auto py-4">
        <ActiveTabComponent />
      </div>
    </div>
  );
}
