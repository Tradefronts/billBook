"use client";
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
import React, { useState } from "react";
import DropdownMenu from "@/components/DropdownMenu";
import Header from "@/components/Header";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddModal, EditModal, SharedLedger } from "@/components/Modal";
import ExpandableSearch from "@/components/ExpandableSearch";
import SelectWithInput from "@/components/SelectWithInput";

const Parties = () => {
  const [isBulkClicked, setIsBulkClicked] = useState(false);
  const [isSharedLedgerClicked, setIsSharedLedgerClicked] = useState(false);
  const [isEditOpen, setIsEditOpen]=useState(false)
  const [isAddOpen, setIsAddOpen] = useState(false)


  return (
    <div className="w-full h-full flex flex-col">
      <Header
        title="Parties"
        dropdownMenus={[
          "Partywise Outstanding",
          "Item Report By Party",
          "Receivable ageing Report",
        ]}
        isSharedLedgerClicked={isSharedLedgerClicked}
        setIsSharedLedgerClicked={setIsSharedLedgerClicked}
        showSharedLedgerBtn={true}
        showReports={true}
        showSettingBtn={true}
      />
      <div className="p-5 space-y-5 ">
        <div className="grid grid-cols-3 w-full  gap-3 ">
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
            <ExpandableSearch placeholder="Search Party"/>
            <SelectWithInput placeholder="Search Categories" items={["hey", "hello"]} isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} setIsAddOpen={setIsAddOpen} isAddOpen={isAddOpen}/>
          </div>
          <div className=" flex items-center gap-4 ">
            <div className="relative">
              <button
                onClick={() => setIsBulkClicked(!isBulkClicked)}
                className="cursor-pointer rounded-xs border p-2 border-gray-300 text-gray-500 text-sm  flex items-center gap-2"
              >
                <Layers size={15} className="text-gray-700"/> Bulk Actions <ChevronDown size={15} />
              </button>
              {isBulkClicked && (
                <div className="absolute  w-68 bg-white border border-gray-300 z-1 p-2 leading-2 shadow-lg rounded-xs shadow-gray-300">
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
              )}
            </div>
            <Link href="/add-party">
              <button className="rounded-xs border py-2 px-7 text-white cursor-pointer  border-gray-300 bg-[#4c3cce] text-sm flex items-center gap-2 font-medium">
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
      <SharedLedger
        title="SharedLedger Portal"
        isSharedLedgerClicked={isSharedLedgerClicked}
        setIsSharedLedgerClicked={setIsSharedLedgerClicked}
      />
      <EditModal isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen}/>
      <AddModal title="Add New Category" isAddOpen={isAddOpen} setIsAddOpen={setIsAddOpen}/>
    </div>
  );
};

export default Parties;
