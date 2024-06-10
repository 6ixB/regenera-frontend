"use client";

import Input from "@/components/forms/Input";
import { ProjectRequirement } from "./CreateProjectDetailsTabRequirementsItem";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ProjectRequirementDtoSchema } from "@/lib/model/project/project.dto";

interface CreateProjectDetailsTabRequirementsInputProps {
  handleAddRequirements: (item: ProjectRequirement) => void;
}

export default function CreateProjectDetailsTabRequirementsInput({
  handleAddRequirements,
}: CreateProjectDetailsTabRequirementsInputProps) {
  const [requirement, setRequirement] = useState("");
  const [requirementQuantity, setRequirementQuantity] = useState<number | null>(
    null,
  );
  const [errors, setErrors] = useState<{
    requirement?: string;
    quantity?: string;
  }>({});

  const handleAddClick = () => {
    const newItem: ProjectRequirement = {
      requirement: requirement,
      quantity: requirementQuantity ?? 0,
    };

    const result = ProjectRequirementDtoSchema.safeParse(newItem);

    if (!result.success) {
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors({
        requirement: errorMessages.requirement?.[0],
        quantity: errorMessages.quantity?.[0],
      });
      return;
    }
    handleAddRequirements(newItem);

    setRequirement(""); // Clear input fields after adding
    setRequirementQuantity(0); // Clear input fields after adding
    setErrors({});
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-6 pb-6 pt-2 text-sm font-medium text-light-text-100">
        <Input
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className=" border py-2 text-xs"
          placeholder="Enter item name"
          error={errors.requirement}
        />
      </td>
      <td className="whitespace-nowrap px-6 pb-6 pt-2 text-sm text-light-text-100 ">
        <Input
          type="number"
          min={0}
          value={requirementQuantity ?? 0}
          onChange={(e) => setRequirementQuantity(e.target.valueAsNumber)}
          className="border py-2 text-xs"
          placeholder="Must be more than 0"
          error={errors.quantity}
        />
      </td>
      <td className="whitespace-nowrap px-6 pb-6 pt-2 text-end text-sm font-medium">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-blue-600 
                hover:text-blue-800 disabled:pointer-events-none disabled:opacity-50 "
          onClick={handleAddClick}
        >
          Add
        </button>
      </td>
    </tr>
  );
}
