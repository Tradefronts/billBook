"use client";

import {
  ChevronRight,
  ChevronUp,
  icons,
  Package,
  SquarePercent,
  Star,
  StickyNote,
  UsersRound,
  UserStar,
} from "lucide-react";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { title } from "process";
import React, { useState } from "react";

const categories = [
  {
    title: "Favourite",
    icon: <UserStar />,
    items: [
      { name: "Balance Sheet", path: "/balance-sheet" },
      { name: "GSTR-1 (Sales)" },
      { name: "Profit And Loss Report" },
      { name: "Sales Summary", path: "/report-sales-summary"},
    ],
  },
  {
    title: "GST",
    icon: <SquarePercent />,
    items: [
      { name: "GSTR-2 (Purchase)" },
      { name: "GSTR-3b" },
      { name: "GST Purchase (With HSN)" },
      { name: "GST Sales (With HSN)" },
      { name: "HSN Wise Sales Summary" },
      { name: "TDS Payable" },
      { name: "TDS Receivable" },
      { name: "TCS Payable" },
      { name: "TCS Receivable" },
    ],
  },
  {
    title: "Transaction",
    icon: <StickyNote />,
    items: [
      { name: "Audit Trail" },
      { name: "Bill Wise Profit" },
      { name: "Cash and Bank Report (All Payments)" },
      { name: "Daybook" },
      { name: "Expense Category Report" },
      { name: "Expense Transaction Report" },
      { name: "Purchase Summary" },
    ],
  },
  {
    title: "Item",
    icon: <Package />,
    items: [
      { name: "Item Report By Party" },
      { name: "Item Sales and Purchase Summary" },
      { name: "Low Stock Summary" },
      { name: "Rate List" },
      { name: "Stock Detail Report" },
      { name: "Stock Summary" },
    ],
  },
  {
    title: "Party",
    icon: <UsersRound />,
    items: [
      { name: "Receivable Ageing Report" },
      { name: "Party Report By Item" },
      { name: "Party Statement (Ledger)" },
      { name: "Party Wise Outstanding" },
      { name: "Sales Summary - Category Wise" },
    ],
  },
  { title: "", icon: "", items: [] },
];

const Report = () => {
  const [openStates, setOpenStates] = useState(
    categories.map(() => true) 
  );
  const toggleCategory = (index) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };
  const [isOpen, setIsOpen] = useState(true);
  const filter = [
    "Party",
    "Category",
    "Payment Collection",
    "Item",
    "Invoice Details",
    "Summary",
  ];

  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex justify-between items-center border-b px-5 py-2">
        <h1>Reports</h1>
        <button className="bg-blue-800 py-1 px-2 text-white ">
          CA Reports Sharing
        </button>
      </div>

      <div className="flex-1 overflow-auto ">
        <div className="flex items-center gap-4 px-5 py-4 ">
          <span className="text-gray-500">Filter By</span>
          {filter.map((item) => {
            return (
              <button
                className="cursor-pointer rounded-full px-5 py-1.5 text-sm border border-gray-300"
                key={item}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-3 ">
          {categories.map((category, index) => {
            const isOpen = openStates[index];
            const visibleItems = isOpen
              ? category.items
              : category.items.slice(0, 3);
            return (
              <div key={index} className="border">
                <div className="">
                  <h1
                    className={`${
                      category.title === "" && "h-14"
                    } border-b px-5 py-4 bg-gray-50`}
                  >
                    {category.title}
                  </h1>
                  <div
                    className={`flex flex-col px-2 pb-5 transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[650px] opacity-100"
                        : "max-h-[500px] opacity-100"
                    } overflow-hidden`}
                  >
                    {visibleItems.map((cat, ind) => (
                      <Link key={ind} href={cat.path ? cat.path : "#"}>
                        <div className="flex justify-between p-5">
                          <span className="block bg-amber-800">{cat.name}</span>
                          {category.title === "Favourite" ? (
                            <Star size={15} />
                          ) : (
                            ""
                          )}
                        </div>
                      </Link>
                    ))}
                    {category.items.length > 3 &&
                      category.title !== "Favourite" &&
                      category.title !== "" && (
                        <button
                          onClick={() => toggleCategory(index)}
                          className="px-5 flex items-center text-blue-500"
                        >
                          {openStates[index] ? (
                            <span className="flex gap-2 items-center">
                              {" "}
                              See less
                              <ChevronUp size={15} />
                            </span>
                          ) : (
                            <span className="flex gap-2 items-center">
                              {" "}
                              See more
                              <ChevronRight size={15} />
                            </span>
                          )}
                        </button>
                      )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Report;
