import { useState, useEffect } from "react";
import { FaUsers, FaStore, FaCog, FaAngleDown, FaAngleUp, FaRegComment, FaHome , FaTags, FaDollarSign} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  const navigate = useNavigate();
  const [dropdowns, setDropdowns] = useState({
    user: false,
    store: false,
    message: false,
    reports: false,
    advance: false,
    coupon:false
  });

  const toggleDropdown = (section) => {
    setDropdowns((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const userRole = (localStorage.getItem("role") || "guest").toLowerCase();
  const isAdmin = userRole === "admin";
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const storedPermissions = localStorage.getItem("permissions");
    setPermissions(storedPermissions ? JSON.parse(storedPermissions) : []);
  }, []);

  const hasPermissionFor = (module, action) => {
    if (isAdmin) return true;
    return permissions.some(
      (perm) => perm.module.toLowerCase() === module.toLowerCase() && perm.actions.includes(action)
    );
  };

  const reportsList = [
    { name: "Profit & Loss Report", path: "/reports/profit-loss" },
    { name: "Sales & Payment Report", path: "/reports/sales-payment" },
    { name: "Customer Orders", path: "/reports/customer-orders" },
    { name: "GSTR-1 Report", path: "/reports/gstr-1" },
  ];

  return (
    <div className={`bg-gray-900 text-white h-screen w-64 transition-all ${isSidebarOpen ? "block" : "hidden"} fixed top-16 left-0 overflow-y-auto`}>
      <div className="p-4 flex items-center space-x-2 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/dashboard")}>
        <FaHome />
        <span>Dashboard</span>
      </div>

      <ul className="space-y-4">
        {/* Users */}
        {(isAdmin || hasPermissionFor("users", "view")) && (
          <li>
            <div className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown("user")}>
              <div className="flex items-center space-x-2">
                <FaUsers />
                <span>Users</span>
              </div>
              {dropdowns.user ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdowns.user && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg">
                <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/admin/user/list")}>Users List</li>
                <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/admin/role/list")}>Roles List</li>
              </ul>
            )}
          </li>
        )}

        {/* Stores */}
        {(isAdmin || hasPermissionFor("stores", "view")) && (
          <li>
            <div className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown("store")}>
              <div className="flex items-center space-x-2">
                <FaStore />
                <span>Stores</span>
              </div>
              {dropdowns.store ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdowns.store && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg">
                {hasPermissionFor("stores", "add") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/store/add")}>Add Store</li>}
                {hasPermissionFor("stores", "view") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/store/view")}>Store List</li>}
              </ul>
            )}
          </li>
        )}

        {/* Advance Section */}
        {(isAdmin || hasPermissionFor("add-advance", "view")) && (
          <li>
            <div className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown("advance")}>
              <div className="flex items-center space-x-2">
                <FaDollarSign />
                <span>Advance</span>
              </div>
              {dropdowns.advance ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdowns.advance && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg">
                {hasPermissionFor("advance", "manage") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/add-advance")}>Add Advance</li>}
                {hasPermissionFor("advance", "logs") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/advance-list")}>Advance List</li>}
              </ul>
            )}
          </li>
        )}
 {/* -----------------------Coupon section--------------------------------- */}
 {(isAdmin || hasPermissionFor("coupon", "view")) && (
          <li>
            <div className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown("coupon")}>
              <div className="flex items-center space-x-2">
                <FaTags/>
                <span>Coupon</span>
              </div>
              {dropdowns.coupon ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdowns.coupon && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg">
                {hasPermissionFor("advance", "manage") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/create")}>Create Customer Coupon</li>}
                {hasPermissionFor("advance", "logs") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/customer-coupen-list")}>Customer Coupon List</li>}
                {hasPermissionFor("advance", "logs") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/create-coupon")}>Create Coupon</li>}
                {hasPermissionFor("advance", "logs") && <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/coupon-master")}>Coupons Master</li>}
              </ul>
            )}
          </li>
        )}
        {/* Reports */}
        {(isAdmin || hasPermissionFor("report", "view")) && (
          <li>
            <div className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown("reports")}>
              <div className="flex items-center space-x-2">
                <FaRegComment />
                <span>Reports</span>
              </div>
              {dropdowns.reports ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdowns.reports && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg">
                {reportsList.map((report, index) => (
                  <li key={index} className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate(report.path)}>
                    {report.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        )}

        {/* Messages */}
        {(isAdmin || hasPermissionFor("sendMessages", "view")) && (
          <li>
            <div className="p-4 flex justify-between items-center hover:bg-gray-700 cursor-pointer" onClick={() => toggleDropdown("message")}>
              <span>Messages</span>
              {dropdowns.message ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {dropdowns.message && (
              <ul className="ml-6 space-y-2 bg-gray-800 rounded-lg">
                <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/dashboard/user/message")}>Send Message</li>
                <li className="p-3 cursor-pointer hover:bg-gray-700" onClick={() => navigate("/dashboard/user/message-template")}>Messaging Templates</li>
              </ul>
            )}
          </li>
        )}

        {/* Settings */}
        <li className="p-4 hover:bg-gray-700 cursor-pointer" onClick={() => navigate("/settings")}>
          <div className="flex items-center space-x-2">
            <FaCog />
            <span>Settings</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
