"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, SquarePen } from "lucide-react";

const DropdownSearch=({
  placeholder = "Search",
  items = ["Hello", "Hello World"],
  onCreate,
  onEdit,
  isEditOpen,
  setIsEditOpen,
  isAddOpen,
  setIsAddOpen
})=> {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <div
        className="flex items-center border rounded-xs px-3 py-1 bg-white"
        onClick={() => setOpen(true)}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-none"
        />
        <ChevronDown size={18} className="text-gray-500 cursor-pointer" />
      </div>

      {open && (
        <div className="absolute left-0 right-0 bg-white shadow-md rounded-xs z-10  border">
          {items.length ? (
            <ul className="w-full  divide-y-2 items-center text-xs  rounded">
              {items.map((item, i) => (
                <li key={i} className="px-4 py-3 text-gray-700  w-full flex items-center justify-between cursor-pointer  hover:bg-gray-100">
                  <span>{item} </span>
                  <button onClick={() => setIsEditOpen(!isEditOpen)} className="border border-gray-300 p-1.5 rounded-sm">
                    <SquarePen
                      size={15}
                      className="text-gray-600 cursor-pointer"
                    />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 px-2 py-2">No items found</p>
          )}
          <div className="px-4 py-2 border">
            <button onClick={()=>setIsAddOpen(true)} className="w-full  cursor-pointer text-xs py-2 border-2 border-dashed border-blue-300 hover:border-blue-400 text-blue-500 rounded-sm">
              + Create Category
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownSearch