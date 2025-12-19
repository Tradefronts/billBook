export default function NonGstSupplyTable({ data  }) {
  return (
    <div className="overflow-x-auto  border border-gray-200 bg-white">
      <table className="w-full border-collapse text-xs ">

        <thead className="bg-gray-50 text-gray-600 ">
          <tr>
            <th className="border-b px-4 py-3 text-left font-medium">
              NATURE OF SUPPLIES
            </th>
            <th className="border-b px-4 py-3 text-left font-medium">
              INTER STATE SUPPLIES
            </th>
            <th className="border-b px-4 py-3 text-left font-medium">
              INTRA STATE SUPPLIES
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-b px-4 py-4">{row.label}</td>
              <td className="border-b px-4 py-4 text-left">
                {row.interState}
              </td>
              <td className="border-b px-4 py-4 text-left">
                {row.intraState}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
