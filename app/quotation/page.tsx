"use client";

import { Calendar, Settings, CreditCard, ChevronDown } from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { ArrowLeft, Search, SquarePen } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";
import ExpandableSearch from "@/components/ExpandableSearch";
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
    accessorKey: "quotationNumber",
    header: "Quotation Number",
  },
  {
    accessorKey: "partyName",
    header: "Party Name",
  },
  {
    accessorKey: "dueIn",
    header: "Due In",
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
const Quotation = () => {
  const data: Payment[] = [
    // {
    //   date: "02 Dec 2025",
    //   amount: 316,
    //   partyName: "hey",
    //   paymentNumber: "ken99@example.com",
    // },
    // {
    //   date: "02 Dec 2025",
    //   amount: 242,
    //   partyName: "hello",
    //   paymentNumber: "Abe45@example.com",
    // },
    // {
    //   date: "02 Dec 2025",
    //   amount: 837,
    //   partyName: "hello world",
    //   paymentNumber: "Monserrat44@example.com",
    // },
    // {
    //   date: "02 Dec 2025",
    //   amount: 874,
    //   partyName: "namaste",
    //   paymentNumber: "Silas22@example.com",
    // },
    // {
    //   date: "02 Dec 2025",
    //   amount: 721,
    //   partyName: "failed",
    //   paymentNumber: "carmella@example.com",
    // },
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
    <div className="flex h-full w-full flex-col text-sm text-gray-800">
      <Header title="Quotation / Estimate" showSettingBtn={true} />
      <div className=" p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <ExpandableSearch placeholder="Search Quotation" />
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
            <Select
              showCalenederIcon={true}
              menus={[
                "Show All Quotation",
                "Show Open Quotation",
                "Show Closed Quotation",
              ]}
            />
          </div>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-xs text-sm font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap">
            Create Quotation
          </button>
        </div>

        <div className=" mt-4   rounded-sm border border-gray-300 overflow-hidden">
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
                    className="h-56 text-center"
                  >
                    <div className=" text-base text-gray-400">
                      No Transactions Matching the current filter
                    </div>
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

export default Quotation;
