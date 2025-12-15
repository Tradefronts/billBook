"use client";
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

type Payment = {
    id: string;
    amount: number;
    status: string;
    email: string;
};

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "no",
        header: "No",
    },
    {
        accessorKey: "items",
        header: "ITEMS",
    },
    {
        accessorKey: "itemCode",
        header: "ITEM CODE",
    },
    {
        accessorKey: "mrp",
        header: "MRP",
    }, {
        accessorKey: "sp",
        header: "SP (rs)",
    }, {
        accessorKey: "Quantity",
        header: "QUANTITY",
    }, {
        accessorKey: "amount",
        header: "AMOUNT",
    },
];

const POS = () => {


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
        <div className="h-full  w-full flex flex-col">
            <div className="px-5 bg-gray-50 py-2 w-full flex items-center justify-between border-b">
                <button className="text-xs px-2 py-1.5 flex items-center bg-white border gap-1 font-medium rounded-xs border-gray-300">
                    <ArrowLeft size={20} />
                    <div>
                        Exit POS <span className="text-gray-600">[ESC]</span>
                    </div>
                </button>
                <h1 className="text-gray-700 text-lg">POS Billing</h1>
                <button className="px-3 py-1.5 border text-xs font-medium bg-white border-gray-300 rounded-xs">
                    Settings <span className="text-gray-600">[CTRL + S]</span>
                </button>
            </div>
            <div className="flex items-center gap-2 border-b border-r border-gray-300 divide-x-2 divide-gray-300">
                <button className="px-4 py-2  text-sm">
                    Billing Screen 1 [CTRL + 1]
                </button>
                <button className="px-4 py-2  text-sm">
                    + Hold Bill & Create Another [CTRL + B]
                </button>
            </div>

            <div className="flex-1 w-full grid grid-cols-5 ">
                <div className="flex-1 h-full col-span-3 p-4 border-r border-gray-300">
                    <div className="flex  items-center gap-2  text-xs font-medium">
                        <button className="px-4 py-1.5 flex items-center gap-5 bg-white border rounded-sm shadow-sm">
                            + New Item <span>[CTRL + I]</span>
                        </button>
                        <button className="px-4 py-1.5 flex items-center gap-5 bg-white border rounded-sm ">
                            Change Price <span>[P]</span>
                        </button>
                        <button className="px-4 py-1.5 flex items-center gap-5 bg-white border rounded-sm ">
                            Change QTY <span>[Q]</span>
                        </button>
                        <button className="px-4 py-1.5 flex items-center gap-5  text-red-700 border rounded-sm">
                            Delete Item <span className="text-gray-500">[DEL]</span>
                        </button>
                    </div>

                    <div className="relative h-12 my-4">
                        <div className="absolute border-y overflow-hidden left-2 top-0 h-full flex items-center bg-white px-1">
                            <Search className="text-gray-500" size={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by Item Name/Item Code or Scan Barcode"
                            className="w-full h-12 pl-12 pr-10 border rounded-xs text-sm focus:bg-yellow-50"
                        />
                        <span className="absolute right-2 top-0 h-full flex items-center bg-white text-xs text-gray-500 px-1">
                            [F1]
                        </span>
                    </div>


                    <div className="mt-4   rounded-sm border border-gray-300 overflow-hidden">
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
                                            <div className="flex flex-col gap-3 text-base text-gray-400">
                                                <span className="block">Add items searching by item name or item code</span>
                                                    <span className="block">Or</span>
                                                    <span className="block">Simply scan barcode to add items</span>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>



                    </div>
                </div>

                <div className="h-full flex flex-col justify-between  col-span-2 space-y-4 p-4">
                    <div className=" space-y-3">
                        <div className="flex items-center gap-2 text-xs">
                            <button className="w-1/2 p-2 flex items-center justify-between bg-white border border-gray-300 rounded-sm ">
                                Add Discount <span>[F2]</span>
                            </button>
                            <button className="w-1/2 flex items-center justify-between p-2 bg-white border border-gray-300 rounded-sm ">
                                Add Additional Charge <span>[F3]</span>
                            </button>
                        </div>
                        <div className=" border border-gray-300 rounded-sm ">
                            <div className="px-4 py-2 border-b border-gray-300 rounded-t-sm bg-gray-100">
                                <p className="text-sm font-medium ">Bill details</p>
                            </div>
                            <div className="space-y-3 p-4 ">
                                <div className="flex justify-between ">
                                    <span>Sub Total</span>
                                    <span>₹ 0</span>
                                </div>

                                <div className="flex justify-between ">
                                    <span>Tax</span>
                                    <span>₹ 0</span>
                                </div>
                            </div>
                            <div className="mt-3 border-t border-gray-300 flex justify-between text-lg font-medium py-2 px-4">
                                <span>Total Amount</span>
                                <span>₹ 0</span>
                            </div>
                        </div>

                        <div className=" border rounded-sm border-gray-300 ">
                            <div className="border-b font-medium bg-gray-100 rounded-t-sm border-gray-300 px-4 py-2 flex justify-between text-sm">
                                <span>Received Amount</span>
                                <span>[F4]</span>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <span>₹ 0</span>
                                <select className="border rounded-md px-2 py-1 text-sm">
                                    <option>Cash</option>
                                    <option>Card</option>
                                    <option>UPI</option>
                                </select>
                            </div>
                        </div>

                        <div className=" border rounded-sm border-gray-300 ">
                            <div className="border-b font-medium bg-gray-100 rounded-t-sm border-gray-300 px-4 py-2 flex justify-between text-sm">
                                <span>Customer Details</span>
                                <span>[F5]</span>
                            </div>
                            <div className="flex items-center justify-between p-4">
                                <span className="block text-sm font-medium">Cash Sale</span>
                                <span>
                                    <SquarePen size={15} />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ">
                        <button className="w-1/2 py-2 border rounded-md">
                            Save & Print [F6]
                        </button>
                        <button className="w-1/2 py-2 bg-violet-600 text-white rounded-md">
                            Save Bill [F7]
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POS;
