import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function BasicDetailsTab() {
  const [itemType, setItemType] = useState("product");

  return (
    <div className="space-y-6 ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label className="block text-gray-700 font-medium mb-2 ">
            Item Type <span className="text-red-500">*</span>
          </label>

          <div className="flex items-center space-x-6">

            <button
              onClick={() => setItemType("product")}
              className={`flex items-center space-x-2 px-4 py-2 border rounded-lg 
                ${itemType === "product" ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}
              `}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${
                    itemType === "product"
                      ? "border-indigo-600"
                      : "border-gray-400"
                  }`}
              >
                {itemType === "product" && (
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                )}
              </div>
              <span className="text-gray-700">Product</span>
            </button>

            <button
              onClick={() => setItemType("service")}
              className={`flex items-center space-x-2 px-4 py-2 border rounded-lg 
                ${itemType === "service" ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}
              `}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${
                    itemType === "service"
                      ? "border-indigo-600"
                      : "border-gray-400"
                  }`}
              >
                {itemType === "service" && (
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                )}
              </div>
              <span className="text-gray-700">Service</span>
            </button>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Category</label>
          <div className="relative">
            <button className="w-full border rounded-lg px-4 py-2 text-left text-gray-600 flex items-center justify-between">
              <span>Select Category</span>
              <ChevronDown size={18} className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Item Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="ex: Maggie 20gm"
            className="w-full border rounded-lg px-4 py-2 outline-none focus:border-indigo-500"
          />
          <p className="text-red-600 text-xs mt-1">
            Please enter the item name
          </p>
        </div>

        <div className="flex items-center space-x-4 mt-7">
          <span className="text-gray-700 font-medium">
            Show Item in Online Store
          </span>

          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-300 peer-focus:ring-indigo-500 rounded-full peer
                peer-checked:bg-indigo-600 transition-all duration-200"></div>
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full
                peer-checked:translate-x-5 transition-all duration-200"></div>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label className="block text-gray-700 font-medium mb-2">Sales Price</label>

          <div className="flex w-full">
            <div className="flex items-center px-4 border rounded-l-lg border-r-0 bg-gray-50 text-gray-600">
              ₹
            </div>

            <input
              type="text"
              placeholder="ex: ₹200"
              className="w-full border-t border-b border-gray-300 px-4 py-2 outline-none"
            />

            <button className="border whitespace-nowrap rounded-r-lg px-4 text-xs bg-gray-50 text-indigo-600 font-medium border-gray-300">
              with tax
            </button>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            GST Tax Rate(%)
          </label>
          <button className="w-full border rounded-lg px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Search size={18} className="text-gray-500" />
              <span>None</span>
            </div>
            <ChevronDown size={18} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <label className="block text-gray-700 font-medium mb-2">Measuring Unit</label>
          <button className="w-full border rounded-lg px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-600">
              <Search size={18} className="text-gray-500" />
              <span>Pieces (PCS)</span>
            </div>
            <ChevronDown size={18} className="text-gray-500" />
          </button>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Opening Stock</label>

          <div className="flex w-full">
            <input
              type="text"
              placeholder="ex: 150 PCS"
              className="w-full border rounded-l-lg px-4 py-2 outline-none border-r-0"
            />

            <div className="px-4 flex items-center border rounded-r-lg bg-gray-50 text-gray-600">
              PCS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
