"use client";

import Select from "@/components/Select";
import { ArrowLeft, Printer, Search, SearchIcon, Star } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AgingReportTable({ data = [] }) {
  const router = useRouter();
  const hasData = data.length > 0;

  return (
    <div className="w-full  border-gray-300 rounded-lg overflow-hidden bg-white">
      <div className="py-3">
        <div className="flex gap-2 items-center px-2  pb-4">
          <span>
            <ArrowLeft onClick={() => router.back()} />
          </span>
          <span className="">Receivable Ageing Report</span>
          <button className="flex items-center py-1 px-2 text-sm gap-2 bg-gray-200 rounded">
            <span>
              <Star size={17} className="text-gray-500" />
            </span>
            <span>Favourite</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between py-2 px-4">
        <div className="relative w-72">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by party name"
            className="w-full rounded border border-gray-300 bg-white py-1.5 pl-9 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
        <div className="flex gap-2">
            <Select menus={["Download Excel","Download Pdf"]}/>
            <button className="text-xs flex items-center text-gray-500 border px-2"><span><Printer size={15} className="text-gray-400"/></span>Print PDF</button>
        </div>
      </div>
     <div className="py-4 px-4">
         <div className="w-full overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className=" border-gray-200 bg-gray-50 px-4 py-3" />

            <th
              colSpan={3}
              className="border-l border-gray-200 bg-yellow-50 px-4 py-3 text-center font-semibold"
            >
              Not yet due
            </th>

            <th
              colSpan={4}
              className="border-l border-gray-200 bg-red-50 px-4 py-3 text-center font-semibold"
            >
              Overdue
            </th>

            <th className="border-l border-gray-200 bg-gray-50 px-4 py-3" />
          </tr>

          <tr className="bg-gray-50">
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
              Party Name
            </th>

            <th className="border border-gray-200 px-4 py-3 text-right">
              By Tomorrow
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              Upcoming
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              T. Due
            </th>

            <th className="border border-gray-200 px-4 py-3 text-right">
              1–15 Days
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              16–30 Days
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              30+ Days
            </th>
            <th className="border border-gray-200 px-4 py-3 text-right">
              T. Overdue
            </th>

            <th className="border border-gray-200 px-4 py-3 text-right font-semibold">
              T. Amount
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={9} className="py-20 text-center text-gray-500">
                No transactions available for selected party.
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{row.partyName}</td>
                <td className="border px-4 py-2 text-right">{row.byTomorrow}</td>
                <td className="border px-4 py-2 text-right">{row.upcoming}</td>
                <td className="border px-4 py-2 text-right">{row.totalDue}</td>
                <td className="border px-4 py-2 text-right">{row.d1to15}</td>
                <td className="border px-4 py-2 text-right">{row.d16to30}</td>
                <td className="border px-4 py-2 text-right">{row.d30plus}</td>
                <td className="border px-4 py-2 text-right">{row.totalOverdue}</td>
                <td className="border px-4 py-2 text-right font-semibold">
                  {row.totalAmount}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
     </div>
    </div>
  );
}
