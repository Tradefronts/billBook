type SupplyRow = {
  nature: string
  taxableValue: number
  igst: number
  cgst: number
  sgst: number
  cess: number
}

interface Props {
  data: SupplyRow[]
}

export default function GstReserveChargeTable({ data }: Props) {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 bg-white">
      <table className="w-full border-collapse text-xs">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="border-b px-4 py-3 text-left font-normal">
              NATURE OF SUPPLIES
            </th>
            <th className="border-b px-4 py-3 text-left font-normal">
              TOTAL TAXABLE VALUE
            </th>
            <th className="border-b px-4 py-3 text-left font-normal">
              INTEGRATED TAX
            </th>
            <th className="border-b px-4 py-3 text-left font-normal">
              CENTRAL TAX
            </th>
            <th className="border-b px-4 py-3 text-left font-normal">
              STATE/UT TAX
            </th>
            <th className="border-b px-4 py-3 text-left font-normal">
              CESS
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-16 text-center text-gray-400"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index} className="border-b last:border-b-0 font-medium text-gray-600">
                <td className="px-4 py-4 text-left ">
                  {row.nature}
                </td>
                <td className="px-4 py-4 text-left">
                  {row.taxableValue}
                </td>
                <td className="px-4 py-4 text-left">
                  {row.igst}
                </td>
                <td className="px-4 py-4 text-left">
                  {row.cgst}
                </td>
                <td className="px-4 py-4 text-left">
                  {row.sgst}
                </td>
                <td className="px-4 py-4 text-left">
                  {row.cess}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
