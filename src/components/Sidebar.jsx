import "../styles/sidedar.css";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CiViewList, CiSettings } from "react-icons/ci";
import { FiShoppingCart, FiUsers, FiStar, FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Shopify</h2>

      <nav className="sidebar-nav">
        <NavLink to="/" 
          className={({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link"
  }>
          <IoHomeOutline />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/products"
          className={({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link"
  }>
          <CiViewList />
          <span>Products</span>
        </NavLink>

        <NavLink
        to="/orders"
          className={({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link"
  }>
          <FiShoppingCart />
          <span>Orders</span>
        </NavLink>

        <NavLink  to="/customers"
         className={({ isActive }) =>
    isActive ? "sidebar-link active" : "sidebar-link"
  }>
          <FiUsers />
          <span>Customers</span>
        </NavLink>

        <NavLink>
          <FiStar />
          <span>Reviews</span>
        </NavLink>

        <NavLink >
          <CiSettings />
          <span>Settings</span>
        </NavLink>
      </nav>

      <button className="logout">
        <FiLogOut />
        <span>Log Out</span>
      </button>
    </aside>
  );
}

export default Sidebar;