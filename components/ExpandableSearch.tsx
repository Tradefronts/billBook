"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function ExpandableSearch({ placeholder,width="w-56" }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex items-center">
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="p-2 border border-gray-300 hover:border-gray-400 rounded-xs transition cursor-pointer"
                >
                    <Search size={15} className="text-gray-500" />
                </button>
            )}
            <div
                className={`overflow-hidden transition-all duration-300 
          ${open ? `${width} opacity-100 ml-0` : "w-0 opacity-0 ml-0"}
        `}
            >
                {open && (
                    <div className="flex items-center bg-white border px-3 py-2 rounded-sm w-full">
                        <Search size={18} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder={placeholder}
                            className="ml-2 outline-none text-sm w-full"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
