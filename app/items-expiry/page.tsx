import Table from "@/components/Table";
import { ArrowLeft, ChevronDown, Package, Star } from "lucide-react";
import React from "react";

const ItemExpiry = () => {


const columns = [
    { header: "ITEM NAME", accessor: "name" },
    { header: "BATCH NUMBER", accessor: "batch" },
    { header: "EXPIRY DATE", accessor: "expiry" },
    { header: "MANUFACTURE DATE", accessor: "manufature" },
    { header: "MRP", accessor: "mrp" },
    { header: "PURCHASE PRICE", accessor: "pp" },
    { header: "SELLING PRICE", accessor: "sp" },
    { header: "CURRENT STOCK", accessor: "currentstock" },
  ];

  const data = [
    {
      name: "subh",
      batch: "",
      expiry: "",
      manufature: "",
      mrp: "",
      pp: "",
      sp: "",
      currentstock: "",
    },
  ];



  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <button className="flex items-center gap-2 text-gray-700 hover:text-black">
          <ArrowLeft size={20} />
          <span className="text-sm ">Stock Summary</span>
        </button>

        <button className="flex items-center gap-1 border px-3 py-2 rounded-md text-sm">
          <Star size={16} /> Favourite
        </button>
      </div>
      <div className="flex gap-2 text-sm">
        <div className="border rounded-md px-4 py-2 flex items-center gap-2 cursor-pointer">
          {/* <Download size={16} /> */}
          <span>Hide out of stock batches</span>
         
          <Package size={15}/>
        </div>

        <div className="border rounded-md px-4  flex items-center gap-2">
          {/* <Printer size={16} /> */}
          Items expiring in
           <div className="w-px h-full bg-gray-200"></div>

          <input type="number"  className="w-14 bg-gray-200 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none px-2"/>
          <span>
            Days
          </span>
           <ChevronDown size={16} />
        </div>
      </div>
      <div className="py-3">
        <Table columns={columns} data={data}/>
      </div>
    </div>
  );
};

export default ItemExpiry;
