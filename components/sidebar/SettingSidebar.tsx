"use client"
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'

const SettingSidebar = () => {
  const pathname = usePathname();
const router =useRouter()

const businessMenuItems = [
    { label: "Account", path: "/app/settings/account" },
    { label: "Manage Business", path: "/app/settings/company" },
    { label: "Invoice Settings", path: "/app/settings/invoice" },
    { label: "Print Settings", path: "/app/settings/thermal-print" },
    { label: "Manage Users", path: "/app/settings/user-management" },
    { label: "Reminders", path: "/reminders" },
    { label: "CA Reports Sharing", path: "/app/settings/ca-reports-sharing" },
    { label: "Pricing", path: "/pricing" },
    { label: "Refer & Earn", path: "/refer-earn" },
    { label: "Help And Support", path: "/app/settings/help-support" },
  ];

  return (
    <div
      className={`bg-white border-2 border-gray-300 shadow-md text-white h-full flex flex-col rounded-lg  w-60`}
    >
      <div className="space-y-2 py-2 px-3">
        <button
          onClick={() => {
            router.push("/app/settings/company");
          }}
          className="w-full flex items-center justify-between group cursor-pointer "
        >
          <div
            className={`flex items-center gap-2 group-hover:bg-gray-100 rounded-md w-full p-0.5 `}
          >
            <div className="h-8 w-8 bg-yellow-300 rounded-full"></div>
            <div className="text-sm cursor-pointer  text-start ">
              <h6
                className={`text-black`}
              >
                Business Name
              </h6>
              <span
                className={`text-black text-xs tracking-wide`}
              >
                1234567890
              </span>
            </div>
          </div>
         
        </button>
          <Link href="/app/dashboard"><button

            className="w-full cursor-pointer bg-black rounded-full py-1.5 font-medium flex items-center justify-center gap-2 text-xs "
          >
            <ArrowLeft size={15} />
            <span>Back to Dashboard</span>
          </button>
        </Link>
        
      </div>
      <div className=" h-full flex-1 overflow-auto ">
          <div className="text-black px-3 space-y-2">
            <ul className="space-y-1 border-b-2 pb-2 border-gray-300">
              {businessMenuItems.map((businessMenu) => (
                <li
                  key={businessMenu.label}
                  className={`py-2 px-3 text-sm cursor-pointer  ${pathname === businessMenu.path
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
       
      </div>

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
      
    </div>
  );
}

export default SettingSidebar
