"use client";

import GstPlaceOfSupplyTable from "@/components/GstPlaceOfSupplyTable";
import GstReserveChargeTable from "@/components/GstReserveChargeTable";
import ITCTable from "@/components/ItcTable";
import NonGstSupplyTable from "@/components/NonGstSupplyTable";
import Select from "@/components/Select";
import { ArrowLeft, Printer, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const ReportGstr3b = () => {
  const router = useRouter();

  const NonGstSupplyData = [
    {
      label:
        "From a supplier under composition scheme, Exempt and Nil rated supply",
      interState: 0,
      intraState: 0,
    },
    {
      label: "Non GST supply",
      interState: 0,
      intraState: 0,
    },
  ];

  const itcData = [
    {
      type: "section",
      title: "(A) ITC Available (Whether in full or part)",
    },
    {
      type: "row",
      label: "(1) Import of goods",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      type: "row",
      label: "(2) Import of services",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      type: "row",
      label:
        "(3) Inward supplies liable for reverse charge (other than 1 & 2 above)",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      type: "row",
      label: "(4) Inward Supplies for ISD",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      type: "row",
      label: "(5) All Other ITC",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      type: "section",
      title: "(D) Ineligible",
    },
    {
      type: "row",
      label: "(1) As per section 17(5)",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      type: "row",
      label: "(5) Others",
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
  ];

  const data = [
    {
      nature:
        "Outward taxable supplies (Other than zero rated, nil rated and exempted)",
      taxableValue: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      nature: "Outward taxable supplies (Zero rated)",
      taxableValue: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      nature: "Other outward supplies (Nil rated and exempted)",
      taxableValue: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      nature: "Inward supplies (Liable to reverse charge)",
      taxableValue: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
    {
      nature: "Non-GST outward supplies",
      taxableValue: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cess: 0,
    },
  ];

  //   const placeOfSupplyData= [
  //     {
  //       "place": "Maharashtra",
  //       "unregisteredTaxable": 0,
  //       "unregisteredIgst": 0,
  //       "compositionTaxable": 0,
  //       "compositionIgst": 0,
  //       "uinTaxable": 0,
  //       "uinIgst": 0
  //     },
  //     {
  //       "place": "Karnataka",
  //       "unregisteredTaxable": 50000,
  //       "unregisteredIgst": 9000,
  //       "compositionTaxable": 0,
  //       "compositionIgst": 0,
  //       "uinTaxable": 0,
  //       "uinIgst": 0
  //     }
  //   ]

  return (
    <div className=" w-full h-full flex flex-col">
      <div className="flex gap-2 items-center border-b px-5 py-3">
        <span>
          <ArrowLeft onClick={() => router.back()} />
        </span>
        <span className="text-sm">GSTR-3b</span>
        <button className="flex items-center py-1 px-2 text-sm gap-2 bg-gray-200 rounded">
          <span>
            <Star size={17} className="text-gray-500" />
          </span>
          <span>Favourite</span>
        </button>
      </div>

        <div className="flex justify-between items-center py-3 px-4 shrink-0">
          <Select
            menus={[
              "Today",
              "Yesterday",
              "This Week",
              "Last Week",
              "Last 7 days",
              "This Month",
              "Previous Month",
              "Last 30 days",
              "This Quater",
              "Previous Quater",
              "Current Fiscal Year",
              "Previous Fiscal Year",
              "Last 365 days",
              "Custom Date Range",
            ]}
          />
          <div className="flex gap-2">
            <Select menus={["Download Excel", "Download Pdf"]} />
            <button className="flex text-xs border text-gray-500 py-1.5 px-2 gap-8 items-center">
              Print PDF{" "}
              <span>
                <Printer size={15} />
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-auto space-y-4 px-5">
          <div className="">
            <span className="font-semibold text-lg text-neutral-800">
              3.1 Details of Outward supplies and Inward supplies liable to
              reverse charge
            </span>
            <div>
              <GstReserveChargeTable data={data} />
            </div>
          </div>
          <div className=" ">
            <span className="font-semibold text-lg text-neutral-800">
              3.2 Details of Inter-State supplies made to unregistered persons,
              composition dealer and UIN holders
            </span>
            <div>
              <GstPlaceOfSupplyTable data={[]} />
            </div>
          </div>
          <div className="">
            <span className="font-semibold text-lg text-neutral-800">
              4. Details of Eligible Input Tax Credit
            </span>
            <div>
              <ITCTable data={itcData} />
            </div>
          </div>
          <div className=" ">
            <span className="font-semibold text-lg text-neutral-800">
              5. Details of exempt, nil-rated and non-GST inward supplies
            </span>
            <div className="pb-6">
              <NonGstSupplyTable data={NonGstSupplyData} />
            </div>
          </div>
        </div>
    </div>
  );
};

export default ReportGstr3b;
