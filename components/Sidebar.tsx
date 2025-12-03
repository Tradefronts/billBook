import {
  ChevronDown,
  ChevronRight,
  Crown,
  FileChartColumn,
  LayoutTemplate,
  Package,
  Plus,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Tag,
  Users,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  const menus = [
    {
      section: "general",
      items: [
        {
          name: "dashboard",
          icon: <LayoutTemplate size={18} />,
          hasDropdown: false,
        },
        { name: "parties", icon: <Users size={18} />, hasDropdown: false },
        { name: "items", icon: <Package size={18} />, hasDropdown: true },
        { name: "sales", icon: <Tag size={18} />, hasDropdown: true },
        {
          name: "purchases",
          icon: <ShoppingBag size={18} />,
          hasDropdown: true,
        },
        {
          name: "reports",
          icon: <FileChartColumn size={18} />,
          hasDropdown: false,
        },
      ],
    },
    {
      section: " Accounting Solutions",
      items: [
        {
          name: "cash & bank",
          icon: <LayoutTemplate size={18} />,
        },
        {
          name: "E-invoicing",
          icon: <Users size={18} />,
          isRightArrowShow: false,
        },
        {
          name: "automated bills",
          icon: <Package size={18} />,
          isRightArrowShow: true,
        },
        { name: "expenses", icon: <Tag size={18} />, isRightArrowShow: true },
        {
          name: "POS billing",
          icon: <ShoppingBag size={18} />,
          isRightArrowShow: true,
        },
      ],
    },
    {
      section: "Business Tools",
      items: [
        { name: "staff attendance & payroll", icon: <Users size={18} /> },
        { name: "manage users", icon: <Package size={18} /> },
        { name: "online orders", icon: <Tag size={18} /> },
        {
          name: "SMS marketings",
          icon: <ShoppingBag size={18} />,
        },
        {
          name: "Apply for loan",
          icon: <FileChartColumn size={18} />,
        },
      ],
    },
  ];

  return (
    <div className="bg-[#0c1526] text-white h-full flex flex-col rounded-lg  w-60 ">
      <div className="space-y-2 p-2">
        <div className="flex items-center justify-between group  ">
          <div className="flex items-center gap-2 group-hover:bg-gray-600 w-full p-0.5 rounded-l-md">
            <div className="h-8 w-8 bg-yellow-300 rounded-full"></div>
            <div className="text-sm font-medium">
              <h6>Business Name</h6>
              <span className="text-gray-400">1234567890</span>
            </div>
          </div>
          <button className="bg-gray-500   items-center justify-center p-3 rounded-r-md hidden group-hover:flex">
            <Settings size={20} />
          </button>
        </div>
        <div className=" w-full h-9  flex ">
          <button className="w-full h-full bg-[#dbd8f5] hover:bg-[#aea7f1] rounded-l-full text-black text-xs font-medium flex items-center justify-center gap-0.5">
            <Plus size={15} /> Create Sales Invoice
          </button>
          <button className="bg-gray-100 h-full rounded-r-full p-2 text-black place-content-center">
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
      <div className=" h-full flex-1 overflow-auto">
        <div className="text-xs flex items-center justify-between bg-yellow-400 p-2 text-black">
          <div>
            <Crown size={20} />
          </div>
          <span>Buy Premium Plan</span>
          <span className=" text-white bg-red-500 rounded-full px-2 py-1 text-[10px] font-semibold">
            14 Days Left
          </span>
        </div>

        <div className="px-2 py-5 space-y-3 ">
          {menus.map((menu, i) => {
            return (
              <div key={i}>
                <span className="uppercase text-xs font-semibold text-[#bbb9c2]">
                  {menu.section}
                </span>
                <ul className="space-y-2 mt-2">
                  {menu.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between bg-[#2b386a] p-2 rounded-full text-[#99a1b2]"
                    >
                      <div className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span className="capitalize text-sm">{item.name}</span>
                      </div>
                      {item.hasDropdown && (
                        <span>
                          <ChevronRight />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
          <div className="bg-[#2b386a] rounded-b-lg px-2 py-3  space-y-5">
              <button className="flex items-center gap-2 p-2 hover:bg-[#0c1526] w-full rounded-full text-sm text-[#bbb9c2]">
          <Settings size={15} />
          <span>Setting</span>
        </button>

              <div className="text-xs  text-[#5b6276] flex items-center justify-center gap-2">
                  <div className="flex items-center"><ShieldCheck size={15}/><span>100% Secure</span></div>
                  <div><span>ISO Certified</span></div>


        </div>
      </div>
    </div>
  );
};

export default Sidebar;
