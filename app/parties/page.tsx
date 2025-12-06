import {
  ArrowRight,
  ChevronDown,
  EllipsisVertical,
  Layers,
  Link2,
  MoveRight,
  Search,
  Settings,
  SquarePen,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Parties = () => {
  return (
    <div className="w-full p-5 ">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">Parties</h5>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 border rounded-sm px-3 py-2  border-purple-600 text-purple-700 font-light text-xs">
              <Link2 size={15} /> SharedLedger Portal
            </button>
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
        <div className="grid grid-cols-3 w-full mt-8 gap-3">
          <div className="border rounded-lg border-purple-300 p-3 space-y-3 bg-[#f1f0fc]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-purple-500">
                <span>
                  <Users size={15} />
                </span>
                <span className="text-sm">All Parties</span>
              </div>
            </div>
            <span className="text-xl font-semibold">2</span>
          </div>
          <div className="border rounded-lg border-gray-300 p-3 space-y-3 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-500">
                <span>{/* < size={15} /> */}</span>
                <span className="text-sm">To Collect</span>
              </div>
            </div>
            <span className="text-xl font-semibold">RS 100</span>
          </div>
          <div className="border rounded-lg border-gray-300 p-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-red-700">
                {/* <span><Landmark size={15} /></span> */}
                <span className="text-sm">To Pay</span>
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
              <div className="absolute  w-68 bg-white border border-gray-300 z-1 p-2 leading-2 shadow-lg rounded-md shadow-gray-300">
                <div className=" text-gray-500 flex items-center justify-between">
                  <span
                    className="block text-sm
                  "
                  >
                    Bulk Add Parties
                  </span>
                  <span className="">
                    <ArrowRight size={20} />
                  </span>
                </div>
                <span className="text-xs">
                  Quickly add all your parties with Excel
                </span>
              </div>
            </div>
            <Link href="/add-party">
              <button className="rounded-sm border py-2 px-4 text-white cursor-pointer  border-gray-300 bg-[#6a59ee] text-sm flex items-center gap-2 font-light">
                Create Party
              </button>
            </Link>
          </div>
        </div>
        <div className=" border rounded-lg border-gray-300">
          <table className="w-full table-auto ">
            <thead className="w-full ">
              <tr className="w-full divide-x border-b p-2 border-gray-300 divide-gray-300 bg-neutral-100 rounded-t-lg">
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Party Name
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Category
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Mobile Number
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Party Type
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Balance
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 ">
              <tr className="w-full divide-x p-2 divide-gray-300 hover:bg-[#f1f0fc] ">
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  XYZ
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  -
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  1234567890
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  Customer
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  RS 15
                </td>
                <td className="text-center px-5 py-2 text-sm text-gray-600 relative">
                  <button className="p-2 hover:bg-red-100 rounded-md">
                    <EllipsisVertical size={20} />
                  </button>
                  {/* <div className="w-48 divide-y divide-gray-300 shadow-md shadow-gray-300 absolute -left-20 border bg-white border-gray-300 rounded-md">
                    <span className="block p-3 flex items-center gap-1 "><SquarePen size={15} />Edit</span>
                    <span className="block p-3 flex items-center gap-1 text-red-400"><Trash2 size={15} className="" />Delete</span>
                  </div> */}
                </td>
              </tr>
              <tr className="w-full divide-x p-2 divide-gray-300 hover:bg-[#f1f0fc] ">
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  XYZ
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  -
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  1234567890
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  Customer
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  RS 15
                </td>
                <td className="text-center px-5 py-2 text-sm text-gray-600 relative">
                  <button className="p-2 hover:bg-red-100 rounded-md">
                    <EllipsisVertical size={20} />
                  </button>
                  {/* <div className="w-48 divide-y divide-gray-300 shadow-md shadow-gray-300 absolute -left-20 border bg-white border-gray-300 rounded-md">
                    <span className="block p-3 flex items-center gap-1 "><SquarePen size={15}/>Edit</span>
                    <span className="block p-3 flex items-center gap-1 text-red-400"><Trash2 size={15} className=""/>Delete</span>
                  </div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Parties;
