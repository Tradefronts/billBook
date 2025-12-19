"use client";
import DropdownMenu from "@/components/Dropdown";
import Input from "@/components/Input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CreateExpense = () => {
  const router = useRouter();
  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      <div className="bg-white flex items-center justify-between px-5 py-3 border-b ">
        <div className="flex items-center gap-2 ">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <ArrowLeft />
          </button>
          <h1 className="font-semibold text-lg">Create Expense </h1>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <button className="cursor-pointer p-2.5 border rounded-sm bg-white flex items-center gap-1">
            <Settings size={15} />
          </button>
          <button className="px-10 py-2.5 border rounded-sm bg-white">
            Cancel
          </button>
          <button className="px-14 py-2.5 rounded-sm font-medium text-white bg-[#4c3cce]">
            Save
          </button>
        </div>
      </div>
      <div className="w-full p-5 grid grid-cols-2 gap-5  text-gray-500">
        <div className=" border bg-white  rounded-md p-5 space-y-3">
          <div className="border flex items-center justify-between p-3 rounded-md">
            <Label htmlFor="expenseWithGST font-light">Airplane Mode</Label>

            <Switch id="expenseWithGST" className="cursor-pointer" />
          </div>
          <DropdownMenu
            label="Select Category"
            name="Select Category"
            icon={false}
            menus={[
              "Bank Fee Charge",
              "Employee Salaries & Charge",
              "Printing and Stationery",
              "Raw Material",
              "Rent Expense",
              "Repair & Maintenance",
              "Telephone & Internet Expense",
              "Transportation & Travel Expense",
            ]}
          />
          <Input label="Expense Number" placeholder="" width="w-64" />
        </div>
        <div className=" border bg-white rounded-md grid grid-cols-2 gap-3 p-5">
          <Input label="Original Invoice Number" />
          <Input label="Date" />
          <DropdownMenu
            label="Payment Mode"
            menus={[
              "Cash",
              "UPI",
              "Card",
              "Net Banking",
              "Bank Transfer",
              "Cheque",
            ]}
          />

          <div className="col-span-2">
            <label></label>
            <textarea
              placeholder="Enterr Notes"
              className="w-full border rounded-md p-3"
            />
          </div>
        </div>
      </div>
      <div className="bg-white w-full flex-1">
        <div className="w-3/5 border-b border-gray-300 p-4">

          <button className="border-dashed cursor-pointer border-blue-400 border-2 text-sm  w-full text-blue-400 font-medium py-2 rounded-xs cursour-pointer">
            + Add Items
          </button>
          <div className="bg-amber-400"></div>
        </div>
        <div className="p-4">
                  <span>Total Expense Amount</span>
        </div>
      </div>
    </div>
  );
};

export default CreateExpense;
