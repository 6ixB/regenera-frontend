export interface ProjectRequirement {
  requirement: string;
  quantity: number;
}

interface CreateProjectDetailsTabRequirementsItemProps {
  requirement: ProjectRequirement;
  idx: number;
  handleRemoveRequirements: (idx: number) => void;
}

export default function CreateProjectDetailsTabRequirementsItem({
  requirement,
  idx,
  handleRemoveRequirements,
}: CreateProjectDetailsTabRequirementsItemProps) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-light-text-100 ">
        {requirement.requirement}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text-100 ">
        {requirement.quantity}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 
                hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none "
          onClick={() => handleRemoveRequirements(idx)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
