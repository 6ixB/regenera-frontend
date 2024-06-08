'use client'

import Button from "@/components/base/Button";
import { ListChecks, Plus } from "lucide-react";
import CreateProjectDetailsTabRequirementsItem, { ProjectRequirement } from "./CreateProjectDetailsTabRequirementsItem";
import { useState } from "react";
import CreateProjectDetailsTabRequirementsInput from "./CreateProjectDetailsTabRequirementsInput";

interface CreateProjectDetailsTabRequirementsProps {
    requirements: ProjectRequirement[],
    handleAddRequirements: (item: ProjectRequirement) => void,
    handleRemoveRequirements: (idx: number) => void
}

export default function CreateProjectDetailsTabRequirements({ requirements, handleAddRequirements, handleRemoveRequirements }: CreateProjectDetailsTabRequirementsProps) {

    const [isAddingItem, setIsAddingItem] = useState(false)

    const handleIsAddingItem = () => {
        setIsAddingItem(!isAddingItem)
    }

    return (
        <div className="flex flex-col gap-y-2 ">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col gap-y-1">
                    <div className="flex gap-x-2 items-center">
                        <ListChecks className="text-light-text-100" />
                        <p className="font-medium text-base text-light-text-100">Requirements</p>
                    </div>
                    <p className="font-medium text-xs text-gray-500">List the items required for the plan</p>
                </div>

                <Button variant={'solid'} className="py-2 px-2" onClick={handleIsAddingItem}>
                    <div className="flex h-full gap-x-2 items-center">
                        <Plus className="h-4 w-auto text-light-background-100" />
                        <p className="font-medium text-sm text-light-background-100">Add Items</p>
                    </div>
                </Button>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border border-light-primary-100 rounded-lg overflow-hidden dark:border-neutral-700">
                            <table className="min-w-full divide-y divide-light-primary-100 dark:divide-neutral-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-light-text-100 uppercase dark:text-neutral-500">Item</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-light-text-100 uppercase dark:text-neutral-500">Quantity</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-light-text-100 uppercase dark:text-neutral-500">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-light-primary-100 dark:divide-neutral-700">
                                    {
                                        isAddingItem && <CreateProjectDetailsTabRequirementsInput handleAddRequirements={handleAddRequirements}/>
                                    }
                                    {
                                        requirements?.map((item, idx) => (
                                            <CreateProjectDetailsTabRequirementsItem requirement={item} idx={idx} key={idx} handleRemoveRequirements={handleRemoveRequirements} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}