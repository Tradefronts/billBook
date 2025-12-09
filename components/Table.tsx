export default function Table({ columns = [], data = [] }) {
  return (
    <div className="border rounded-md overflow-hidden w-full">
      <table className="w-full text-left">

        <thead className="bg-gray-50 text-gray-700 text-xs font-normal">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="px-4 py-3 border-b">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-xs text-gray-700">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-3 border-b">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
