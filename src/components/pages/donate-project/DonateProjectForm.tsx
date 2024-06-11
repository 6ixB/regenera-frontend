"use client"

import { useEffect } from "react"
import DonateProjectFormAmount from "./DonateProjectFormAmount"
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

interface DonateProjectFormProps {
    id: string
}

export default function DonateProjectForm({ id }: DonateProjectFormProps) {

    const router = useRouter()

    const { data: session } = useSession()

    const handleOnClick = (amount: number) => {
        setValue('donation.amount', amount)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<UpdateProjectDto>({
        resolver: zodResolver(UpdateProjectDtoSchema),
    });

    useEffect(() => {

        if (id && session) {

            setValue('donation.donatorId', session.user.id)

        }

    }, [session, id])

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

    const onSubmit: SubmitHandler<UpdateProjectDto> = async (data) => {

        toast.promise(updateProject.mutateAsync({ id: id, updateProjectDto: data, accessToken: session?.accessToken! }),
            {
                loading: 'Processing your donation...',
                success: 'Donation has been made',
                error: 'An error occurred when processsing your donation',
            })

    };

    return (

        <form className="w-full md:w-9/12 h-fit flex flex-col gap-y-4 items-start" onSubmit={handleSubmit(onSubmit)}>

            <h3 className="text-3xl font-semibold">Donate</h3>
            <p className="text-lg font-medium mt-2">Enter your donation</p>

            <div className="w-full flex flex-col gap-y-4 ">
                <div className="grid grid-cols-3 lg:grid-cols-5 w-full gap-2">
                    <DonateProjectFormAmount amount={10000} onClick={handleOnClick} />
                    <DonateProjectFormAmount amount={50000} onClick={handleOnClick} />
                    <DonateProjectFormAmount amount={100000} onClick={handleOnClick} />
                    <DonateProjectFormAmount amount={250000} onClick={handleOnClick} />
                    <DonateProjectFormAmount amount={1000000} onClick={handleOnClick} />

                </div>

                <Input placeholder={"Other amount"} type="number" step={10000} min={0} className={"text-light-text-100 font-medium"}
                    {...register('donation.amount', {
                        valueAsNumber: true
                    })}
                    error={errors.donation?.amount?.message}
                />
            </div>

            <p className="text-lg font-medium pt-4">Payment methods</p>

            <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
                <div className="hs-accordion-group">

                    <div className="hs-accordion" id="hs-basic-heading-two">
                        <div className="hs-accordion-toggle hs-accordion-active:text-light-text-200  px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400" aria-controls="hs-basic-collapse-two">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-light-text-200  hs-accordion-active:group-hover:text-light-text-200  block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-light-text-200  hs-accordion-active:group-hover:text-light-text-200  hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                            </svg>
                            BCA
                        </div>
                        <div id="hs-basic-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-two">
                            <div className="pb-4 px-6">
                                <div className="w-full flex border b shadow-md px-4 py-4">
                                    <p>Virtual Account: 1231312312</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hs-accordion" id="hs-basic-heading-two">
                        <div  className="hs-accordion-toggle hs-accordion-active:text-light-text-200  px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400" aria-controls="hs-basic-collapse-two">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-light-text-200  hs-accordion-active:group-hover:text-light-text-200  block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-light-text-200  hs-accordion-active:group-hover:text-light-text-200  hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                            </svg>
                            GoPay
                        </div>
                        <div id="hs-basic-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-two">
                            <div className="pb-4 px-6">
                                <div className="w-full flex border b shadow-md px-4 py-4">
                                    <p>Virtual Account: 1231312312</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hs-accordion" id="hs-basic-heading-two">
                        <div className="hs-accordion-toggle hs-accordion-active:text-light-text-200  px-6 py-3 inline-flex items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400" aria-controls="hs-basic-collapse-two">
                            <svg className="hs-accordion-active:hidden hs-accordion-active:text-light-text-200  hs-accordion-active:group-hover:text-light-text-200  block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                            <svg className="hs-accordion-active:block hs-accordion-active:text-light-text-200  hs-accordion-active:group-hover:text-light-text-200  hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                            </svg>
                            OVO
                        </div>
                        <div id="hs-basic-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-heading-two">
                            <div className="pb-4 px-6">
                                <div className="w-full flex border b shadow-md px-4 py-4">
                                    <p>Virtual Account: 1231312312</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Button variant="solid" className="w-full mt-2" type={"submit"}>
                Donate Now
            </Button>
        </form>
    )
}