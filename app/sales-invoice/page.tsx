import {
  ArrowRight,
  ChevronDown,
  Download,
  EllipsisVertical,
  Layers,
  Link2,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SalesInvoice = () => {
  return (
    <div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl ">Sales Invoices</h5>
          <div className="flex items-center gap-4">
            <div className="border rounded-sm px-3 py-2 text-xs border-blue-400 text-blue-400 ">
              <label htmlFor="my-dropdown" className="font-light">
                Reports
              </label>
              <select id="my-dropdown" className="border-none text-gray-400 ">
                <option value=""></option>
                <option value="option1">Partywise Outstanding</option>
                <option value="option2">Item Report By Party</option>
                <option value="option3">Receivable Ageing Report</option>
              </select>
            </div>
            <button className="p-2 border rounded-sm border-gray-300">
              <Settings size={15} />
            </button>
            <div></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 w-full mt-8 gap-3">
            <div className="border rounded-lg border-purple-300 p-3 space-y-3 bg-[#f1f0fc]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-500">
                  <span>
                    <Users size={15} />
                  </span>
                  <span className="text-sm">Total Sales</span>
                </div>
              </div>
              <span className="text-xl font-semibold">2</span>
            </div>

            <div className="border rounded-lg border-gray-300 p-3 space-y-3 ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-500">
                  <span>{/* < size={15} /> */}</span>
                  <span className="text-sm">Paid</span>
                </div>
              </div>
              <span className="text-xl font-semibold">RS 100</span>
            </div>

            <div className="border rounded-lg border-gray-300 p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-red-700">
                  {/* <span><Landmark size={15} /></span> */}
                  <span className="text-sm">Unpaid</span>
                </div>
              </div>
              <span className="text-xl font-semibold">RS 100</span>
            </div>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2.5 border rounded-sm border-gray-300 hover:border-gray-500 cursor-pointer">
                <Search size={15} className="text-gray-500" />
              </button>
              <div className="border border-gray-300 rounded-sm text-sm relative w-56">
                <input
                  type="text"
                  placeholder="Search Categories"
                  className="p-2 w-full"
                />
                <span className="absolute top-0 right-0 h-full flex items-center pr-2 text-gray-400">
                  <ChevronDown size={20} />
                </span>
              </div>
            </div>

            <div className=" flex items-center gap-4 ">
              <div className="relative">
                <button className="rounded-sm border p-2 border-gray-300 text-gray-500 text-sm flex items-center gap-2 font-light">
                  <Layers size={15} /> Bulk Actions <ChevronDown size={20} />
                </button>
                {/* <div className="absolute w-full bg-white border border-gray-300 z-1 text-gray-500 text-xs flex items-center gap-2 font-medium px-2 py-3  shadow-lg rounded-md shadow-gray-300">
                  <Download size={15} className="" />
                  Bulk download
                </div> */}
              </div>
                  <Link href="/create-sales-invoice">
<button className="rounded-sm border py-2 px-4 text-white  border-gray-300 bg-[#4c3cce] text-sm flex items-center gap-2 font-light">
                Create Sales Invoice
              </button></Link>
            </div>
          </div>

          <div className=" border rounded-lg border-gray-300">
            <table className="w-full table-auto ">
              <thead className="w-full ">
                <tr className="w-full divide-x border-b p-2 border-gray-300 divide-gray-300 bg-neutral-100 rounded-t-lg">
                  <th className="text-start px-5 py-2 text-xs text-gray-600"></th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600">
                    Date{" "}
                  </th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600">
                    Invoice Number
                  </th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600">
                    Part Name{" "}
                  </th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600">
                    Due{" "}
                  </th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600">
                    Amount
                  </th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600">
                    Status
                  </th>
                  <th className="text-start px-5 py-2 text-xs text-gray-600"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 ">
                <tr className="w-full divide-x p-2 divide-gray-300 hover:bg-[#f1f0fc] ">
                  <td className="text-start px-5 py-2 text-sm text-gray-600"></td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    02 Dec 2025
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    2
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    XYZ
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    -
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    RS 15
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    <span className="bg-green-50 text-green-500 text-xs p-2 rounded-md">
                      Paid
                    </span>
                  </td>
                  <td className="text-center px-5 py-2 text-sm text-gray-600 relative">
                    <button className="p-2 hover:bg-white rounded-md cursor-pointer">
                      <EllipsisVertical size={15} />
                    </button>
                    {/* <div className="w-48 divide-y divide-gray-300 shadow-md shadow-gray-300 absolute -left-20 border bg-white border-gray-300 rounded-md">
                    <span className="block p-3 flex items-center gap-1 "><SquarePen size={15} />Edit</span>
                    <span className="block p-3 flex items-center gap-1 text-red-400"><Trash2 size={15} className="" />Delete</span>
                  </div> */}
                  </td>
                </tr>
                <tr className="w-full divide-x p-2 divide-gray-300 hover:bg-[#f1f0fc] ">
                  <td className="text-start px-5 py-2 text-sm text-gray-600"></td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    02 Dec 2025
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    2
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    XYZ
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    -
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    RS 15
                  </td>
                  <td className="text-start px-5 py-2 text-sm text-gray-600">
                    <span className="bg-red-50 text-red-500 text-xs p-2 rounded-md">
                      Unpaid
                    </span>
                  </td>
                  <td className="text-center px-5 py-2 text-sm text-gray-600 relative">
                    <button className="p-2 hover:bg-white rounded-md cursor-pointer">
                      <EllipsisVertical size={15} />
                    </button>
                    {/* <div className="w-48 divide-y divide-gray-300 shadow-md shadow-gray-300 absolute -left-20 border bg-white border-gray-300 rounded-md">
                    <span className="block p-3 flex items-center gap-1 "><SquarePen size={15} />Edit</span>
                    <span className="block p-3 flex items-center gap-1 text-red-400"><Trash2 size={15} className="" />Delete</span>
                  </div> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;
