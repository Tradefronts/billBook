"use client";
import SelectWithInput from "@/components/SelectWithInput";
import { ArrowLeft, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const CreatePaymentOut = () => {
    const router = useRouter();
    return (
        <div className="h-full w-full bg-gray-100">
            <div className="bg-white flex items-center justify-between px-5 py-3 border-b ">
                <div className="flex items-center gap-2 ">
                    <button className="text-xl" onClick={() => router.back()}>
                        <ArrowLeft />
                    </button>
                    <h1 className="font-semibold text-lg">Record Payment In </h1>
                </div>
                <div className="flex items-center gap-3 text-xs">
                    <button className="px-7 py-2 border rounded-sm bg-white flex items-center gap-1">
                        <Settings size={15} />  Settings
                    </button>
                    <button className="px-10 py-2 border rounded-sm bg-white">
                        Cancel
                    </button>
                    <button className="px-14 py-2 rounded-sm font-medium text-blue-600 disabled:bg-gray-200 disabled:text-violet-500/50" disabled>Save</button>
                </div>
            </div>

            <div className="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="w-full space-y-5 bg-white p-5 rounded-lg border border-gray-300 text-gray-500 text-sm">
                    <div className="w-full space-y-2">
                        <label className=" block">Party Name</label>
                        <SelectWithInput placeholder="Search party by name or number" />
                    </div>

                    <div>
                        <label className=" block">Enter Payment Amount</label>
                        <input
                            type="number"
                            placeholder="0"
                            className="mt-2 text-sm w-full p-2 border rounded-sm no-spinner focus:outline-none"
                        />
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-gray-300 text-sm text-gray-500">
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <label className="">Payment Date</label>
                            <input
                                type="date"
                                className="w-full mt-2 p-2 border rounded-sm "
                            />
                        </div>

                        <div>
                            <label className="text-sm ">Payment Mode</label>
                            <select className="w-full mt-2 p-2 border rounded-sm ">
                                <option>Cash</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm ">Payment Out Number</label>
                            <input
                                type="text"
                                value="1"
                                className="w-full mt-2 p-2 border rounded-sm "
                            />
                        </div>
                    </div>
                    <div className="w-full mt-2 text-sm">
                        <label className="">Notes</label>
                        <textarea
                            rows={2}
                            placeholder="Enter Notes"
                            className="mt-2 w-full p-3 border border-gray-300 rounded-sm resize-none focus:outline-none"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col items-center text-center text-gray-600">
                <h2 className="text-lg font-semibold mt-4">No Transactions yet!</h2>
                <p className="text-sm mt-1">Select Party Name to view transactions</p>
                <button className="mt-4 px-7 py-2 text-xs font-semibold rounded-sm border bg-[#4c3cce] text-white">
                    Select Party
                </button>
            </div>
        </div>
    );
};

export default CreatePaymentOut;
