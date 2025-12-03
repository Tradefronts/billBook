import { Calendar, MessageCircle } from "lucide-react";
import React from "react";

const Settings = () => {
  return (
    <div>
      <div className="w-full  border-b border-gray-300 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="leading-4">
            <h5>Business Settings</h5>
            <span className="text-xs text-gray-500">
              Edit your company settings and information
            </span>
          </div>
          <button className="bg-[#db631a] text-white text-xs rounded-md px-7 py-2">
            Create new business
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-xs px-5 py-2 rounded-md bg-blue-100 text-blue-500 font-semibold flex items-center gap-1">
            <MessageCircle size={15} />
            Chat Support
          </button>
          <button className="text-xs px-5 py-2 rounded-md border border-gray-300  font-semibold flex items-center gap-1">
            <Calendar size={15} />
            Close Financial Year{" "}
          </button>
                  <button className="text-xs px-16 py-2 rounded-md border border-gray-300 ">
                      Cancel
                  </button>
                  <button className="text-xs px-10 py-2 rounded-md border border-gray-300 bg-purple-100 text-white" disabled>
                      Save Changes
                  </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
