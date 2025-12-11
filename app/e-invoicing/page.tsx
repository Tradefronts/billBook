import React from "react";

const EInvoicing = () => {
  const invoices = [
    { name: "Automatic e-invoice generation" },
    { name: "Hassle e-way bill generation using IRN" },
    { name: "Easy GSTR1 reconciliation" },
  ];

  return (
    <div className="h-full w-full">
      <div className="w-full border border-gray-300 py-3 px-5 flex items-center justify-between">
        <h5>e-Invoicing</h5>
        <button className="bg-blue-50 text-blue-500 text-xs font-medium px-3 py-2 rounded-sm ">
          Chat Support
        </button>
      </div>
      <div className="w-4/5 mx-auto mt-5">
        <div className="w-full grid grid-cols-3 gap-5">
          {invoices.map((invoice, index) => {
            const parts = invoice.name.split("IRN");
            return (
              <div key={index} className=" border border-gray-300 rounded-sm">
                <div className="h-64 w-full flex items-center justify-center">
                  <div className="h-24 w-24 bg-gray-400"></div>
                </div>

                <div className="w-full border-t border-gray-300 text-center font-medium text-sm text-gray-700">
                  <span className="block pt-2 pb-5">
                    {parts.length > 1 ? (
                      <>
                        {parts[0]}
                        <br />
                        IRN
                      </>
                    ) : (
                      invoice.name
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-8 gap-5">
          <p className="text-2xl text-slate-800">
            Try India's easiest and fastest e-invoicing solution today
          </p>
          <button className="rounded-sm block text-white bg-[#4c3cce] text-xs font-semibold py-2 px-6">
            Start Generating e-Invoices
          </button>
        </div>
      </div>
    </div>
  );
};

export default EInvoicing;
