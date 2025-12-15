"use client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CircleArrowOutUpRight,
  Gift,
  Landmark,
  Megaphone,
  MessagesSquare,
  Monitor,
  RefreshCcw,
  X,
} from "lucide-react";
import Header from "../components/Header";
import { useState } from "react";
export default function Home() {
  const [isDemoShow, setIsDemoShow] = useState(true);

  return (
    <div className="w-full h-full flex flex-col">
      <Header
        title="Dashboard"
        showBackBtn={false}
        showDemoBtn={true}
        showMessagBtn={true}
      />
      <div className="p-5 space-y-5 flex-1 overflow-auto">
        {isDemoShow && (
          <div className="relative">
            <div className="border p-5 text-sm border-gray-300 w-full  rounded-xl bg-[#f3ede6] hover:shadow-md shadow-black/20">
              <div className="space-y-3">
                <span className="block font-semibold tracking-wide">
                  Book Free Demo
                </span>
                <span className="block font-light">
                  Get a personalised tour from our <br />
                  solution expert
                </span>
                <button className="font-semibold  flex items-center gap-2">
                  Book Demo Now <ArrowRight size={20} />
                </button>
              </div>
              <div></div>
            </div>
            <button onClick={()=>setIsDemoShow(false)} className="absolute -right-2 -top-2 bg-gray-100 border rounded-full p-1 cursor-pointer"><X className="" size={15}/></button>
          </div>
        )}
        <div className=" space-y-5">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold">Business Overview</h6>
            <div className="bg-gray-100 flex items-center gap-2 px-3 text-xs rounded-xs py-1">
              <div>
                <span className="text-neutral-400">Last update :</span>
                <span className="text-gray-800">12 Dec 2025 | 11:05 pm</span>
              </div>
              <button className="cursor-pointer">
                {" "}
                <RefreshCcw className="text-blue-500 " size={15} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full mt-2 gap-3">
            <div className="border rounded-lg border-gray-300 p-5 space-y-3 bg-linear-to-r from-green-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-green-700">
                  <span>
                    <ArrowDown size={15} />
                  </span>
                  <span className="text-sm">To Collect</span>
                </div>
                <span>
                  <CircleArrowOutUpRight size={15} className="text-gray-300" />
                </span>
              </div>
              <span className="text-xl font-semibold">RS 100</span>
            </div>
            <div className="border rounded-lg border-gray-300 p-5 space-y-3 bg-linear-to-r from-red-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-red-500">
                  <span>
                    <ArrowUp size={15} />
                  </span>
                  <span className="text-sm">To Pay</span>
                </div>
                <span>
                  <CircleArrowOutUpRight size={15} className="text-gray-300" />
                </span>
              </div>
              <span className="text-xl font-semibold">RS 100</span>
            </div>
            <div className="border rounded-lg border-gray-300 p-5 space-y-3 bg-linear-to-r from-blue-50 to-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span>
                    <Landmark size={15} />
                  </span>
                  <span className="text-sm">Total Cash + Bank Balance</span>
                </div>
                <span>
                  <CircleArrowOutUpRight size={15} className="text-gray-300" />
                </span>
              </div>
              <span className="text-xl font-semibold">RS 100</span>
            </div>
          </div>
          <div className=" w-full grid grid-cols-3 items-start gap-3">
            <div className=" col-span-2 space-y-5">
              <div className=" border border-gray-300 rounded-lg">
                <h5 className="font-semibold border-b px-5 py-2 text-sm border-gray-300">
                  Latest Transactions
                </h5>
                <div>
                  <table className="w-full table-auto  border-b border-gray-300">
                    <thead className="w-full">
                      <tr className="w-full divide-x border-b p-2 border-gray-300 divide-gray-300 bg-neutral-100">
                        <th className="text-start px-5 py-2 text-xs text-gray-600">
                          DATE
                        </th>
                        <th className="text-start px-5 py-2 text-xs text-gray-600">
                          TYPE
                        </th>
                        <th className="text-start px-5 py-2 text-xs text-gray-600">
                          TXN NO
                        </th>
                        <th className="text-start px-5 py-2 text-xs text-gray-600">
                          PARTY NAME
                        </th>
                        <th className="text-start px-5 py-2 text-xs text-gray-600">
                          AMOUNT
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                      <tr className="w-full divide-x  p-2 divide-gray-300">
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          02 Dec 2025
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          Sales Invoice
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          2
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          Cash Sale
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          RS 15
                        </td>
                      </tr>
                      <tr className="w-full divide-x p-2 divide-gray-300">
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          02 Dec 2025
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          Sales Invoice
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          2
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          Cash Sale
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          RS 15
                        </td>
                      </tr>
                      <tr className="w-full divide-x p-2 divide-gray-300">
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          02 Dec 2025
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          Sales Invoice
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          2
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          Cash Sale
                        </td>
                        <td className="text-start px-5 py-2 text-sm text-gray-600">
                          RS 15
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className="w-full text-center text-blue-500 text-sm py-2">
                  See All Transactions
                </button>
              </div>
              <div className="w-full border border-gray-300 h-48 rounded-lg "></div>
            </div>

            <div className=" rounded-lg border border-gray-300">
              <h5 className="font-semibold border-b px-5 py-2 text-sm border-gray-300">
                Today's Checklist
              </h5>
              <div className="px-4 py-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="h-24 w-24 bg-red-400"></div>
                  <span className="font-semibold textlg">Coming Soon...</span>
                  <span className="text-xs">
                    Smarter daily checklist for overdue and follow-ups
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
