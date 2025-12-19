"use client";

export default function GSTRTable({ data }) {
  return (
    <div className="w-full overflow-x-auto rounded-md border border-gray-200">
      <table className="w-full border-collapse min-w-[1500px] text-sm">

        <thead>
          <tr className="bg-gray-100 text-gray-700 font-semibold text-center">
            <th rowSpan={2} className="border px-2 py-2">GSTIN</th>
            <th rowSpan={2} className="border px-2 py-2">Customer Name</th>

            <th colSpan={2} className="border px-2 py-2">Place of Supply</th>
            <th colSpan={3} className="border px-2 py-2">Invoice Details</th>

            <th colSpan={2} className="border px-2 py-2"></th>
            <th colSpan={7} className="border px-2 py-2">Amount of Tax</th>
          </tr>

          <tr className="bg-gray-50 text-gray-700 font-medium text-center">
            <th className="border px-2 py-2">State Code</th>
            <th className="border px-2 py-2">State Name</th>

            <th className="border px-2 py-2">Invoice Number</th>
            <th className="border px-2 py-2">Invoice Date</th>
            <th className="border px-2 py-2">Invoice Value</th>
            <th className="border px-2 py-2">Total Tax(%)</th>

            <th className="border px-2 py-2">Taxable Value</th>
            <th className="border px-2 py-2">CGST</th>
            <th className="border px-2 py-2">SGST/UTGST</th>
            <th className="border px-2 py-2">IGST</th>
            <th className="border px-2 py-2">CESS</th>
            <th className="border px-2 py-2">Total Tax</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item, i) => (
            <tr key={i} className="text-center">
              <td className="border px-2 py-2">{item.gstin}</td>
              <td className="border px-2 py-2">{item.customer}</td>

              <td className="border px-2 py-2">{item.stateCode}</td>
              <td className="border px-2 py-2">{item.stateName}</td>

              <td className="border px-2 py-2">{item.invoiceNo}</td>
              <td className="border px-2 py-2">{item.date}</td>
              <td className="border px-2 py-2">{item.value}</td>
              <td className="border px-2 py-2">{item.taxPercent}</td>

              <td className="border px-2 py-2">{item.taxable}</td>
              <td className="border px-2 py-2">{item.cgst}</td>
              <td className="border px-2 py-2">{item.sgst}</td>
              <td className="border px-2 py-2">{item.igst}</td>
              <td className="border px-2 py-2">{item.cess}</td>
              <td className="border px-2 py-2">{item.totalTax}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
