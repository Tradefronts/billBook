"use client";
import SummaryCard from "@/components/card/SummaryCard";
import DropdownMenu from "@/components/Dropdown";
import ExpandableSearch from "@/components/ExpandableSearch";
import Header from "@/components/Header";
import Select from "@/components/Select";
import {
  ArrowRight,
  ChevronDown,
  Download,
  EllipsisVertical,
  Layers,
  Link2,
  Search,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SalesInvoice = () => {
  const [isBulkBtnClicked, setIsBulkBtnClicked] = useState(false);
  const [activeCard,setActiveCard]=useState("total sales")
  const bulkRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bulkRef.current && !bulkRef.current.contains(event.target)) {
        setIsBulkBtnClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const salesSummary = [
    {
      name: "total sales",
      value: 100,
    },
    {
      name: "paid",
      value: 0,
    },
    {
      name: "unpaid",
      value: 15,
    },
  ]

  const handleCard = (card) => {
    setActiveCard(card)
  }

  return (
    <div className="h-full w-full flex flex-col">
      <Header
        title="Sales Invoices"
        showSettingBtn={true}
        showReports={true}
        dropdownMenus={[
          "Sales",
          "GSTR-1 (Sales)",
          "DayBook",
          "Bill Wise Profit",
        ]}
      />

      <div className="space-y-3 p-5">
        <div className="grid grid-cols-3 w-full  gap-3">
          {salesSummary.map((data, i) => <SummaryCard key={i} data={data} onClick={handleCard} activeCard={activeCard}
            setActiveCard={setActiveCard} />)}
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ExpandableSearch placeholder="Search Sales Invoice" />
            <Select
              showCalenederIcon={true}
              menus={[
                "Today",
                "Yesterday",
                "This week",
                "Last Week",
                "Last 7 days",
                "This Month",
                "Previous Month",
                "Last 30 days",
                "This Quarter",
                "Previous Quarter",
              ]}
            />
          </div>

          <div className=" flex items-center gap-4 ">
            <div ref={bulkRef} className="relative">
              <button
                onClick={() => setIsBulkBtnClicked(!isBulkBtnClicked)}
                className="cursor-pointer rounded-xs border p-2 border-gray-300 text-gray-500 text-sm flex items-center gap-2"
              >
                <div className="flex items-center gap-1">
                  <Layers size={15} /> Bulk Actions
                </div>{" "}
                <ChevronDown size={15} />
              </button>
              {isBulkBtnClicked && (
                <button className="absolute cursor-pointer w-full bg-white border border-gray-300 z-1 text-gray-500 text-xs flex items-center gap-1 font-medium px-2 py-3  shadow-lg rounded-xs shadow-gray-300">
                  <Download size={15} className="" />
                  Bulk download
                </button>
              )}
            </div>
            <Link href="/create-sales-invoice">
              <button className="cursor-pointer rounded-xs border py-2 px-4 text-white  border-gray-300 bg-[#4c3cce] text-sm flex items-center gap-2 font-medium">
                Create Sales Invoice
              </button>
            </Link>
          </div>
        </div>

        <div className=" border rounded-lg border-gray-300">
          <table className="w-full table-auto ">
            <thead className="w-full ">
              <tr className="w-full divide-x border-b p-2 border-gray-300 divide-gray-300 bg-neutral-100 rounded-t-lg">
                <th className="text-start px-5 py-2 text-xs text-gray-600"></th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Date{" "}
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Invoice Number
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Part Name{" "}
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Due{" "}
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Amount
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600">
                  Status
                </th>
                <th className="text-start px-5 py-2 text-xs text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300 ">
              <tr className="w-full divide-x p-2 divide-gray-300 hover:bg-[#f1f0fc] ">
                <td className="text-start px-5 py-2 text-sm text-gray-600"></td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  02 Dec 2025
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  2
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  XYZ
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  -
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  RS 15
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  <span className="bg-green-50 text-green-500 text-xs p-2 rounded-md">
                    Paid
                  </span>
                </td>
                <td className="text-center px-5 py-2 text-sm text-gray-600 relative">
                  <button className="p-2 hover:bg-white rounded-md cursor-pointer">
                    <EllipsisVertical size={15} />
                  </button>
                  {/* <div className="w-48 divide-y divide-gray-300 shadow-md shadow-gray-300 absolute -left-20 border bg-white border-gray-300 rounded-md">
                    <span className="block p-3 flex items-center gap-1 "><SquarePen size={15} />Edit</span>
                    <span className="block p-3 flex items-center gap-1 text-red-400"><Trash2 size={15} className="" />Delete</span>
                  </div> */}
                </td>
              </tr>
              <tr className="w-full divide-x p-2 divide-gray-300 hover:bg-[#f1f0fc] ">
                <td className="text-start px-5 py-2 text-sm text-gray-600"></td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  02 Dec 2025
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  2
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  XYZ
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  -
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  RS 15
                </td>
                <td className="text-start px-5 py-2 text-sm text-gray-600">
                  <span className="bg-red-50 text-red-500 text-xs p-2 rounded-md">
                    Unpaid
                  </span>
                </td>
                <td className="text-center px-5 py-2 text-sm text-gray-600 relative">
                  <button className="p-2 hover:bg-white rounded-md cursor-pointer">
                    <EllipsisVertical size={15} />
                  </button>
                  {/* <div className="w-48 divide-y divide-gray-300 shadow-md shadow-gray-300 absolute -left-20 border bg-white border-gray-300 rounded-md">
                    <span className="block p-3 flex items-center gap-1 "><SquarePen size={15} />Edit</span>
                    <span className="block p-3 flex items-center gap-1 text-red-400"><Trash2 size={15} className="" />Delete</span>
                  </div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesInvoice;
