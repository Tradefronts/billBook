import React from "react";

interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
  width?: string;
  padding?:string;
  bgColor?:string
  textSize?:string
 
}

const Input = ({ label, placeholder, id, width = "full", padding = "px-3 py-2", bgColor="white",textSize="xs" }: InputProps) => {
  return (
    <div className={width}>
      <label
        htmlFor={id}
        className={`${textSize} mb-1 block  text-slate-600`}
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        className={`w-full  rounded-md border border-gray-300  text-sm outline-none focus:border-blue-400 ${padding} ${bgColor}`}
      />
    </div>
  );
};

export default Input;
