import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search, Users } from "lucide-react";

import MainLayout from "../components/MainLayout";
import "../styles/patientManagement.scss";

const PatientManagement = () => {
  const [search, setSearch] =
    useState("");

  const patients = useSelector(
    (state) => state.patient.patients
  );

  const filteredPatients =
    patients.filter(
      (patient) =>
        patient.firstName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        patient.lastName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        patient.patientId
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

  return (
    <MainLayout
      title="Patient Management"
      subtitle="Manage patient records"
    >
      {/* Top Section */}
      <div className="patient-top-section">

        {/* Patient Count Card */}
        <div className="patient-count-card">
          <div>
            <p>Total Patients</p>
            <h2>{patients.length}</h2>
          </div>

          <div className="patient-icon">
            <Users size={28} />
          </div>
        </div>

      </div>

      {/* Search Box */}
      <Paper className="search-container">
        <TextField
  fullWidth
  variant="outlined"
  placeholder="Search by Patient ID or Name..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <Search size={18} />
        </InputAdornment>
      ),
    },
  }}
/>
      </Paper>

      {/* Patient Table */}
      <Paper className="table-wrapper">
        <div className="table-header">
          <h3>Patient Records</h3>
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.length >
            0 ? (
              filteredPatients.map(
                (patient) => (
                  <tr
                    key={
                      patient.patientId
                    }
                  >
                    <td>
                      {
                        patient.patientId
                      }
                    </td>

                    <td>
                      {
                        patient.firstName
                      }{" "}
                      {
                        patient.lastName
                      }
                    </td>

                    <td>
                      <span className="gender-badge">
                        {
                          patient.gender
                        }
                      </span>
                    </td>

                    <td>
                      {
                        patient.mobile
                      }
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="no-data"
                >
                  No Patients Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Paper>
    </MainLayout>
  );
};

export default PatientManagement;