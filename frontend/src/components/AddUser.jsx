// import { useState } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";

// const AddUser = () => {
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("hisargow");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [warehousesGroup, setWarehousesGroup] = useState("System Warehouse");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Get the user ID and token from session storage

//     // Construct the request payload
//     const userData = {
//       userFname: username,
//       userfirstName: firstName,
//       userlastName: lastName,
//       usermobile: mobile,
//       useremail: email,
//       userRole: role,
//       userpassword: password,
//       userconfirmPassword: confirmPassword,
//       userwarehouse: warehousesGroup,
//     };

//     try {
//       // Make the POST request
//       const response = await axios.post(
//         "http://localhost:5000/admiaddinguser/adduserbyadmin",
//         userData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       alert("User created successfully!");
//       console.log("API Response:", response.data);
//       setUsername("");
//       setFirstName("");
//       setLastName("");
//       setMobile("");
//       setEmail("");
//       setRole("hisargow");
//       setPassword("");
//       setConfirmPassword("");
//       setWarehousesGroup("System Warehouse");
//     } catch (err) {
//       console.error("Error creating user:", err);
//       alert("Failed to create user.");
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Navbar />
//       <div className="flex flex-grow">
//         <Sidebar />

//         <div className="w-full p-20">
//           <h1 className="text-2xl font-bold mb-6 text-start">Create User</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="flex gap-20">
//               <div className="flex gap-32 w-full">
//                 {/* Left Column */}
//                 <div className="space-y-4 w-full">
//                   <div>
//                     <label
//                       htmlFor="username"
//                       className="block font-medium mb-2"
//                     >
//                       Username*
//                     </label>
//                     <input
//                       id="username"
//                       type="text"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="firstName"
//                       className="block font-medium mb-2"
//                     >
//                       First Name*
//                     </label>
//                     <input
//                       id="firstName"
//                       type="text"
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="lastName"
//                       className="block font-medium mb-2"
//                     >
//                       Last Name*
//                     </label>
//                     <input
//                       id="lastName"
//                       type="text"
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="mobile" className="block font-medium mb-2">
//                       Mobile
//                     </label>
//                     <input
//                       id="mobile"
//                       type="text"
//                       value={mobile}
//                       onChange={(e) => setMobile(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block font-medium mb-2">
//                       Email*
//                     </label>
//                     <input
//                       id="email"
//                       type="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-4 w-full">
//                   <div>
//                     <label htmlFor="role" className="block font-medium mb-2">
//                       Role*
//                     </label>
//                     <select
//                       id="role"
//                       value={role}
//                       onChange={(e) => setRole(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     >
//                       <option value="hisargow">hisargow</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block font-medium mb-2"
//                     >
//                       Password*
//                     </label>
//                     <input
//                       id="password"
//                       type="password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="confirmPassword"
//                       className="block font-medium mb-2"
//                     >
//                       Confirm Password*
//                     </label>
//                     <input
//                       id="confirmPassword"
//                       type="password"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="warehousesGroup"
//                       className="block font-medium mb-2"
//                     >
//                       Warehouses Group*
//                     </label>
//                     <input
//                       id="warehousesGroup"
//                       type="text"
//                       value={warehousesGroup}
//                       onChange={(e) => setWarehousesGroup(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="warehousesGroup"
//                       className="block font-medium mb-2"
//                     >
//                       Default warehouse*
//                     </label>
//                     <input
//                       id="warehousesGroup"
//                       type="text"
//                       value={warehousesGroup}
//                       onChange={(e) => setWarehousesGroup(e.target.value)}
//                       className="w-full border border-gray-300 rounded-md px-3 py-2"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-center gap-4 mt-10">
//               <button
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddUser;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import axios from "axios";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AddUser = () => {
  const navigate = useNavigate();

  // User form state
  const [formData, setFormData] = useState({
    userName: "",
    FirstName: "",
    LastName: "",
    Mobile: "",
    Email: "",
    Store: "",
    Role: "",
    Password: "",
    WarehouseGroup: "",
    Defaultwarehouse: "",
  });

  const [roles, setRoles] = useState([]); // Role dropdown options
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Roles when the component loads
  useEffect(() => {
    const fetchRoles = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found. Redirecting to login...");
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://192.168.1.13:5000/admincreatingrole/api/roles", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Roles API Response:", response.data);

        if (response.data && Array.isArray(response.data.roles)) {
          setRoles(response.data.roles);
        } else {
          console.error("Invalid role data received:", response.data);
          setRoles([]);
        }
      } catch (error) {
        console.error("Error fetching roles:", error.response?.data || error.message);
        if (error.response?.status === 401) {
          console.warn("Unauthorized! Clearing localStorage and redirecting...");
          localStorage.clear();
          navigate("/login");
        }
        setRoles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRoles();
  }, [navigate]);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Redirecting to login...");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.13:5000/admiaddinguser/adduserbyadmin",
        formData,
        {
          headers: { 
            "Content-Type": "application/json", 
            Authorization: `Bearer ${token}` 
          },
        }
      );

      console.log("User Created Response:", response.data);

      setMessage("User added successfully!");
      setFormData({
        userName: "",
        FirstName: "",
        LastName: "",
        Mobile: "",
        Email: "",
        Store: "",
        Role: "",
        Password: "",
        WarehouseGroup: "",
        Defaultwarehouse: "",
      });
    } catch (error) {
      console.error("Error adding user:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-grow mt-20">
        <div className="w-64">
          <Sidebar isSidebarOpen={isSidebarOpen} />
        </div>

        <div className="w-full p-20">
          {/* Success & Error Messages */}
          {message && <div className="text-green-600 font-bold">{message}</div>}
          {error && <div className="text-red-600 font-bold">{error}</div>}

          <h1 className="text-2xl font-bold mb-6 text-start">Create User</h1>

          {/* Loading Indicator for Roles */}
          {loading ? (
            <p>Loading roles...</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-10">
                {/* Left Column */}
                <div className="space-y-4">
                  <label className="block font-medium">Username*</label>
                  <input type="text" name="userName" placeholder="UserName" className="w-full border px-3 py-2" value={formData.userName} onChange={handleChange} required />

                  <label className="block font-medium">First Name*</label>
                  <input type="text" name="FirstName" className="w-full border px-3 py-2" value={formData.FirstName} onChange={handleChange} required />

                  <label className="block font-medium">Last Name*</label>
                  <input type="text" name="LastName" className="w-full border px-3 py-2" value={formData.LastName} onChange={handleChange} required />

                  <label className="block font-medium">Mobile</label>
                  <input type="text" name="Mobile" className="w-full border px-3 py-2" value={formData.Mobile} onChange={handleChange} />
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <label className="block font-medium">Email*</label>
                  <input type="email" name="Email" className="w-full border px-3 py-2" value={formData.Email} onChange={handleChange} required />

                  <label className="block font-medium">Store:</label>
                  <select name="Store" className="w-full border px-3 py-2" value={formData.Store} onChange={handleChange} required>
                    <option value="">Select Store</option>
                    <option value="SAAS ADMIN">SAAS ADMIN</option>
                    <option value="POS">POS</option>
                    <option value="Keshav demo 1">Keshav demo 1</option>
                    <option value="Keshav demo 2">Keshav demo 2</option>
                    <option value="grocery on wheels">Grocery on Wheels</option>
                  </select>

                  <label className="block font-medium">Role:</label>
                  <select name="Role" className="w-full border px-3 py-2" value={formData.Role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    {roles.map((role) => (
                      <option key={role._id} value={role.roleName}>
                        {role.roleName}
                      </option>
                    ))}
                  </select>

                  <label className="block font-medium">Password*</label>
                  <input type="password" name="Password" className="w-full border px-3 py-2" value={formData.Password} onChange={handleChange} required />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-6 rounded-md">Save</button>
                <button type="button" className="bg-orange-500 text-white font-bold py-2 px-6 rounded-md" onClick={() => window.location.reload()}>Close</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddUser;

