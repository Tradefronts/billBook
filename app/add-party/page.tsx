import { ArrowLeft, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateParty = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full border-b px-5 py-1.5 border-gray-300 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/parties" className="flex items-center">
            <button className="cursor-pointer">
              <ArrowLeft size={20} />
            </button>
          </Link>
          <h5 className="text-lg">Create Party</h5>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <button className="text-xs flex items-center cursor-pointer hover:bg-gray-100 gap-2 border border-gray-300 rounded-md px-4 py-2 ">
            Party Setting <Settings size={15} className="text-neutral-400" />
          </button>
          <button className="text-[#4c3cce] border cursor-pointer text-xs border-[#4c3cce] px-10 font-semibold  py-2 rounded-md">
            Save & New
          </button>
          <button className="bg-[#4c3cce] cursor-pointer hover:bg-[#8b7df8] text-white text-xs  rounded-md py-2 px-12 font-semibold">
            Save
          </button>
        </div>
      </div>
      <div className=" flex-1 overflow-auto ">
        <div>
          <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider">
            General Details
          </h5>
          <div className="p-5 space-y-5 border-y border-gray-300">
            <div className=" grid grid-cols-4 gap-5">
              <div className="w-full">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Party Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="partyName"
                />
              </div>
              <div>
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="mobileNumber"
                >
                  Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter mobile number"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="mobileNumber"
                />
              </div>
              <div>
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter email"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="email"
                />
              </div>{" "}
              <div>
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Opening Balance
                </label>
                <div className="border border-gray-300 rounded-md">
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                    id="partyName"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex items-center  gap-5">
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="gstin"
                >
                  GSTIN
                </label>
                <input
                  type="text"
                  placeholder="eg:28xxxxxx67xxx"
                  className=" border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="gstin"
                />
              </div>
              <button className="mt-4 font-semibold text-xs text-white px-12 py-1.5 rounded-sm bg-[#4c3cce]">
                Get Details
              </button>
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="panNumber"
                >
                  PAN Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Party Pan Number"
                  className=" border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="panNumber"
                />
              </div>
            </div>
            <span className="text-xs text-gray-500">
              Note: You can auto populate party details from GSTIN
            </span>
            <div className="mt-5 border-t border-gray-300 w-full" />
            <div className="grid grid-cols-4 gap-5">
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Party Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="partyName"
                />
              </div>
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Party Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="partyName"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider">
            Address
          </h5>
          <div className="p-5 space-y-5 border-y border-gray-300">
            <div className=" grid grid-cols-2 gap-5">
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Billing Address{" "}
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Billing Address"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none resize-none"
                  id="partyName"
                />
              </div>
              <div>
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="mobileNumber"
                >
                  Shipping Address
                </label>
                <textarea
                  type="text"
                  placeholder="Enter shipping address"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none resize-none"
                  id="mobileNumber"
                />
              </div>
            </div>
            <div className="mt-5 border-t border-gray-300 w-full" />
            <div className="grid grid-cols-4 gap-5">
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Party Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="partyName"
                />
              </div>
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Party Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="partyName"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider">
            Contact Person Details
          </h5>
          <div className="p-5 space-y-5 border-y border-gray-300">
            <div className="grid grid-cols-4 gap-5">
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="contactPersonName"
                >
                  Contact Person Name
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ankit mishra"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="contactPersonName"
                />
              </div>
              <div className="">
                <label
                  className="text-gray-500 block text-xs mb-0.5"
                  htmlFor="partyName"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full border px-2 py-2  rounded-md border-gray-300 text-sm outline-none"
                  id="partyName"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider">
            Party Bank Account
          </h5>
          <div className="p-5 space-y-5 border-y border-gray-300">
            <div className="space-y-4 flex flex-col items-center justify-center">
              <div className="h-10 w-10 bg-red-400"></div>
              <span className="block">
                Add party bank information to manage transactions
              </span>
              <button className="text-blue-500">+ Add Bank Account</button>
            </div>
          </div>
        </div>
        <div className="">
          <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider">
            Custom Fields
          </h5>
          <div className="p-5  space-y-5 border-y border-gray-300 ">
            <div className="space-y-4 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="w-48 text-xs text-gray-400 border-2 border-gray-400 rounded-md px-2 py-1">
                  Birthday
                </div>
                <div className="w-48 px-2 py-1 text-xs text-gray-400 border-2 border-gray-400 rounded-md">
                  Drug license no
                </div>
                <div className="w-48 h-6 border-2 border-gray-400 rounded-md"></div>
              </div>
              <div className=" p-2 flex flex-col items-center justify-center gap-3">
                <div>
                  Store more information about your parties by adding custom
                  fields from
                  <span className="font-semibold">Party Settings</span>
                </div>
                <button className="text-white text-xs bg-[#4c3cce] px-5 py-1 rounded-sm">
                  Add Custom Fields
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateParty;
