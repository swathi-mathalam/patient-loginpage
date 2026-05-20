import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-content">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back to MediCare Portal</p>
          </div>

          <div className="profile-section">
            <img
              src="https://i.pravatar.cc/50"
              alt="profile"
            />
            <div>
              <h4>Dr. Admin</h4>
              <p>admin@medicare.com</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">

          <div className="card">
            <h3>Total Patients</h3>
            <h1>245</h1>
          </div>

          <div className="card">
            <h3>Today's Appointments</h3>
            <h1>32</h1>
          </div>

          <div className="card">
            <h3>Active Consultations</h3>
            <h1>14</h1>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>

          <div className="action-buttons">
            <button className="add-btn">
              Add New Patient
            </button>

            <button className="search-btn">
              Search Patient
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;