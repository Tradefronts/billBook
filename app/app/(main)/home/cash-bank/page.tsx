"use client"
import { Download, Calendar, Landmark } from "lucide-react";
import Header from "@/components/Header";
import Select from "@/components/Select";
import { useState } from "react";
import { AdjustBalanceModal, TransferBalanceModal } from "@/components/Modal";

const CashAndBank = () => {
  const [adjustBalanceOpen,setAdjustBalanceOpen]=useState(false)
  const [transferBalanceOpen, setTransferBalanceOpen] = useState(false)


  return (
    <div className="w-full h-full flex flex-col">
      <Header title="Cash and Bank" transferBalanceOpen={transferBalanceOpen} setTransferBalanceOpen={setTransferBalanceOpen} showAddReduceBtn={true} showTransferMoneyBtn={true} showAddNewAccount={true} setAdjustBalanceOpen={setAdjustBalanceOpen} adjustBalanceOpen={adjustBalanceOpen}/>
      <div className="flex-1 overflow-auto flex ">
        <div className="w-96 border-r border-gray-200 min-h-screen">
          <div className="p-5 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">
              Total Balance:
            </span>
            <span className="text-base font-semibold text-gray-900">₹15</span>
          </div>
          <div className="border-b border-gray-200">
            <div className="px-6 py-3 bg-gray-50 border-y border-gray-300">
              <h2 className="text-sm font-medium text-gray-600">Cash</h2>
            </div>
            <button className="w-full px-5 py-7 cursor-pointer flex items-center justify-between bg-violet-100">
              <span className="block text-sm text-gray-700">Cash in hand</span>
              <span className="block text-sm font-medium text-gray-900">
                ₹15
              </span>
            </button>
          </div>
          <div className="border-y border-gray-300 bg-gray-50">
            <div className="px-5 py-3 flex justify-between items-center">
              <h2 className="text-sm font-medium text-slate-500">
                Bank Accounts
              </h2>
              <button className="text-sm text-blue-500 font-medium cursor-pointer">
                + Add New Bank
              </button>
            </div>
          </div>

          <div className="px-5 py-7 hover:bg-gray-50 cursor-pointer border-b border-gray-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-gray-400">
                  <Landmark size={20} />
                </span>
                <span className="text-sm text-gray-700">
                  Unlinked Transactions
                </span>
              </div>
              <span className="text-sm text-gray-900">₹0</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <button className="px-4 py-4 text-sm font-medium text-[#713cce] bg-gray-50 border-r border-gray-300">
            Transactions
          </button>

          <div className=" px-5 py-4 border-y  border-gray-300">
            <div className="flex justify-between items-center">
              {/* <div className="flex items-center gap-2 border border-gray-300 rounded-md py-2 px-4">
                <Calendar className=" w-4 h-4 text-gray-400 pointer-events-none" />
                <NativeSelect className="outline-none">
                  <NativeSelectOption value="today" className="">
                    Today
                  </NativeSelectOption>
                  <NativeSelectOption value="yesterday">
                    Yesterday
                  </NativeSelectOption>
                  <NativeSelectOption value="this week">
                    This Week
                  </NativeSelectOption>
                  <NativeSelectOption value="last week">
                    Last Week
                  </NativeSelectOption>
                  <NativeSelectOption value="last week">
                    Last 7 Days
                  </NativeSelectOption>
                  <NativeSelectOption value="last week">
                    This Month
                  </NativeSelectOption>
                  <NativeSelectOption value="last week">
                    Last Month
                  </NativeSelectOption>
                  <NativeSelectOption value="last week">
                    Previous Month
                  </NativeSelectOption>
                  <NativeSelectOption value="last week">
                    Last 30 Days
                  </NativeSelectOption>
                </NativeSelect>
              </div> */}
              <Select
                width="w-80"
                menus={[
                  "Today",
                  "Yesterday",
                  "This week",
                  "Last Week",
                  "This Month",
                  "Previous Month",
                  "Last 7 Days",
                  "Last 30 Days",
                  "This Quarter",
                  "Previous Quarter",
                  "Current Fiscal Year",
                  "Previous Fiscal Year",
                  "Last 365 days",
                ]}
              />
              <button className="px-2 py-1.5 border border-gray-300 rounded-sm text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                Download Statement
                <Download className="text-slate-400" size={15} />
              </button>
            </div>
          </div>

          <div className="p-5">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TXN No
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Party
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mode
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paid
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Received
                  </th>
                  <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr className=" ">
                  <td className="py-3 px-4 text-sm text-gray-700">
                    02-12-2025
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">
                    Sales Invoices
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-700">2</td>
                  <td className="py-3 px-4 text-sm text-gray-700">Cash Sale</td>
                  <td className="py-3 px-4 text-sm text-gray-700">Cash</td>
                  <td className="py-3 px-4 text-sm text-gray-700">-</td>
                  <td className="py-3 px-4 text-sm text-gray-700">₹ 15</td>
                  <td className="py-3 px-4 text-sm text-gray-900 font-medium">
                    ₹15
                  </td>
                </tr>
                <tr className="font-medium text-gray-600">
                  <td className="py-3 px-4 "></td>
                  <td className="py-3 px-4 text-sm "></td>
                  <td className="py-3 px-4 text-sm "></td>
                  <td className="py-3 px-4 text-sm "></td>
                  <td className="py-3 px-4 text-sm ">Total:</td>
                  <td className="py-3 px-4 text-sm ">₹</td>
                  <td className="py-3 px-4 text-sm ">₹15</td>
                  <td className="py-3 px-4 text-sm "></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AdjustBalanceModal adjustBalanceOpen={adjustBalanceOpen} setAdjustBalanceOpen={setAdjustBalanceOpen}/>
      <TransferBalanceModal setTransferBalanceOpen={setTransferBalanceOpen} transferBalanceOpen={transferBalanceOpen}/>
    </div>
  );
};

export default CashAndBank;
