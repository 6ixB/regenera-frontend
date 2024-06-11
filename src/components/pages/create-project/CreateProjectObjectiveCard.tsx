import Input from "@/components/forms/Input";
import { ProjectObjectiveDto } from "@/lib/model/project/project.dto";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CreateProjectObjectiveCardProps {
  objective: ProjectObjectiveDto;
  idx: number;
  handleRemoveObjectives: (idx: number) => void;
  handleObjectiveDescriptions: (idx: number, description: string) => void;
}

const CreateProjectObjectiveCard = React.memo(
  function CreateProjectObjectiveCard({
    objective,
    idx,
    handleRemoveObjectives,
    handleObjectiveDescriptions,
  }: CreateProjectObjectiveCardProps) {
    const [displayDescription, setDisplayDescription] = useState(
      objective.objective || "",
    );
    const [imageUrl, setImageUrl] = useState<string>("");

    useEffect(() => {
      const url = URL.createObjectURL(objective.objectiveImage);
      setImageUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }, [objective.objectiveImage]);

    const handleChange = (idx: number, description: string) => {
      setDisplayDescription(description);
      handleObjectiveDescriptions(idx, description);
    };

    return (
      <div
        key={idx}
        className="relative flex h-full w-full flex-col gap-0 rounded-md border shadow-sm"
      >
        <div className="h-[14rem] w-full">
          {/* Awful fix */}
          {imageUrl && (
            <Image
              width={0}
              height={0}
              sizes={"100vw"}
              src={imageUrl}
              alt=""
              key={idx}
              className={`h-full w-full rounded-md rounded-b-none object-cover`}
            />
          )}
        </div>
        <div
          className="absolute right-2 top-2 aspect-square h-fit w-fit cursor-pointer rounded-full border bg-light-background-100 transition-all hover:bg-light-background-200"
          onClick={() => handleRemoveObjectives(idx)}
        >
          <X className="p-1 text-light-accent-100" />
        </div>
        <hr className={"border-light-background-200"} />
        <Input
          placeholder="Enter objective..."
          className="rounded-t-none border-none text-base text-light-text-100"
          onChange={(e) => handleChange(idx, e.target.value)}
          value={displayDescription}
        />
      </div>
    );
  },
);

export default CreateProjectObjectiveCard;
