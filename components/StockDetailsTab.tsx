import { Calendar, Search, PlusCircle, Info, CloudUpload, ChevronDown } from "lucide-react";

export default function StockDetailsTab() {
  const measuringUnits = [
    "Pieces(PCS)",
    "Aaaaaaaaaaaa(G NEX)",
    "Aana(ANA)",
    "Accessories (ACS)",
    "Acre(AC)",
    "Adult(ADL)",
    "Ampoule(AMP)"
  ];

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-2 gap-6">

        <div className="space-y-1">
          <label className="text-gray-600">Item Code</label>
          <div className="flex">
            <input
              placeholder="ex: ITM12549"
              className="border rounded-l-md px-3 py-2 w-full outline-none"
            />
            <button className="px-2 whitespace-nowrap bg-blue-100 text-blue-600 rounded-r-md">
              Generate Barcode
            </button>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-gray-600">HSN code</label>
          <input
            placeholder="ex: 4010"
            className="border rounded-md px-3 py-2 w-full outline-none"
          />
          <button className="text-blue-600 text-sm mt-1">Find HSN Code</button>
        </div>

      </div>

      <div className="space-y-1">
        <label className="text-gray-600">Measuring Unit</label>

        <div className="relative w-1/2 ">
        <Search
            size={18}
            className="absolute left-2 top-2 text-gray-500 pointer-events-none"
          />
          <select className="border rounded-md px-8 py-2 w-full appearance-none outline-none ">
            {measuringUnits.map((u) => (
              <option key={u}>{u}</option>
            ))}
          </select>

          <ChevronDown className="absolute right-2 top-2 text-gray-500 pointer-events-none"/>

          
        </div>

        <button className="flex items-center gap-2 text-blue-600 mt-2">
          <PlusCircle size={18} /> Alternative Unit
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="space-y-1">
          <label className="text-gray-600">Opening Stock</label>
          <div className="flex">
            <input
              placeholder="ex: 150 PCS"
              className="border rounded-l-md px-3 py-2 w-full outline-none"
            />
            <div className="px-4 flex items-center border border-l-0 rounded-r-md text-gray-600">
              PCS
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-gray-600">As of Date</label>

          <div className="relative">
            <input
              type="text"
              value="5 Dec 2025"
              readOnly
              className="border rounded-md px-10 py-2 w-full outline-none"
            />

            <Calendar
              size={18}
              className="absolute left-3 top-2 text-gray-600"
            />

           
          </div>
        </div>

      </div>

      <button className="flex items-center gap-2 text-blue-600">
        <PlusCircle size={18} /> Enable Low stock quantity warning
        <Info size={16} className="text-gray-500" />
      </button>

      <div className="space-y-1">
        <label className="text-gray-600">Description</label>
        <textarea
          placeholder="Enter Description"
          className="border rounded-md px-3 py-2 w-full h-24 outline-none"
        />

        
      </div>
      <div className="flex justify-center items-center border-dashed border py-4 px-3 rounded-lg gap-2">
            <div className="text-gray-300"><CloudUpload size={32}/></div>

        <div className="">
            <h3>Please select or drag and drop 5 files</h3>
            <span className="text-xs whitespace-nowrap text-gray-400">Maximum of 5 images in PNG or JPEG, file size not more than 5 MB</span>
            
        </div> 
        <label className="p-3 bg-blue-100 text-blue-500 rounded-sm font-semibold whitespace-nowrap">
            Select File
            <input type="file" alt="" className="hidden"/>
            </label>   
            
    </div>
      
    </div>
  );
}
