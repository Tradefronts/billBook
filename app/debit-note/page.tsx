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
    accessorKey: "debitNoteNumber",
    header: "Debit Note Number",
  },
  {
    accessorKey: "partyName",
    header: "Party Name",
  },
  {
    accessorKey: "purchaseNumber",
    header: "Purchase Number",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

const DebitNote = () => {
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
    <div className="h-full flex flex-col w-full">
      <Header title="Debit Note" showSettingBtn={true} />
      <div className="p-5 space-y-3">
      <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <ExpandableSearch placeholder="Search Debit Note" />
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

        <Link href="/create-debit-note"><button className="cursor-pointer border px-4 py-2 rounded-xs text-sm font-semibold bg-[#4c3cce] text-white">
          Create Debit Note
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

export default DebitNote;
