"use client";

import Select from "@/components/Select";
import { ArrowLeft, Printer, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReportPartyWiseOutstanding = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");

  const allData = [
    {
      name: "Cash Sale",
      category: "-",
      contactNumber: "9101280511",
      closingBalance: "-",
    },
  ];

  const toCollectData = [{}];
  const toPayData = [{}];

  const tableDataMap = {
    all: allData,
    collect: toCollectData,
    pay: toPayData,
  };

  const tableData = tableDataMap[activeTab] || [];

  return (
    <div>
      <div className="flex gap-2 items-center px-2 py-3 border-b">
        <ArrowLeft onClick={() => router.back()} className="cursor-pointer" />
        <span>Party Wise Outstanding</span>
        <button className="flex items-center py-1 px-2 text-sm gap-2 bg-gray-200 rounded">
          <Star size={17} className="text-gray-500" />
          Favourite
        </button>
      </div>

      <div className="flex justify-between py-4 px-4">
        <div className="flex gap-2">
          <Select menus={["All categories"]} />
          <Select
            menus={[
              "Today",
              "Yesterday",
              "This Week",
              "Last Week",
              "Last 7 days",
              "This Month",
              "Previous Month",
              "Last 30 days",
              "This Quater",
              "Previous Quater",
              "Current Fiscal Year",
              "Previous Fiscal Year",
              "Last 365 days",
              "Custom Date Range",
            ]}
          />
        </div>
        <div className="flex gap-2">
          <Select menus={["Download Excel", "Download Pdf"]} />
          <button className="flex items-center text-xs text-gray-500 border border-gray-300 py-1.5 px-2 gap-6">
            Print PDF <Printer size={15} />
          </button>
        </div>
      </div>

      <div className="relative flex mx-4 pt-4 items-center justify-between">
        <div className="flex w-fit rounded-t-lg border border-gray-300 overflow-hidden">
          <div className={`${activeTab==="all"?"border-b-2 border-blue-500 ":""}`}>
            <button
            onClick={() => setActiveTab("all")}
            className={`px-10 py-4 text-xs border-r border-gray-300 ${
              activeTab === "all"
                ? "text-blue-600 bg-white"
                : "text-gray-600 bg-gray-50"
            }`}
          >
            All
          </button>
          </div>

          <div className={`${activeTab==="collect"?"border-b-2 border-green-500 ":""}`}>
            <button
            onClick={() => setActiveTab("collect")}
            className={`px-10 py-4 text-xs border-r ${
              activeTab === "collect"
                ? "text-blue-600 bg-white"
                : "text-gray-600 bg-gray-50"
            }`}
          >
            To Collect
          </button>

          </div>
         <div className={`${activeTab==="pay"?"border-b-2 border-red-500 ":""}`}>
             <button
            onClick={() => setActiveTab("pay")}
            className={`px-10 py-4 text-xs ${
              activeTab === "pay"
                ? "text-blue-600 bg-white"
                : "text-gray-600 bg-gray-50"
            }`}
          >
            To Pay
          </button>
         </div>
        </div>

        <div className="absolute top-0 right-0 text-xs font-medium flex bg-yellow-50 items-center justify-center w-1/2 h-10">
          GSTIN and Address can be viewed in excel report
        </div>
      </div>

      <div className="px-4">
        <div className="w-full overflow-x-auto  ">
          <table className="w-full border-collapse border   text-xs">
            <thead>
              <tr className="bg-gray-50 ">
                <th className="border-b  border-gray-200 px-4 py-3 text-left font-medium">
                  NAME
                </th>
                <th className="border-b  border-gray-200 px-4 py-3 text-left font-medium">
                  CATEGORY
                </th>
                <th className="border-b  border-gray-200 px-4 py-3 text-left font-medium">
                  CONTACT NUMBER
                </th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-medium">
                  CLOSING BALANCE
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-16 text-center text-gray-500">
                    No transactions available to generate report
                  </td>
                </tr>
              ) : (
                tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50 text-left">
                    <td className="border-b  border-gray-200 px-4 py-3">
                      {row.name}
                    </td>
                    <td className="border-b  border-gray-200 px-4 py-3">
                      {row.category || "-"}
                    </td>
                    <td className="border-b  border-gray-200 px-4 py-3">
                      {row.contactNumber || "-"}
                    </td>
                    <td className="border-b border-gray-200 px-4 py-3 ">
                      {row.closingBalance ?? "-"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportPartyWiseOutstanding;
