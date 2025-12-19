"use client";
import { useState } from "react";
import {
  Building,
  ChevronDown,
  ArrowLeftRight,
  Square,
  CheckSquare,
  SquarePen,
  Trash2,
} from "lucide-react";
import Header from "@/components/Header";
import Select from "@/components/Select";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

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
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "itemName",
    header: "Item Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("itemName")}</div>
    ),
  },
  {
    accessorKey: "itemBatch",
    header: "Item Batch",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("itemBatch")}</div>
    ),
  },
  {
    accessorKey: "stockQty",
    header: "Stock QTY",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("stockQty")}</div>
    ),
  },
  {
    accessorKey: "stockValue",
    header: "Stock Value",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("stockValue")}</div>
    ),
  },
  {
    accessorKey: "sellingPrice",
    header: "Selling Price",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("sellingPrice")}</div>
    ),
  },
  {
    accessorKey: "pruchasePrice",
    header: "Purchase Price",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("purchasePrice")}</div>
    ),
  },
];

const Godown = () => {
  //   const [sorting, setSorting] = useState<SortingState>([]);
  //   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  //   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  //   const [rowSelection, setRowSelection] = useState({});

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
      <Header title="Godown Management" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center gap-3">
          <Select menus={["Active Godown", "Business Name"]} />

          <div className="flex items-center gap-3 text-xs font-medium">
            <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2.5 rounded-xs">
              <ArrowLeftRight className="w-4 h-4" />
              Transfer Stock
            </button>

            <button className="bg-indigo-600 text-white px-4 py-2.5 rounded-xs">
              Create Godown
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-between border border-gray-300 rounded-lg p-3">
          <div className="flex items-center gap-3">
            <span className="text-lg font-medium">Business Name</span>
            <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-xs font-medium">
              Main Godown
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button className=" text-gray-400  border border-gray-300 p-2 rounded-xs">
              <SquarePen size={15} />
            </button>
            <button className="text-gray-400  border border-gray-300 rounded-xs p-2 ">
              <Trash2 size={15} className="text-red-600" />
            </button>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-md border border-gray-300">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="bg-gray-50 text-xs">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        key={header.id}
                        className="border-r border-gray-300"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
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
                    Godown is Empty. You can easily monitor and track your inverntory across various Godown and store locations 
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

export default Godown;

{
  /* <div className="w-full">
  <div className="flex items-center justify-end space-x-2 py-4">
    <div className="text-muted-foreground flex-1 text-sm">
      {table.getFilteredSelectedRowModel().rows.length} of{" "}
      {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
    <div className="space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  </div>
</div>; */
}
