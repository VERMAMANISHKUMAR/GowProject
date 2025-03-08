import React, { useState } from "react";
import { BiHome } from "react-icons/bi";

const Coupon = () => {
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
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Top Header */}
      <header className="bg-white p-4 rounded  flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-xl font-bold">
          Discount Coupon <span className="text-sm text-gray-500">Add/Update Coupon</span>
        </h1>
        <div className="flex items-center space-x-2 text-blue-600">
          <a href="/" className="flex items-center no-underline hover:text-blue-800">
            <BiHome className="mr-1" /> Home
          </a>
          <span className="text-gray-400">{">"}</span>
          <a href="/brands" className="no-underline hover:text-blue-800">
            Discount Coupons
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        {/* Left side - Form */}
        <div className="mb-6 border-b pb-4">
          <p className="text-gray-600 font-medium">Please Enter Valid Data</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Occasion Name */}
          <div className="flex flex-col">
            <label className="font-medium">Occasion Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter occasion name" className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"/>
          </div>

          {/* Expire Date */}
          <div className="flex flex-col">
            <label className="font-medium">Expire Date <span className="text-red-500">*</span></label>
            <input type="date" className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"/>
          </div>

          {/* Coupon Value */}
          <div className="flex flex-col">
            <label className="font-medium">Coupon Value <span className="text-red-500">*</span></label>
            <input type="number" placeholder="Enter coupon value" className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"/>
          </div>

          {/* Coupon Type */}
          <div className="flex flex-col">
            <label className="font-medium">Coupon Type <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Enter coupon type" className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400"/>
          </div>

          {/* Description */}
          <div className="col-span-1 sm:col-span-2 flex flex-col">
            <label className="font-medium">Description</label>
            <textarea placeholder="Enter description" className="border rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-blue-400"></textarea>
          </div>

          {/* Form Actions */}
          <div className="col-span-1 sm:col-span-2 flex justify-end space-x-4 mt-4">
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 transition">
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <button type="button" className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-gray-600 transition">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Coupon;
