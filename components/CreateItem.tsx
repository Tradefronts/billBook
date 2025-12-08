import { useState } from "react";
import BasicDetailsTab from "./BasicDetailsTab";
import StockDetailsTab from "./StockDetailsTab";
import PricingDetailsTab from "./PricingDetailsTab";
import { FileText, Boxes, Tag, Users, Layers, ReceiptIndianRupee, Server } from "lucide-react";
import PartyWisePricesTab from "./PartyWisePricesTab";
import CustomFieldsTab from "./CustomFieldsTab";

export default function CreateItem({ onClose }) {
  const [activeTab, setActiveTab] = useState("basic");

  const renderContent = () => {
    switch (activeTab) {
      case "basic":
        return <BasicDetailsTab />;
      case "stock":
        return <StockDetailsTab />;
      case "pricing":
        return <PricingDetailsTab />;
      case "party":
        return <PartyWisePricesTab/>;
      case "custom":
        return <CustomFieldsTab/>;
      default:
        return "yes";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="bg-white rounded-lg shadow-xl w-[57%] h-[80%] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
          <h2 className="text-lg font-semibold">Create New Item</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden p-2 gap-4">
          <div className="w-64 border border-gray-300 rounded-lg bg-gray-50 p-5 space-y-4">
            <SidebarItem
              label="Basic Details *"
              icon={FileText}
              active={activeTab === "basic"}
              onClick={() => setActiveTab("basic")}
            />

            <div className="text-sm text-gray-500 font-medium mt-6">
              Advance Details
            </div>

            <SidebarItem
              label="Stock Details"
              icon={Boxes}
              active={activeTab === "stock"}
              onClick={() => setActiveTab("stock")}
            />

            <SidebarItem
              label="Pricing Details"
              icon={ReceiptIndianRupee}
              active={activeTab === "pricing"}
              onClick={() => setActiveTab("pricing")}
            />

            <SidebarItem
              label="Party Wise Prices"
              icon={ReceiptIndianRupee}
              active={activeTab === "party"}
              onClick={() => setActiveTab("party")}
            />

            <SidebarItem
              label="Custom Fields"
              icon={Server}
              active={activeTab === "custom"}
              onClick={() => setActiveTab("custom")}
            />
          </div>

          <div className="flex-1 p-8 overflow-y-auto border border-gray-300 rounded-lg">
            {renderContent()}
          </div>
        </div>

        <div className="border-t px-6 py-4 flex justify-end bg-gray-50">
          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg mr-3"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ label, icon: Icon, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-3 py-2 rounded-lg flex items-center gap-2
        ${
          active
            ? "bg-indigo-100 text-indigo-700 font-medium"
            : "text-gray-700 hover:bg-gray-200"
        }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </div>
  );
}
