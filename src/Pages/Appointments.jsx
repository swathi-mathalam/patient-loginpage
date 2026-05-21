import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import "../styles/appointments.scss";

const Appointments = () => {
  const [openPopup, setOpenPopup] =
    useState(false);

  const [appointmentId, setAppointmentId] =
    useState("");

  const [formData, setFormData] =
    useState({
      patientName: "",
      patientId: "",
      doctorName: "",
      appointmentDate: "",
      appointmentTime: "",
      consultationType: "",
      status: "",
      notes: "",
    });

  const generateAppointmentId =
    () => {
      return `APT${Math.floor(
        100000 +
          Math.random() * 900000
      )}`;
    };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointmentId =
      generateAppointmentId();

    setAppointmentId(
      newAppointmentId
    );

    console.log({
      appointmentId:
        newAppointmentId,
      ...formData,
    });

    setOpenPopup(true);

    setFormData({
      patientName: "",
      patientId: "",
      doctorName: "",
      appointmentDate: "",
      appointmentTime: "",
      consultationType: "",
      status: "",
      notes: "",
    });
  };

  return (
    <div className="appointment-page">
      <Sidebar />

      <div className="appointment-container">
        <Paper className="appointment-card">
          <Typography
            variant="h4"
            mb={3}
          >
            Appointment Booking
          </Typography>

          <Box
            component="form"
            className="form-grid"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Patient Name"
              name="patientName"
              fullWidth
              value={
                formData.patientName
              }
              onChange={handleChange}
            />

            <TextField
              label="Patient ID"
              name="patientId"
              fullWidth
              value={
                formData.patientId
              }
              onChange={handleChange}
            />

            <TextField
              label="Doctor Name"
              name="doctorName"
              fullWidth
              value={
                formData.doctorName
              }
              onChange={handleChange}
            />

            <TextField
              type="date"
              name="appointmentDate"
              fullWidth
              value={
                formData.appointmentDate
              }
              onChange={handleChange}
            />

            <TextField
              type="time"
              name="appointmentTime"
              fullWidth
              value={
                formData.appointmentTime
              }
              onChange={handleChange}
            />

            <TextField
              select
              label="Consultation Type"
              name="consultationType"
              fullWidth
              value={
                formData.consultationType
              }
              onChange={handleChange}
            >
              <MenuItem value="Online">
                Online
              </MenuItem>
              <MenuItem value="Offline">
                Offline
              </MenuItem>
            </TextField>

            <TextField
              select
              label="Status"
              name="status"
              fullWidth
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="Scheduled">
                Scheduled
              </MenuItem>
              <MenuItem value="Pending">
                Pending
              </MenuItem>
              <MenuItem value="Completed">
                Completed
              </MenuItem>
            </TextField>

            <TextField
              label="Notes"
              name="notes"
              multiline
              rows={3}
              fullWidth
              value={formData.notes}
              onChange={handleChange}
            />
          </Box>

          <div className="btn-group">
            <Button
              variant="contained"
              onClick={handleSubmit}
            >
              Save Appointment
            </Button>
          </div>
        </Paper>

        <Snackbar
          open={openPopup}
          autoHideDuration={10000}
          onClose={() =>
            setOpenPopup(false)
          }
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert
            severity="success"
            variant="filled"
          >
            Appointment Booked
            Successfully!
            <br />
            Appointment ID:
            {appointmentId}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Appointments;