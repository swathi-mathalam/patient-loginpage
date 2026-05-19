import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/sidebar.scss";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <h2 className="logo">
        MediCare
      </h2>

      <nav>
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/patients">
          Patient Management
        </Link>

        <Link to="/appointments">
          Appointments
        </Link>

        <Link to="/consultation">
          Consultation
        </Link>

        <Link to="/reports">
          Reports
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;