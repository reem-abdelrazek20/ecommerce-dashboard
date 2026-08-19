import "../styles/sidedar.css";

import { IoHomeOutline } from "react-icons/io5";
import { CiViewList, CiSettings } from "react-icons/ci";
import { FiShoppingCart, FiUsers, FiStar, FiLogOut } from "react-icons/fi";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Shopify</h2>

      <nav className="sidebar-nav">
        <a href="#" className="active">
          <IoHomeOutline />
          <span>Dashboard</span>
        </a>

        <a href="#">
          <CiViewList />
          <span>Products</span>
        </a>

        <a href="#">
          <FiShoppingCart />
          <span>Orders</span>
        </a>

        <a href="#">
          <FiUsers />
          <span>Customers</span>
        </a>

        <a href="#">
          <FiStar />
          <span>Reviews</span>
        </a>

        <a href="#">
          <CiSettings />
          <span>Settings</span>
        </a>
      </nav>

      <button className="logout">
        <FiLogOut />
        <span>Log Out</span>
      </button>
    </aside>
  );
}

export default Sidebar;