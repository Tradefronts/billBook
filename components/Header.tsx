"use client";
import { ArrowLeft, Link2, MessageCircle, MessagesSquare, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Dropdown from "./Dropdown";

type HeaderProps = {
  title?: string;
  showBackBtn?: boolean;
  showMessagBtn?: boolean;
  showDemoBtn?: boolean;
  showSharedLedgerBtn?: boolean;
  showReports?: boolean;
  showSettingBtn?: boolean;
  isSharedLedgerClicked?: boolean;
  setIsSharedLedgerClicked?: React.Dispatch<React.SetStateAction<boolean>>;
  dropdownMenus?: [string],
  showAddReduceBtn?:boolean,
  showTransferMoneyBtn?:boolean,
  showAddNewAccount?:boolean,
  showChatBtn?:boolean,
  setAdjustBalanceOpen?: React.Dispatch<React.SetStateAction<boolean>>,
  adjustBalanceOpen?:boolean,
  transferBalanceOpen?:boolean,
  setTransferBalanceOpen?: React.Dispatch<React.SetStateAction<boolean>>

};

const Header = ({
  title,
  showBackBtn,
  showDemoBtn,
  showMessagBtn,
  showSharedLedgerBtn,
  showReports,
  showSettingBtn,
  isSharedLedgerClicked,
  setIsSharedLedgerClicked,
  dropdownMenus,
  showAddReduceBtn,
  showTransferMoneyBtn,
  showAddNewAccount,
  showChatBtn,
  setAdjustBalanceOpen,
  adjustBalanceOpen,
  setTransferBalanceOpen, transferBalanceOpen
}: HeaderProps) => {
  const router = useRouter();

  return (
    <div className="w-full py-2.5 px-5 border-b border-gray-300 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {showBackBtn && (
          <button onClick={() => router.back()}>
            <ArrowLeft />
          </button>
        )}
        <h5 className="font-medium">{title}</h5>
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        {showSharedLedgerBtn && (
          <button
            onClick={() => setIsSharedLedgerClicked(!isSharedLedgerClicked)}
            className="flex items-center gap-1 border rounded-xs px-3 font-medium py-2  border-violet-500 text-violet-500  text-xs"
          >
            <Link2 size={15} /> SharedLedger Portal
          </button>
        )}
        {showReports && (
          <Dropdown
            menus={dropdownMenus}
            name="Reports"
          />
        )}
        {showMessagBtn && (
          <MessagesSquare size={20} className="text-blue-400" />
        )}
        {showSettingBtn && (
          <button className="p-2 border rounded-xs border-gray-300">
            <Settings size={15} />
          </button>
        )}
        {showDemoBtn && (
          <button className="bg-[#e7f4fd] text-blue-500 px-5 py-2 border hover:border-blue-600 cursor-pointer rounded-xs text-xs font-medium">
            Book Demo
          </button>
        )}
        {showAddReduceBtn && <button onClick={() => setAdjustBalanceOpen(!adjustBalanceOpen)} className="cursor-pointer px-4 text-xs py-1.5 border border-gray-300 rounded-sm flex items-center gap-1">
          <span className="font-semibold">±</span>
          Add/Reduce Money
        </button>}
        {showTransferMoneyBtn && <button onClick={() => setTransferBalanceOpen(!transferBalanceOpen)}  className="cursor-pointer px-4 text-xs py-1.5 border border-gray-300 rounded-sm flex items-center gap-1">
          <span className="font-semibold">±</span>
          Transfer Money
        </button>}
        {showAddNewAccount && <button className="px-4 text-xs py-1.5 text-white bg-[#4c3cce] rounded-sm flex items-center gap-1">
          <span className="font-semibold">+</span>
          Add new acoount
        </button>}

        {showChatBtn&&<button className="bg-blue-100 flex items-center gap-1 text-blue-600 text-xs font-medium px-3 py-2 rounded-xs ">
          <MessageCircle size={15}/> Chat Support
                </button>}
      </div>
    </div>
  );
};

export default Header;
