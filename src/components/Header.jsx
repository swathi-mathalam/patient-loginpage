import React from "react";
import { Bell } from "lucide-react";
import "../styles/header.scss";

const Header = ({
  title,
  subtitle,
}) => {
  return (
    <header className="header">
      {/* Left */}
      <div className="header-left">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {/* Right */}
      <div className="header-right">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />

        {/* Notification */}
        <div className="notification">
          <Bell size={20} />
          <span className="dot"></span>
        </div>

        {/* Profile */}
        <div className="profile-card">
          <div className="avatar">
            A
          </div>

          <div>
            <h4>Admin</h4>
            <p>Healthcare</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;