import Input from "@/components/forms/Input"
import { ProjectObjectiveDto } from "@/lib/model/project/project.dto"
import { X } from "lucide-react"
import Image from "next/image"
import React, { useEffect, useState } from "react"

interface CreateProjectObjectiveCardProps {
    objective: ProjectObjectiveDto,
    idx: number,
    handleRemoveObjectives: (idx: number) => void
    handleObjectiveDescriptions: (idx: number, description: string) => void
}

const CreateProjectObjectiveCard = React.memo(function CreateProjectObjectiveCard({
    objective, idx, handleRemoveObjectives, handleObjectiveDescriptions
}: CreateProjectObjectiveCardProps) {
    
    const [displayDescription, setDisplayDescription] = useState(objective.objective || "");
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const url = URL.createObjectURL(objective.objectiveImage);
        setImageUrl(url);

        return () => {
            URL.revokeObjectURL(url);
        };
    }, [objective.objectiveImage]);

    const handleChange = (idx: number, description: string) => {

        setDisplayDescription(description);
        handleObjectiveDescriptions(idx, description)
    };

    return (
        <div key={idx} className="flex flex-col h-full w-full rounded-md border relative gap-0 shadow-sm">
            <div className="w-full h-[14rem]">
                <Image
                    width={0}
                    height={0}
                    sizes={"100vw"}
                    src={imageUrl || ''}
                    alt=""
                    key={idx}
                    className={`h-full w-full object-cover rounded-md rounded-b-none`}
                />
            </div>
            <div className="cursor-pointer h-fit w-fit bg-light-background-100 aspect-square border rounded-full absolute top-2 right-2 transition-all hover:bg-light-background-200" onClick={() => handleRemoveObjectives(idx)}>
                <X className="p-1 text-light-accent-100" />
            </div>
            <hr className={"border-light-background-200"} />
            <Input
                placeholder="Enter objective..."
                className="border-none text-light-text-100 text-base rounded-t-none"
                onChange={(e) => handleChange(idx, e.target.value)}
                value={displayDescription}
            />
        </div>
    )
})

export default CreateProjectObjectiveCard;