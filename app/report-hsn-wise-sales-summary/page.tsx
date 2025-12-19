"use client";

import DynamicTable from "@/components/DynamicTable";
import Select from "@/components/Select";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReportHsnWiseSalesSummary() {
  const router = useRouter();
  return (
    <DynamicTable
      title={{
        text: "HSN Wise Sales Summary",
        icon: (
          <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        ),
      }}
      favourite={{
        text: "Favourite",
        icon: <Star size={15} className="text-gray-500" />,
      }}
      filters={[
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
          actionIcon: (
            <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
          ),
        },
      ]}
      
      columns={[
        "HSN",
        "ITEM NANE",
        "TOTAL QUANTITY",
        "TOTAL VALUE",
        "TAXABLE VALUE",
        "IGST",
        "CGST",
        "SGST",
        "CESS",
        "TOTAL TAX AMOUNT"
      ]}
      rows={[]}
    />
  );
}
