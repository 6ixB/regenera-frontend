"use client"

import { useEffect, useState } from "react"
import Input from "@/components/forms/Input"
import Button from "@/components/base/Button"
import { SubmitHandler, useForm } from "react-hook-form"
import { UpdateProjectDto, UpdateProjectDtoSchema, VolunteerProjectDto, VolunteerProjectDtoSchema } from "@/lib/model/project/project.dto"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"
import { updateProjectByIdMutationFn } from "@/lib/api/projectApi"
import { useRouter } from "next/navigation"
import { FrontendRoutesEnum } from "@/lib/routes"
import toast from "react-hot-toast"
import { Goal } from "lucide-react"
import { error } from "console"
import CheckboxInput from "@/components/forms/CheckboxInput"

interface VolunteerProjectForm {
    id: string
}

export default function VolunteerProjectForm({ id }: VolunteerProjectForm) {

    const router = useRouter()

    const { data: session } = useSession()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues
    } = useForm<VolunteerProjectDto>({
        resolver: zodResolver(VolunteerProjectDtoSchema),
    });

    const updateProject = useMutation({
        mutationFn: updateProjectByIdMutationFn,
        onSuccess: () => {
            router.push(
                `${FrontendRoutesEnum.PROJECTS.toString()}/${id}`
            );
            router.refresh();
        },
        onError: (error) => {
            console.log(error);
        },
    })

    const onSubmit: SubmitHandler<VolunteerProjectDto> = async () => {

        const data: UpdateProjectDto = {
            volunteerId: session?.user.id
        }

        toast.promise(updateProject.mutateAsync({ id: id, updateProjectDto: data, accessToken: session?.accessToken! }),
            {
                loading: 'Processing...',
                success: 'You are a volunteer now!',
                error: 'An error occurred when processsing your request',
            })
    };


    return (

        <form className="w-full md:w-9/12 h-fit flex flex-col gap-y-4 items-start" onSubmit={handleSubmit(onSubmit)}>

            <h3 className="text-3xl font-semibold">Volunteer</h3>

            <p className="text-lg font-medium pt-4">Agreement</p>
            <div className="w-full flex flex-col gap-y-8">
                <CheckboxInput type="checkbox" label={"Project Objective"}
                    desc="I have read and understood the project's objectives, including its goals, scope, and expected outcomes. I acknowledge that I am volunteering for a cause that aims to make the world a better place."
                    icon={<Goal />}
                    error={errors.agreeProjectObjective?.message}
                    {...register("agreeProjectObjective")}
                />
                <CheckboxInput type="checkbox" label={"Participation Commitment"}
                    desc="I am fully aware of the requirement to attend the project location as scheduled and actively participate in all assigned tasks and activities. I commit to dedicating my time and effort to ensure the project's success, understanding the importance of my role in the team."
                    icon={<Goal />}
                    error={errors.agreeParticipationCommitment?.message}
                    {...register("agreeParticipationCommitment")}
                />
                <CheckboxInput type="checkbox" label={"Terms and Conditions"}
                    desc="I have read, understood, and accept the terms and conditions of volunteering, including any policies on confidentiality, liability, and conduct. I agree to adhere to all guidelines and instructions provided by the project organizers and respect the community and environment in which the project operates."
                    icon={<Goal />}
                    error={errors.agreeTermsAcceptance?.message}
                    {...register("agreeTermsAcceptance")}
                />
            </div>

            <Button variant="solid" className="w-full mt-4" type={"submit"}>
                Volunteer Now
            </Button>
        </form>
    )
}