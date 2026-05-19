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
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-content">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>
              Welcome back to your
              healthcare portal 👋
            </p>
          </div>

          <div className="profile-section">
            <div className="notification">
              🔔
            </div>

            <div className="profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="doctor"
              />

              <div>
                <h4>Dr. Swathi</h4>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="cards-container">
          <div className="dashboard-card">
            <div>
              <h3>Total Patients</h3>
              <h2>1,240</h2>
            </div>

            <span className="card-icon">
              👨‍⚕️
            </span>
          </div>

          <div className="dashboard-card">
            <div>
              <h3>
                Today's Appointments
              </h3>
              <h2>54</h2>
            </div>

            <span className="card-icon">
              📅
            </span>
          </div>

          <div className="dashboard-card">
            <div>
              <h3>
                Active Consultations
              </h3>
              <h2>18</h2>
            </div>

            <span className="card-icon">
              🩺
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
  <h2>Quick Actions</h2>

  <div className="action-buttons">
    <button
      onClick={() =>
        navigate(
          "/patient-registration"
        )
      }
    >
      + Add New Patient
    </button>

    <button
      onClick={() =>
        navigate("/patients")
      }
    >
      🔍 Search Patient
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;