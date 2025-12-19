"use client";

import DynamicTable from "@/components/DynamicTable";
import Select from "@/components/Select";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SalesSummary() {
    const router=useRouter()
  return (
    <DynamicTable
      title={{
        text: "Sales Summary",
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
          component:<Select/>,
          width: "12rem",
          icon: <Calendar size={16} />,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
        {
          label: "Invoice Status",
          width: "11rem",
          component:<Select/>,
          icon: null,
          
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
        {
          label: "Invoice type",
          width: "11rem",
          component:<Select/>,
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
