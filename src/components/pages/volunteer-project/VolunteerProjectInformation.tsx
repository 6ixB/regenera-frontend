"use client"

import { getProjectByIdFn } from "@/lib/api/projectApi";
import { ProjectEntity } from "@/lib/model/project/project.entity";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Image from "next/image";

interface VolunteerProjectInformationProps {
    id: string
}

export default function VolunteerProjectInformation({ id }: VolunteerProjectInformationProps) {
    const { data, isFetching, isSuccess } = useQuery<AxiosResponse<ProjectEntity>>
        ({
            queryKey: ["projectDetail"],
            queryFn: () => getProjectByIdFn(id),
        });

    const projectData = data?.data

    if (!projectData) return

    return (
        <div className="w-full md:w-6/12 h-fit flex flex-col border rounded-lg shadow bg-light-background-100 ">
            <div className="w-full flex flex-col">
                <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    className={`w-full h-auto max-h-80 aspect-square object-cover border rounded-t-lg shadow`}
                    src={
                        projectData.imageUrl
                    }
                    alt={"User Profile"} />
            </div>
            <div className="w-full flex flex-col px-4 py-6 gap-y-2">

                <p className="text-base text-start">Volunteer to support <b>{projectData.title}</b></p>
                {projectData.donations?.length > 0
                    ?
                    <p className="text-md text-light-text-200 font-medium text-start">Join {projectData.donations?.length} other on this project!</p>
                    :
                    <p className="text-md text-light-text-200 font-medium text-start">Be the first volunteer for this project!</p>
                }
            </div>

        </div>

    )
}