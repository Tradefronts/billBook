"use client"

import CreateItem from "@/components/CreateItem";
import {
  ChevronDown,
  CloudUpload,
  ExternalLink,
  FileChartColumn,
  IndianRupee,
  Keyboard,
  Layers,
  PackageMinus,
  Search,
  Settings,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

const page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <header className=" flex justify-between items-center p-4">
        <h1 className="text-lg">Items</h1>
        <div className="flex gap-4 text-sm items-center">
          <span className="flex items-center gap-6 border border-blue-500 p-2 rounded-sm text-blue-500">
            <span className="flex items-center gap-1">
              <FileChartColumn size={15} /> Reports{" "}
            </span>
            <ChevronDown size={15} />
          </span>
          <span className="border border-gray-300 text-gray-700 p-2.5 rounded-sm">
            <Settings size={15} />
          </span>
          <span className="border border-gray-300 text-gray-700 p-2.5 rounded-sm">
            <Keyboard size={15} />
          </span>
        </div>
      </header>
      <div className="flex w-full p-4 gap-4">
        <div className="w-1/2 h-18 border-gray-300 border rounded-lg p-2">
          
          <div className="flex justify-between items-center text-sm">
            <span className="flex gap-2 items-center text-blue-500">
              <TrendingUp size={15} /> Stock Value
            </span>{" "}
            <span>
              <ExternalLink size={15} />
            </span>
          </div>
          <div>
            <span className="gap-1 flex items-center text-2xl">
              <IndianRupee size={15} />0
            </span>
          </div>
        </div>
        <div className="w-1/2 h-18 border-gray-300 border rounded-lg p-2">
          <div className="flex justify-between items-center text-sm">
            <span className="flex gap-2 items-center text-yellow-700">
              <PackageMinus size={15} /> Low Stock
            </span>
            <span>
              <ExternalLink size={15} />
            </span>
          </div>
          <div>
            <span className="gap-1 flex items-center text-2xl">
              <IndianRupee size={15} />0
            </span>
          </div>
        </div>
        <div className="w-1/2 h-18 border-gray-300 border rounded-lg p-2">
          <div className="flex justify-between items-center text-sm">
            <span className="flex gap-2 items-center text-yellow-700">
              <PackageMinus size={15} /> Item expiry in (30 days)
            </span>
            <span>
              <ExternalLink size={15} />
            </span>
          </div>
          <div>
            <span className="gap-1 flex items-center text-2xl">
              <IndianRupee size={15} />0
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 flex justify-between items-center text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center border border-gray-300 rounded-lg px-3 py-2 w-64">
            <span className="text-gray-500 mr-2">
              <Search size={15}/>
            </span>
            <input
              type="search"
              placeholder="Search Item"
              className="outline-none w-full text-sm bg-transparent"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 cursor-pointer">
            <span className="text-gray-600 text-sm">Search Categories</span>
            <span className="ml-2"><ChevronDown size={15} /></span>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 cursor-pointer">
            <span className="text-gray-600 text-sm flex items-center gap-1"><PackageMinus size={15} /> Show Low Stock</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 cursor-pointer">
            <span className="text-gray-600 text-sm flex gap-1 items-center"><Layers size={15}/> Bulk Actions</span>
            <span className="ml-2 bg-red-500 text-white text-xs px-1 py-0.5 rounded-2xl">
              GST
            </span>
            <span className="ml-2"><ChevronDown size={15} /></span>
          </div>

           <div className="p-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-indigo-700"
      >
        Create Item
      </button>

      {open && <CreateItem onClose={() => setOpen(false)} />}
    </div>
        </div>
      </div>
      <div className="p-4 flex gap-2 text-sm justify-center items-center w-full">
        <button className="bg-blue-100 text-blue-600 p-2">Add Items with excel </button>
        <button className="bg-blue-100 text-blue-600 p-2 flex items-center gap-2 "><CloudUpload size={15} /> Import Items</button>
      </div>
    </div>
  );
};

export default page;
