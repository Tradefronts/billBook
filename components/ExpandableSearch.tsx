"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function ExpandableSearch({ placeholder, width = "w-56" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="p-2  border border-gray-300 hover:border-gray-400 rounded-xs transition cursor-pointer"
        >
          <Search size={15} className="text-gray-500" />
        </button>
      )}
      <div
        className={` transition-all duration-300
          ${open ? `${width} opacity-100 ml-0` : "w-0 opacity-0 ml-0"}
        `}
      >
        {open && (
          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 cursor-pointer "
            />
            <input
              type="text"
              className="w-full rounded-xs  py-1.5 px-3 pl-8 text-sm border border-gray-300 focus:border-violet-400 outline-none focus:ring-2 focus:ring-violet-200"
              placeholder={placeholder}
            />
          </div>
        )}
      </div>
    </div>
  );
}
