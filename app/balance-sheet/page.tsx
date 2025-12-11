import { ArrowLeft, CirclePlay, Star, Info } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = {
  liabilities: [
    {
      title: "Capital",
      amount: "0",
      items: [],
      addEntry: true
    },
    {
      title: "Current Liability",
      amount: "0",
      items: [
        { name: "Tax Payable", amount: "0" },
        { name: "Tcs Payable", amount: "0" },
        { name: "Tds Payable", amount: "0" }
      ],
      addEntry: true
    },
    { title: "Account Payable", amount: "0", items: [], addEntry: false },
    { title: "Loans", amount: "0", items: [], addEntry: true },
    { title: "Net Income", amount: "23,675", items: [], addEntry: false }
  ],
  assets: [
    {
      title: "Current Assets",
      amount: "23,675",
      items: [
        { name: "Tax Receivable", amount: "0" },
        { name: "Tcs Receivable", amount: "0" },
        { name: "Tds Receivable", amount: "0" },
        { name: "Cash In Hand", amount: "15" },
        { name: "Cash In Bank", amount: "0" },
        { name: "Accounts Receivables", amount: "100" },
        { name: "Inventory In Hand", amount: "23,560" }
      ],
      addEntry: true
    },
    { title: "Fixed Assets", amount: "0", items: [], addEntry: true },
    { title: "Investments", amount: "0", items: [], addEntry: true },
    { title: "Loans Advance", amount: "0", items: [], addEntry: false }
  ]
};

export default function BalanceSheet() {
  return (
    <div className="max-w-full mx-auto p-4">
      <div className="flex items-center gap-3 border-b pb-3 mb-3">
        <button className="p-1"><ArrowLeft /></button>
        <div className="text-lg font-semibold">Balance Sheet (As of Today)</div>
        <button className="ml-3 flex items-center gap-2 border border-blue-500 text-blue-500 text-xs px-3 py-1 rounded">
          <CirclePlay size={16} /> Watch how to use Balance Sheet
        </button>
        <div className="ml-auto flex items-center gap-2 text-xs bg-amber-50 px-2 py-1 rounded border border-amber-50">
          <Star size={15} className="text-yellow-400" /> Favourite
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-xs bg-amber-50 p-2 rounded">
          Balance sheet is updated once per day. Last updated at:
          <span className="text-blue-700 font-semibold"> 11 Dec 2025, 03:09 PM</span>
        </div>
        <button className="border border-gray-300 text-xs px-3 py-1 rounded">Excel Download</button>
      </div>

      <div className="grid grid-cols-2 gap-0 border border-gray-200">
        <div className="border-r border-gray-200">
          <div className="px-4 py-2 text-xs font-semibold bg-white border-b border-gray-200">LIABILITIES</div>

          {data.liabilities.map((section, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <div className="flex items-center justify-between px-4 py-3 bg-blue-50 border-b border-gray-200">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <span>{section.title}</span>
                  <Info size={14} className="text-gray-500" />
                </div>
                <div className="font-semibold">₹ {section.amount}</div>
              </div>

              <div className="px-4 py-2">
                

                {section.items.length > 0 && (
                  <div className="divide-y divide-gray-100">
                    {section.items.map((it, i) => (
                      <div key={i} className="flex justify-between py-3">
                        <div className="text-sm">{it.name}</div>
                        <div className="text-sm">₹ {it.amount}</div>
                      </div>
                      
                    ))}
                    {section.addEntry && (
                  <div className="text-sm text-blue-600 mb-2">+ Add New Entry</div>
                )}
                  </div>
                )}

                {section.items.length === 0 && !section.addEntry && (
                  <div className="py-3"></div>
                )}
              </div>
            </div>
          ))}

        </div>

        <div>
          <div className="px-4 py-2 text-xs font-semibold bg-white border-b border-gray-200">ASSETS</div>

          {data.assets.map((section, sIdx) => (
            <div key={sIdx} className="border-b border-gray-200">
              <div className="flex items-center justify-between px-4 py-3 bg-blue-50 border-b border-gray-200">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <span>{section.title}</span>
                  <Info size={14} className="text-gray-500" />
                </div>
                <div className="font-semibold">₹ {section.amount}</div>
              </div>

              <div className="px-4 py-2">
                {section.items.length > 0 && (
                  <div className="divide-y divide-gray-100">
                    {section.items.map((it, i) => (
                      <div key={i} className="flex justify-between py-3">
                        <div className="text-sm">{it.name}</div>
                        <div className="text-sm">₹ {it.amount}</div>
                      </div>
                    ))}
                  </div>
                )}

                {section.addEntry && (
                  <div className="text-sm text-blue-600 mt-3">+ Add New Entry</div>
                )}

                {section.items.length === 0 && !section.addEntry && (
                  <div className="py-3">&nbsp;</div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
