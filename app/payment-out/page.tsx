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
        accessorKey: "paymentNumber",
        header: "Payment Number",
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

const PaymentOut = () => {
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
        <div className="h-full flex flex-col w-full px-5">
            <div className="flex items-center justify-between py-3">
                <h2 className="text-lg font-semibold">Payment Out</h2>
                <button className="p-2 border border-gray-300 rounded-md">
                    <Settings size={15} className="text-gray-700" />
                </button>
            </div>

            <div className="flex items-center gap-6 border-b text-sm pb-1">
                <button className="text-purple-700 font-medium border-b-2 border-purple-700 pb-1">
                    Payment Received
                </button>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <ExpandableSearch placeholder="Search Payment In" />
                    <button className="flex items-center gap-2 border px-3 py-2 rounded-sm bg-white text-sm">
                        <Calendar size={18} className="text-gray-500" />
                        Last 365 Days
                        <ChevronDown size={18} />
                    </button>
                </div>

                <Link href="/create-payment-out"><button className="cursor-pointer border px-4 py-2 rounded-xs text-sm font-semibold bg-[#4c3cce] text-white">
                    Create Payment Out
                </button>
                </Link>
            </div>

            <div className="mt-4 rounded-lg border overflow-hidden">
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
    );
};

export default PaymentOut;
