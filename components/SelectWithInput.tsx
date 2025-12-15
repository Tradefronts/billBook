"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, SquarePen } from "lucide-react";

const SelectWithInput = ({
  placeholder,
  items ,
  onCreate,
  onEdit,
  isEditOpen,
  setIsEditOpen,
  isAddOpen,
  setIsAddOpen,
}) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-56" ref={selectRef}>
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-xs py-1.5 px-3 pr-8 text-sm border border-gray-300 focus:border-violet-400 outline-none focus:ring-2 ring-violet-200"
          placeholder={placeholder}
          onFocus={() => setOpen(true)}
        />
        <ChevronDown
          size={18}
          className="absolute top-1/2 -translate-y-1/2 right-2 text-gray-500 cursor-pointer "
        />
      </div>

      {open && (
        <div className="absolute left-0 right-0 bg-white shadow-md rounded-xs z-10  border">
          {items==="undefined"? (
            <ul className="w-full  divide-y-2 items-center text-xs  rounded">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="px-4 py-3  text-gray-600  w-full flex items-center justify-between cursor-pointer  hover:bg-violet-50"
                >
                  <span>{item} </span>
                  <button
                    onClick={() => setIsEditOpen(!isEditOpen)}
                    className="border border-gray-300 p-1 rounded-xs"
                  >
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
            <button
              onClick={() => setIsAddOpen(true)}
              className="w-full  cursor-pointer text-xs py-2 border-2 border-dashed border-blue-300 hover:border-blue-400 text-blue-500 rounded-sm"
            >
              + Create Category
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectWithInput;
