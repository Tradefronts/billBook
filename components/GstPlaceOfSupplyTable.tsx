type PlaceSupplyRow = {
  place: string
  unregisteredTaxable: number
  unregisteredIgst: number
  compositionTaxable: number
  compositionIgst: number
  uinTaxable: number
  uinIgst: number
}

interface Props {
  data: PlaceSupplyRow[]
}

export default function GstPlaceOfSupplyTable({ data }: Props) {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 bg-gray-100">
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="bg-gray-100 text-gray-500 ">
            <th
              rowSpan={2}
              className="border-b border-r px-3 py-2 text-center font-semibold w-[350px]  "
            >
              PLACE OF SUPPLY
            </th>

            <th
              colSpan={2}
              className="border-b border-r px-4 py-2 text-center font-semibold"
            >
              SUPPLIES MADE TO UNREGISTERED PERSONS
            </th>

            <th
              colSpan={2}
              className="border-b border-r px-4 py-2 text-center font-semibold"
            >
              SUPPLIES MADE TO COMPOSITION TAXABLE PERSONS
            </th>

            <th
              colSpan={2}
              className="border-b px-4center text-center font-semibold"
            >
              SUPPLIES MADE TO UIN HOLDERS
            </th>
          </tr>

          <tr className="bg-gray-100 text-gray-500">
            <th className="border-b border-r px-4 py-2 text-center font-semibold">
              TOTAL TAXABLE VALUE
            </th>
            <th className="border-b border-r px-4 py-2 text-center font-semibold">
              AMOUNT OF INTEGRATED TAX
            </th>

            <th className="border-b border-r px-4 py-2 text-center font-semibold">
              TOTAL TAXABLE VALUE
            </th>
            <th className="border-b border-r px-4 py-2 text-center font-semibold">
              AMOUNT OF INTEGRATED TAX
            </th>

            <th className="border-b border-r px-4 py-2 text-center font-semibold">
              TOTAL TAXABLE VALUE
            </th>
            <th className="border-b px-4 py-2 text-center font-semibold">
              AMOUNT OF INTEGRATED TAX
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              {/* <td
                colSpan={7}
                className="py-20 text-center text-gray-400"
              >
                No data available
              </td> */}
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index} className="border-b last:border-b-0 ">
                <td className="px-4 py-3 text-center">
                  {row.place}
                </td>

                <td className="px-4 py-3 text-center">
                  {row.unregisteredTaxable}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.unregisteredIgst}
                </td>

                <td className="px-4 py-3 text-center">
                  {row.compositionTaxable}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.compositionIgst}
                </td>

                <td className="px-4 py-3 text-center">
                  {row.uinTaxable}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.uinIgst}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
