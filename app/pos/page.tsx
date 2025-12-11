"use client";

import { Search } from "lucide-react";

const POS=()=> {
    return (
        <div className="min-h-screen w-full bg-gray-50 text-gray-700">
            <div className="w-full flex items-center justify-between px-4 py-3 border-b bg-white">
                <button className="text-sm text-gray-600 hover:text-black">
                    ← Exit POS [ESC]
                </button>
                <h1 className="font-semibold text-lg">POS Billing</h1>
                <div className="flex items-center gap-3">
                    <button className="px-3 py-1 border rounded-md text-sm">
                        Watch how to use POS Billing
                    </button>
                    <button className="px-3 py-1 border rounded-md text-sm">
                        Settings [CTRL + S]
                    </button>
                </div>
            </div>
            <div className="w-full grid grid-cols-12 gap-4 p-4">
                <div className="col-span-8">
                    <div className="flex items-center gap-2 border-b pb-2 mb-4">
                        <button className="px-4 py-2 bg-white border rounded-md shadow-sm text-sm">
                            Billing Screen 1 [CTRL + 1]
                        </button>
                        <button className="px-4 py-2 bg-white border rounded-md shadow-sm text-sm">
                            + Hold Bill & Create Another [CTRL + B]
                        </button>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                        <button className="px-4 py-2 bg-white border rounded-md shadow-sm text-sm">
                            + New Item [CTRL + I]
                        </button>
                        <button className="px-4 py-2 bg-white border rounded-md text-sm">Change Price [P]</button>
                        <button className="px-4 py-2 bg-white border rounded-md text-sm">Change QTY [Q]</button>
                        <button className="px-4 py-2 bg-red-100 text-red-700 border rounded-md text-sm">
                            Delete Item [DEL]
                        </button>
                    </div>
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-3 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search by Item Name/Item Code or Scan Barcode"
                            className="w-full h-12 pl-10 pr-4 border rounded-md focus:ring-2 focus:ring-violet-400"
                        />
                        <span className="absolute right-4 top-3 text-xs text-gray-500">[F1]</span>
                    </div>
                    <div className="grid grid-cols-6 bg-gray-100 text-xs font-medium border-y py-2">
                        <div className="pl-3">NO</div>
                        <div>ITEMS</div>
                        <div>ITEM CODE</div>
                        <div>MRP</div>
                        <div>SP (₹)</div>
                        <div>QUANTITY</div>
                        <div>AMOUNT (₹)</div>
                    </div>
                    <div className="flex flex-col items-center justify-center h-[350px] text-center">
                        {/* <img
                            src="/empty-box.png"
                            alt="empty"
                            className="w-20 opacity-70 mb-4"
                        /> */}
                        <p className="text-sm text-gray-600">
                            Add items by searching item name or item code
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            Or simply scan barcode to add items
                        </p>
                    </div>
                </div>

                <div className="col-span-4 space-y-4">
                    <div className="flex items-center gap-2">
                        <button className="w-1/2 h-10 bg-white border rounded-md text-sm">
                            Add Discount [F2]
                        </button>
                        <button className="w-1/2 h-10 bg-white border rounded-md text-sm">
                            Add Additional Charge [F3]
                        </button>
                    </div>
                    <div className="bg-white border rounded-md p-4 space-y-2">
                        <p className="text-sm font-medium">Bill details</p>

                        <div className="flex justify-between text-sm">
                            <span>Sub Total</span>
                            <span>₹ 0</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span>Tax</span>
                            <span>₹ 0</span>
                        </div>

                        <div className="flex justify-between text-lg font-semibold text-green-700 border-t pt-3">
                            <span>Total Amount</span>
                            <span>₹ 0</span>
                        </div>
                    </div>
                    <div className="bg-white border rounded-md p-4">
                        <div className="flex justify-between text-sm">
                            <span>Received Amount</span>
                            <span>[F4]</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <span>₹ 0</span>
                            <select className="border rounded-md px-2 py-1 text-sm">
                                <option>Cash</option>
                                <option>Card</option>
                                <option>UPI</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-white border rounded-md p-4">
                        <div className="flex justify-between text-sm">
                            <span>Customer Details</span>
                            <span>[F5]</span>
                        </div>

                        <button className="mt-2 px-3 py-1 border rounded-md text-sm">
                            Cash Sale
                        </button>
                    </div>
                    <div className="flex items-center gap-3 mt-5">
                        <button className="w-1/2 h-12 border rounded-md">Save & Print [F6]</button>
                        <button className="w-1/2 h-12 bg-violet-600 text-white rounded-md">
                            Save Bill [F7]
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default POS