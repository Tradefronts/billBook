"use client";
import Input from "@/components/Input";
import { useState } from "react";

const Account = () => {
  return (
    <div className="w-full h-full white">
      <div className="flex items-center justify-between  px-5 py-2 border-b border-gray-300">
        <div className="space-y-1">
          <h1 className="text-base text-slate-800">Account Settings</h1>
          <span className="text-xs text-gray-500">
            Manage your account and subscription
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <button className="px-16 py-2 border rounded-xs text-gray-600 hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-16 py-2 rounded-xs bg-[#e2dffe] text-white font-medium">
            Save Changes
          </button>
        </div>
      </div>
      <div className="bg-[#fdeede] text-center border-b border-gray-300 py-3 font-semibold flex items-center justify-center">
        <span className="text-lg tracking-wide">
          Help us make myBillBook better
        </span>
        <button className="ml-3 px-4 py-2 bg-[#e7630a] text-white rounded-xs text-sm">
          Share Suggestion
        </button>
      </div>
      <div className="">
        <div className="">
          <h2 className=" px-5 bg-gray-50 border-b text-sm border-gray-300 py-2">
            General Information
          </h2>
          <div className="grid grid-cols-3 gap-6 p-4 bg-white">
            <Input label="Name" placeholder="Your Name" />
            <Input label="Mobile Number" placeholder="Enter Mobile Number" />
            <Input label="Email" placeholder="Enter Email" />
          </div>
        </div>

        <div className="">
          <h2 className="px-5 text-sm bg-gray-50 border-y border-gray-300 py-2">
            Referral code for subscription discount
          </h2>
          <div className="flex gap-3 max-w-md bg-white p-5">
            <input
              placeholder="Referral Code"
              className="w-full border rounded-sm px-3 py-1.5 text-sm outline-none focus:border-blue-400"
            />
            <button className="px-16 py-1.5 bg-[#4b30f2] text-white rounded-sm">
              Apply
            </button>
          </div>
        </div>

        <div className="bg-red-400 ">
          <h2 className="px-5 text-sm bg-gray-50 border-y border-gray-300 py-2">
            Subscription Plan
          </h2>

          <div className="grid grid-cols-2 gap-6 bg-white">
            <div className="p-5 flex flex-col  justify-between">
              <div>
                <p className="text-xs uppercase font-semibold text-gray-500">
                  Current Plan
                </p>
                <p className="text-2xl font-semibold ">Trial</p>
              </div>

              <div>
                <button className=" px-6 py-3 bg-[#db631a] text-white rounded-xs text-sm font-semibold">
                  Buy Subscription Plan
                </button>

                <div className="flex items-center gap-2 mt-4 text-gray-600 text-sm">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border"> </div>
                    <div className="w-8 h-8 rounded-full border"> </div>
                    <div className="w-8 h-8 rounded-full border"> </div>
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    10,00,000+ Vyaparis running their <br/>business on myBillBook
                    premium
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4  text-sm space-y-5">
                          <span className="block">Upgrade your plan today and get access to premium features:</span>
                          <div className="grid grid-cols-2 gap-3 bg-gray-50">
              <Feature title="Multi User and Staff Access" />
              <Feature title="Multiple Businesses" />
              <Feature title="EWay Bill Generation" />
              <Feature title="Desktop App" />
              <Feature title="SMS Marketing" />
                              <Feature title="Scan & Print Barcode" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Feature({ title }: { title}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md ">
      <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
      <p className="font-medium text-gray-700">{title}</p>
    </div>
  );
}

export default Account;
