"use client";

import ExpandableSearch from "@/components/ExpandableSearch";
import Header from "@/components/Header";
import Select from "@/components/Select";
import React from "react";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Payment = {
  id?: string;
  amount: number;
  status: string;
  quotationNumber: number;
  date: string;
  partyName: string;
  modeoOfPayment: "cash";
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "quotationNumber",
    header: "Quotation Number",
  },
  {
    accessorKey: "partyName",
    header: "Party Name",
  },

  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "modeoOfPayment",
    header: "Mode of Payment",
  },
];
const OnlineOrders = () => {
  const data: Payment[] = [
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      modeoOfPayment: "cash",
      quotationNumber: 256,
      status: "unpaid",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div className="w-full h-full flex flex-col">
      <Header title="Online Orders" />
      <div className="p-5 space-y-3 flex-1 overflow-auto">
        <div className="h-36 w-full border border-gray-300 shadow-sm shadow-gray-200 flex items-center justify-between ">
          <div className="space-y-3 p-5">
            <div>
              Increase Your Sales, get{" "}
              <span className="text-[#ef7338]">Online Orders</span> with A
              single click
            </div>
            <button className="bg-[#ef7338] cursor-pointer text-white text-xs font-medium px-7 py-2 rounded-xs">
              Create Online Store
            </button>
          </div>
          <div className="h-full w-44 bg-red-400"></div>
        </div>
        <div className="flex items-center gap-2">
          <ExpandableSearch title="Search Online Orders" />
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
        </div>
        <div className=" rounded-lg border ">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-gray-50 text-xs">
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="border-r border-gray-300 font-medium"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody
              className="
    [&>*]:!bg-transparent 
    [&>*]:!hover:bg-transparent
    [&>*]:data-[state=selected]:!bg-transparent"
            >
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="border-r  border-gray-300"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center">
                    No Transactions Matching the current filter{" "}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrders;
