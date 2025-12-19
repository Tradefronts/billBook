"use client";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { Info } from "lucide-react";

const CAReportSharing = () => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="w-full h-full flex flex-col px-5">
            <div className="flex justify-between items-center border-b border-gray-300 py-3">
                <div>
                    <h1 className="text-lg">CA Reports Sharing</h1>
                    <p className="text-xs text-gray-500">
                        Automatically share reports to your CA every month
                    </p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                    <button className="px-4 py-1 rounded-xs text-gray-600 border border-gray-300">
                        Cancel
                    </button>
                    <button
                        className="px-4 py-1 rounded-xs  disabled:bg-gray-100 disabled:text-violet-200 font-medium"
                        disabled
                    >
                        Save Changes
                    </button>
                </div>
            </div>

            <div className="">
                <h2 className="text-lg py-3">Settings</h2>
                <div className="border border-gray-300 rounded-lg p-5">
                    <div className="w-2/5 flex items-center justify-between">
                        <div className="space-y-3">
                            <p className="text-lg text-gray-800">Enable Sharing</p>
                            <p className="text-sm font-medium text-gray-400">
                                Control the business reports sharing with your CA
                            </p>
                        </div>
                        <Switch className="cursor-pointer" />
                    </div>
                </div>

                <div className="mt-4 bg-yellow-50 px-4 py-2 rounded flex items-center gap-2 text-base">
                    <Info size={20} className="" />
                    <p className="">
                        Automatic report sending will be scheduled for the 1st of every
                        month starting from January 1, 2026
                    </p>
                </div>
            </div>

            <div className="flex-1 flex items-end py-2 justify-start">
                <p className="text-sm text-gray-400 text-center">
                    Note: The use of this logo does not imply any endorsement,
                    affiliation, or association with the ICAI. The logo is the
                    intellectual property of ICAI, and all rights to the logo remain with
                    them.
                </p>
            </div>
        </div>
    );
};

export default CAReportSharing;
