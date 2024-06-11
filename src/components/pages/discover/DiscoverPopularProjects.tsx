'use client'

import { useState } from "react";
import DiscoverPopularProjectSlide from "./DiscoverPopularProjectSlide";
import { useQuery } from "@tanstack/react-query";
import { getPopularProjectsFn } from "@/lib/api/projectApi";
import { AxiosResponse } from "axios";
import { ProjectEntity } from "@/lib/model/project/project.entity";

export default function DiscoverPopularProjects() {

    const { data: projects, isSuccess, refetch } = useQuery<AxiosResponse<ProjectEntity[]>>({
        queryKey: ["popularProjects"],
        queryFn: () => getPopularProjectsFn(),
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        refetchOnMount: true
    });

    const [activeNumber, setActiveNumber] = useState(1)

    const handleExpandSlide = (number: number) => {
        setActiveNumber(number)
    }

    if (!projects?.data || projects?.data.length < 5) return

    return (
        <>
            <h3 className="text-3xl font-medium text-light-text-100 py-2 text-center">Join the Movement: Popular Projects</h3>

            <div className="w-full h-[40rem] md:h-full flex flex-col gap-2 md:flex-row pb-8 ">

                {(isSuccess && projects.data) && projects.data.map((projectData, idx) => (
                    <DiscoverPopularProjectSlide projectData={projectData} number={idx + 1} activeNumber={activeNumber} onClick={handleExpandSlide} key={idx} />
                ))}
            </div>
        </>
    )
}