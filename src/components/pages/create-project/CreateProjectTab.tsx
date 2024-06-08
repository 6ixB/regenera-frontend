'use client'

import { useEffect, useState } from "react";
import CreateProjectDetailsTab from "./create-project-details/CreateProjectDetailsTab";
import CreateProjectTitleTab from "./create-project-title/CreateProjectTitleTab";
import { CreateProjectDto } from "@/lib/model/project/project.dto";
import { useMutation } from "@tanstack/react-query";
import { createProjectMutationFn } from "@/lib/api/projectApi";
import { useRouter } from "next/navigation";
import { FrontendRoutesEnum } from "@/lib/routes";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { CircleCheck } from "lucide-react";

export enum CreateProjectTabEnum {
    TITLE = 'Title',
    DETAILS = 'Details'
}

export default function CreateProjectTab() {

    const router = useRouter();

    const { data: session } = useSession()

    const [formData, setFormData] = useState<Partial<CreateProjectDto>>({})
    const [activeTab, setActiveTab] = useState<CreateProjectTabEnum>(CreateProjectTabEnum.TITLE)

    const createProject = useMutation({
        mutationFn: createProjectMutationFn,
        onSuccess: () => {
            router.push(
                `${FrontendRoutesEnum.DISCOVER.toString()}`
            );
            router.refresh();
        },
        onError: (error) => {
            console.log(error);
        },
    })

    const handleFormData = async (latestFormData: Partial<CreateProjectDto>, isSubmit: boolean = false) => {

        setFormData((prevData) => ({
            ...prevData,
            ...latestFormData,
        }));

        console.log(session?.user);


        if (isSubmit) {
            console.log('Final Form Data: ', { ...formData, ...latestFormData });

            const finalFormData: CreateProjectDto = ({ ...formData, ...latestFormData, organizerId: session?.user.id }) as CreateProjectDto

            const response = await createProject.mutateAsync(finalFormData)

            if (response.data) {

                toast.success('Project launched successfully')
            } else {
                toast.error('An error occured when creating project')
            }

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