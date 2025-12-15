"use client";

import React from "react";
import { ArrowLeft, Settings, Barcode, ChevronDown } from "lucide-react";
import Input from "@/components/Input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { useRouter } from "next/navigation";

const CreateSalesInvoice = () => {
  const router=useRouter()
  return (
    <div className="flex h-full w-full flex-col bg-white text-sm text-gray-800">
      <div className="flex items-center justify-between border-b border-gray-300 px-5 py-2">
        <div className="flex items-center gap-2">
          <button onClick={()=>router.back()} className="cursor-pointer"><ArrowLeft size={20} /></button>
          <h5 className="text-sm font-medium">Create Sales Invoice</h5>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-1.5 text-xs hover:bg-gray-100">
            <Settings size={15} className="text-gray-500" />
            <span>Settings</span>
          </button>
          <button className="rounded-md bg-[#4c3cce] px-8 py-1.5 text-xs font-semibold text-white hover:bg-[#8b7df8]">
            Save Sales Invoice
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex border-b border-gray-300">
          <div className="flex h-44 w-4/6 flex-col border-r border-gray-300">
            <div className="border-b border-gray-300 px-5 py-2 text-xs text-gray-600">
              Bill To
            </div>
            <div className="flex flex-1 items-center px-5">
              <div className="flex h-28 w-72 items-center justify-center rounded-sm border-2 border-dashed border-blue-400">
                <button className="text-xs font-medium text-blue-600">
                  + Add Party
                </button>
              </div>
            </div>
          </div>
          <div className="h-44 w-2/6 space-y-3 p-4">
            <div className="w-full flex gap-2">
              <Input
                label="Sales Invoice No"
                id="invoiceNo"
                placeholder=""
                width="w-28"
                padding=" px-1.5 py-0.5"
                bgColor="bg-gray-200"
                textSize="text-[11px]"
              />

              <div className="w-28 flex flex-col text-xs">
                <label className="mb-1 text-[11px] text-gray-500">
                  Sales Invoice Date
                </label>
                <input
                  type="date"
                  className="rounded-md border border-gray-300 px-3 py-1 text-xs outline-none"
                />
              </div>
            </div>
            <div className="flex w-[70%] items-center gap-3 rounded-md border-2 border-dashed border-gray-300 p-2">
              <div className="flex-1">
                <span className="block text-[11px] text-gray-500">
                  Payment Terms :
                </span>
                <div className="mt-1 flex items-center overflow-hidden rounded-md border border-gray-300">
                  <input
                    type="text"
                    className="w-full px-2 py-1 text-xs outline-none"
                  />
                  <span className="bg-gray-200 px-2 py-1 text-[11px]">
                    days
                  </span>
                </div>
              </div>
              <div>
                <span className="block text-[11px] text-gray-500">
                  Due Date :
                </span>
                <input
                  type="date"
                  className="mt-1 rounded-md border border-gray-300 px-2 py-1 text-[11px] outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-b border-gray-300 bg-gray-50 text-[11px] font-medium text-gray-600">
          <div className="flex flex-1 border-r border-gray-300">
            <div className="flex h-10 w-10 items-center justify-center border-r border-gray-300">
              NO
            </div>
            <div className="flex h-10 flex-1 items-center px-3">
              ITEMS/ SERVICES
            </div>
            <div className="flex h-10 w-24 items-center justify-center border-l border-gray-300">
              HSN/ SAC
            </div>
            <div className="flex h-10 w-24 items-center justify-center border-l border-gray-300">
              BATCH NO.
            </div>
            <div className="flex h-10 w-24 items-center justify-center border-l border-gray-300">
              EXP. DATE
            </div>
            <div className="flex h-10 w-24 items-center justify-center border-l border-gray-300">
              MFG DATE
            </div>
            <div className="flex h-10 w-16 items-center justify-center border-l border-gray-300">
              QTY
            </div>
            <div className="flex h-10 w-28 items-center justify-center border-l border-gray-300">
              PRICE/ITEM (₹)
            </div>
            <div className="flex h-10 w-24 items-center justify-center border-l border-gray-300">
              DISCOUNT
            </div>
            <div className="flex h-10 w-16 items-center justify-center border-l border-gray-300">
              TAX
            </div>
            <div className="flex h-10 w-28 items-center justify-center border-l border-gray-300">
              AMOUNT (₹)
            </div>
          </div>
        </div>
        <div className="h-16 border-b border-gray-300" />
        <div className="flex border-b border-gray-300 text-xs">
          <div className="flex-1 border-r border-gray-300" />
          <div className="flex w-40 items-center justify-between border-r border-gray-300 px-3 py-2">
            <span className="font-medium">SUBTOTAL</span>
            <span>₹ 0</span>
          </div>
          <div className="flex w-24 items-center justify-between border-r border-gray-300 px-3 py-2">
            <span className="font-medium">₹ 0</span>
          </div>
          <div className="flex w-28 items-center justify-between px-3 py-2">
            <span className="font-medium">₹ 0</span>
          </div>
        </div>
        <div className="flex divide-x divide-gray-300">
          <div className=" w-1/2 text-sm">
            <div className="space-y-2 border-b border-gray-100 p-5 ">
              <button className="block text-blue-500">+ Add Notes</button>
              <button className="text-blue-500">
                + Add Terms and Conditions
              </button>
            </div>
            <div className="p-5">
              <button className="text-blue-500">+ Add New Account</button>
            </div>
          </div>

          <div className=" w-1/2 text-sm">
            <div className="border-b border-gray-300 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <button className="text-blue-500">
                  + Add Additional Charges
                </button>
                <span>₹ 0</span>
              </div>

              <div className="flex  items-center justify-between">
                <span>Taxable Amount</span>
                <span>₹ 0</span>
              </div>

              <div className="flex  items-center justify-between">
                <button className="text-blue-500">+ Add Discount</button>
                <span>₹ 0</span>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  id="applyTCS"
                  className="border-gray-500 checked:bg-blue-400"
                />
                <Label htmlFor="applyTCS" className="font-normal text-sm">
                  Apply TCS
                </Label>
              </div>
            </div>

            <div className="space-y-2 text-gray-700 border-b border-gray-300 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="roundOff"
                    className="border-gray-500 checked:bg-blue-400"
                  />
                  <Label htmlFor="roundOff" className="font-normal text-sm">
                    Auto Round Off
                  </Label>
                </div>
                <div className="border border-gray-300 rounded-md flex ">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="bg-gray-100 cursor-pointer border-r border-gray-200 px-3 py-2 flex items-center gap-3">
                      + Add <ChevronDown size={15} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="p-0">
                      <DropdownMenuItem>+ Add</DropdownMenuItem>
                      <DropdownMenuItem>- Reduce</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="flex items-center">
                    <label htmlFor="" className="pr-7 pl-2">
                      ₹
                    </label>
                    <input
                      type="number"
                      className=" w-8 p-2 outline-none  appearance-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between ">
                <span className="font-medium">Total Amount</span>
                <input
                  type="text"
                  placeholder="Enter Payment amount"
                  className=" border outline-none px-2 py-1 bg-gray-200 rounded-md"
                />
              </div>
            </div>

            <div className="p-5 border-b border-gray-300 flex items-center justify-between">
              <span>Amount Received</span>
              <div>
                <div className="flex items-center gap-3">
                  <Label htmlFor="paid" className="font-normal text-sm">
                    Mark as full Paid{" "}
                  </Label>
                  <Checkbox
                    id="paid"
                    className="border-gray-500 checked:bg-blue-400"
                  />
                </div>
                <div className="border border-gray-300 rounded-md">

                  <NativeSelect className="outline-none ring-0 border-none">
                    <NativeSelectOption value="todo">Cash</NativeSelectOption>
                    <NativeSelectOption value="in-progress">UPI</NativeSelectOption>
                    <NativeSelectOption value="done">Netbanking</NativeSelectOption>
                    <NativeSelectOption value="cancelled">Card</NativeSelectOption>
                  </NativeSelect>
                </div>
              </div>
            </div>

            <div className="px-5 py-3 border-b border-gray-300 flex items-center justify-between">
              <span>Balance Amount</span>
              <span>₹ 0</span>
            </div>
            <div className="p-5 border-b border-gray-300">
              <div className="flex flex-col items-end justify-end gap-2 ">
                <p className="">
                  Authorized signatory for{" "}
                  <span className="font-medium">Business Name</span>
                </p>
                <div className="flex h-30 w-56 items-center justify-center rounded-sm border-2 border-dashed border-blue-400">
                  <button className="text-sm font-medium text-blue-600">
                    + Add Signature
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSalesInvoice;
