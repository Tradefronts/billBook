"use client";
import { ChevronDown, FileChartColumnIncreasing } from "lucide-react";
import React, { useState } from "react";


type SelectProps = {
    menus?: string[];
};
const Select = (
    { menus = [
        "Partywise Outstanding",
        "Item Report By Party",
        "Receivable ageing Report",
    ] ,width="w-full" }: SelectProps
) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMenu,setSelectedMenu]=useState(menus[0])

    return (
        <div className="relative">
            <div className="w-56">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer px-3 py-2 text-gray-500 rounded-xs border border-gray-300 text-xs w-full flex items-center justify-between"
                >
                    <div className="flex items-center gap-2">
                        <span className="block">{selectedMenu}</span>
                    </div>
                    <span className="block">
                        <ChevronDown size={15} />
                    </span>
                </button>
                {isOpen && (
                    <ul className={`${width} divide-y max-h-72 overflow-auto divide-gray-300 text-xs font-medium text-gray-400 absolute bg-white   z-1  shadow-sm  shadow-gray-400 rounded-xs`}>
                        {menus.map((menu) => (
                            <li onClick={()=>{setSelectedMenu(menu),setIsOpen(false)}}
                                key={menu}
                                className={`${selectedMenu==menu&&"font-medium text-gray-600 bg-violet-50"} px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-violet-50`}
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
