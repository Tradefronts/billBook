"use client";

import DynamicTable from "@/components/DynamicTable";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";

export default function SalesSummary() {
  return (
    <DynamicTable
      title={{
        text: "Sales Summary",
        icon: <ArrowLeft className="cursor-pointer" />
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
          width: "12rem",
          icon: <Calendar size={16} />,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
        {
          label: "Invoice Status",
          width: "11rem",
          icon: null,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
        {
          label: "Invoice type",
          width: "11rem",
          icon: null,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        }
      ]}
      totalLabel="Total Sales"
      totalValue={0}
      columns={[
        "DATE",
        "INVOICE NO.",
        "PARTY NAME",
        "DUE DATE",
        "AMOUNT",
        "BALANCE AMOUNT",
        "INVOICE TYPE",
        "INVOICE STATUS"
      ]}
      rows={[]}
    />
  );
}
