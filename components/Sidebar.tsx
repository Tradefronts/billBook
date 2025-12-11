"use client";

import {
  ArrowLeft,
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
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import React, { useState } from "react";

const Sidebar = () => {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isBusinessMenuOpen, setIsBusinessMenuOpen] = useState(false);

  const router = useRouter();
  const toggleMenu = (name) => {
    setOpenMenu(name);
  };
  const pathname = usePathname();

  const menus = [
    {
      section: "general",
      items: [
        {
          name: "dashboard",
          icon: <LayoutTemplate size={18} />,
          hasDropdown: false,
          path: "/",
        },
        {
          name: "parties",
          icon: <Users size={18} />,
          hasDropdown: false,
          path: "/parties",
        },
        {
          name: "items",
          icon: <Package size={18} />,
          hasDropdown: true,
          path: "/items",
          subMenus: [
            { name: "Inventory", path: "/items" },
            { name: "Godown (Warehouse)", path: "/items-godown" },
          ],
        },
        {
          name: "sales",
          icon: <Tag size={18} />,
          hasDropdown: true,
          path: "/sales-invoice",
          subMenus: [
            { name: "Sales Invoices", path: "/sales-invoice" },
            { name: "Quotation / Estimate", path: "/quotation" },
            { name: "Payment In", path: "/payment-in" },
            { name: "Sales Return", path: "/sales-return" },
            { name: "Credit Note", path: "/credit-note" },
            { name: "Delivery Challan", path: "/delivery-challan" },
            { name: "Proforma Invoice", path: "/proforma" },
          ],
        },
        {
          name: "purchases",
          icon: <ShoppingBag size={18} />,
          hasDropdown: true,
          path: "/purchase-invoice",
          subMenus: [
            { name: "Purchase Invoices", path: "/purchase-invoice" },
            { name: "Payment Out", path: "/payment-out" },
            { name: "Purchase Return", path: "/purchase-return" },
            { name: "Debit Note", path: "/debit-note" },
            { name: "Purchase Orders", path: "/purchase-orders" },
          ],
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
          path: "/cash-bank",
        },
        {
          name: "E-invoicing",
          icon: <Users size={18} />,
          isRightArrowShow: false,
          path: "/e-invoicing",
        },
        {
          name: "automated bills",
          icon: <Package size={18} />,
          isRightArrowShow: true,
          path: "/automated-billing",
        },
        {
          name: "expenses",
          icon: <Tag size={18} />,
          isRightArrowShow: true,
          path: "/expenses",
        },
        {
          name: "POS billing",
          icon: <ShoppingBag size={18} />,
          isRightArrowShow: true,
          path: "/pos",
        },
      ],
    },
    {
      section: "Business Tools",
      items: [
        { name: "staff attendance & payroll", icon: <Users size={18} /> },
        {
          name: "manage users",
          icon: <Package size={18} />,
          path: "/user-management",
        },
        {
          name: "online orders",
          icon: <Tag size={18} />,
          path: "/online-orders",
        },
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

  const createMenus = [
    {
      section: "general",
      items: [
        {
          name: "Create Party",
          icon: <LayoutTemplate size={18} />,
        },
        { name: "Create Item", icon: <Users size={18} /> },
      ],
    },
    {
      section: "Sales Transactions",
      items: [
        {
          name: "Quotation",
          icon: <LayoutTemplate size={18} />,
        },
        {
          name: "Payment In",
          icon: <Users size={18} />,
        },
        {
          name: "Sales Return",
          icon: <Package size={18} />,
        },
        {
          name: "Credit Note",
          icon: <Tag size={18} />,
          isRightArrowShow: true,
        },
        {
          name: "Delivery Challan",
          icon: <ShoppingBag size={18} />,
        },
        {
          name: "Proforma Invoice",
          icon: <ShoppingBag size={18} />,
        },
      ],
    },
    {
      section: "Purchase Transactions",
      items: [
        { name: "Purchase", icon: <Users size={18} /> },
        { name: "Payment Out", icon: <Package size={18} /> },
        { name: "Purchase Return", icon: <Tag size={18} /> },
        {
          name: "Debit Note",
          icon: <ShoppingBag size={18} />,
        },
        {
          name: "Purchase Orders",
          icon: <FileChartColumn size={18} />,
        },
      ],
    },
  ];

  const businessMenuItems = [
    { label: "Account", path: "/account" },
    { label: "Manage Business", path: "/settings" },
    { label: "Invoice Settings", path: "/invoice-settings" },
    { label: "Print Settings", path: "/print-settings" },
    { label: "Manage Users", path: "/user-management" },
    { label: "Reminders", path: "/reminders" },
    { label: "CA Reports Sharing", path: "/ca-reports-sharing" },
    { label: "Pricing", path: "/pricing" },
    { label: "Refer & Earn", path: "/refer-earn" },
    { label: "Help And Support", path: "/help-support" },
  ];

  return (
    <div
      className={`${
        isBusinessMenuOpen ? "bg-white border shadow-md" : "bg-[#0c1526]"
      } text-white h-full flex flex-col rounded-lg  w-60`}
    >
      <div className="space-y-2 py-2 px-3">
        <button
          onClick={() => {
            router.push("/settings");
            setIsBusinessMenuOpen(true);
          }}
          className="w-full flex items-center justify-between group cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 ${
              isBusinessMenuOpen
                ? "group-hover:bg-gray-100 rounded-md"
                : "group-hover:bg-gray-600 rounded-l-md"
            } w-full p-0.5 `}
          >
            <div className="h-8 w-8 bg-yellow-300 rounded-full"></div>
            <div className="text-sm cursor-pointer  text-start ">
              <h6
                className={`${
                  isBusinessMenuOpen ? "text-black" : "text-white"
                }`}
              >
                Business Name
              </h6>
              <span
                className={`${
                  isBusinessMenuOpen ? "text-black" : "text-gray-400"
                } text-xs tracking-wide`}
              >
                1234567890
              </span>
            </div>
          </div>
          {!isBusinessMenuOpen && (
            <div className="bg-gray-500 cursor-pointer  items-center justify-center p-3 rounded-r-md hidden group-hover:flex">
              <Settings size={20} />
            </div>
          )}
        </button>
        {isBusinessMenuOpen ? (
          <button
            onClick={() => setIsBusinessMenuOpen(false)}
            className="w-full cursor-pointer bg-black rounded-full py-1.5 font-medium flex items-center justify-center gap-2 text-xs "
          >
            <ArrowLeft size={15} />
            <span>Back to Dashboard</span>
          </button>
        ) : (
          <div className="w-full  relative">
            <div className=" w-full flex group relative">
              <Link href="/create-sales-invoice" className=" flex w-full group">
                <button className="w-full h-full cursor-pointer bg-[#dbd8f5] p-2 group-hover:bg-[#aea7f1] rounded-l-full text-black text-xs font-medium flex items-center justify-center gap-0.5">
                  <Plus size={15} /> Create Sales Invoice
                </button>
              </Link>
              <button
                onClick={() => setIsCreateMenuOpen(!isCreateMenuOpen)}
                className="bg-gray-100 cursor-pointer rounded-r-full p-1.5 text-black place-content-center"
              >
                <ChevronDown size={20} />
              </button>
            </div>
            {isCreateMenuOpen && (
              <div className="absolute mt-2  z-1 rounded-lg overflow-auto h-[calc(100vh-130px)]  w-full bg-white text-neutral-500  p-2">
                {createMenus.map((menu, i) => (
                  <div key={i}>
                    <h5 className="uppercase text-[10px] py-2">
                      {menu.section}
                    </h5>
                    <ul className="border-y border-gray-200 py-2 text-[13px] space-y-4">
                      {menu.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 px-3">
                          <span>{item.icon}</span>
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex items-center gap-2 px-3 py-2 text-[13px]">
                  <span>
                    <ChevronDown size={15} />{" "}
                  </span>
                  Create Expense
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className=" h-full flex-1 overflow-auto hide-scrollbar">
        {!isBusinessMenuOpen && (
          <div className="text-xs flex items-center justify-between bg-yellow-500 px-2 py-2 text-black">
            <div>
              <Crown size={20} />
            </div>
            <span>Buy Premium Plan</span>
            <span className=" text-white bg-red-500 rounded-full px-2 py-1 text-[10px] font-semibold">
              14 Days Left
            </span>
          </div>
        )}

        {isBusinessMenuOpen ? (
          <div className="text-black px-3 space-y-2">
            <ul className="space-y-1 border-b-2 pb-2 border-gray-300">
              {businessMenuItems.map((businessMenu) => (
                <li
                  key={businessMenu.label}
                  className={`py-2 px-3 text-sm cursor-pointer  ${
                    pathname === businessMenu.path
                      ? "bg-[#6d7ec0] text-white font-medium rounded-full"
                      : "text-gray-600 hover:bg-gray-300 rounded-full"
                  }`}
                >
                  <Link href={businessMenu.path}>  {businessMenu.label}</Link>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 cursor-pointer text-start px-3 text-sm text-gray-500 hover:bg-gray-300 rounded-full">Logout</button>
          </div>
        ) : (
          <div className="px-3 py-5 space-y-3">
            {menus.map((menu, i) => (
              <div key={i}>
                <span className="uppercase text-[10px] font-semibold text-[#bbb9c2]">
                  {menu.section}
                </span>
                <ul className="space-y-2 mt-2 cursor-pointer">
                  {menu.items.map((item) => (
                    <div key={item.name}>
                      <li
                        onClick={() =>
                          item.hasDropdown && toggleMenu(item.name)
                        }
                        className={`p-2 ${
                          pathname === item.path
                            ? "bg-[#2b386a] text-white"
                            : "text-[#99a1b2]"
                        } 
                        ${
                          openMenu === item.name
                            ? "bg-[#171f2c] rounded-md hover:bg-[#171f2c] text-white"
                            : "hover:bg-[#171f2c]"
                        } rounded-full 
                         `}
                      >
                        <Link href={item.path ?? "#"}>
                          <div
                            onClick={() =>
                              item.hasDropdown ? toggleMenu(item.name) : null
                            }
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <span>{item.icon}</span>
                              <span className="capitalize text-xs font-medium">
                                {item.name}
                              </span>
                            </div>
                            {item.hasDropdown && (
                              <span>
                                {openMenu === item.name ? (
                                  <ChevronDown size={15} />
                                ) : (
                                  <ChevronRight size={15} />
                                )}
                              </span>
                            )}
                          </div>
                        </Link>
                        {openMenu === item.name && (
                          <ul className=" mt-3 space-y-2  ">
                            {item.subMenus?.map((subMenu) => (
                              <li
                                key={subMenu.name}
                                className={`px-5 text-xs cursor-pointer rounded-full py-2
                          ${
                            pathname === subMenu.path
                              ? "bg-[#26315a] text-white "
                              : "text-white hover:bg-[#0c1526] "
                          }
                        `}
                              >
                                <Link href={subMenu.path ?? "#"}>
                                  {subMenu.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {isBusinessMenuOpen ? (
        <div className=" px-5 py-4 ">
          <div>
            <span className="text-[#5b6276] text-xs">App Version:</span>1.0.1
          </div>

          <div className="text-xs border-b pb-2 text-[#5b6276] flex items-center  gap-2">
            <div className="flex items-center">
              <ShieldCheck size={15} />
              <span>100% Secure</span>
            </div>
            <div>
              <span>ISO Certified</span>
            </div>
          </div>

          <div className="flex items-center justify-center mt-2">
            <div className="border w-24 h-10"></div>
          </div>
        </div>
      ) : (
        <div className="bg-[#2b386a] rounded-b-lg p-3  space-y-5">
          <button
            onClick={() => {
              router.push("/settings");
              setIsBusinessMenuOpen(true);
            }}
            className="flex items-center cursor-pointer gap-2 p-2 hover:bg-[#0c1526] w-full rounded-full text-sm text-[#bbb9c2]"
          >
            <Settings size={15} />
            <span>Setting</span>
          </button>

          <div className="text-xs  text-[#5b6276] flex items-center justify-center gap-2">
            <div className="flex items-center">
              <ShieldCheck size={15} />
              <span>100% Secure</span>
            </div>
            <div>
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
