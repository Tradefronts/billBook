"use client";

import DynamicTable from "@/components/DynamicTable";
import Select from "@/components/Select";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReportItemReportByParty() {
  const router = useRouter();
  return (
    <DynamicTable
      title={{
        text: "Item Report By Party",
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
          label: "Select Category",
          component: (
            <Select
              menus={[
                "Select Category",
                "All category",
                "hey",
                "Juice"
              ]}
            />
          ),
          width: "12rem",
          icon: <Calendar size={16} />,
          actionIcon: (
            <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
          ),
        },
         {
          label: "Select Party",
          component: (
            <Select
              menus={[
               "Select Party",
               "All Parties",
               "Abc",
               "Cash Sale",
               "Xyz",
              ]}
            />
          ),
          width: "12rem",
          icon: <Calendar size={16} />,
          actionIcon: (
            <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
          ),
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
          actionIcon: (
            <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
          ),
        },
      ]}
      
      columns={[
        "ITEM NANE",
        "ITEM CODE",
        "SALES QUANTITY",
        "SALES AMOUNT",
        "PURCHASE QUANTITY",
        "PURCHASE AMOUNT",
      ]}
      rows={[]}
    />
  );
}
