"use client"

import Table from '@/components/Table';
import { ArrowLeft, Calendar, ChevronDown, Download, Printer, Star } from 'lucide-react'
import React, { useState } from 'react'

const LowStock = () => {

const [category, setCategory] = useState("");
  const [dateFilter, setDateFilter] = useState("Today");




const columns = [
    { header: "ITEM NAME", accessor: "name" },
    { header: "ITEM CODE", accessor: "code" },
    { header: "STOCK QUANTITY", accessor: "qty" },
    { header: "LOW STOCK LEVEL", accessor: "lowStock" },
    { header: "STOCK VALUE", accessor: "value" },
  ];

  const data = [
    {
      name: "",
      code: "",
      qty: "",
      lowStock: "",
      value: "",
    },
  ];



  return (
    <div className='p-6'>
             <div className="flex items-center gap-4 mb-6">
        <button className="flex items-center gap-2 text-gray-700 hover:text-black">
          <ArrowLeft size={20} />
          <span className="text-sm ">Stock Summary</span>
        </button>

        <button className="flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
          <Star size={16} /> Favourite
        </button>
      </div>

      <div className="flex text-xs justify-between items-center gap-4 mb-6">

        <div className="flex gap-2 ">
            <div className="border  rounded-md px-4 py-2 w-60 flex items-center justify-between">
          <span className="text-gray-500 ">Search Category</span>
          <ChevronDown size={18} className="text-gray-600" />
        </div>

        <div className="border rounded-md px-4 py-2 w-40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            <span>{dateFilter}</span>
          </div>
          <ChevronDown size={18} />
        </div>
        </div>

        <div className="flex gap-2">
            <div className="border rounded-md px-4 py-2 flex items-center gap-2 cursor-pointer">
          <Download size={16} />
          <span>Download Excel</span>
          <ChevronDown size={16} />
        </div>

        <button className="border rounded-md px-4 py-2 flex items-center gap-2">
          <Printer size={16} />
          Print PDF
        </button>
        </div>
      </div>
      
      
    <div className="border rounded-md overflow-hidden">
             <div className="border-b  py-2 px-4 bg-gray-50 text-gray-700 font-medium">
            Total Stock Value: <span className="font-bold">0</span>
          </div>
           
          <Table columns={columns} data={data} />
        
          </div>


    </div>
  )
}

export default LowStock