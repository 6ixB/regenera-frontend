import { ProjectRequirementEntity } from "@/lib/model/project/project.entity";
import { ListChecks } from "lucide-react";
import { ProjectRequirement } from "./ProjectRequirement";

interface ProjectRequirementsProps {
  requirements: ProjectRequirementEntity[]
}

export default function ProjectRequirements({ requirements }: ProjectRequirementsProps) {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"text-light-text-100 flex items-center gap-x-2"}>
        <ListChecks />
        <div className={"text-lg font-medium"}>Requirements</div>
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Quantity
                    </th>

                  </tr>
                </thead>
                {requirements.map((requirement, idx) => (
                  <ProjectRequirement requirement={requirement} key={idx} />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
