import React, { useState } from "react";
import { BiHome, BiChevronRight } from "react-icons/bi";

const MoneyTransferList = () => {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const transfers = [];

  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
  <h2 className="text-lg md:text-xl font-bold">Advance Payments List</h2>
  
  <nav className="text-gray-600 text-sm flex flex-wrap mt-2 md:mt-0">
    <a href="#" className="flex items-center text-blue-500 hover:underline">
      <BiHome className="mr-1" /> Home
    </a>
    <BiChevronRight className="mx-2 text-gray-400 mt-1.5" />

    <a href="#" className="hover:text-blue-500 hover:underline">Customers List</a>
    <BiChevronRight className="mx-2 text-gray-400 mt-1.5" />

    <a href="#" className="hover:text-blue-500 hover:underline">Import Customers</a>
    <BiChevronRight className="mx-2 text-gray-400 mt-1.5" />

    <a href="#" className="hover:text-blue-500 hover:underline font-semibold">Advance Payments List</a>
  </nav>
</header>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-lg font-semibold">Discount Coupons</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 md:mt-0">
            + Create Coupon
          </button>
        </div>

        {/* Table Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <label>Show</label>
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
            <label>Entries</label>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
              Copy
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
              Excel
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
              PDF
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
              Print
            </button>
            <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
              CSV
            </button>
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-2 py-1 w-full md:w-auto"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Money Transfer Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border rounded-md">
            <thead className="bg-gray-200 text-sm md:text-base">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Date</th>
                <th className="border px-4 py-2">Customer Name</th>
                <th className="border px-4 py-2">Amount</th>
                <th className="border px-4 py-2">Payment Type</th>
                <th className="border px-4 py-2">Created by</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {transfers.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="text-center py-4 text-gray-500 text-sm md:text-base"
                  >
                    No data available in table
                  </td>
                </tr>
              ) : (
                transfers.map((transfer) => (
                  <tr key={transfer.id} className="border-t">
                    <td className="border px-4 py-2">{transfer.transferCode}</td>
                    <td className="border px-4 py-2">{transfer.transferDate}</td>
                    <td className="border px-4 py-2">{transfer.referenceNo}</td>
                    <td className="border px-4 py-2">{transfer.amount}</td>
                    <td className="border px-4 py-2">{transfer.paymentType}</td>
                    <td className="border px-4 py-2">{transfer.createdBy}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
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
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-2">
          <span className="text-sm md:text-base">Showing 0 to 0 of 0 entries</span>
          <div className="flex gap-2">
            <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">
              Previous
            </button>
            <button className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferList;
