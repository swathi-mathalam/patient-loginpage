import React, {
  useState,
} from "react";

import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

import Sidebar from "../components/Sidebar";
import "../styles/appointments.scss";


const Appointments =
  () => {
    const [
      appointments,
      setAppointments,
    ] = useState([]);

    const [
      formData,
      setFormData,
    ] = useState({
      patientId: "",
      patientName: "",
      doctorName: "",
      department: "",
      date: "",
      time: "",
      reason: "",
      status: "Pending",
    });

    const handleChange = (
      e
    ) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

    const handleSubmit =
      () => {
        const newAppointment =
          {
            appointmentId: `APT${Math.floor(
              1000 +
                Math.random() *
                  9000
            )}`,
            ...formData,
          };

        setAppointments([
          ...appointments,
          newAppointment,
        ]);

        setFormData({
          patientId: "",
          patientName: "",
          doctorName: "",
          department: "",
          date: "",
          time: "",
          reason: "",
          status:
            "Pending",
        });
      };

    return (
      <div className="appointments-page">
        <Sidebar />

        <div className="appointments-container">

          {/* Header */}
          <div className="page-header">
            <Typography variant="h4">
              Appointments
            </Typography>

            <div className="appointment-count">
              Total:
              {
                appointments.length
              }
            </div>
          </div>

          {/* Form */}
          <Paper className="appointment-form">
            <Typography
              variant="h6"
              mb={2}
            >
              Book Appointment
            </Typography>

            <div className="form-grid">

              <TextField
                label="Patient ID"
                name="patientId"
                value={
                  formData.patientId
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                label="Patient Name"
                name="patientName"
                value={
                  formData.patientName
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                label="Doctor Name"
                name="doctorName"
                value={
                  formData.doctorName
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                label="Department"
                name="department"
                value={
                  formData.department
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                type="date"
                name="date"
                value={
                  formData.date
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                type="time"
                name="time"
                value={
                  formData.time
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                label="Reason"
                name="reason"
                value={
                  formData.reason
                }
                onChange={
                  handleChange
                }
                fullWidth
              />

              <TextField
                select
                label="Status"
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
                fullWidth
              >
                <MenuItem value="Pending">
                  Pending
                </MenuItem>

                <MenuItem value="Confirmed">
                  Confirmed
                </MenuItem>

                <MenuItem value="Completed">
                  Completed
                </MenuItem>
              </TextField>
            </div>

            <Button
              variant="contained"
              onClick={
                handleSubmit
              }
              className="save-btn"
            >
              Save Appointment
            </Button>
          </Paper>

          {/* Table */}
          <Paper className="table-container">
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>
                    Patient
                  </th>
                  <th>
                    Doctor
                  </th>
                  <th>
                    Department
                  </th>
                  <th>
                    Date
                  </th>
                  <th>
                    Time
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {appointments
                  .length >
                0 ? (
                  appointments.map(
                    (
                      item
                    ) => (
                      <tr
                        key={
                          item.appointmentId
                        }
                      >
                        <td>
                          {
                            item.appointmentId
                          }
                        </td>

                        <td>
                          {
                            item.patientName
                          }
                        </td>

                        <td>
                          {
                            item.doctorName
                          }
                        </td>

                        <td>
                          {
                            item.department
                          }
                        </td>

                        <td>
                          {
                            item.date
                          }
                        </td>

                        <td>
                          {
                            item.time
                          }
                        </td>

                        <td>
                          {
                            item.status
                          }
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td colSpan="7">
                      No
                      Appointments
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

export default Appointments;