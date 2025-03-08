import React, { useState } from "react";
import { BiChevronDown, BiChevronUp, BiX, BiHome, BiRefresh } from "react-icons/bi";
import { Link } from "react-router-dom";

const CouponForm = () => {
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);
  const [customerSearchTerm, setCustomerSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const customerOptions = ["Walk-in customer", "Cash", "Cash Paid"];

  const [isOccasionDropdownOpen, setIsOccasionDropdownOpen] = useState(false);
  const [occasionSearchTerm, setOccasionSearchTerm] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const occasionOptions = ["A", "B", "C"];

  const [couponCode, setCouponCode] = useState("");

  const generateCouponCode = () => {
    const code = "COUPON" + Math.random().toString(36).substr(2, 8).toUpperCase();
    setCouponCode(code);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
  <header className="bg-white p-4 rounded  flex flex-col md:flex-row justify-between items-center mb-6">
  <h1 className="text-xl font-bold">Add/Update Brand</h1>
  <div className="flex items-center space-x-2 text-blue-600">
    <Link to="/" className="flex items-center no-underline hover:text-blue-800">
      <BiHome className="mr-1" /> Home
    </Link>
    <span className="text-gray-400">{">"}</span>
    <Link to="/brands" className="no-underline hover:text-blue-800">
      Brands List
    </Link>
  </div>
</header>


      <form className="space-y-4">
        <div>
          <label className="block font-semibold">Customer Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <div className="border p-2 flex justify-between items-center rounded cursor-pointer" onClick={() => setIsCustomerDropdownOpen(!isCustomerDropdownOpen)}>
              <span>{selectedCustomer || "Walk-in customer"}</span>
              {selectedCustomer ? (
                <BiX className="text-red-500" onClick={() => setSelectedCustomer(null)} />
              ) : isCustomerDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
            </div>
            {isCustomerDropdownOpen && !selectedCustomer && (
              <div className="absolute w-full bg-white border rounded mt-1 shadow-lg">
                <input type="text" className="w-full p-2 border-b" placeholder="Search..." onChange={(e) => setCustomerSearchTerm(e.target.value)} />
                <ul className="max-h-40 overflow-auto">
                  {customerOptions.filter(option => option.toLowerCase().includes(customerSearchTerm.toLowerCase())).map((option, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedCustomer(option)}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block font-semibold">Occasion Name <span className="text-red-500">*</span></label>
          <div className="relative">
            <div className="border p-2 flex justify-between items-center rounded cursor-pointer" onClick={() => setIsOccasionDropdownOpen(!isOccasionDropdownOpen)}>
              <span>{selectedOccasion || "No Record Found"}</span>
              {selectedOccasion ? (
                <BiX className="text-red-500" onClick={() => setSelectedOccasion(null)} />
              ) : isOccasionDropdownOpen ? <BiChevronUp /> : <BiChevronDown />}
            </div>
            {isOccasionDropdownOpen && !selectedOccasion && (
              <div className="absolute w-full bg-white border rounded mt-1 shadow-lg">
                <input type="text" className="w-full p-2 border-b" placeholder="Search..." onChange={(e) => setOccasionSearchTerm(e.target.value)} />
                <ul className="max-h-40 overflow-auto">
                  {occasionOptions.filter(option => option.toLowerCase().includes(occasionSearchTerm.toLowerCase())).map((option, index) => (
                    <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedOccasion(option)}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block font-semibold">Coupon Code <span className="text-red-500">*</span></label>
          <div className="flex items-center border p-2 rounded">
            <input type="text" className="flex-1 outline-none" placeholder="Enter coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
            <BiRefresh className="cursor-pointer text-blue-600" onClick={generateCouponCode} />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Expire Date</label>
          <input type="date" className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block font-semibold">Coupon Value</label>
          <input type="number" className="w-full border p-2 rounded" placeholder="Enter coupon value" />
        </div>

        <div>
          <label className="block font-semibold">Coupon Type</label>
          <input type="text" className="w-full border p-2 rounded" placeholder="Enter coupon type" />
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea className="w-full border p-2 rounded" placeholder="Enter description"></textarea>
        </div>

        <div className="flex space-x-4">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-blue-700">Save</button>
          <button type="button" className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-gray-500">Close</button>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
