"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AddEntryDiolog({title="Add New Entry for Capital"}) {
  return (
    <Dialog >
      <form className="">
        <DialogTrigger asChild>
          <Button variant="outline" className="cursor-pointer bg-none shadow-none border-none hover:bg-transparent hover:text-blue-500 text-blue-500 font-normal text-xs">+ Add New Entry</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px] p-0 ">
          <DialogHeader className="border-b bg-gray-50 rounded-t-md">
            <DialogTitle className="text-base py-4 px-5">
              {title}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 px-5 py-4">

            <div className="grid gap-1">
              <span className="text-sm text-gray-600">Ledger Category</span>
              <div className="px-3 py-2 bg-gray-100 border rounded-md text-gray-800 text-sm">
                Capital
              </div>
            </div>

            <div className="grid gap-1">
              <span className="text-sm text-gray-600">Date</span>
              <input
                type="date"
                className="border rounded-md px-3 py-2 text-sm outline-none"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="grid gap-1">
              <span className="text-sm text-gray-600">Ledger Name</span>
              <input
                type="text"
                placeholder="Enter Ledger Name"
                className="border rounded-md px-3 py-2 text-sm outline-none"
              />
            </div>

            <div className="grid gap-1">
              <span className="text-sm text-gray-600">Amount</span>
              <input
                type="number"
                placeholder="₹ 0"
                className="border rounded-md px-3 py-2 text-sm outline-none"
              />
            </div>

          </div>

          <DialogFooter className="px-5 pb-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-indigo-600 text-white px-6">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
