export default function ITCTable({ data }) {
  return (
    <div className="overflow-x-auto  border border-gray-200 bg-white">
      <table className="w-full border-collapse text-xs">
        

        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th className="border-b px-4 py-3 text-left font-medium">
              DETAILS
            </th>
            <th className="border-b px-4 py-3 text-left font-medium">
              INTEGRATED TAX
            </th>
            <th className="border-b px-4 py-3 text-left font-medium">
              CENTRAL TAX
            </th>
            <th className="border-b px-4 py-3 text-left font-medium">
              STATE/UT TAX
            </th>
            <th className="border-b px-4 py-3 text-left font-medium">
              CESS
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) =>
            item.type === "section" ? (
              <tr key={index}>
                <td
                  colSpan={5}
                  className="border-b px-4 py-4 font-semibold text-gray-900"
                >
                  {item.title}
                </td>
              </tr>
            ) : (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border-b px-4 py-3">{item.label}</td>
                <td className="border-b px-4 py-3 text-left">
                  {item.igst}
                </td>
                <td className="border-b px-4 py-3 text-left">
                  {item.cgst}
                </td>
                <td className="border-b px-4 py-3 text-left">
                  {item.sgst}
                </td>
                <td className="border-b px-4 py-3 text-left">
                  {item.cess}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
