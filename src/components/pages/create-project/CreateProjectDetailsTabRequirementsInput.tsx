'use client'

import Input from "@/components/forms/Input";
import { ProjectRequirement } from "./CreateProjectDetailsTabRequirementsItem";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ProjectRequirementSchema } from "@/lib/model/project/project.dto";

interface CreateProjectDetailsTabRequirementsInputProps {
    handleAddRequirements: (item: ProjectRequirement) => void
}

export default function CreateProjectDetailsTabRequirementsInput({handleAddRequirements}: CreateProjectDetailsTabRequirementsInputProps) {

    const [itemName, setItemName] = useState('')
    const [itemQuantity, setItemQuantity] = useState<number | undefined>(undefined)
    const [errors, setErrors] = useState<{ name?: string, quantity?: string }>({});

    const handleAddClick = () => {

        const newItem: ProjectRequirement = { name: itemName, quantity: itemQuantity ?? 0 };

        const result = ProjectRequirementSchema.safeParse(newItem);

        if (!result.success) {
            const errorMessages = result.error.flatten().fieldErrors;
            setErrors({
                name: errorMessages.name?.[0],
                quantity: errorMessages.quantity?.[0],
            });
            return;
        }
        handleAddRequirements(newItem);

        setItemName(''); // Clear input fields after adding
        setItemQuantity(0); // Clear input fields after adding
        setErrors({}); 
    }

    return (
        <tr>
            <td className=" px-6 pt-2 pb-6 whitespace-nowrap text-sm font-medium text-light-text-100 dark:text-neutral-200">
                <Input value={itemName} onChange={(e) => setItemName(e.target.value)} className=" py-2 border text-xs" placeholder="Enter item name"
                    error={errors.name}/>
            </td>
            <td className="px-6 pt-2 pb-6 whitespace-nowrap text-sm text-light-text-100 dark:text-neutral-200">
                <Input type="number" min={0} value={itemQuantity} onChange={(e) => setItemQuantity(e.target.valueAsNumber)} className="py-2 border text-xs" placeholder="Must be more than 0"
                    error={errors.quantity}/>
            </td>
            <td className="px-6 pt-2 pb-6 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 
                hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                onClick={handleAddClick}>Add</button>
            </td>
        </tr>
    )
}