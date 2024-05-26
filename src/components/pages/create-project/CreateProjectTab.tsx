'use client'

import { useState } from "react";
import CreateProjectDetailsTab from "./CreateProjectDetailsTab";
import CreateProjectTitleTab from "./CreateProjectTitleTab";

export enum CreateProjectTabEnum {
    TITLE = 'Title',
    DETAILS = 'Details'
}

export default function CreateProjectTab() {

    const [activeTab, setActiveTab] = useState<CreateProjectTabEnum>(CreateProjectTabEnum.TITLE)

    const handleActiveTab = (tab: CreateProjectTabEnum) => {

        setActiveTab(tab)
    }

    return (
        <div className="w-full flex justify-center overflow-hidden">
            <div className={`w-full flex transition-all duration-500 ${activeTab === CreateProjectTabEnum.TITLE ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={`min-w-full `}>
                    <CreateProjectTitleTab handleActiveTab={handleActiveTab} className={`${activeTab === CreateProjectTabEnum.TITLE ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                <div className={`min-w-full`}>
                    <CreateProjectDetailsTab handleActiveTab={handleActiveTab} className={`t${activeTab === CreateProjectTabEnum.DETAILS ? 'opacity-100 h-fit' : 'opacity-0 h-0'}`} />
                </div>
            </div>

        </div>
    );
}