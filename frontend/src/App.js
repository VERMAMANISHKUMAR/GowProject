import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import UserLogin from "./pages/UserLogin";
import AddUser from "./components/AddUser";
import UserList from "./components/User/UserList";
import RoleList from "./components/User/RoleList";
import CreateRolelist from "./components/User/CreateRolist";
import AddStore from "./components/store/AddStore";
import StoreView from "./components/store/StoreView";
import Reports from "./pages/Reports";
import ProfitLossReport from "./pages/ProfitLossReport";
import SalesPaymentReport from "./pages/SalesPaymentReport";
import CustomerOrders from "./pages/CustomerOrders";
import AddAdvance from './components/advance/addadvance';
import AdvanceList from './components/advance/advancelist'
import CustomerCoupenList from './components/coupens/CustomerCouponsList';
import CreateCustomerCoupons from './components/coupens/CreateCustomerCoupon';
import CreateCoupon from './components/coupens/CreateCoupon';
import CouponsMaster from './components/coupens/CouponsMaster'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin/add/user" element={<AddUser />} />
        <Route path="/admin/user/list" element={<UserList />} />
        <Route path="/admin/role/list" element={<RoleList />} />
        <Route path="/admin/create/list" element={<CreateRolelist />} />
        <Route path="/store/add" element={<AddStore />} />
        <Route path="/store/view" element={<StoreView />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/profit-loss" element={<ProfitLossReport />} />
        <Route path="/reports/sales-payment" element={<SalesPaymentReport />} />
        <Route path="/reports/customer-orders" element={<CustomerOrders />} />
        <Route path="/add-advance" element={<AddAdvance/>} />
        <Route path="/advance-list" element={<AdvanceList/>}/>
        <Route path="/customer-coupen-list" element={<CustomerCoupenList/>}/>
        <Route path='/create' element={<CreateCustomerCoupons/>}/>
        <Route path='/create-coupon' element={<CreateCoupon/>}/>
        <Route path='/coupon-master' element={<CouponsMaster/>}/>
      </Routes>
    </Router>
  );
}

export default App;
