'use client'

import { useState } from "react";
import ProfileTabsText from "./ProfileTabsMenu";
import ProfileAboutTabs from "./ProfileAboutTab";
import ProfileDonatedTab from "./ProfileDonatedTab";
import ProfileVolunteeredTab from "./ProfileVolunteeredTab";

export enum ProfileTabEnum {
    ABOUT = 'About',
    DONATED = 'Donated',
    VOLUNTEERED = 'Volunteered'
}

const tabsDictionary = {
    [ProfileTabEnum.ABOUT]: {component: ProfileAboutTabs},
    [ProfileTabEnum.DONATED]: {component: ProfileDonatedTab},
    [ProfileTabEnum.VOLUNTEERED]: {component: ProfileVolunteeredTab}
}

export default function ProfileTabs(){

    const [activeTab, setActiveTab] = useState<ProfileTabEnum>(ProfileTabEnum.ABOUT)
    const handleActiveTab = (tab: ProfileTabEnum) => {
        
        setActiveTab(tab)
    }

    const ActiveTabComponent = tabsDictionary[activeTab].component

    return(
        <div className="w-full h-fit">

            <div className="w-full sticky top-12 md:top-[4.15rem] bg-light-background-100 ">
                <hr className={"border-light-background-300"} />

                <div className="w-3/4 flex flex-row items-center gap-6 m-auto">
                    <ProfileTabsText menu={ProfileTabEnum.ABOUT} activeTab={activeTab} onClick={handleActiveTab}/>
                    <ProfileTabsText menu={ProfileTabEnum.DONATED} activeTab={activeTab} onClick={handleActiveTab}/>
                    <ProfileTabsText menu={ProfileTabEnum.VOLUNTEERED} activeTab={activeTab} onClick={handleActiveTab}/>
                </div>

                <hr className={"border-light-background-300"} />
            </div>

            <div className="w-3/4 flex flex-col gap-4 m-auto py-2">
                <ActiveTabComponent />
            </div>
        </div>
    )
}