'use client'

import Button from "@/components/base/Button";
import { Aperture, Eye, Goal, ImagePlus, Images } from "lucide-react";
import Image from "next/image";
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import CreateProjectDetailsTabObjectivesModal from "./CreateProjectDetailsTabObjectivesModal";

interface CreateProjectDetailsTabObjectivesProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    objectives: File[];
    handleAddObjectives: (newObjectives: FileList) => void,
    handleRemoveObjectives: (idx: number) => void
}

const CreateProjectDetailsTabObjectives = forwardRef<
    HTMLInputElement,
    CreateProjectDetailsTabObjectivesProps
>(({ objectives, handleAddObjectives, handleRemoveObjectives, ...props }, ref) => {

    const [isOpenModal, setIsOpenModel] = useState(false)

    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(ref, () => inputRef.current!);

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleOpenModel = () => {
        setIsOpenModel(!isOpenModal)
    }

    useEffect(() => {
        if(objectives?.length <= 0) setIsOpenModel(false)

    }, [objectives])

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpenModal])

    return (
        <div className="flex flex-col gap-y-2">

            <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2 items-center">
                    <Goal className="text-light-text-100" />
                    <p className="font-medium text-base text-light-text-100">Objectives</p>
                </div>
                <p className="font-medium text-xs text-gray-500">Take photos of the areas to clear</p>
            </div>
            {
                !objectives || objectives.length === 0 ?
                    <div className="flex w-full h-[12rem] items-center justify-center flex-col border-light-primary-200 border border-dashed rounded-lg p-12 gap-2 group" onClick={handleClick}>

                        <Images strokeWidth={1.5} className="text-light-text-100 h-full w-auto transition-all duration-300 p-2 group-hover:scale-110" />
                        <p className="font-bold text-xs text-light-text-200">Upload your objectives</p>
                    </div>
                    :
                    <div className="flex w-full h-[20rem] items-center justify-center flex-col border-light-primary-100 border rounded-lg p-4 gap-2 group relative">
                        <div className="w-full h-full grid grid-rows-2 grid-cols-4 gap-2 rounded-md">
                            {
                                objectives.slice(0, 5).map((objective, idx) => {
                                    return idx === 4 ? (
                                        <div key={idx} className="h-full w-full rounded-md border relative">
                                            <Image
                                                width={0}
                                                height={0}
                                                sizes={"100vw"}
                                                src={URL.createObjectURL(objective)}
                                                alt=""
                                                key={idx}
                                                className={`h-full w-full object-cover rounded-md border`}
                                            />
                                            {
                                                (objectives.length - 5) > 0 &&
                                                <div className="w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-40 flex items-center justify-center">
                                                    <p className="font-medium text-4xl text-light-background-100">+{objectives.length - 5}</p>
                                                </div>
                                            }
                                        </div>
                                    ) :
                                        (
                                            <Image
                                                width={0}
                                                height={0}
                                                sizes={"100vw"}
                                                src={URL.createObjectURL(objective)}
                                                alt=""
                                                key={idx}
                                                className={`h-full w-full object-cover rounded-md border ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                                            />
                                        )
                                })
                            }


                        </div>

                        <div className="w-full h-full absolute top-0 left-0 z-10 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <div className="flex w-fit items-center gap-x-2 absolute top-2 left-2 " >
                                <Button variant={'solid'} className="py-2 px-2">
                                    <div className="flex h-full gap-x-2 items-center">
                                        <ImagePlus className="h-4 w-auto text-light-background-100" />
                                        <p className="font-medium text-sm text-light-background-100" onClick={handleClick}>Add Photos</p>
                                    </div>
                                </Button>

                                <Button variant={'solid'} className="py-2 px-2" data-hs-overlay="#hs-scroll-inside-body-modal" onClick={handleOpenModel}>
                                    <div className="flex h-full gap-x-2 items-center">
                                        <Eye className="h-4 w-auto text-light-background-100" />
                                        <p className="font-medium text-sm text-light-background-100">View / Edit Photos</p>
                                    </div>
                                </Button>

                            </div>
                        </div>
                    </div>
            }
            <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={inputRef}
                {...props}
                multiple
                onChange={(e) => handleAddObjectives(e.target.files!)}
            />
            {
                isOpenModal && <CreateProjectDetailsTabObjectivesModal objectives={objectives} handleAddObjectives={handleClick} handleRemoveObjectives={handleRemoveObjectives} handleOpenModel={handleOpenModel} />
            }
        </div>
    )
})

CreateProjectDetailsTabObjectives.displayName = "CreateProjectDetailsTabObjectives";

export default CreateProjectDetailsTabObjectives;
