"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import {  CalendarDays, Plus, X } from "lucide-react";
import { Button } from "./ui/button";
import Input from "./Input";
import DropdownMenu from "./Dropdown";
import Select from "./Select";
import { useState } from "react";
const Modal = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Modal;

export const EditModal = ({ isEditOpen, setIsEditOpen, title }) => {
  return (
    <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
      <DialogContent className="w-full p-0">
        <DialogHeader className="bg-gray-100 rounded-t-md p-4">
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="capitalize">Edit {title}</DialogTitle>
            <DialogClose className="border cursor-pointer border-gray-300 p-2 rounded-xs opacity-70 hover:opacity-100">
              <X size={15} className="" />
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="p-3">
          <Input
            label="Category Name"
            placeholder="Ex: Snacks"
            textSize="text-xs"
          />
        </div>
        <DialogFooter>
          <div className="w-full  p-3 flex items-center justify-between border-t border-gray-300">
            <Button className="text-red-600 p-0 text-xs font-semibold bg-white hover:bg-white cursor-pointer">
              Delete Category
            </Button>
            <div className="space-x-3">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Add</Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const AddModal = ({ isAddOpen, setIsAddOpen, title }) => {
  return (
    <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
      <DialogContent className="w-full p-0">
        <DialogHeader className="bg-gray-100 rounded-t-md p-4">
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="capitalize">{title}</DialogTitle>
            <DialogClose className="border cursor-pointer border-gray-300 p-2 rounded-xs opacity-70 hover:opacity-100">
              <X size={15} className="" />
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="px-5">
          <Input
            label="Category Name"
            placeholder="Ex: Snacks"
            textSize="text-xs"
          />
        </div>
        <DialogFooter className="w-full flex items-center justify-end border-t p-4 border-gray-300 ">
          <div className="space-x-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="rounded-xs hover:bg-transparent hover:border-gray-500 cursor-pointer  "
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="disabled:bg-violet-100 disabled:text-violet-500 rounded-xs cursor-pointer "
              disabled
            >
              Add
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const AddUserModal = ({ isOpen, setIsOpen, title }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className=" h-[420px] sm:max-w-[560px] p-0 flex flex-col">
        <DialogHeader className="border-b  px-3 py-1 shrink-0">
          <div className="w-full flex items-center justify-between">
            <DialogTitle className="capitalize text-sm">{title}</DialogTitle>
            <DialogClose className="cursor-pointer p-2 rounded-xs opacity-70 hover:opacity-100">
              <X size={15} />
            </DialogClose>
          </div>
        </DialogHeader>
        <div>
          <div className="grid grid-cols-2 px-3 gap-4">
            <Input label="Name" placeholder="Enter user's name" />
            <Input
              type="number"
              label="Mobile Number"
              placeholder="Enter user's mobile number"
            />
            <div>
              <label>User Role</label>
              <Select
                menus={[
                  "Salesman (With edit access)",
                  "Salesman (without edit access)",
                  "Delivery Boy",
                  "Stock Manager",
                  "Partner",
                ]}
              />
            </div>

            <div>
              <label>Business</label>
              <Select menus={["Business Name"]} />
            </div>
          </div>

          <div className="bg-gray-100 text-sm font-medium py-2 text-center mt-3 flex items-center justify-center gap-1">
            To know more about Admin’s permissions click
            <span className="text-blue-400">User Roles</span>
          </div>
        </div>

        <DialogFooter className="flex-1 h-full  w-full  flex items-end justify-end px-3 mb-5">
          <DialogClose asChild>
            <Button variant="outline" className="font-medium rounded-sm px-12">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" className="rounded-sm px-14 bg-[#4c3cce]">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const AddStaffModal = ({ isAddStaffClicked, setIsAddStaffClicked }) => {
  return (
    <Dialog open={isAddStaffClicked} onOpenChange={setIsAddStaffClicked}>
      <form>
        <DialogContent className="w-full p-0">
          <DialogHeader className="border-b border-gray-300 p-3">
            <div className="w-full flex items-center justify-between">
              <DialogTitle className="capitalize font-normal text-gray-700">
                Add Staff
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4 p-3">
            <Input label="Name" placeholder="Enter Employee Name" />
            <Input
              type="number"
              label="Mobile Number"
              placeholder="Enter Employee Name"
            />
            <div className="">
              <label className="block mb-1">Salary Payout Type</label>
              <Select menus={["Monthly", "Daily"]} />
            </div>
            <Input type="number" label="Salary" placeholder="2000" />
            <div className="">
              <label className="block mb-1">Salary Cycle</label>
              <Select
                menus={[
                  "1 to 1 Every Month",
                  "2 to 2 Every Month",
                  "3 to 3 Every Month",
                  "4 to 4 Every Month",
                  "5 to 5 Every Month",
                  "6 to 6 Every Month",
                  "7 to 7 Every Month",
                  "8 to 8 Every Month",
                  "9 to 9 Every Month",
                  "10 to 10 Every Month",
                  "11 to 11 Every Month",
                  "12 to 12 Every Month",
                  "13 to 13 Every Month",
                  "14 to 14 Every Month",
                  "15 to 15 Every Month",
                  "16 to 16 Every Month",
                  "17 to 17 Every Month",
                  "18 to 18 Every Month",
                  "19 to 19 Every Month",
                  "20 to 20 Every Month",
                  "21 to 21 Every Month",
                  "22 to 22 Every Month",
                  "23 to 23 Every Month",
                  "24 to 24 Every Month",
                  "25 to 25 Every Month",
                  "26 to 26 Every Month",
                  "27 to 27 Every Month",
                  "28 to 28 Every Month",
                ]}
              />
            </div>

            <div>
              <label>Outstanding/Opening Balance</label>
            </div>
          </div>
          <DialogFooter className="border-t border-gray-300 p-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border border-gray-300 text-xs font-normal px-10 text-gray-600"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="px-10 text-xs disabled:bg-purple-900"
              disabled
            >
              Save{" "}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export const SharedLedger = ({
  isSharedLedgerClicked,
  setIsSharedLedgerClicked,
  title,
}) => {
  return (
    <Dialog
      open={isSharedLedgerClicked}
      onOpenChange={setIsSharedLedgerClicked}
    >
      <form>
        <DialogContent className="w-full p-0">
          <DialogHeader className="border-b border-gray-300 p-3">
            <div className="w-full flex items-center justify-between">
              <DialogTitle className="capitalize font-medium text-gray-700">
                {title}
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="px-5 py-0">
            <div className="h-36 w-full bg-gray-100"></div>
            <div className="mt-3">
              <p>
                Allows your parties to view their real-time transaction history,
                <br />
                outstanding balances, and download statements 24/7
              </p>
            </div>
          </div>

          <DialogFooter className="border-t border-gray-300 p-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border border-gray-300 text-xs font-normal px-10 text-gray-600 rounded-xs"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="px-10 text-xs rounded-xs bg-[#4c3cce]"
            >
              Share Link
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export const CreateNewItemModal = ({
  isCreateNewItemModalOpen,
  setIsCreateNewItemModalOpen,
}) => {


  
  return (
    <Dialog
      open={isCreateNewItemModalOpen}
      onOpenChange={setIsCreateNewItemModalOpen}
    >
      <form className="">
        <DialogContent className="mx-auto !max-w-4xl w-full p-0">
          <DialogHeader className="border-b border-gray-300 p-3">
            <div className="w-full flex items-center justify-between">
              <DialogTitle className="capitalize font-medium text-gray-700">
                Create New Item
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className=" h-[450px] w-full  flex items-center gap-3 px-3">
            <div className="w-1/4 h-full border font-sm rounded-lg">
              <div className="border-b border-gray-300 px-3 py-2">
                <button className="w-full text-start hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md cursor-pointer">
                  Basic Details
                </button>
              </div>
              <div className="px-3 py-2 space-y-3">
                <div className="px-1 my-3">Advance details</div>
                <button className="w-full text-start hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md cursor-pointer">
                  Stock Details
                </button>
                <button className="w-full text-start hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md cursor-pointer">
                  Pricing Details
                </button>
                <button className="w-full text-start hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md cursor-pointer">
                  Custom Fields
                </button>
              </div>
            </div>
            <div className="flex-1 h-full border rounded-lg"></div>
          </div>

          <DialogFooter className="border-t border-gray-300 p-3">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="border border-gray-300 text-xs font-normal px-10 text-gray-600 rounded-xs"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="px-10 text-xs rounded-xs bg-[#4c3cce] disabled:bg-indigo-100 disabled:text-indigo-400"
              disabled
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};


export const AdjustBalanceModal = ({ adjustBalanceOpen, setAdjustBalanceOpen })=>{
  return (
    <Dialog open={adjustBalanceOpen} onOpenChange={setAdjustBalanceOpen}>
      <DialogContent className="w-full p-0">
        <DialogHeader className="border-b px-5 py-3">
          <DialogTitle className="text-base font-medium">
            Adjust Balance
          </DialogTitle>
        </DialogHeader>
        <div className="px-5  space-y-5 text-sm">
          <div className="space-y-1 ">
            <p className="text-gray-500">Adjust money in</p>
           <Select menus={["Cash"]} width="w-full"/>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500">Add or Reduce</p>
            <div className="flex gap-3 text-xs">
              <button
                className="bg-violet-100 px-5 py-1.5 rounded-full text-violet-500 border  border-violet-500"
              >
                + Add Money
              </button>
              <button
                className="bg-gray-200 px-5 py-1.5 rounded-full"
              >
                - Reduce Money
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Current Balance</p>
              <p className="mt-1 font-medium">₹ 15</p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-500">Date</p>
              <input type="date" className="border p-2"/>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-blue-400 ">Enter Amount</p>
            <div className="flex items-center gap-1 border-b py-1">
              <div className="w-full relative">
                <div className="absolute left-2 top-1/2 -translate-1/2 text-green-400 flex items-center gap-1"><Plus size={15}/> <span className="text-gray-400">₹</span></div>
              <input
                type="number"
                className="w-full outline-none text-sm pl-8"
              />

              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-500">New balance</p>
          </div>
          <button className="text-indigo-500 text-sm font-medium">
            + Add Remarks
          </button>
        </div>
        <DialogFooter className="border-t px-5 py-3">
          <DialogClose asChild>
            <Button variant="outline" className="px-5 w-2/5 rounded-xs">
              Cancel
            </Button>
          </DialogClose>
          <Button className="px-5 w-2/5 rounded-xs bg-[#4f39f6]">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const TransferBalanceModal = ({ transferBalanceOpen, setTransferBalanceOpen }) => {
  return (
    <Dialog open={transferBalanceOpen} onOpenChange={setTransferBalanceOpen}>
      <DialogContent className="w-full p-0">
        <DialogHeader className="border-b px-5 py-3">
          <DialogTitle className="text-base font-medium">
            Transfer Balance
          </DialogTitle>
        </DialogHeader>
        <div className="px-5  space-y-5 text-sm">
          <div className="space-y-1 ">
            <p className="text-gray-500">Transfer money from</p>
            <Select menus={["Cash"]} width="w-full" />
          </div>
          <div className="space-y-2">
            <p className="text-gray-500">Transfer money to</p>
            <DropdownMenu menus={["Cash"]} name="Select Account"/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Current Balance</p>
              <p className="mt-1 font-medium">₹ 15</p>
            </div>

            <div className="space-y-1">
              <p className="text-gray-500">Date</p>
              <input type="date" className="border p-2" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-blue-400 ">Enter Amount</p>
            <div className="flex items-center gap-1 border-b py-1">
              <div className="w-full relative">
                <div className="absolute left-2 top-1/2 -translate-1/2 "> <span className="text-gray-400">₹</span></div>
                <input
                  type="number"
                  className="w-full outline-none text-sm pl-8"
                />

              </div>
            </div>
          </div>
         
          <button className="text-indigo-500 text-sm font-medium">
            + Add Remarks
          </button>
        </div>
        <DialogFooter className="border-t px-5 py-3">
          <DialogClose asChild>
            <Button variant="outline" className="px-5 w-2/5 rounded-xs">
              Cancel
            </Button>
          </DialogClose>
          <Button className="px-5 w-2/5 rounded-xs bg-[#4f39f6]">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}