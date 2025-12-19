"use client";

import DynamicTable from "@/components/DynamicTable";
import Select from "@/components/Select";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReportCashAndBankReport() {
    const router=useRouter()
  return (
    <DynamicTable
      title={{
        text: "Daybook",
        icon: <ArrowLeft className="cursor-pointer" onClick={() => router.back()}/>
      }}
      favourite={{
        text: "Favourite",
        icon: <Star size={14} className="text-yellow-500" />
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
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
        {
          label: "Invoice type",
          width: "11rem",
          component:<Select menus={["All Transactions","Sales","Purchase","Payment In","Payment Out","Sales Return","Purchase Return","Add Money","Credit Note","Debit Note","Expense"]}/>,
          icon: null,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
       
       
      ]}
      totalLabel="Net Amount"
      totalValue={0}
      
      columns={[
        "DATE",
        "PARTY NAME",
        "TRANSACTION TYPE",
        "TRANSACTION NO",
        "TOTAL AMOUNT",
        "MONEY IN",
        "MONEY OUT",
        "BALANCE AMOUNT"
      ]}
      rows={[
  []
]} 
    />
  );
}
