"use client";
import { Calendar, ChevronDown, Settings } from "lucide-react";
import ExpandableSearch from "@/components/ExpandableSearch";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Header from "@/components/Header";
import Select from "@/components/Select";

type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "expenseNumber",
    header: "Expense Number",
  },
  {
    accessorKey: "partyName",
    header: "Party Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

const Expenses = () => {
  const data: Payment[] = [
    {
      date: "02 Dec 2025",
      amount: 316,
      partyName: "hey",
      paymentNumber: "ken99@example.com",
    },
    {
      date: "02 Dec 2025",
      amount: 242,
      partyName: "hello",
      paymentNumber: "Abe45@example.com",
    },
    {
      date: "02 Dec 2025",
      amount: 837,
      partyName: "hello world",
      paymentNumber: "Monserrat44@example.com",
    },
    {
      date: "02 Dec 2025",
      amount: 874,
      partyName: "namaste",
      paymentNumber: "Silas22@example.com",
    },
    {
      date: "02 Dec 2025",
      amount: 721,
      partyName: "failed",
      paymentNumber: "carmella@example.com",
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
    <div className="h-full flex flex-col w-full ">
      <Header title="Expenses" showReports={true} showSettingBtn={true} dropdownMenus={["Expense Transaction","Expense Category"]}/>
      <div className="p-5 space-y-3">     
         <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ExpandableSearch placeholder="Search Expense" />
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

        <Link href="/create-expense">
          <button className="cursor-pointer border px-4 py-2 rounded-xs text-sm font-semibold bg-[#4c3cce] text-white">
            Create Expense
          </button>
        </Link>
      </div>
      <div className=" rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-50 hover:bg-gray-50 text-xs"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="border-r border-gray-300"
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

          <TableBody>
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
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
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

export default Expenses;
