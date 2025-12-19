"use client";
import Header from "@/components/Header";
import { AddUserModal } from "@/components/Modal";
import { useState } from "react";

const UserManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");

    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Header title="Manage Users" />
                <div className="p-5">
                    <div className="grid grid-cols-3 gap-5 ">
                        <div className="rounded-sm p-2 border">
                            <div className="flex items-center justify-between">
                                <p className=" text-sm text-green-600">Number of Users</p>
                            </div>
                            <p className=" font-bold mt-3">1</p>
                        </div>
                        <div className="rounded-sm p-2 border">
                            <div className="flex items-center justify-between">
                                <p className="text-gray-700 text-sm">Activities performed</p>
                            </div>
                            <div className="flex items-center justify-between ">
                                <p className=" font-bold mt-3">1</p>
                                <div className="bg-gray-100 font-medium text-xs py-1 px-2 text-gray-600 rounded-md ">
                                    Last 30 days
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full w-full flex flex-col items-center justify-center gap-5">
                        <div className="bg-gray-100 h-56 w-96 "></div>
                        <div className="text-center ">
                            <h2 className="text-xl font-semibold">
                                Give access to users and monitor their actions
                            </h2>
                            <p className="text-gray-600 mt-1 text-sm">
                                Manage your business more efficiently with full control and vision
                            </p>
                        </div>
                        <div className="flex justify-center gap-4 text-xs font-medium">
                            <button
                                onClick={() => {
                                    setModalType("User");
                                    setIsModalOpen(true);
                                }}
                                className="px-6 py-2 cursor-pointer bg-indigo-600 text-white rounded-xs "
                            >
                                + Add New User
                            </button>
                            <button
                                onClick={() => {
                                    setModalType("CA");
                                    setIsModalOpen(true);
                                }}
                                className="px-6 py-2 cursor-pointer border rounded-xs text-gray-700 "
                            >
                                + Add Your CA
                            </button>
                        </div>
                    </div>
                </div>
                <AddUserModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    title="Add User"
                />
            </div>
        </>

    );
};

export default UserManagement;
