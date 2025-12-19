"use client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CircleArrowOutUpRight,
  Gift,
  Landmark,
  Megaphone,
  MessagesSquare,
  Monitor,
  RefreshCcw,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
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
import SummaryCard from "@/components/card/SummaryCard";
import Header from "@/components/Header";

type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "DATE",
  },
  {
    accessorKey: "type",
    header: "TYPE",
  },
  {
    accessorKey: "TxnNo",
    header: "TXN NO",
  },
  {
    accessorKey: "partyName",
    header: "PARTY NAME",
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
  },
];
type SummaryItem = {
  name: string
  value: number
}
const Dashboard=()=> {
  const [isDemoShow, setIsDemoShow] = useState(true);
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

  const dashboardSummary: SummaryItem[] = [
      {
        name: "To Collect",
        value: 100,
      },
      {
        name: "To Pay",
        value: 0,
      },
      {
        name: "Total Cash + Bank Balance",
        value: 15,
      },
    ]
  
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
      <Header
        title="Dashboard"
        showBackBtn={false}
        showDemoBtn={true}
        showMessagBtn={true}
      />
      <div className="p-5 space-y-5 flex-1 overflow-auto">
        {isDemoShow && (
          <div className="relative">
            <div className="border p-5 text-sm border-gray-300 w-full  rounded-xl bg-[#f3ede6] hover:shadow-md shadow-black/20">
              <div className="space-y-3">
                <span className="block font-semibold tracking-wide">
                  Book Free Demo
                </span>
                <span className="block font-light">
                  Get a personalised tour from our <br />
                  solution expert
                </span>
                <button className="font-semibold  flex items-center gap-2">
                  Book Demo Now <ArrowRight size={20} />
                </button>
              </div>
              <div></div>
            </div>
            <button
              onClick={() => setIsDemoShow(false)}
              className="absolute -right-2 -top-2 bg-gray-100 border rounded-full p-1 cursor-pointer"
            >
              <X className="" size={15} />
            </button>
          </div>
        )}
        <div className=" space-y-5">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold">Business Overview</h6>
            <div className="bg-gray-100 flex items-center gap-2 px-3 text-xs rounded-xs py-1">
              <div>
                <span className="text-neutral-400">Last update :</span>
                <span className="text-gray-800">12 Dec 2025 | 11:05 pm</span>
              </div>
              <button className="cursor-pointer">
                <RefreshCcw className="text-blue-500 " size={15} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full mt-2 gap-3">
           
            {dashboardSummary.map((data, i) => <SummaryCard key={i} data={data}  />)}
          </div>

          <div className=" w-full grid grid-cols-3 items-start gap-3">
            <div className=" col-span-2 space-y-5">
              <div className=" border border-gray-300 rounded-lg">
                <h5 className="font-semibold border-b px-5 py-2 text-sm border-gray-300">
                  Latest Transactions
                </h5>
               
                <div className=" rounded-lg  overflow-hidden">
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

                    <TableBody className="h-96 overflow-auto [&>*]:!bg-transparent [&>*]:!hover:bg-transparent [&>:data-[state=selected]:!bg-transparent">
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
                <Link href="/app/home/all-transactions">
                  <button className="cursor-pointer w-full text-center text-blue-500 text-sm py-2">
                    See All Transactions
                  </button>
                </Link>
              </div>
              <div className="w-full border border-gray-300 h-48 rounded-lg "></div>
            </div>

            <div className=" rounded-lg border border-gray-300">
              <h5 className="font-semibold border-b px-5 py-2 text-sm border-gray-300">
                Today's Checklist
              </h5>
              <div className="px-4 py-10">
                <div className="flex flex-col items-center justify-center">
                  <div className="h-24 w-24 bg-red-400"></div>
                  <span className="font-semibold textlg">Coming Soon...</span>
                  <span className="text-xs">
                    Smarter daily checklist for overdue and follow-ups
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dashboard