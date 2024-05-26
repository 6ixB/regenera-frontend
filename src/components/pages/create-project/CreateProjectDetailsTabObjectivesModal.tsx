import Button from "@/components/base/Button";
import cn from "@/lib/utils/cn";
import { ImagePlus, X } from "lucide-react";
import Image from "next/image";

interface CreateProjectDetailsTabObjectivesModalProps {
    objectives: File[];
    handleAddObjectives: () => void
    handleRemoveObjectives: (idx: number) => void,
    handleOpenModel: () => void,
    className?: string
}

export default function CreateProjectDetailsTabObjectivesModal({ objectives, handleAddObjectives, handleRemoveObjectives, handleOpenModel, className }: CreateProjectDetailsTabObjectivesModalProps) {

    return (
        <div id="hs-scroll-inside-body-modal" className={cn(`size-full fixed bg-black bg-opacity-40 top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto select-none pointer-events-none`
            , className)
        }
        >
            <div id="hs-scroll-inside-body-modal" className="container ease-out transition-all sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
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
                    <div className="grid grid-cols-3 p-2 gap-2 overflow-y-auto">
                        {objectives.map((objective, idx) => (
                            <div key={idx} className="h-[12rem] w-full rounded-md border relative">
                                <Image
                                    width={0}
                                    height={0}
                                    sizes={"100vw"}
                                    src={URL.createObjectURL(objective)}
                                    alt=""
                                    key={idx}
                                    className={`h-full w-full object-cover rounded-md border`}
                                />
                                <div className="h-fit w-fit bg-light-background-100 aspect-square border rounded-full absolute top-2 right-2 transition-all hover:bg-light-background-200" onClick={() => handleRemoveObjectives(idx)}>
                                    <X className="p-1 text-light-accent-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                        <Button variant={'solid'} className="py-2 px-2">
                            <div className="flex h-full gap-x-2 items-center" onClick={handleAddObjectives}>
                                <ImagePlus className="h-4 w-auto text-light-background-100" />
                                <p className="font-medium text-sm text-light-background-100" >Add Photos</p>
                            </div>
                        </Button>

                        <Button variant={'solid'} className="py-2 px-2">

                            <p className="font-medium text-sm text-light-background-100" onClick={handleOpenModel}>Close</p>

                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}