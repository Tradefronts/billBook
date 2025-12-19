"use client";

import Select from "@/components/Select";
import { ArrowLeft, Printer, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ReportGstr2 = () => {
    const router=useRouter()
  const [activeTab, setActiveTab] = useState("purchase");

  const purchaseData = [
    {
      gstin: "",
      customerName: "",
      stateCode: "",
      stateName: "",
      invoiceNo: "",
      originalNo: "",
      invoiceDate: "",
      invoiceValue: "",
      totalTaxPercent: "",
      taxableValue: "",
      sgst: "",
      cgst: "",
      igst: "",
      cess: "",
      totalTax: "",
    },
    
  ];

  const purchaseReturnData = [
    {
      gstin: "",
      customerName: "",
      stateCode: "",
      stateName: "",
      invoiceNo: "",
      originalNo: "",
      invoiceDate: "",
      invoiceValue: "",
      totalTaxPercent: "",
      taxableValue: "",
      sgst: "",
      cgst: "",
      igst: "",
      cess: "",
      totalTax: "",
    },
  ];

  const tableData =
    activeTab === "purchase" ? purchaseData : purchaseReturnData;
  return (
    <div className="py-2.5">
      <div className="flex gap-2 items-center px-2 border-b pb-2">
        <span>
          <ArrowLeft onClick={()=>router.back()}/>
        </span>
        <span className="text-sm">GSTR-2 (Purchase)</span>
        <button className="flex items-center py-1 px-2 text-sm gap-2 bg-gray-200 rounded">
          <span>
            <Star size={17} className="text-gray-500" />
          </span>
          <span>Favourite</span>
        </button>
      </div>
      <div className="flex justify-between items-center py-2 px-5">
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

        <div className="flex gap-2">
          <Select menus={["Download Excel", "Download Pdf"]} />
          <button className="text-xs p-2 border rounded flex gap-6">
            Print PDF{" "}
            <span>
              <Printer size={15} className="text-gray-500" />
            </span>
          </button>
        </div>
      </div>
      <div>
        <div className="w-full py-2 px-4">
          <div className="flex w-fit rounded-t-lg border border-gray-300 overflow-hidden mb-2">
            <button
              onClick={() => setActiveTab("purchase")}
              className={`px-6 py-4 text-xs font-medium border-r border-gray-300
            ${
              activeTab === "purchase"
                ? "text-blue-600 bg-white"
                : "text-gray-600 bg-gray-50"
            }`}
            >
              Purchase
            </button>

            <button
              onClick={() => setActiveTab("return")}
              className={`px-6 py-4 text-xs font-medium
            ${
              activeTab === "return"
                ? "text-blue-600 bg-white"
                : "text-gray-600 bg-gray-50"
            }`}
            >
              Purchase Return
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-xs">
              <thead className="">
                <tr className="bg-gray-50 text-gray-600 ">
                  <th colSpan={2} className="border border-gray-300 py-4" />
                  <th
                    colSpan={2}
                    className="border border-gray-300 text-center py-4"
                  >
                    PLACE OF SUPPLY
                  </th>
                  <th
                    colSpan={activeTab !== "purchase" ? 4 : 3}
                    className="border border-gray-300 text-center py-4"
                  >
                    INVOICE DETAILS
                  </th>
                  <th colSpan={2} className="border border-gray-300 py-4" />
                  <th
                    colSpan={5}
                    className="border border-gray-300 text-center py-4"
                  >
                    AMOUNT OF TAX
                  </th>
                </tr>
                <tr>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    GSTIN
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    CUSTOMER NAME
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    STATE CODE
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    STATE NAME
                  </th>

                  <th className="border  py-2 bg-white text-xs font-semibold">
                    <div className="flex flex-col items-center leading-tight">
                      <span className="border-b w-full text-center pb-1 px-2">
                        ORIGINAL NO
                      </span>
                      <span className="pt-1">INVOICE NO</span>
                    </div>
                  </th>

                  {/* <th className="border px-2 py-2 bg-white text-xs font-semibold">
      INVOICE NO
    </th> */}

                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    INVOICE DATE
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    INVOICE VALUE
                  </th>
                  {activeTab !== "purchase" && (
                    <th className="border px-2 py-2 bg-white text-xs font-semibold">
                      INVOICE TYPE
                    </th>
                  )}
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    TOTAL TAX %
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    TAXABLE VALUE
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    SGST
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    CGST
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    IGST
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    CESS
                  </th>
                  <th className="border px-2 py-2 bg-white text-xs font-semibold">
                    TOTAL TAX
                  </th>
                </tr>
              </thead>

              <tbody>
                {tableData.map((row, i) => (
                  <tr key={i} className="h-14">
                    <td className=" px-2">{row.gstin}</td>
                    <td className=" px-2">{row.customerName}</td>
                    <td className="border-l px-2">{row.stateCode}</td>
                    <td className="border-r px-2">{row.stateName}</td>
                    {/* <td className="border px-2">{row.invoiceNo}</td> */}
                    {/* <td className="border px-2">{row.originalNo}</td> */}
                    <td className="border px-2">{row.invoiceDate}</td>
                    <td className="border px-2 text-right">
                      {row.invoiceValue}
                    </td>
                    <td className="border px-2 text-right">
                      {row.totalTaxPercent}
                    </td>
                    <td className="border px-2 text-right">
                      {row.taxableValue}
                    </td>
                    <td className="border px-2 text-right">{row.sgst}</td>
                    <td className="border px-2 text-right">{row.cgst}</td>
                    <td className="border px-2 text-right">{row.igst}</td>
                    <td className="border px-2 text-right">{row.cess}</td>
                    <td className="border px-2 text-right">{row.totalTax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportGstr2;
