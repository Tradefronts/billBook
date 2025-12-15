"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const Reminders=()=> {
    const [billingToggle, setBillingToggle] = useState(true);
    const [paymentToggle, setPaymentToggle] = useState(false);

    return (
        <div className="w-full min-h-screen bg-[#f7f9fc] p-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl font-semibold">Reminder Settings</h1>
                        <p className="text-sm text-gray-500">
                            Select Which Reminders Are Sent To You And Your Parties
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="px-4 py-2 border rounded-lg text-gray-600">
                            Cancel
                        </button>
                        <button className="px-4 py-2 bg-purple-200 text-purple-700 rounded-lg">
                            Save Changes
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 bg-white shadow-sm flex justify-between items-center">
                        <div>
                            <p className="font-medium">Send billing Whatsapp/SMS to Party</p>
                            <p className="text-xs text-gray-500">
                                Send Whatsapp/SMS to your Party on creating any transaction
                            </p>
                        </div>
                        <div
                            onClick={() => setBillingToggle(!billingToggle)}
                            className={`w-10 h-5 rounded-full flex items-center cursor-pointer transition 
              ${billingToggle ? "bg-purple-600" : "bg-gray-300"}`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full transition 
                ${billingToggle ? "translate-x-5" : "translate-x-1"}`}
                            ></div>
                        </div>
                    </div>
                    <div className="border rounded-lg p-4 bg-white shadow-sm flex justify-between items-center">
                        <div>
                            <p className="font-medium">Get payment reminders on WhatsApp</p>
                            <p className="text-xs text-gray-500">
                                Get WhatsApp alerts when you have to collect payment from customers
                            </p>
                        </div>
                        <div
                            onClick={() => setPaymentToggle(!paymentToggle)}
                            className={`w-10 h-5 rounded-full flex items-center cursor-pointer transition 
              ${paymentToggle ? "bg-purple-600" : "bg-gray-300"}`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full transition 
                ${paymentToggle ? "translate-x-5" : "translate-x-1"}`}
                            ></div>
                        </div>
                    </div>

                </div>
                <div className="mt-6 border rounded-lg overflow-hidden bg-white">
                    <button className="w-full flex justify-between items-center px-4 py-4 border-b text-sm hover:bg-gray-50">
                        <span className="font-medium">
                            TO PARTY <span className="text-gray-500">(Reminders will be sent through sms)</span>
                        </span>
                        <ChevronRight className="text-gray-400" />
                    </button>
                    <button className="w-full flex justify-between items-center px-4 py-4 text-sm hover:bg-gray-50">
                        <span className="font-medium">
                            TO YOU <span className="text-gray-500">(Reminders will be sent on mobile app and whatsapp)</span>
                        </span>
                        <ChevronRight className="text-gray-400" />
                    </button>

                </div>

            </div>
        </div>
    );
}

export default Reminders