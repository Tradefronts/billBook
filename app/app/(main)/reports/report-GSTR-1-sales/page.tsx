"use client"

import GSTRTable from "@/components/GSTR-table";
import { ArrowDownLeftIcon, ArrowLeft, PlayCircle, Star } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Select from "@/components/Select";

const ReportGSTR = () => {
//   const tableData = [
//     {
//       gstin: "",
//       customer: "Xyz",
//       stateCode: "",
//       stateName: "",
//       invoiceNo: "1",
//       date: "02-12-2025",
//       value: "₹100",
//       taxPercent: "0",
//       taxable: "₹0",
//       cgst: "₹0",
//       sgst: "₹0",
//       igst: "₹0",
//       cess: "₹0",
//       totalTax: "₹0",
//     },
//     {
//       gstin: "",
//       customer: "Cash Sale",
//       stateCode: "",
//       stateName: "",
//       invoiceNo: "2",
//       date: "02-12-2025",
//       value: "₹15",
//       taxPercent: "0",
//       taxable: "₹0",
//       cgst: "₹0",
//       sgst: "₹0",
//       igst: "₹0",
//       cess: "₹0",
//       totalTax: "₹0",
//     },
//   ];


const [activeTab, setActiveTab] = useState("sales");
const router=useRouter()
  const salesData = [
    {
      gstin: "",
      customer: "Xyz",
      stateCode: "",
      stateName: "",
      invoiceNo: "1",
      date: "02-12-2025",
      value: "₹100",
      taxPercent: "0",
      taxable: "₹0",
      cgst: "₹0",
      sgst: "₹0",
      igst: "₹0",
      cess: "₹0",
      totalTax: "₹0",
    },
    {
      gstin: "",
      customer: "Cash Sale",
      stateCode: "",
      stateName: "",
      invoiceNo: "2",
      date: "02-12-2025",
      value: "₹15",
      taxPercent: "0",
      taxable: "₹0",
      cgst: "₹0",
      sgst: "₹0",
      igst: "₹0",
      cess: "₹0",
      totalTax: "₹0",
    },
  ];

  const salesReturnData = [
    {
      gstin: "",
      customer: "",
      stateCode: "",
      stateName: "",
      invoiceNo: "",
      date: "",
      value: "",
      taxPercent: "",
      taxable: "",
      cgst: "",
      sgst: "",
      igst: "",
      cess: "",
      totalTax: "",
    },
  ];

  const purchaseReturnData = [
    {
      gstin: "",
      customer: "",
      stateCode: "",
      stateName: "",
      invoiceNo: "",
      date: "",
      value: "",
      taxPercent: "",
      taxable: "",
      cgst: "",
      sgst: "",
      igst: "",
      cess: "",
      totalTax: "",
    },
  ];


const tabs = [
    { key: "sales", label: "Sales", data: salesData },
    { key: "salesReturn", label: "Sales Return/ Credit Note", data: salesReturnData },
    { key: "purchaseReturn", label: "Purchase Return/ Debit Note", data: purchaseReturnData },
  ];

  const currentTableData = tabs.find(t => t.key === activeTab)?.data || [];

  return (
    <div className="py-3 px-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-lg items-center">
            <ArrowLeft onClick={() => router.back()}/>
            <span>GSTR-1 (Sales)</span>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <button className="flex items-center gap-1 bg-amber-100 py-1 px-3 text-sm rounded">
            
              <Star size={17} className="text-yellow-400 "/> Favourite
            </button>{" "}
            <button className="flex gap-1 items-center justify-center bg-blue-200 text-blue-500 font-semibold text-sm py-1.5 px-3 rounded">
              <PlayCircle size={17} className="text-blue-400 "/> How to use JSON file
            </button>
          </div>
        </div>
        <div className="flex space-x-2.5 py-5">
            <Select menus={["Today","Yesterday","This Week","Last Week","Last 7 days","This Month","Previous Month","Last 30 days","This Quater","Previous Quater","Current Fiscal Year","Previous Fiscal Year","Last 365 days","Custom Date Range"]}/>
            <Select menus={["Download JSON","Download Excel","Download Pdf"]}/>
            <Select menus={["Email JSON","Email Excel"]}/>
            <Select menus={[]}/>
            <Select menus={["Invoice View","Gst Portal View"]}/>
        </div>
        <div></div>
      </div>
      <div className="w-full">
      
      <div className="flex gap-6 border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 text-sm font-medium ${
              activeTab === tab.key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <GSTRTable data={currentTableData} />
    </div>
    </div>
  );
};

export default ReportGSTR;
