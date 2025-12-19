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
        text: "Cash and Bank Report (All Payments)",
        icon: <ArrowLeft className="cursor-pointer" onClick={() => router.back()}/>
      }}
      favourite={{
        text: "Favourite",
        icon: <Star size={14} className="text-yellow-500" />
      }}
      filters={[
        
        
        {
          label: "Select your bank",
          width: "11rem",
          component:<Select menus={["Select your bank","All Cash & Bank Accounts","Cash"]}/>,
          icon: null,
          
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
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
        {
          label: "Invoice type",
          width: "11rem",
          component:<Select menus={["All Transactions","Sales","Purchase","Payment In","Payment Out","Sales Return","Purchase Return","Add Money","Credit Note","Debit Note","Expense"]}/>,
          icon: null,
          actionIcon: <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
        },
       
       
      ]}
      
      columns={[
        "DATE",
        "VOUCHER TYPE",
        "TXN NO",
        "PARTY",
        "PAID",
        "RECEIVED",
        "BALANCE",
        "NOTES"
      ]}
      rows={[
  ["Total:", "", "", "", "₹ 0", "₹ 0", "", ""]
]} 
    />
  );
}
