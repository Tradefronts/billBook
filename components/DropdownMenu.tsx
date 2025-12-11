"use client";
import { ChevronDown, FileChartColumnIncreasing } from "lucide-react";
import React, { useState } from "react";

type DropdownMenuProps = {
  menus?: string[];
  name?: string;
  icon?: boolean;
  label?: string;
};
const DropdownMenu = ({
  menus = [
    "Partywise Outstanding",
    "Item Report By Party",
    "Receivable ageing Report",
  ],
  name = "Reports",
  icon = true,
  label,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="w-44">
        {label&&<label className="text-sm">{label}</label>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-3 py-1.5 rounded-xs border border-gray-300 text-blue-500 text-sm w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            {icon && <FileChartColumnIncreasing size={15} />}
            <span className="block">{name}</span>
          </div>
          <span className="block">
            <ChevronDown size={15} />
          </span>
        </button>
        {isOpen && (
          <ul className="divide-y divide-gray-300 text-xs font-medium text-gray-400 absolute bg-white  w-full z-1  shadow-sm  shadow-gray-400 rounded-xs">
            {menus.map((menu) => (
              <li
                key={menu}
                className="px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-violet-50"
              >
                {menu}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
