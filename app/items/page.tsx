"use client";

import CreateItem from "@/components/CreateItem";
import Header from "@/components/Header";
import { AddModal } from "@/components/Modal";
import SelectWithInput from "@/components/SelectWithInput";
import {
  ChevronDown,
  ChevronUp,
  CloudUpload,
  ExternalLink,
  FileChartColumn,
  FilePen,
  IndianRupee,
  Keyboard,
  Layers,
  PackageMinus,
  Percent,
  Plus,
  Search,
  Settings,
  SquarePen,
  TrendingUp,
} from "lucide-react";
import React, { useState } from "react";

const Item = () => {
  const [open, setOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isBulkClicked, setIsBulkClicked] = useState(false);
  const [isShowLowStock, setIsShowLowStock] = useState(true);

  return (
    <div className="h-full w-full flex flex-col">
      <Header
        title="Items"
        showReports={true}
        showSettingBtn={true}
        dropdownMenus={[
          "Rate List",
          "Stock Summary",
          "Low Stock Report",
          "Item Sales Summary",
          "Item Batch Report",
        ]}
      />
      <div className="p-5 space-y-3">
      <div className="grid grid-cols-3 w-full gap-4">
        <div className=" border-gray-300 border rounded-lg p-2 ">
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

        <div className=" border-gray-300 border rounded-lg p-2">
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

        <div className=" border-gray-300 border rounded-lg p-2">
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

      <div className=" flex justify-between items-center text-xs">
        <div className="flex items-center gap-4">
          <div className="relative ">
            <Search
              size={18}
              className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 cursor-pointer "
            />
            <input
              type="text"
              className="w-full rounded-xs  py-1.5 px-3 pl-8 text-sm border border-gray-300 focus:border-violet-400 outline-none focus:ring-2 focus:ring-violet-200"
              placeholder="Search Item"
            />
          </div>
          <SelectWithInput
            placeholder="Search Categories"
            isAddOpen={isAddOpen}
            setIsAddOpen={setIsAddOpen}
          />
          <button onClick={()=>setIsShowLowStock(!isShowLowStock)} className="border border-gray-300 rounded-xs py-2 px-4 text-gray-600 hover:border-gray-500 cursor-pointer">
            {isShowLowStock?"Show Lock Stock":"Show All Items"}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsBulkClicked(!isBulkClicked)}
              className="cursor-pointer rounded-xs border p-2 border-gray-300 text-gray-500   flex items-center justify-between gap-4 "
            >
              <div className="flex items-center gap-1">
                <Layers size={15} className="text-gray-700" /> Bulk Actions
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-red-600 text-white rounded-full text-[10px] py-0.5 px-3">
                  GST
                </div>
                <ChevronDown size={15} />
              </div>
            </button>
            {isBulkClicked && (
              <div className="absolute  w-68 bg-white border border-gray-300 z-1  shadow-lg rounded-xs shadow-gray-300">
                <div className="border-b border-gray-300 flex items-center justify-between p-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-100 text-gray-400 p-1 rounded-xs">
                      <Plus size={20} />
                    </span>
                    <div>
                      <span className="block font-medium">Add Items</span>{" "}
                      <span className="block text-xs text-gray-400">
                        Quickly add multiple Items at once
                      </span>
                    </div>
                  </div>

                  <ChevronDown size={15} />
                </div>
                <div>
                  <div className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-2">
                      <span className=" bg-gray-100 text-gray-400 p-1 rounded-xs">
                        <SquarePen size={20} />
                      </span>
                      <div>
                        <span className="block font-medium">Bulk Edit</span>{" "}
                        <span className="block text-xs text-gray-400">
                          Select multiple items and edit them at once
                        </span>
                      </div>
                    </div>

                    <ChevronUp size={15} className="shrink-0" />
                  </div>
                  <button className="text-start p-3 w-full flex items-center gap-1 text-gray-600 font-medium">
                   <FilePen size={15}/> Bulk Edit Items
                   
                  </button>
                </div>

                <button className=" p-3 w-full border-t border-gray-300 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-gray-600 font-medium"><Percent size={15}/> Edit GST rates</span>
                  <div className=" bg-red-600 px-2 py-0.5 text-white rounded-full text-xs">
                    New
                  </div>
                </button>
              </div>
            )}
          </div>
          <div className="">
            <button
              onClick={() => setOpen(true)}
              className="bg-indigo-600 cursor-pointer text-white px-10 py-2 rounded-xs font-medium hover:bg-indigo-700"
            >
              Create Item
            </button>

            {open && <CreateItem onClose={() => setOpen(false)} />}
          </div>
        </div>
      </div>

      <div className=" flex gap-2 text-sm justify-center items-center w-full">
        <button className="bg-blue-100 text-blue-600 p-2">
          Add Items with excel{" "}
        </button>
        <button className="bg-blue-100 text-blue-600 p-2 flex items-center gap-2 ">
          <CloudUpload size={15} /> Import Items
        </button>
      </div>
      </div>

      <AddModal
        title="Add New Category"
        isAddOpen={isAddOpen}
        setIsAddOpen={setIsAddOpen}
      />
    </div>
  );
};

export default Item;
