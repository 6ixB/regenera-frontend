"use state";

import Button from "@/components/base/Button";
import { ProjectObjectiveDto } from "@/lib/model/project/project.dto";
import cn from "@/lib/utils/cn";
import { ImagePlus, X } from "lucide-react";
import CreateProjectObjectiveCard from "../CreateProjectObjectiveCard";
import { useCallback, useState } from "react";

interface CreateProjectDetailsTabObjectivesModalProps {
  objectives: ProjectObjectiveDto[];
  handleClick: () => void;
  handleObjectives: (
    images?: FileList,
    idx?: number,
    description?: string,
  ) => void;
  handleRemoveObjectives: (idx: number) => void;
  handleOpenModel: () => void;
  className?: string;
}

export default function CreateProjectDetailsTabObjectivesModal({
  objectives,
  handleClick,
  handleObjectives,
  handleRemoveObjectives,
  handleOpenModel,
  className,
}: CreateProjectDetailsTabObjectivesModalProps) {
  const [objectiveDescriptions, setObjectiveDescriptions] = useState<
    Map<number, string>
  >(new Map());

  const handleObjectiveDescriptions = useCallback(
    (idx: number, description: string) => {
      const newObjectiveDescriptions = new Map(objectiveDescriptions);

      newObjectiveDescriptions.set(idx, description);

      setObjectiveDescriptions(newObjectiveDescriptions);
    },
    [objectiveDescriptions],
  );

  const handleSaveChanges = () => {
    objectiveDescriptions.forEach((description, idx) => {
      handleObjectives(undefined, idx, description);
    });
  };

  return (
    <div
      id="hs-scroll-inside-body-modal"
      className={cn(
        `pointer-events-none fixed start-0 top-0 z-[80] size-full select-none overflow-y-auto overflow-x-hidden bg-black bg-opacity-40`,
        className,
      )}
    >
      <div
        id="hs-scroll-inside-body-modal"
        className="container my-4 h-[calc(100%-3.5rem)] transition-all ease-out sm:mx-auto sm:w-full"
      >
        <div className="pointer-events-auto flex max-h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 className="font-bold text-light-text-100">Objectives Photos</h3>
            <button
              type="button"
              className="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
              data-hs-overlay="#hs-scroll-inside-body-modal"
              onClick={handleOpenModel}
            >
              <span className="sr-only">Close</span>
              <X className="p-1 text-light-text-100" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 overflow-y-auto p-4">
            {objectives.map((objective, idx) => (
              <CreateProjectObjectiveCard
                key={idx}
                objective={objective}
                idx={idx}
                handleRemoveObjectives={handleRemoveObjectives}
                handleObjectiveDescriptions={handleObjectiveDescriptions}
              />
            ))}
          </div>
          <div className="flex items-center justify-between border-t px-4 py-3">
            {objectiveDescriptions?.size >= 1 && (
              <Button
                variant={"solid"}
                className="px-2 py-2"
                onClick={handleSaveChanges}
              >
                <p className="whitespace-nowrap text-sm font-medium text-light-background-100">
                  Save Changes
                </p>
              </Button>
            )}

            <div className="flex w-full justify-end gap-x-2">
              <Button
                variant={"solid"}
                className="px-2 py-2"
                onClick={handleClick}
              >
                <div className="flex h-full items-center gap-x-2">
                  <ImagePlus className="h-4 w-auto text-light-background-100" />
                  <p className="text-sm font-medium text-light-background-100">
                    Add Photos
                  </p>
                </div>
              </Button>

              <Button
                variant={"solid"}
                className="px-2 py-2"
                onClick={handleOpenModel}
              >
                <p className="text-sm font-medium text-light-background-100">
                  Close
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
