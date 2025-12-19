"use client";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  EllipsisVertical,
  Layers,
  Link2,
  MoreHorizontal,
  MoveRight,
  Search,
  Settings,
  SquarePen,
  Trash2,
  Users,
} from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Dropdown from "@/components/Dropdown";
import Header from "@/components/Header";
import { AddModal, EditModal, SharedLedger } from "@/components/Modal";
import ExpandableSearch from "@/components/ExpandableSearch";
import SelectWithInput from "@/components/SelectWithInput";
import SummaryCard from "@/components/card/SummaryCard";
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
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Party = {
  partyName: string;
  mobileNumber: number;
  category: string;
  partyType: string;
  balance: number;
};

type SummaryItem = {
  name: string;
  value: number;
};
type CardType = "all parties" | "to collect" | "to pay";

const Parties = () => {
  const [isBulkClicked, setIsBulkClicked] = useState<boolean>(false);
  const [isSharedLedgerClicked, setIsSharedLedgerClicked] =
    useState<boolean>(false);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState<CardType>("all parties");
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const response = {
    summary: {
      allParties: 4,
      toCollect: 2,
      toPay: 2,
    },
    parties: [
      {
        partyName: "Hello Traders",
        mobileNumber: 1234567890,
        category: "Dec",
        partyType: "Customer",
        balance: 7636,
      },
      {
        partyName: "Alpha Store",
        mobileNumber: 9876543210,
        category: "Jan",
        partyType: "Customer",
        balance: 3573,
      },
      {
        partyName: "World Suppliers",
        mobileNumber: 8760945689,
        category: "Dec",
        partyType: "Supplier",
        balance: -4000,
      },
      {
        partyName: "Beta Wholesales",
        mobileNumber: 9988776655,
        category: "Feb",
        partyType: "Supplier",
        balance: -2500,
      },
    ],
  };

  const partySummary: SummaryItem[] = [
    {
      name: "all parties",
      value: response.summary.allParties,
    },
    {
      name: "to collect",
      value: response.summary.toCollect,
    },
    {
      name: "to pay",
      value: response.summary.toPay,
    },
  ];
  const tableData = useMemo(() => {
    switch (activeCard) {
      case "to collect":
        return response.parties.filter((p) => p.balance > 0);

      case "to pay":
        return response.parties.filter((p) => p.balance < 0);

      case "all parties":
      default:
        return response.parties;
    }
  }, [activeCard]);

  const columns = React.useMemo<ColumnDef<Party>[]>(
    () => [
      {
        accessorKey: "partyName",
        header: ({ column }) => {
          return (
            <div className="flex items-center gap-1">
              <span>Party Name</span>
              <div className="-space-y-1.5">
                <button
                  type="button"
                  className="block cursor-pointer"
                  onClick={() => column.toggleSorting(false)}
                >
                  <ChevronUp size={13} />
                </button>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => column.toggleSorting(true)}
                >
                  <ChevronDown size={13} />
                </button>
              </div>
            </div>
          );
        },
        cell: ({ row }) => (
          <div className="lowercase">{row.getValue("partyName")}</div>
        ),
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("category")}</div>
        ),
      },
      {
        accessorKey: "mobileNumber",
        header: "Mobile Number",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("mobileNumber")}</div>
        ),
      },
      {
        accessorKey: "partyType",
        header: "Party Type",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("partyType")}</div>
        ),
      },
      {
        accessorKey: "balance",
        header: ({ column }) => {
          return (
            <div className="flex items-center gap-1">
              <span>Balance</span>
              <div className="-space-y-1.5">
                <button
                  type="button"
                  className="block cursor-pointer"
                  onClick={() => column.toggleSorting(false)}
                >
                  <ChevronUp size={13} />
                </button>
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => column.toggleSorting(true)}
                >
                  <ChevronDown size={13} />
                </button>
              </div>
            </div>
          );
        },
        cell: ({ row }) => (
          <div className="lowercase">{row.getValue("balance")}</div>
        ),
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const payment = row.original;
          const handleEdit = () => {
            console.log("Edit clicked for:", payment);
          };

          const handleDelete = () => {
            console.log("Delete clicked for:", payment);
          };

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleCard = (card: string) => {
    setActiveCard(card);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <Header
        title="Parties"
        dropdownMenus={[
          "Partywise Outstanding",
          "Item Report By Party",
          "Receivable ageing Report",
        ]}
        isSharedLedgerClicked={isSharedLedgerClicked}
        setIsSharedLedgerClicked={setIsSharedLedgerClicked}
        showSharedLedgerBtn={true}
        showReports={true}
        showSettingBtn={true}
      />

      <div className="p-5 space-y-5 ">
        <div className="grid grid-cols-3 w-full gap-3 ">
          {partySummary.map((data, i) => (
            <SummaryCard
              key={i}
              data={data}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          ))}
        </div>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ExpandableSearch placeholder="Search Party" />
            <SelectWithInput
              placeholder="Search Categories"
              items={["hey", "hello"]}
              isEditOpen={isEditOpen}
              setIsEditOpen={setIsEditOpen}
              setIsAddOpen={setIsAddOpen}
              isAddOpen={isAddOpen}
            />
          </div>
          <div className=" flex items-center gap-4 ">
            <div className="relative">
              <button
                onClick={() => setIsBulkClicked(!isBulkClicked)}
                className="cursor-pointer rounded-xs border p-2 border-gray-300 text-gray-500 text-sm  flex items-center gap-2"
              >
                <Layers size={15} className="text-gray-700" /> Bulk Actions
                <ChevronDown size={15} />
              </button>
              {isBulkClicked && (
                <div className="absolute  w-68 bg-white border border-gray-300 z-1 p-2 leading-2 shadow-lg rounded-xs shadow-gray-300">
                  <div className=" text-gray-500 flex items-center justify-between">
                    <span className="block text-sm">Bulk Add Parties</span>
                    <span className="">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                  <span className="text-xs">
                    Quickly add all your parties with Excel
                  </span>
                </div>
              )}
            </div>
            <Link href="/app/home/add-party">
              <button className="rounded-xs border py-2 px-7 text-white cursor-pointer  border-gray-300 bg-[#4c3cce] text-sm flex items-center gap-2 font-medium">
                Create Party
              </button>
            </Link>
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
                      <TableCell
                        key={cell.id}
                        className="border-r border-gray-300"
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
                    No parties found for given filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <SharedLedger
        title="SharedLedger Portal"
        isSharedLedgerClicked={isSharedLedgerClicked}
        setIsSharedLedgerClicked={setIsSharedLedgerClicked}
      />
      <EditModal isEditOpen={isEditOpen} setIsEditOpen={setIsEditOpen} />
      <AddModal
        title="Add New Category"
        isAddOpen={isAddOpen}
        setIsAddOpen={setIsAddOpen}
      />
    </div>
  );
};

export default Parties;
