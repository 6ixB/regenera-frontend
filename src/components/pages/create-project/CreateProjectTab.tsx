'use client'

import { useState } from "react";
import CreateProjectDetailsTab from "./CreateProjectDetailsTab";
import CreateProjectTitleTab from "./CreateProjectTitleTab";

export enum CreateProjectTabEnum {
    TITLE = 'Title',
    DETAILS = 'Details'
}

export default function CreateProjectTab(){

    const [activeTab, setActiveTab] = useState<CreateProjectTabEnum>(CreateProjectTabEnum.TITLE)

    const handleActiveTab = (tab: CreateProjectTabEnum) => {
        
        setActiveTab(tab)
    }

    return (
        <div className="container flex items-center justify-center overflow-hidden">
            <div className={`w-full transition-transform duration-500 flex ${activeTab === CreateProjectTabEnum.TITLE ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={`min-w-full`}>
                    <CreateProjectTitleTab handleActiveTab={handleActiveTab} />
                </div>

                <div className={`min-w-full ${activeTab === CreateProjectTabEnum.DETAILS ? 'flex' : 'hidden'}`}>
                    <CreateProjectDetailsTab handleActiveTab={handleActiveTab} />
                </div>
            </div>
        </div>
    );
}