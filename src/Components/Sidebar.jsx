import React from "react";
import "..//Styles/App.css";
import {
  FaHome,
  FaChartLine,
  FaHeart,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        {/* Place logo here */}
        <span>FitTrack</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <FaHome className="icon" /> Dashboard
          </li>
          <li>
            <FaChartLine className="icon" /> Reports
          </li>
          <li>
            <FaHeart className="icon" /> Goals
          </li>
          <li>
            <FaBell className="icon" /> Reminders
          </li>
          <li>
            <FaCog className="icon" /> Settings
          </li>
          <li>
            <FaSignOutAlt className="icon" /> Log out
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
