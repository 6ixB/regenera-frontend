'use client'

import { useEffect, useState } from "react";
import CreateProjectDetailsTab from "./create-project-details/CreateProjectDetailsTab";
import CreateProjectTitleTab from "./create-project-title/CreateProjectTitleTab";
import { CreateProjectDto } from "@/lib/model/project/project.dto";

export enum CreateProjectTabEnum {
    TITLE = 'Title',
    DETAILS = 'Details'
}

export default function CreateProjectTab() {

    const [formData, setFormData] = useState<Partial<CreateProjectDto>>({})
    const [activeTab, setActiveTab] = useState<CreateProjectTabEnum>(CreateProjectTabEnum.TITLE)

    const handleFormData = (data: Partial<CreateProjectDto>, isSubmit: boolean = false) => {

        setFormData((prevData) => ({
            ...prevData,
            ...data,
        }));

        if (isSubmit) {
            console.log('Final Form Data: ', { ...formData, ...data });

        }
        
    }

    useEffect(() => {

        console.log('Form Data: ', formData);
    }, [formData])

    const handleActiveTab = (tab: CreateProjectTabEnum) => {

        setActiveTab(tab)
    }

    return (
        <div className="w-full flex justify-center overflow-hidden">
            <div className={`w-full flex transition-all duration-500 ${activeTab === CreateProjectTabEnum.TITLE ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={`min-w-full`}>
                    <CreateProjectTitleTab handleFormData={handleFormData} handleActiveTab={handleActiveTab} className={`${activeTab === CreateProjectTabEnum.TITLE ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                <div className={`min-w-full`}>
                    <CreateProjectDetailsTab handleFormData={handleFormData} handleActiveTab={handleActiveTab} className={`t${activeTab === CreateProjectTabEnum.DETAILS ? 'opacity-100 h-fit' : 'opacity-0 h-0'}`} />
                </div>
            </div>

        </div>
    );
}