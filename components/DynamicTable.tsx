"use client";

export default function DynamicTable({ title, favourite, filters, totalLabel, totalValue, columns, rows }) {
  return (
    <div className="p-6 w-full max-w-full mx-auto">
      <div className="flex items-center gap-3 mb-4">
        {title.icon}
        <h1 className="text-lg font-medium">{title.text}</h1>

        {favourite && (
          <div className="flex items-center gap-1 text-xs border bg-amber-50 border-amber-100 px-2 py-1 rounded">
            {favourite.icon}
            {favourite.text}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        {filters.map((f, i) => (
          <div
            key={i}
            className="flex items-center justify-between border rounded-md px-3 py-2 bg-white"
            style={{ width: f.width }}
          >
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              {f.icon}
              {f.label}
            </div>
            {f.actionIcon}
          </div>
        ))}
      </div>

      <div className="border rounded-md bg-white mb-0">
        <div className="px-4 py-3 font-medium">
          {totalLabel}: <span className="font-semibold">₹ {totalValue}</span>
        </div>
      </div>

      <div className="border border-t-0 rounded-b-md overflow-hidden">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              {columns.map((col, index) => (
                <th key={index} className="text-left px-4 py-3 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-8 text-gray-400">
                  No data found.
                </td>
              </tr>
            ) : (
              rows.map((row, idx) => (
                <tr key={idx} className="border-b">
                  {row.map((cell, i) => (
                    <td key={i} className="px-4 py-3">{cell}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
