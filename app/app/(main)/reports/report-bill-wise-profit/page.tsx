"use client";

import DynamicTable from "@/components/DynamicTable";
import Select from "@/components/Select";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReportBillWiseProfit() {
    const router=useRouter()
  return (
    <DynamicTable
      title={{
        text: "Bill Wise Profit",
        icon: <ArrowLeft className="cursor-pointer" onClick={() => router.back()}/>
      }}
      favourite={{
        text: "Favourite",
        icon: <Star size={14} className="text-yellow-500" />
      }}
      filters={[
        {
          label: "All Parties",
          width: "12rem",
          icon: null,
          actionIcon: <X size={16} className="text-gray-400 cursor-pointer" />
        },
        {
          label: "This Week",
          component: (
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
          ),
          width: "12rem",
          icon: <Calendar size={16} />,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
       
      ]}
      totalLabel="Net Profit"
     
      totalValue={0}
      columns={[
        "DATE",
        "INVOICE NO.",
        "PARTY NAME",
        
        "INVOICE AMOUNT",
        "SALES AMOUNT",
        "PURCHASE AMOUNT",
        "PROFIT"
      ]}
      rows={[]}
    />
  );
}
