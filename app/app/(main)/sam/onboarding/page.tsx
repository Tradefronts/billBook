"use client";
import Header from "@/components/Header";
import { AddStaffModal, AddUserModal } from "@/components/Modal";
import { useState } from "react";

const SAM = () => {
    const [isAddStaffClicked, setIsAddStaffClicked] = useState(false);

    const features = [
        {
            title: "Mark your staff's attendance digitally",
        },
        {
            title: "Simplify payroll by adding salary, advance & pending payments",
        },
        {
            title: "Set custom reminders to mark attendance timely",
        },
    ];

    return (
        <div className="w-full h-full flex flex-col">
            <Header title="Staff Attedance & Payroll" />
            <div className="w-5xl mx-auto mt-5">
                <div className="w-full grid grid-cols-3 gap-5">
                    {features.map((feature, index) => {
                        return (
                            <div key={index} className=" border border-gray-300 rounded-sm">
                                <div className=" w-full flex items-center justify-center p-10">
                                    <div className="h-24 w-24 bg-gray-400 rounded-full"></div>
                                </div>
                                <div className="w-full border-t border-gray-300 text-center p-3 text-sm text-gray-700">
                                    <span className="block text-sm">{feature.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 w-full flex flex-col items-center justify-center gap-5">
                <div className="text-center ">
                    <h2 className="text-xl font-semibold">
                        Mark attendance and manage payroll
                    </h2>
                    <p className="text-gray-600 mt-3 text-sm">
                        Add staff to Mark attendance and manage payroll with ease!
                    </p>
                </div>
                <div className="flex items-center justify-center gap-4 text-xs font-medium">
                    <button
                        onClick={() => setIsAddStaffClicked(true)}
                        className="cursor-pointer px-8 py-2 bg-indigo-600 text-white rounded-sm "
                    >
                        + Add Staff
                    </button>
                    <AddStaffModal
                        isAddStaffClicked={isAddStaffClicked}
                        setIsAddStaffClicked={setIsAddStaffClicked}
                    />
                </div>
            </div>
        </div>
    );
};

export default SAM;
