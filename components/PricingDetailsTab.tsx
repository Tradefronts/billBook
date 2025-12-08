"use client";
import { Search, ChevronDown, IndianRupee } from "lucide-react";

export default function PricingDetailsTab() {
  return (
    <div className=" bg-white w-full space-y-6 ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

        <div className="space-y-2 ">
          <label className="text-sm font-medium text-gray-700">Sales Price</label>

          <div className="flex border rounded-sm border-gray-300 overflow-hidden">

            <div className="flex items-center px-3 text-gray-600"><IndianRupee size={15}/></div>

            <input
              type="text"
              placeholder="ex: ₹200"
              className="flex-1 px-3 py-2 outline-none w-10"
            />

            <button className="px-2  py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 border-l border-gray-300 flex items-center gap-1">
              With Tax
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Purchase Price</label>

          <div className="flex border rounded-sm overflow-hidden border-gray-300">

            <div className="flex items-center px-3 text-gray-600 "><IndianRupee size={15}/></div>

            <input
              type="text"
              placeholder="ex: ₹200"
              className="flex-1 px-3 py-2 outline-none w-8"
            />

            <button className="px-2 whitespace-nowrap  py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300 border-l flex items-center gap-1">
              With Tax
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-2 ">
        <label className="text-sm font-medium text-gray-700">GST Tax Rate(%)</label>

        <div className="flex w-1/2 items-center border border-gray-300 rounded-sm px-3 py-2 bg-white">
          <Search className="w-4 h-4 text-gray-500 mr-2" />

          <select className="flex-1 outline-none bg-transparent text-gray-700">
            <option>None</option>
            <option>5%</option>
            <option>12%</option>
            <option>18%</option>
            <option>28%</option>
          </select>

          
        </div>
      </div>

    </div>
  );
}
