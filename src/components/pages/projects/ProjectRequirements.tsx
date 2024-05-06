import { ListChecks } from "lucide-react";

export default function ProjectRequirements() {
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
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      John Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      New York No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Jim Green
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      27
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      London No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Joe Black
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      31
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Sidney No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
