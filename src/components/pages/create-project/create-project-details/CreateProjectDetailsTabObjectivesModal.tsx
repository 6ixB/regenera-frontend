'use state'

import Button from "@/components/base/Button";
import { ProjectObjectiveDto } from "@/lib/model/project/project.dto";
import cn from "@/lib/utils/cn";
import { ImagePlus, X } from "lucide-react";
import Image from "next/image";
import CreateProjectObjectiveCard from "../CreateProjectObjectiveCard";
import { useCallback, useState } from "react";

interface CreateProjectDetailsTabObjectivesModalProps {
    objectives: ProjectObjectiveDto[];
    handleClick: () => void
    handleObjectives: (images?: FileList, idx?: number, description?: string) => void
    handleRemoveObjectives: (idx: number) => void,
    handleOpenModel: () => void,
    className?: string
}

export default function CreateProjectDetailsTabObjectivesModal({ objectives, handleClick, handleObjectives, handleRemoveObjectives, handleOpenModel, className }: CreateProjectDetailsTabObjectivesModalProps) {

    const [objectiveDescriptions, setObjectiveDescriptions] = useState<Map<number, string>>(new Map())

    const handleObjectiveDescriptions = useCallback((idx: number, description:string) => {

        const newObjectiveDescriptions = new Map(objectiveDescriptions);

        newObjectiveDescriptions.set(idx, description);
    
        setObjectiveDescriptions(newObjectiveDescriptions);    
    }, [objectiveDescriptions])
    
    const handleSaveChanges = () => {
    
        console.log(objectiveDescriptions);
        
        objectiveDescriptions.forEach((description, idx) => {
            handleObjectives(undefined, idx, description)
        })


    }    

    return (
        <div id="hs-scroll-inside-body-modal" className={cn(`size-full fixed bg-black bg-opacity-40 top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto select-none pointer-events-none`
            , className)
        }
        >
            <div id="hs-scroll-inside-body-modal" className="container ease-out transition-all sm:w-full my-4 sm:mx-auto h-[calc(100%-3.5rem)]">
                <div className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 className="font-bold text-light-text-100 dark:text-white">
                            Objectives Photos
                        </h3>
                        <button type="button" className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                            data-hs-overlay="#hs-scroll-inside-body-modal" onClick={handleOpenModel}>
                            <span className="sr-only">Close</span>
                            <X className="p-1 text-light-text-100" />

                        </button>
                    </div>
                    <div className="grid grid-cols-3 p-4 gap-4 overflow-y-auto">
                        {objectives.map((objective, idx) => (
                            <CreateProjectObjectiveCard key={idx} objective={objective} idx={idx} handleRemoveObjectives={handleRemoveObjectives} handleObjectiveDescriptions={handleObjectiveDescriptions} />
                        ))}
                    </div>
                    <div className="flex justify-between items-center py-3 px-4 border-t dark:border-neutral-700">
                        {objectiveDescriptions?.size >= 1 &&
                            <Button variant={'solid'} className="py-2 px-2" onClick={handleSaveChanges}>

                                <p className="font-medium text-sm text-light-background-100 whitespace-nowrap">Save Changes</p>

                            </Button>
                        }

                        <div className="flex w-full justify-end gap-x-2">
                            <Button variant={'solid'} className="py-2 px-2" onClick={handleClick}>
                                <div className="flex h-full gap-x-2 items-center">
                                    <ImagePlus className="h-4 w-auto text-light-background-100" />
                                    <p className="font-medium text-sm text-light-background-100" >Add Photos</p>
                                </div>
                            </Button>

                            <Button variant={'solid'} className="py-2 px-2" onClick={handleOpenModel}>

                                <p className="font-medium text-sm text-light-background-100">Close</p>

                            </Button>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}