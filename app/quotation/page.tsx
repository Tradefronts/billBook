// app/quotation/page.tsx
import { Search, Calendar, Settings, CreditCard, ChevronDown } from "lucide-react";

const Quotation = () => {
  return (
    <div className="flex h-full w-full flex-col text-sm text-gray-800">
      <div className="  px-5 py-2">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-gray-900">
            Quotation / Estimate
          </h1>
          <button className="p-2  rounded-sm border border-gray-300">
            <Settings size={15} className=" text-gray-800" />
          </button>
        </div>
      </div>
      <div className=" p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <button className="p-2 rounded-xs border border-gray-300">
              <Search size={15} className=" text-gray-700" />
            </button>
            <div className="relative min-w-[200px]">
              <div className="flex items-center border border-gray-300 rounded-xs px-3 py-2 bg-white hover:border-gray-400 cursor-pointer">
                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-700 flex-1">
                  Last 365 Days
                </span>
                              <div
                                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"

                              >
                                  <ChevronDown size={15} />
                              </div>
              </div>
            </div>

            <div className="relative min-w-[220px]">
              <select className="appearance-none border border-gray-300 rounded-xs px-4 py-2 pr-10 text-sm text-gray-700 bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full cursor-pointer">
                <option>Show Open Quotation</option>
                <option>Show All Quotations</option>
                <option>Show Closed Quotation</option>
              </select>
              <div
                className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
               
              >
                <ChevronDown size={15}/>
              </div>
            </div>
          </div>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-xs text-sm font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap">
            Create Quotation
          </button>
        </div>
      </div>

      <div className=" rounded-lg border border-gray-200 shadow-sm overflow-hidden p-5">
        <div className="overflow-x-auto p-5">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5 cursor-pointer group">
                    Date
                    <svg
                      className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 11l5-5m0 0l5 5m-5-5v12"
                      />
                    </svg>
                  </div>
                </th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Quotation Number
                </th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Party Name
                </th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Due In
                </th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="text-left py-3 px-6 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex flex-col items-center justify-center py-32 bg-white">
          <div className="mb-4">
          </div>
          <p className="text-gray-500 text-sm">
            No Transactions Matching the current filter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
