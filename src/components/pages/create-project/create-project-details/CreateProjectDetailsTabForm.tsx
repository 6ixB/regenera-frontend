'use client'

import Input from "@/components/forms/Input";
import CreateProjectDetailsTabFormObjectives from "./CreateProjectDetailsTabObjectives";
import { CalendarCheck2, CircleCheck, Goal, HandCoins, MapPinned, NotebookPen } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProjectDetailsDto, CreateProjectDetailsDtoSchema, CreateProjectDto, ProjectObjectiveDto } from "@/lib/model/project/project.dto";
import TextArea from "@/components/forms/TextArea";
import Button from "@/components/base/Button";
import CreateProjectDetailsTabRequirements from "./CreateProjectDetailsTabRequirements";
import { ProjectRequirement } from "./CreateProjectDetailsTabRequirementsItem";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface CreateProjectDetailsTabFormProps {
    handleFormData: (data: Partial<CreateProjectDto>, isSubmit?: boolean) => void
}

export default function CreateProjectDetailsTabForm({ handleFormData }: CreateProjectDetailsTabFormProps) {

    const { register, handleSubmit, formState: { errors }, watch, setValue, getValues } = useForm<CreateProjectDetailsDto>({ resolver: zodResolver(CreateProjectDetailsDtoSchema) })

    const objectives = watch('objectives')
    const requirements = watch('requirements')

    const handleObjectives = (images?: FileList, idx?: number, description?: string) => {

        const currentObjectives = getValues('objectives')

        if (images) {

            const newObjectives = Array.from(images).map((image) => ({
                objectiveImage: image,
            }))

            if (!currentObjectives) return setValue('objectives', newObjectives)

            setValue('objectives', [...currentObjectives, ...newObjectives])
        }

        if (idx !== undefined && description !== undefined) {

            setValue('objectives', currentObjectives.map((objective, index) =>
                index === idx ? { ...objective, objective: description } : objective
            ));

            toast.custom(
                <div
                    className="max-w-xs bg-white border border-light-background-300 md:shadow-sm rounded-xl"
                    role="alert"
                >
                    <div className="flex p-4 text-light-text-100 items-center">
                        <CircleCheck size={20} className="flex-shrink-0" />
                        <div className="ms-3">Changes has been saved</div>
                    </div>
                </div>
            );
        }

    }

    const handleRemoveObjectives = (idx: number) => {

        const updatedObjectives = objectives.filter((_, index) => index !== idx);

        setValue('objectives', updatedObjectives);

    }

    const handleAddRequirements = (requirement: ProjectRequirement) => {

        const currentRequirements = getValues('requirements')

        if (!currentRequirements) return setValue('requirements', [requirement])

        setValue('requirements', [...currentRequirements, requirement])

    }

    const handleRemoveRequirements = (idx: number) => {

        const updatedRequirements = requirements.filter((_, index) => index !== idx);

        setValue('requirements', updatedRequirements);

    }

    const onSubmit: SubmitHandler<CreateProjectDetailsDto> = async (data) => {

        handleFormData(data, true)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-2/3 flex flex-col gap-y-10 p-8">

            <div className="w-full h-full relative">

                <CreateProjectDetailsTabFormObjectives {...register('objectives')} objectives={objectives} handleObjectives={handleObjectives} handleRemoveObjectives={handleRemoveObjectives} />

                {Array.isArray(errors.objectives) && errors.objectives.length > 0 ? (
                    errors.objectives.some(error => error.message) ? (
                        <ul>
                            {errors.objectives.map((error, index) => (
                                error.message && (
                                    <li key={index} className="text-sm text-light-accent-100">
                                        {error.message}
                                    </li>
                                )
                            ))}
                        </ul>
                    ) : (
                        <ul>
                            {errors.objectives.map((obj, index) => (
                                obj.objective?.message && (
                                    <li key={index} className="text-sm text-light-accent-100">
                                        {obj.objective.message} with a minimal of 4 characters [{index}] 
                                    </li>
                                )
                            ))}
                        </ul>
                    )
                ) : null}


            </div>

            <Input
                icon={<MapPinned className="text-light-text-100" />}
                label={"Address"}
                desc={"Share the project's location"}
                className={"border-light-primary-100 placeholder-light-background-300"}
                placeholder={"e.g. Jl. Mandala No.3, Kemanggisan, Jakarta Barat"}
                error={errors.address?.message}
                {...register('address')}
            />

            <div className="w-full flex flex-col gap-6 items-end md:flex-row">
                <Input
                    icon={<CalendarCheck2 className="text-light-text-100" />}
                    label={"Crowdfund End Date"}
                    desc={"Arrange the deadline of crowdfunding"}
                    className={"border-light-primary-100 placeholder-light-background-300 text-base"}
                    placeholder={"e.g. 10-19-2004"}
                    type={"date"}
                    error={errors.fundingGoalDeadline?.message}
                    {...register('fundingGoalDeadline')}
                />

                <Input
                    icon={<HandCoins className="text-light-text-100" />}
                    label={"Minimum Fund [All or Nothing]"}
                    desc={"Determine the minimum fund of your project to start "}
                    className={"border-light-primary-100 placeholder-light-background-300"}
                    placeholder={"e.g. Rp 9.500.000,00"}
                    type={"number"}
                    step={100000}
                    min={0}
                    error={errors.fundingGoal?.message}
                    {...register('fundingGoal')}
                />
            </div>

            <div className="w-full flex flex-col gap-6 items-end md:flex-row">
                <Input
                    icon={<CalendarCheck2 className="text-light-text-100" />}
                    label={"Volunteer Registration End Date"}
                    desc={"Arrange the deadline of volunteer registration"}
                    className={"border-light-primary-100 placeholder-light-background-300 text-base"}
                    placeholder={"e.g. 10-19-2004"}
                    type={"date"}
                    error={errors.volunteerGoalDeadline?.message}
                    {...register('volunteerGoalDeadline')}
                />

                <Input
                    icon={<HandCoins className="text-light-text-100" />}
                    label={"Minimum Volunteer [All or Nothing]"}
                    desc={"Define minimum volunteer to realize your project"}
                    className={"border-light-primary-100 placeholder-light-background-300"}
                    placeholder={"e.g. 100"}
                    type={"number"}
                    step={1}
                    min={0}
                    error={errors.volunteerGoal?.message}
                    {...register('volunteerGoal')}
                />
            </div>

            <TextArea
                icon={<NotebookPen className="text-light-text-100" />}
                label={"Description"}
                desc={"Share your goals and plans"}
                className={"border-light-primary-100 placeholder-light-background-300 h-[20rem] w-full resize-none"}
                placeholder="e.g. 
                    Our project, Cleaning Binus Anggrek, aims to restore and beautify the Binus Anggrek campus through a comprehensive cleanup effort. Our goals are to create a healthier, more aesthetically pleasing environment for students, staff, and visitors, while fostering a sense of community and environmental responsibility."
                error={errors.description?.message}
                {...register('description')}
            />
            <div className="w-full h-full relative">

                <CreateProjectDetailsTabRequirements requirements={requirements} handleAddRequirements={handleAddRequirements} handleRemoveRequirements={handleRemoveRequirements} />
                {errors.requirements && <p className="text-sm text-light-accent-100 absolute bottom-0 translate-y-full">{errors.requirements.message}</p>}

            </div>

            <Button variant={'solid'} type={'submit'} >Launch Project</Button>
        </form>
    )
}