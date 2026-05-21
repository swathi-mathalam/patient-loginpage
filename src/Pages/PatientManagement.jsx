import React, {
  useState,
} from "react";

import {
  useSelector,
} from "react-redux";

import {
  Paper,
  Typography,
  TextField,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import "../styles/patientManagement.scss";

const PatientManagement =
  () => {
    const [search,
      setSearch] =
      useState("");

    const patients =
      useSelector(
        (state) =>
          state.patient
            .patients
      );

    const filteredPatients =
      patients.filter(
        (patient) =>
          patient.firstName
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          patient.lastName
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          patient.patientId
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    return (
      <div className="patient-management-page">
        <Sidebar />

        <div className="patient-management-container">

          {/* Header */}
          <div className="page-header">
            <div>
              <Typography
                variant="h4"
                className="page-title"
              >
                Patient
                Management
              </Typography>

              <Typography className="sub-title">
                Manage all
                registered
                patients
              </Typography>
            </div>

            <div className="patient-count-card">
              <Typography variant="h6">
                Total Patients
              </Typography>

              <h2>
                {
                  patients.length
                }
              </h2>
            </div>
          </div>

          {/* Search */}
          <Paper className="search-box">
            <TextField
              fullWidth
              placeholder="Search by Patient ID or Name..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target
                    .value
                )
              }
            />
          </Paper>

          {/* Table */}
          <Paper className="table-container">
            <table className="patient-table">
              <thead>
                <tr>
                  <th>
                    Patient ID
                  </th>
                  <th>
                    Full Name
                  </th>
                  <th>
                    Gender
                  </th>
                  <th>
                    Mobile
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredPatients
                  .length >
                0 ? (
                  filteredPatients.map(
                    (
                      patient
                    ) => (
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
                          {
                            patient.gender
                          }
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
                      No
                      Patients
                      Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Paper>
        </div>
      </div>
    );
  };

export default PatientManagement;