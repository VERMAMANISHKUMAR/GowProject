import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const MoneyTransferList = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const transfers = []; // Dummy data

  return (
    <div className="p-4 bg-white -100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-4 rounded  flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-lg font-bold">Customer Coupons List</h2>
        <p className="text-gray-500 text-sm">Home &gt; Customer Coupons List</p>
      </div>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded mb-4 flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-md font-semibold">Customer Coupons List</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600">
          <FaPlus /> Create Coupon
        </button>
      </div>

      {/* Table Controls Section */}
      <div className="bg-white p-4 rounded mb-4 flex flex-col md:flex-row justify-between items-center">
        {/* Entries Per Page */}
        <div className="flex items-center gap-2">
          <label className="text-sm">Show</label>
          <select
            className="border rounded px-2 py-1"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <label className="text-sm">Entries</label>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-1 mt-2 md:mt-0">
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Copy</button>
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Excel</button>
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">PDF</button>
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Print</button>
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">CSV</button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>
      </div>

      {/* Money Transfer Table */}
      <div className="bg-white p-4 rounded  overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Occasion Name</th>
              <th className="border p-2">Coupon Code</th>
              <th className="border p-2">Expire Date</th>
              <th className="border p-2">Value</th>
              <th className="border p-2">Coupon Type</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transfers.length === 0 ? (
              <tr>
                <td colSpan="9" className="border p-4 text-center text-gray-500">
                  No data available in table
                </td>
              </tr>
            ) : (
              transfers.map((transfer, index) => (
                <tr key={index}>
                  <td className="border p-2">{transfer.transferCode}</td>
                  <td className="border p-2">{transfer.transferDate}</td>
                  <td className="border p-2">{transfer.referenceNo}</td>
                  <td className="border p-2">{transfer.debitAccount}</td>
                  <td className="border p-2">{transfer.creditAccount}</td>
                  <td className="border p-2">{transfer.amount}</td>
                  <td className="border p-2">{transfer.createdBy}</td>
                  <td className="border p-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Action
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="text-sm text-gray-500">Showing 0 to 0 of 0 entries</div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Previous</button>
          <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferList;
