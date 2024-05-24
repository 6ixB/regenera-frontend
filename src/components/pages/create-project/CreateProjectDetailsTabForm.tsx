import Input from "@/components/forms/Input";
import CreateProjectDetailsTabFormObjectives from "./CreateProjectDetailsTabObjectives";
import { CalendarCheck2, HandCoins, MapPinned, NotebookPen } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProjectDetailsDto, CreateProjectTitleDtoSchema } from "@/lib/model/project/project.dto";
import TextArea from "@/components/forms/TextArea";
import Button from "@/components/base/Button";

export default function CreateProjectDetailsTabForm(){

    const { register, handleSubmit, formState: { errors }, watch } = useForm<CreateProjectDetailsDto>({ resolver: zodResolver(CreateProjectTitleDtoSchema)})

    const objectives = watch('objectives')

    const onSubmit: SubmitHandler<CreateProjectDetailsDto> = async (data) => {
        console.log("Data: " + data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 flex flex-col gap-y-8 p-8">
            <CreateProjectDetailsTabFormObjectives {...register('objectives')} objectives={objectives} />
            {errors.objectives && <span>{errors.objectives.message}</span>}

            <Input
                icon={<MapPinned className="text-light-text-100" />}
                label={"Address"}
                desc={"Share the project's location"}
                className={"border-light-primary-100 placeholder-light-background-300"}
                placeholder={"e.g. Jl. Mandala No.3, Kemanggisan, Jakarta Barat"}
                {...register('address')}
            />
            {errors.address && <span>{errors.address.message}</span>}


            <div className="w-full flex flex-row gap-x-6 items-end">
                <Input
                    icon={<CalendarCheck2 className="text-light-text-100" />}
                    label={"Crowdfund End Date"}
                    desc={"Arrange the deadline of crowdfunding"}
                    className={"border-light-primary-100 placeholder-light-background-300"}
                    placeholder={"e.g. 10-19-2004"}
                    type={"date"}
                    {...register('endCrowdfundDate')}
                />
                {errors.endCrowdfundDate && <span>{errors.endCrowdfundDate.message}</span>}

                <Input
                    icon={<HandCoins className="text-light-text-100" />}
                    label={"Minimum Fund [All or Nothing]"}
                    desc={"Determine the minimum fund of your project to start "}
                    className={"border-light-primary-100 placeholder-light-background-300"}
                    placeholder={"e.g. Rp 9.500.000,00"}
                    type={"number"}
                    {...register('minimumFund')}
                />
                {errors.minimumFund && <span>{errors.minimumFund.message}</span>}
            </div>

            <TextArea
                icon={<NotebookPen className="text-light-text-100" />}
                label={"Description"}
                desc={"Share your goals and plans"}
                className={"border-light-primary-100 placeholder-light-background-300 h-[20rem] w-full"}
                placeholder="e.g. 
                Our project, Cleaning Binus Anggrek, aims to restore and beautify the Binus Anggrek campus through a comprehensive cleanup effort. Our goals are to create a healthier, more aesthetically pleasing environment for students, staff, and visitors, while fostering a sense of community and environmental responsibility."
                type="textarea"
                {...register('description')}
            />
            {errors.description && <span>{errors.description.message}</span>}

            <Button variant={'solid'} type={'submit'} >Launch Project</Button>
        </form>
    )
}