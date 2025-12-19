"use client";

import DynamicTable from "@/components/DynamicTable";
import Select from "@/components/Select";
import { ArrowLeft, Star, X, Calendar, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReportLowStockSummary() {
    const router=useRouter()
  return (
    <DynamicTable
      title={{
        text: "Low Stock Summary",
        icon: <ArrowLeft className="cursor-pointer" onClick={() => router.back()}/>
      }}
      favourite={{
        text: "Favourite",
        icon: <Star size={14} className="text-yellow-500" />
      }}
      filters={[
    
        
        
        
       
       
      ]}
      totalLabel="Total Stock Value"
      totalValue={0}
      
      columns={[
        "ITEM NAME",
        "ITEM CODE",
        "STOCK QUANTITY",
        "LOW STOCK LEVEL",
        "STOCK VALUE",
        
        
      ]}
      rows={[
  []
]} 
    />
  );
}
