"use client";
import { Calendar, ChevronDown, FileChartColumnIncreasing } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type SelectProps = {
  menus?: string[];
  showCalenederIcon:boolean;
  width?:string
};
const Select = ({
  menus = [
    "Partywise Outstanding",
    "Item Report By Party",
    "Receivable ageing Report",
  ],
  showCalenederIcon,
  width = "w-full",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(menus[0]);
  const selectRef=useRef(null)


 useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative ">
      <div className="w-56">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer px-3 py-2 text-gray-500 rounded-xs border border-gray-300 text-xs w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            {showCalenederIcon &&<Calendar size={15} className="text-gray-500"/>}  <span className="block">{selectedMenu}</span>
          </div>
          <span className="block">
            <ChevronDown size={15} />
          </span>
        </button>
        {isOpen && (
          <ul
            className={`${width} divide-y max-h-72 overflow-auto divide-gray-300 text-xs font-medium text-gray-400 absolute bg-white   z-1  shadow-sm  shadow-gray-400 rounded-xs`}
          >
            {menus.map((menu) => (
              <li
                onClick={() => {
                  setSelectedMenu(menu), setIsOpen(false);
                }}
                key={menu}
                className={`${
                  selectedMenu == menu &&
                  "font-medium text-gray-600 bg-violet-50"
                } px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-violet-50`}
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

export default Select;
