import React, { useState } from "react";
import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import MainLayout from "../components/MainLayout";
import "../styles/appointments.scss";

const Appointments = () => {
  const [appointments, setAppointments] =
    useState([]);

  const [openPopup, setOpenPopup] =
    useState(false);

  const [formData, setFormData] =
    useState({
      patientId: "",
      patientName: "",
      doctorName: "",
      department: "",
      date: "",
      time: "",
      reason: "",
      status: "Pending",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {
    const newAppointment = {
      appointmentId: `APT${Math.floor(
        1000 +
          Math.random() * 9000
      )}`,
      ...formData,
    };

    setAppointments([
      newAppointment,
      ...appointments,
    ]);

    setOpenPopup(true);

    setFormData({
      patientId: "",
      patientName: "",
      doctorName: "",
      department: "",
      date: "",
      time: "",
      reason: "",
      status: "Pending",
    });
  };

  return (
    <MainLayout
      title="Appointments"
      subtitle="Manage appointments"
    >
      <div className="appointments-page">
        {/* Header */}
        <div className="top-header">
          <div>
            <Typography
              variant="h4"
              className="page-title"
            >
              Appointment
              Management
            </Typography>

            <Typography className="page-subtitle">
              Schedule patient
              appointments
            </Typography>
          </div>

          <Paper className="stats-card">
            <Typography>
              Total Appointments
            </Typography>

            <h2>
              {
                appointments.length
              }
            </h2>
          </Paper>
        </div>

        {/* Form */}
        <Paper className="appointment-form-card">
          <Typography
            variant="h5"
            className="section-title"
          >
            Schedule New
            Appointment
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
              InputLabelProps={{
                shrink: true,
              }}
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
              InputLabelProps={{
                shrink: true,
              }}
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
              multiline
              rows={2}
              className="full-width"
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

          <div className="button-wrapper">
            <Button
              variant="contained"
              className="save-btn"
              onClick={
                handleSubmit
              }
            >
              Save Appointment
            </Button>
          </div>
        </Paper>

        {/* Table */}
        <Paper className="appointment-table-card">
          <Typography
            variant="h5"
            mb={3}
          >
            Appointment
            Records
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Appointment ID
                  </TableCell>

                  <TableCell>
                    Patient
                  </TableCell>

                  <TableCell>
                    Doctor
                  </TableCell>

                  <TableCell>
                    Department
                  </TableCell>

                  <TableCell>
                    Date
                  </TableCell>

                  <TableCell>
                    Time
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {appointments.length >
                0 ? (
                  appointments.map(
                    (item) => (
                      <TableRow
                        key={
                          item.appointmentId
                        }
                      >
                        <TableCell>
                          {
                            item.appointmentId
                          }
                        </TableCell>

                        <TableCell>
                          {
                            item.patientName
                          }
                        </TableCell>

                        <TableCell>
                          {
                            item.doctorName
                          }
                        </TableCell>

                        <TableCell>
                          {
                            item.department
                          }
                        </TableCell>

                        <TableCell>
                          {
                            item.date
                          }
                        </TableCell>

                        <TableCell>
                          {
                            item.time
                          }
                        </TableCell>

                        <TableCell>
                          <Chip
                            label={
                              item.status
                            }
                            color={
                              item.status ===
                              "Confirmed"
                                ? "success"
                                : item.status ===
                                  "Completed"
                                ? "info"
                                : "warning"
                            }
                          />
                        </TableCell>
                      </TableRow>
                    )
                  )
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      align="center"
                    >
                      No Appointment
                      Records Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <Snackbar
          open={openPopup}
          autoHideDuration={
            3000
          }
          onClose={() =>
            setOpenPopup(false)
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert severity="success">
            Appointment Saved
            Successfully!
          </Alert>
        </Snackbar>
      </div>
    </MainLayout>
  );
};

export default Appointments;