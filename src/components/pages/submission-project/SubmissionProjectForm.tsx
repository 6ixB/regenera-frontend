"use client"

import { useEffect, useState } from "react"
import Input from "@/components/forms/Input"
import Button from "@/components/base/Button"
import { SubmitHandler, useForm } from "react-hook-form"
import { UpdateProjectDto, UpdateProjectDtoSchema } from "@/lib/model/project/project.dto"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"
import { updateProjectByIdMutationFn } from "@/lib/api/projectApi"
import { useRouter } from "next/navigation"
import { FrontendRoutesEnum } from "@/lib/routes"
import toast from "react-hot-toast"
import { ProjectEntity } from "@/lib/model/project/project.entity"
import { Session } from "next-auth"
import SubmissionProjectFormCard from "./SubmissionProjectFormCard"

interface SubmissionProjectFormProps {
    projectData: ProjectEntity,
    session: Session | null,
}

export default function SubmissionProjectForm({ projectData, session }: SubmissionProjectFormProps) {

    const [files, setFiles] = useState<(File | null)[]>(projectData.objectives.map(() => null));

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<UpdateProjectDto>({
        resolver: zodResolver(UpdateProjectDtoSchema),
    });

    const updateProject = useMutation({
        mutationFn: updateProjectByIdMutationFn,
        onSuccess: () => {
        },
        onError: (error) => {
            console.log(error);
        },
    })

    const handleFileChange = (idx: number, file: File) => {
        setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            newFiles[idx] = file;
            return newFiles;
        });
    };

    const onSubmit: SubmitHandler<UpdateProjectDto> = async (data) => {

        const userId = session?.user?.id || "";

        

        data.submissionObjectiveIds = projectData.objectives.map(objective => objective.id);
        data.submissionImages = files.filter(file => file !== null) as File[];
        data.submissionSubmitterIds = files.map(file => (file !== null ? userId : null)).filter(id => id !== null) as string[];
        

        toast.promise(updateProject.mutateAsync({ id: projectData.id, updateProjectDto: data, accessToken: session?.accessToken! }),
            {
                loading: 'Processing your donation...',
                success: 'Donation has been made',
                error: 'An error occurred when processsing your donation',
            })

    };

    return (

        <form className="w-full h-fit flex flex-col gap-y-4 items-start" onSubmit={handleSubmit(onSubmit)} >

            <h3 className="text-3xl font-semibold">Submission</h3>
            <p className="text-lg font-medium mt-2">Objectives</p>

            <div className="w-full h-fit grid grid-cols-3 gap-4 p-4">
                {projectData.objectives.map((objective, idx) => (
                    <SubmissionProjectFormCard objective={objective} idx={idx} key={idx} 
                    onFileChange={handleFileChange} />
                ))}
            </div>

            <Button variant="solid" className="w-full mt-4" type={"submit"}>
                Submit
            </Button>
        </form >
    )
}