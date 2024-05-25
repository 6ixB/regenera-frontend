export interface ProjectRequirement {
    name: string;
    quantity: number;
}

interface CreateProjectDetailsTabRequirementsItemProps {
    item: ProjectRequirement,
    idx: number
}

export default function CreateProjectDetailsTabRequirementsItem({item, idx}: CreateProjectDetailsTabRequirementsItemProps) {

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-light-text-100 dark:text-neutral-200">{item.name}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-light-text-100 dark:text-neutral-200">{item.quantity}</td>
            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">Delete</button>
            </td>
        </tr>
    )
}