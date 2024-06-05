'use client'

import Input from "@/components/forms/Input";
import CreateProjectDetailsTabFormObjectives from "./CreateProjectDetailsTabObjectives";
import { CalendarCheck2, Goal, HandCoins, MapPinned, NotebookPen } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProjectDetailsDto, CreateProjectDetailsDtoSchema, ProjectObjectiveDto } from "@/lib/model/project/project.dto";
import TextArea from "@/components/forms/TextArea";
import Button from "@/components/base/Button";
import CreateProjectDetailsTabRequirements from "./CreateProjectDetailsTabRequirements";
import { ProjectRequirement } from "./CreateProjectDetailsTabRequirementsItem";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { error } from "console";

export default function CreateProjectDetailsTabForm() {

    const router = useRouter()

    const { register, handleSubmit, formState: { errors }, watch, setValue, getValues } = useForm<CreateProjectDetailsDto>({ resolver: zodResolver(CreateProjectDetailsDtoSchema) })

    const objectives = watch('objectives')
    const requirements = watch('requirements')

    const handleObjectives = (images?: FileList, idx?: number, description?: string) => {

        const currentObjectives = getValues('objectives')

        if (images) {

            const newObjectives = Array.from(images).map((image) => ({
                image: image,
            }))

            if (!currentObjectives) return setValue('objectives', newObjectives)

            setValue('objectives', [...currentObjectives, ...newObjectives])
        }
        
        if (idx !== undefined && description !== undefined) {
            
            setValue('objectives', currentObjectives.map((objective, index) =>
                index === idx ? { ...objective, description } : objective
            ));

        }

        
    }

    const handleRemoveObjectives = (idx: number) => {

        const updatedObjectives = objectives.filter((_, index) => index !== idx);

        setValue('objectives', updatedObjectives);

    }

    const handleAddRequirements = (item: ProjectRequirement) => {

        const currentItems = getValues('requirements')

        if (!currentItems) return setValue('requirements', [item])

        setValue('requirements', [...currentItems, item])

    }

    const handleRemoveRequirements = (idx: number) => {

        const updatedRequirements = requirements.filter((_, index) => index !== idx);

        setValue('requirements', updatedRequirements);

    }

    const onSubmit: SubmitHandler<CreateProjectDetailsDto> = async (data) => {
        router.push('/discover')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:w-2/3 flex flex-col gap-y-10 p-8">

            <div className="w-full h-full relative">

                <CreateProjectDetailsTabFormObjectives {...register('objectives')} objectives={objectives} handleObjectives={handleObjectives} handleRemoveObjectives={handleRemoveObjectives} />
                {errors.objectives && <p className="text-sm text-light-accent-100 absolute bottom-0 translate-y-full ">{errors.objectives.message}</p>}
                {Array.isArray(errors.objectives) && errors.objectives.length >= 1 && (
                    <ul>
                        {errors.objectives.map((error, index) => (
                            <li key={index} className="text-sm text-light-accent-100">
                                {error.message}
                            </li>
                        ))}
                    </ul>
                )}


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
                    error={errors.endCrowdfundDate?.message}
                    {...register('endCrowdfundDate')}
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
                    error={errors.minimumFund?.message}
                    {...register('minimumFund')}
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