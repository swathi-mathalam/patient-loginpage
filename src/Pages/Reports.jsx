import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/reports.scss";

const Reports = () => {
  const reportData = [
    {
      id: "PAT1001",
      name: "Swathi",
      doctor: "Dr. Admin",
      date: "20 May 2026",
      status: "Completed",
    },
    {
      id: "PAT1002",
      name: "Ravi",
      doctor: "Dr. John",
      date: "19 May 2026",
      status: "Pending",
    },
    {
      id: "PAT1003",
      name: "Priya",
      doctor: "Dr. Kumar",
      date: "18 May 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="reports-page">
      <Sidebar />

      <div className="reports-container">
        {/* Header */}
        <div className="reports-header">
          <div>
            <h1>Reports</h1>
            <p>
              Hospital analytics and patient
              reports
            </p>
          </div>

          <button className="download-btn">
            Download Report
          </button>
        </div>

        {/* Report Cards */}
        <div className="report-cards">
          <div className="card">
            <h3>Total Patients</h3>
            <h1>245</h1>
          </div>

          <div className="card">
            <h3>Appointments</h3>
            <h1>120</h1>
          </div>

          <div className="card">
            <h3>Consultations</h3>
            <h1>87</h1>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <h1>₹45,000</h1>
          </div>
        </div>

        {/* Reports Table */}
        <div className="table-container">
          <h2>Patient Reports</h2>

          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Name</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {reportData.map((report) => (
                <tr key={report.id}>
                  <td>{report.id}</td>
                  <td>{report.name}</td>
                  <td>{report.doctor}</td>
                  <td>{report.date}</td>
                  <td>
                    <span
                      className={
                        report.status ===
                        "Completed"
                          ? "completed"
                          : "pending"
                      }
                    >
                      {report.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;