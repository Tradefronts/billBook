import Link from "next/link";
import React from "react";

const AutomatedBilling = () => {
 
    const billingFeatures = [
        {
            title: "Creating repeated bills?",
            description: "Automate sending of repeat bills based on a schedule of your choice",
            image: "/images/repeat-bills.png",
        },
        {
            title: "Automated Billing",
            description: "Send SMS reminders to customers daily/weekly/monthly",
            image: "/images/automated-billing.png",
        },
        {
            title: "Easy Reminders & Payment",
            description: "Automatically receive notifications and collect payments",
            image: "/images/easy-reminders.png",
        },
    ];


  return (
    <div className="h-full w-full">
      <div className="w-full border border-gray-300 py-3 px-5">
        <h5>Automated Bills</h5>
      </div>
      <div className="w-6xl mx-auto mt-5">
        <div className="w-full grid grid-cols-3 gap-12">
                  {billingFeatures.map((feature, index) => {
            return (
              <div key={index} className=" border border-gray-300 rounded-sm">
                <div className="h-64 w-full flex items-center justify-center">
                  <div className="h-24 w-24 bg-gray-400"></div>
                </div>
                <div className="w-full border-t border-gray-300 text-center p-4 text-sm text-gray-700">
                  <span className="block text-base">{feature.title}</span>
                        <span className="text-sm text-slate-500">{feature.description}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-5 gap-3">
          <p className="text-sm text-gray-500">
            Schedule your repeated bills hassle-free
          </p>
          <Link href="/create-automated-bill"><button className="rounded-xs block text-white bg-[#4c3cce] text-xs font-semibold py-2 px-6">
            Create Automated Bill
                  </button></Link>
        </div>
      </div>
    </div>
  );
};

export default AutomatedBilling;
