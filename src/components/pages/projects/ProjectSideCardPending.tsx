import Button from "@/components/base/Button"
import Input from "@/components/forms/Input"
import { updateProjectByIdMutationFn } from "@/lib/api/projectApi"
import { UpdateProjectDto, UpdateProjectDtoSchema } from "@/lib/model/project/project.dto"
import { ProjectEntity } from "@/lib/model/project/project.entity"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { CalendarCheck2, Clock } from "lucide-react"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"

interface ProjectSideCardPendingProps {
    projectData: ProjectEntity,
    isOngoing: boolean,
    isOrganizer: boolean,
    session: Session | null,
}

export function ProjectSideCardPending({ session, projectData, isOngoing, isOrganizer }: ProjectSideCardPendingProps) {

    const router = useRouter()

    const updateProject = useMutation({
        mutationFn: updateProjectByIdMutationFn,
        onSuccess: () => {
            router.refresh()
        },
        onError: (error) => {
            console.log(error);
        },
    })

    const { register, handleSubmit, formState: { errors }, watch, getValues } = useForm<UpdateProjectDto>({
        resolver: zodResolver(UpdateProjectDtoSchema),
    });

    const onSubmit: SubmitHandler<UpdateProjectDto> = async (data) => {

        toast.promise(updateProject.mutateAsync({ id: projectData.id, updateProjectDto: data, accessToken: session?.accessToken! }),
            {
                loading: 'Saving meet up date...',
                success: 'Meet up date has been set',
                error: 'An error occurred when saving meet up date',
            })

    };

    return (
        <div className={"w-full text-light-text-100 flex flex-col gap-y-4 bg-light-background-200 p-4"}>
            {(!isOrganizer && isOngoing)
                &&
                (
                    <div className={"flex gap-y-1 items-start flex-col"}>
                        <div className={"text-xl font-medium my-auto flex gap-x-2 items-center"}>
                            <Clock />
                            <p>
                                Waiting for Meet Up Date
                            </p>
                        </div>
                        <p className={"text-sm"}>meet up date is set by the project&apos;s organizer</p>
                    </div>
                )
            }

            {(isOngoing) ?
                <>

                    {
                        isOrganizer ?
                            (
                                <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-y-4">

                                    <Input
                                        icon={<CalendarCheck2 className="text-light-text-100" />}
                                        label={"Meet Up Date"}
                                        desc={"Arrange the meet up date to realize your project"}
                                        className={"border-light-primary-100 placeholder-light-background-300 text-base"}
                                        placeholder={"e.g. 10-19-2004"}
                                        type={"date"}
                                        error={errors.meetupDate?.message}
                                        {...register('meetupDate', {
                                            setValueAs: value => (new Date(value))
                                        })}
                                    />

                                    <Button
                                        variant="solid"
                                        className={
                                            "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none hover:opacity-75"
                                        }
                                        type="submit"
                                    >
                                        Set Date
                                    </Button>
                                </form>
                            )
                            :
                            <Button
                                variant="solid"
                                className={
                                    "bg-gradient-to-r from-light-primary-200 to-light-primary-100 border-none opacity-75 hover:opacity-75 "
                                }

                            >
                                Pending
                            </Button>
                    }

                </>
                : projectData.meetupDate && (
                    <div className={"flex gap-y-1 items-start flex-col"}>
                        <div className={"text-xl font-medium my-auto flex gap-x-2 items-center"}>
                            <CalendarCheck2 />
                            <p>
                                {new Date(projectData?.meetupDate).toUTCString() || ''}
                            </p>
                        </div>
                        <p className={"text-sm"}>meet up date is set by the project&apos;s organizer</p>
                    </div>
                )
            }

        </div >
    )
}