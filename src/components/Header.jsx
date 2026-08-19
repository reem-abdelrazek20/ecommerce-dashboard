import { useEffect, useState } from "react";
import "../styles/header.css";
import { getProducts } from "../services/productService";
import { IoMdSearch, IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Welcome back</h2>
      </div>

      <div className="header-right">
        <button className="notification-button">
          <IoIosNotificationsOutline />
        </button>

        <div className="admin">
          <button
            className="admin-avatar"
            popovertarget="menu"
            aria-label="Open admin menu"
          >
            A
          </button>

          <div className="admin-info">
            <span className="admin-name">Admin</span>
            <span className="admin-role">Administrator</span>
          </div>
        </div>
      </div>

      <div id="menu" popover="auto">
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
