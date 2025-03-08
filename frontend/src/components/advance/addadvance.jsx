import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiX } from "react-icons/bi";
import { BiHome, BiChevronRight } from "react-icons/bi";

const AdvanceForm = () => {
  const [isOccasionDropdownOpen, setIsOccasionDropdownOpen] = useState(false);
  const [occasionSearchTerm, setOccasionSearchTerm] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const occasionOptions = ["A", "B", "C"];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchOption, setSearchOption] = useState("");
  const [selected, setSelected] = useState(null);
  const amountOptions = ["Cash", "Card", "UPI"];

  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white shadow-lg rounded-xl">
<header className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-center mb-6">
  {/* Page Title */}
  <div className="text-xl font-bold text-gray-800">
    New Advance <span className="text-sm text-gray-500">Add/Update Brand</span>
  </div>

  {/* Navigation Links */}
  <nav className="flex flex-wrap items-center text-gray-600 text-sm mt-2 md:mt-0">
    <a href="#" className="flex items-center text-blue-500 hover:underline">
      <BiHome className="mr-1" /> Home
    </a>
    <BiChevronRight className="mx-2 text-gray-400 mt-1" />

    <a href="#" className="hover:text-blue-500 hover:underline">Customers List</a>
    <BiChevronRight className="mx-2 text-gray-400 mt-1" />

    <a href="#" className="hover:text-blue-500 hover:underline">Advance Payments List</a>
    <BiChevronRight className="mx-2 text-gray-400 mt-1" />

    <a href="#" className="hover:text-blue-500 hover:underline font-semibold">New Advance</a>
  </nav>
</header>


      <div className="border p-6 rounded-lg bg-gray-100">
        <p className="mb-4 text-gray-700 font-medium">Please Enter Valid Data</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium">Date <span className="text-red-500">*</span></label>
            <input type="date" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Customer Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="border px-4 py-2 rounded-md flex justify-between items-center cursor-pointer bg-white" onClick={() => setIsOccasionDropdownOpen(!isOccasionDropdownOpen)}>
                <span>{selectedOccasion || "Walk-in customer"}</span>
                {selectedOccasion ? <BiX onClick={() => setSelectedOccasion(null)} className="text-gray-600 cursor-pointer" /> : (isOccasionDropdownOpen ? <BiChevronUp /> : <BiChevronDown />)}
              </div>
              {isOccasionDropdownOpen && (
                <div className="absolute z-10 w-full bg-white shadow-md mt-1 rounded-md border">
                  <input type="text" className="w-full p-2 border-b focus:outline-none" placeholder="Search..." value={occasionSearchTerm} onChange={(e) => setOccasionSearchTerm(e.target.value)} />
                  <ul className="max-h-40 overflow-y-auto">
                    {occasionOptions.filter(option => option.toLowerCase().includes(occasionSearchTerm.toLowerCase())).map((option, index) => (
                      <li key={index} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => setSelectedOccasion(option)}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Amount <span className="text-red-500">*</span></label>
            <input type="number" placeholder="Enter amount" required className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none" />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Payment Type <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="border px-4 py-2 rounded-md flex justify-between items-center cursor-pointer bg-white" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{selected || "-Select-"}</span>
                {selected ? <BiX onClick={() => setSelected(null)} className="text-gray-600 cursor-pointer" /> : (isDropdownOpen ? <BiChevronUp /> : <BiChevronDown />)}
              </div>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full bg-white shadow-md mt-1 rounded-md border">
                  <input type="text" className="w-full p-2 border-b focus:outline-none" placeholder="Search..." value={searchOption} onChange={(e) => setSearchOption(e.target.value)} />
                  <ul className="max-h-40 overflow-y-auto">
                    {amountOptions.filter(option => option.toLowerCase().includes(searchOption.toLowerCase())).map((option, index) => (
                      <li key={index} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => setSelected(option)}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Note</label>
            <textarea placeholder="Enter description" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"></textarea>
          </div>

          <div className="flex gap-10 mt-3">
            <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 transition">Save</button>
            <button type="button" className="px-6 py-2 bg-yellow-300 text-gray-700 rounded-md hover:bg-gray-400 transition">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvanceForm;
