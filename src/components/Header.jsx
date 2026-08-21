import { useEffect, useState } from "react";
import "../styles/header.css";
;
import {  useNavigate } from "react-router-dom";

import {  IoIosNotificationsOutline } from "react-icons/io";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
  localStorage.removeItem("user");
  navigate("/login");
};
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
  <img
    src={user?.image}
    alt={user?.firstName}
  />
</button>
          

          <div className="admin-info">
            <span className="admin-name">  {user?.firstName} {user?.lastName}</span>
            <span className="admin-role">Administrator</span>
          </div>
        </div>
      </div>

      <div id="menu" popover="auto">
        <ul>
          <li>Profile</li>
          <li>Settings</li>
              <li>
      <button onClick={handleLogout}>
        Logout
      </button>
    </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
