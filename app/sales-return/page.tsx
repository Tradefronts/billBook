"use client"
import ExpandableSearch from "@/components/ExpandableSearch";
import { Settings } from "lucide-react";
import Link from "next/link";
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
    accessorKey: "salesReturnNumber",
    header: "Sales Return Number",
  },
  {
    accessorKey: "partyName",
    header: "Party Name",
  },
   {
    accessorKey: "invoiceNumber",
    header: "Invoice No",
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

const SalesReturn = () => {
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
    <div className="w-full h-full flex flex-col px-5 py-3">
      <div className="w-full flex items-center justify-between">
        <h5 className="text-lg font-medium tracking-wide">Sales Return</h5>
        <span className="block border rounded-xs border-gray-300 p-2">
          <Settings size={18} />
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <ExpandableSearch placeholder="Search Sales Return" />
        </div>

        <Link href="/create-sales-return">
          <button className="bg-[#4c3cce] cursor-pointer text-xs rounded-sm text-white px-5 py-2.5 font-medium">
            Create Sales Return
          </button>
        </Link>
      </div>

      <div className="mt-4 rounded-lg border overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-50 text-xs"
              >
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

          <TableBody className="   h-96 overflow-auto
    [&>*]:!bg-transparent 
    [&>*]:!hover:bg-transparent
    [&>*]:data-[state=selected]:!bg-transparent">
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
                  className="text-center"
                >
                  No Transactions Matching the current filter{" "}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

    </div>
  );
};

export default SalesReturn;
