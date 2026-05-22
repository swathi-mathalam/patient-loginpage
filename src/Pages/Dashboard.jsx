import React from "react";
import MainLayout from "../components/MainLayout";
import "../styles/dashboard.scss";
import { useNavigate } from "react-router-dom";
import {
  Users,
  CalendarDays,
  Stethoscope,
  Activity,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <MainLayout
      title="Dashboard"
      subtitle="Welcome back to MediCare Portal"
    >
      {/* Stats Cards */}
      <div className="dashboard-cards">

        <div className="dashboard-card patients">
          <div>
            <p>Total Patients</p>
            <h2>245</h2>
          </div>

          <div className="card-icon">
            <Users size={30} />
          </div>
        </div>

        <div className="dashboard-card appointments">
          <div>
            <p>Today's Appointments</p>
            <h2>32</h2>
          </div>

          <div className="card-icon">
            <CalendarDays size={30} />
          </div>
        </div>

        <div className="dashboard-card consultations">
          <div>
            <p>Consultations</p>
            <h2>14</h2>
          </div>

          <div className="card-icon">
            <Stethoscope size={30} />
          </div>
        </div>

        <div className="dashboard-card reports">
          <div>
            <p>Reports Generated</p>
            <h2>68</h2>
          </div>

          <div className="card-icon">
            <Activity size={30} />
          </div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="dashboard-section">
        <h2>Quick Actions</h2>

        <div className="action-buttons">
          <button
            className="add-btn"
            onClick={() => navigate("/patients")}
          >
            Add New Patient
          </button>

          <button
            className="search-btn"
            onClick={() =>
              navigate("/patient-management")
            }
          >
            Search Patient
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-grid">

        <div className="recent-card">
          <h3>Recent Patients</h3>

          <div className="list-item">
            <span>👤 John Doe</span>
            <small>10 mins ago</small>
          </div>

          <div className="list-item">
            <span>👤 Sarah Smith</span>
            <small>20 mins ago</small>
          </div>

          <div className="list-item">
            <span>👤 David Johnson</span>
            <small>1 hour ago</small>
          </div>
        </div>

        <div className="recent-card">
          <h3>Upcoming Appointments</h3>

          <div className="list-item">
            <span>Dr. Sharma - 10:30 AM</span>
            <small>General Checkup</small>
          </div>

          <div className="list-item">
            <span>Dr. Priya - 12:00 PM</span>
            <small>Consultation</small>
          </div>

          <div className="list-item">
            <span>Dr. Kumar - 2:30 PM</span>
            <small>Follow-up</small>
          </div>
        </div>

      </div>
    </MainLayout>
  );
};

export default Dashboard;