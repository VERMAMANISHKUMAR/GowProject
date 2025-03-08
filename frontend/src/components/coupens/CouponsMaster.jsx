import React, { useState } from 'react';

const MoneyTransferList = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const transfers = [];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-white p-4 rounded  flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Discount Coupons</h2>
        <p className="text-sm text-gray-600">Home <span className="text-gray-400">{">"}</span> Discount Coupons</p>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Discount Coupons</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">+ Create Coupon</button>
        </div>

        {/* Table Controls */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          {/* Entries Per Page */}
          <div className="flex items-center gap-2">
            <label>Show</label>
            <select className="border p-2 rounded" value={entriesPerPage} onChange={(e) => setEntriesPerPage(parseInt(e.target.value))}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <label>Entries</label>
          </div>

          {/* Search and Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button className="border p-2 rounded">Copy</button>
            <button className="border p-2 rounded">Excel</button>
            <button className="border p-2 rounded">PDF</button>
            <button className="border p-2 rounded">Print</button>
            <button className="border p-2 rounded">CSV</button>
            <input 
              type="text" 
              placeholder="Search:" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="border p-2 rounded w-full md:w-auto"
            />
          </div>
        </div>
      </div>

      {/* Money Transfer Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Occasion Name</th>
              <th className="border p-2">Expire Date</th>
              <th className="border p-2">Value</th>
              <th className="border p-2">Coupon Type</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {transfers.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">No data available in table</td>
              </tr>
            ) : (
              transfers.map((transfer) => (
                <tr key={transfer.id} className="border">
                  <td className="p-2">{transfer.transferCode}</td>
                  <td className="p-2">{transfer.transferDate}</td>
                  <td className="p-2">{transfer.referenceNo}</td>
                  <td className="p-2">{transfer.debitAccount}</td>
                  <td className="p-2">{transfer.amount}</td>
                  <td className="p-2">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded">Action</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4">
        <div className="text-sm text-gray-600">Showing 0 to 0 of 0 entries</div>
        <div className="flex gap-2">
          <button className="border p-2 rounded">Previous</button>
          <button className="border p-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferList;
