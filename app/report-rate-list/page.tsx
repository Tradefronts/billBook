"use client"

import Chart from '@/components/Chart'
import Select from '@/components/Select'
import { ArrowLeft, Printer, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const ReportRateList = () => {
    const router=useRouter()

const columns = [
    { key: "name", label: "NAME" },
    { key: "itemCode", label: "ITEM CODE" },
    {
      key: "mrp",
      label: "MRP",
    },
    {
      key: "sellingPrice",
      label: "SELLING PRICE",
    },
  ];

  const items = [
    {
      name: "Sample Item",
      itemCode: "8901262010023",
      mrp: 235,
      sellingPrice: 220,
    },
  ]
  return (
    <div className='py-2'>
      <div className="flex gap-2 items-center px-2 border-b pb-2">
        <span>
          <ArrowLeft onClick={()=>router.back()}/>
        </span>
        <span className="text-sm">Rate List</span>
        <button className="flex items-center py-1 px-2 text-sm gap-2 bg-gray-200 rounded">
          <span>
            <Star size={17} className="text-gray-500" />
          </span>
          <span>Favourite</span>
        </button>
      </div>
      <div className=' py-2'>
        <div className='px-4 flex justify-end gap-2'>
            <Select menus={["Download Excel","Download Pdf"]}/>
        <button className='border py-1 px-4 flex items-center rounded text-xs gap-4'>Print PDF <span><Printer className='text-gray-500' size={15}/></span></button>
        </div>
      </div>
      <div className='px-4'>
 
   <Chart columns={columns} data={items} />
      </div>
    </div>
  )
}

export default ReportRateList
