"use client"
import Select from "@/components/Select";
import { ArrowLeft, Minus, Plus, Printer, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ReportProfilLoss = () => {
    const router=useRouter()
  const rows = [
    { label: "Sale(+)", type: "plus", amount: "-" },
    { label: "Cr. Note/Sale Return(-)", type: "minus", amount: "-" },
    { label: "Purchase(-)", type: "minus", amount: "-" },
    { label: "Dr. Note/Purchase Return(+)", type: "plus", amount: "-" },
    { label: "Tax Payable(-)", type: "minus", amount: "-" },
    { label: "Tax Receivable(+)", type: "plus", amount: "-" },
    { label: "Opening Stock(-)", type: "minus", amount: "₹ 23,560" },
    { label: "Closing Stock(+)", type: "plus", amount: "₹ 23,560" },
    { label: "Gross Profit", highlight: true, amount: "-" },
    { label: "Other Income(+)", type: "plus", amount: "₹ 0.0" },
    { label: "Indirect Expenses(-)", type: "minus", amount: "-" },
    { label: "Net Profit", highlight: true, amount: "-" },
  ];

  return (
    <div className="py-3 w-full">
      <div>
        <div className="flex gap-3 items-center border-b px-4 pb-2">
          <ArrowLeft onClick={()=>router.back()}/>
          <span>Profit And Loss Report</span>
          <button className="flex items-center bg-gray-100 text-sm py-2 px-3 gap-1 rounded">
            <Star size={17} className="text-gray-400" /> Favourite
          </button>
        </div>
        <div className="flex justify-between py-4 px-4 max-w-[70%]">
          <div>
            {" "}
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
            <button className="flex items-center border px-2 rounded-xs cursor-pointer text-gray-500 border-gray-300 text-xs gap-4">
              Print PDF <Printer size={15} />
            </button>
          </div>
        </div>
        <div className="py-4 px-4 max-w-[70%] ">
          <div className="w-full border border-gray-300 rounded overflow-hidden text-xs  ">
            <div className="grid grid-cols-2 bg-gray-50 border-b border-gray-300 font-semibold">
              <div className="px-4 py-3">PARTICULARS</div>
              <div className="px-4 py-3 text-right">AMOUNT</div>
            </div>

            {rows.map((row, i) => (
              <div
                key={i}
                className={`w-full grid grid-cols-2 border-b border-gray-200 ${
                  row.highlight ? "bg-gray-50 font-semibold" : ""
                }`}
              >
                <div className="px-4 py-3 flex items-center gap-2">
                  <span>{row.label}</span>
                </div>

                <div className="px-4 py-3 text-right">{row.amount || "-"}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportProfilLoss;
