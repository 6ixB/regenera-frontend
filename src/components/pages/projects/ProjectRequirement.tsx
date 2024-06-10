import { ProjectRequirementEntity } from "@/lib/model/project/project.entity"

interface ProjectRequirementProps {
    requirement: ProjectRequirementEntity
}

export function ProjectRequirement({ requirement }: ProjectRequirementProps) {

    return (
        <tbody className="min-w-full divide-y divide-gray-200">
            <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {requirement.requirement}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {requirement.quantity}
                </td>
            </tr>
        </tbody>
    )
}