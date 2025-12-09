"use client";
import { useState } from "react";
import { Building, ChevronDown, ArrowLeftRight, Square, CheckSquare, SquarePen, Trash2 } from "lucide-react";

export default function GodownManagement() {
  const [selectedGodown, setSelectedGodown] = useState("subah");
  const [checkedRows, setCheckedRows] = useState({ 1: false });

  const toggleRow = (id) => {
    setCheckedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Godown Management</h1>

      <div className="flex justify-between items-center gap-3">
        <div className="border rounded-lg px-4 py-2 flex items-center gap-2 w-56 bg-white cursor-pointer">
          <Building className="w-4 h-4 text-gray-500" />
          <span className="text-sm">{selectedGodown}</span>
          <ChevronDown className="w-4 h-4 ml-auto text-gray-500" />
        </div>
         <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
            <ArrowLeftRight className="w-4 h-4" />
            Transfer Stock
          </button>

          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg">
            Create Godown
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border rounded-lg p-2">
        <div className="flex items-center gap-3">
          <span className="text-lg font-medium">{selectedGodown}</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs">
            Main Godown
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-gray-400 px-4 py-4 border rounded-lg">
            <SquarePen className="w-4 h-4" />
          </button>

          <button className="text-gray-400 px-4 py-4 border rounded-lg">
          <Trash2 className="w-4 h-4"/>
          </button>
        </div>
      </div>

      <div className="mt-6 border rounded-lg bg-white overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-gray-700 text-sm font-medium">
            <tr>
              <th className="px-4 py-3 border-b w-10"></th>
              <th className="px-4 py-3 border-b text-left">Item name</th>
              <th className="px-4 py-3 border-b text-left">Item Code</th>
              <th className="px-4 py-3 border-b text-left">Item Batch</th>
              <th className="px-4 py-3 border-b text-left">Stock QTY</th>
              <th className="px-4 py-3 border-b text-left">Stock Value</th>
              <th className="px-4 py-3 border-b text-left">Selling Price</th>
              <th className="px-4 py-3 border-b text-left">Purchase Price</th>
            </tr>
          </thead>

          <tbody className="text-sm text-gray-700">
            <tr className="border-b hover:bg-gray-50">
              <td className="px-4 py-3 cursor-pointer" onClick={() => toggleRow(1)}>
                {checkedRows[1] ? (
                  <CheckSquare className="w-5 h-5 text-indigo-600" />
                ) : (
                  <Square className="w-5 h-5 text-gray-600" />
                )}
              </td>

              <td className="px-4 py-3">hello</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">200 PCS</td>
              <td className="px-4 py-3">₹ 0</td>
              <td className="px-4 py-3">₹ 150.0</td>
              <td className="px-4 py-3">₹ 0.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
