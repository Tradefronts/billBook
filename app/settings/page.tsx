"use client";
import Input from "@/components/Input";
import { Calendar, ImagePlus, MessageCircle } from "lucide-react";
import React, { useState } from "react";

const Settings = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full  border-b border-gray-300 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="leading-4">
            <h5>Business Settings</h5>
            <span className="text-xs text-gray-500">
              Edit your company settings and information
            </span>
          </div>
          <button className="bg-[#db631a] text-white text-xs rounded-md px-7 py-2">
            Create new business
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-xs px-5 py-2 rounded-md bg-blue-100 text-blue-500 font-semibold flex items-center gap-1">
            <MessageCircle size={15} />
            Chat Support
          </button>
          <button className="text-xs px-5 py-2 rounded-md border border-gray-300  font-semibold flex items-center gap-1">
            <Calendar size={15} />
            Close Financial Year{" "}
          </button>
          <button className="text-xs px-16 py-2 rounded-md border border-gray-300 ">
            Cancel
          </button>
          <button
            className="text-xs px-10 py-2 rounded-md border border-gray-300 bg-purple-100 text-white"
            disabled
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className=" flex-1 overflow-auto ">
        <div className="">
          <div className="grid grid-cols-2 gap-24 p-5">
            <div className="space-y-4">
              <div className=" flex items-center justify-center gap-4">
                <label className="flex p-4 cursor-pointer flex-col items-center justify-center gap-1 rounded-sm  border-2 border-dashed border-blue-300 bg-slate-50 text-center text-xs text-slate-500">
                  <span>
                    <ImagePlus size={20} className="text-blue-400" />
                  </span>
                  <span className="mb-1 text-sm font-semibold text-blue-400">
                    Upload Logo
                  </span>
                  <span className="">
                    PNG/JPG, max <br />5 MB.
                  </span>
                  <input type="file" className="hidden" />
                </label>
                <div className="flex-1">
                  <Input
                    label="Business Name"
                    placeholder="Enter Business Name"
                    id="businessName"
                  />
                </div>
              </div>
              <div className=" grid gap-4 md:grid-cols-2">
                <Input
                  label="Company Phone Number"
                  placeholder="Enter Company phone number"
                  id="companyPhoneNUmber"
                />

                <Input
                  label="Company E-mail"
                  placeholder="Enter Company E-mail"
                  id="companyEmail"
                />
              </div>

              <Input
                label="Billing Address"
                placeholder="Enter Billing Address"
                id="billingAddress"
              />

              <div className=" grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-600">
                    State
                  </label>
                  <div className="relative">
                    <select className="w-full appearance-none rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                      <option>Enter State</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-slate-500">
                      ▼
                    </span>
                  </div>
                </div>

                <Input
                  label="Pincode"
                  placeholder="Enter Pincode"
                  id="pincode"
                />
              </div>

              <Input label="City" placeholder="Enter City" id="city" />
              <div className="">
                <p className="mb-2 text-xs font-medium text-slate-600">
                  Are you GST Registered?
                </p>
                <div className="mb-3 flex gap-2">
                  <label className="flex hover:bg-gray-100 cursor-pointer items-center justify-between gap-2 text-xs text-gray-800 border border-gray-300 rounded-md p-3 w-44">
                    <span>Yes</span>
                    <input
                      type="radio"
                      name="gst"
                      defaultChecked
                      className="h-4 w-4"
                    />
                  </label>
                  <label className="flex hover:bg-gray-100 cursor-pointer items-center justify-between gap-2 text-xs text-gray-800 border border-gray-300 rounded-md p-3 w-44">
                    <span>No</span>

                    <input type="radio" name="gst" className="h-4 w-4 " />
                  </label>
                </div>
                <Input
                  label="GSTIN"
                  placeholder="Enter Your GST Number"
                  id="gstNUmber"
                />
              </div>

              <div className=" flex items-center justify-between rounded-md border border-slate-200 px-3 py-2">
                <span className="font-medium text-slate-700">
                  Enable e‑Invoicing
                </span>

                <label className="relative inline-flex h-5 w-12 bg-gray-200 rounded-full items-center  cursor-pointer">
                  <input
                    type="checkbox"
                    className="peer hidden"
                    checked={enabled}
                    onChange={() => setEnabled(!enabled)}
                  />

                  <span className="bg-gray-400 h-6 w-6 rounded-full absolute transition-all shadow translate-x-0 peer-checked:translate-x-6 "></span>
                </label>
              </div>

              <Input
                label="PAN Number"
                placeholder="Enter your PAN Number"
                id="PANNumber"
              />
              <div className="mb-6 space-y-7">
                <div className=" flex items-center justify-between">
                  <span className=" text-sm text-slate-600">Enable TDS</span>
                  <label className="relative inline-flex h-6 w-12 bg-gray-200 rounded-full items-center  cursor-pointer px-1">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      checked={enabled}
                      onChange={() => setEnabled(!enabled)}
                    />

                    <span className="bg-white h-5 w-5 rounded-full absolute transition-all shadow translate-x-0 peer-checked:translate-x-5"></span>
                  </label>
                </div>
                <div className=" flex items-center justify-between">
                  <span className=" text-sm text-slate-600">Enable TCS</span>
                  <label className="relative inline-flex h-6 w-12 bg-gray-200 rounded-full items-center  cursor-pointer px-1 ">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      checked={enabled}
                      onChange={() => setEnabled(!enabled)}
                    />

                    <span className="bg-white h-5 w-5 rounded-full absolute transition-all shadow translate-x-0 peer-checked:translate-x-5  "></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Business Type (Select multiple, if applicable)
                </label>
                <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                  <option>
                    Retailer, Wholesaler, Distributor, Manufacturer, Services
                  </option>
                </select>
              </div>
              <div className="">
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Industry Type
                </label>
                <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                  <option>Accounting and Financial Services</option>
                </select>
              </div>
              <div className="">
                <label className="mb-1 block text-xs font-medium text-slate-600">
                  Business Registration Type
                </label>
                <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
                  <option>Select</option>
                </select>
              </div>
              <p className=" text-[11px] text-red-500">
                Business registration type is not selected
              </p>
              <p className="mb-4 text-[11px] text-slate-700 bg-neutral-100 py-2.5 text-center">
                <span className="font-semibold">Note:</span>Terms &amp;
                Conditions and Signature added below will be shown on your
                Invoices
              </p>
              <div className=" w-2/5">
                <p className="mb-2 text-sm font-medium text-slate-600">
                  Signature
                </p>
                <label className="flex h-28 cursor-pointer items-center justify-center rounded-sm border border-dashed border-blue-500 bg-slate-50 text-xs text-indigo-600">
                  + Add Signature
                  <input type="file" className="hidden" />
                </label>
              </div>
              <div className="rounded-lg border border-gray-300 ">
                <div className="border-b border-gray-300 p-4">
                  <p className="mb-1 text-sm  text-slate-400">
                    Add Business Details
                  </p>
                  <p className="text-xs text-slate-400">
                    Add additional business information such as MSME number,
                    Website etc.
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:flex-row p-5">
                  <input type="text" placeholder="Website" className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"/>
                  <span className="hidden items-center text-xs text-slate-500 md:flex">
                    =
                  </span>
                  <input
                  type="text"
                    placeholder="www.website.com"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                  <button className="rounded-md bg-indigo-600 px-10 py-2 text-xs font-medium text-white">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider border-t border-gray-300">
              Company Settings
            </h5>
            <div className="p-5  space-y-5 border-y border-gray-300 text-xs">
              <button className="flex items-center gap-2 border border-gray-300 p-3 rounded-md">
                <div className="bg-gray-400 h-4 w-8 "></div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="block font-medium">
                      Data Export to Tally
                    </span>
                    <div className="bg-red-300 h-4 w-7"></div>
                  </div>
                  <span>Transfer vouchers, items and parties to Tally</span>
                </div>
              </button>
            </div>
          </div>
          <div className="">
            <h5 className=" py-2 text-sm bg-gray-50 px-5 tracking-wider border-t border-gray-300">
              Add New Business
            </h5>
            <div className="px-5 pt-5  space-y-5 border-y border-gray-300 text-xs">
              <div className="space-y-5 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-48 h-10 bg-red-600"></div>
                  <span className="text-sm block text-slate-700 tracking-wide ">
                    Easily manage all your business in one place{" "}
                  </span>
                </div>

                <button className="text-white py-1 px-6 bg-[#4c3cce] rounded-t-sm font-semibold">
                  Create New Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
