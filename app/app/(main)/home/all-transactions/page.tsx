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
    accessorKey: "transactionNumber",
    header: "Transaction Number",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "partyName",
    header: "Party Name",
  },

  {
    accessorKey: "amount",
    header: "Amount",
  },
];
const AllTransaction = () => {
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
    <div className="h-full w-full flex flex-col">
      <Header title="All Transactions" />
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-3">
          <ExpandableSearch placeholder="See All Transactions" />
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

        <div className="mt-4 rounded-lg border overflow-hidden">
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
              className="   h-96 overflow-auto
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

export default AllTransaction;
