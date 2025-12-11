"use client"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = ({ name }) => {
const router =useRouter()

  return (
    <div className="w-full py-2.5 px-5 border-b border-gray-300 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button onClick={()=>router.back()}>
          <ArrowLeft />
        </button>
        <h5>{name}</h5>
      </div>
      <button className="block bg-blue-400 text-white px-10 py-1 rounded-xs">
        save
      </button>
    </div>
  );
};

export default Header;
