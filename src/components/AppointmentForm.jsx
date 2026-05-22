import React from "react";

import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";


const AppointmentForm = ({
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
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

          <MenuItem value="Cancelled">
            Cancelled
          </MenuItem>
        </TextField>
      </div>

      <Button
        variant="contained"
        className="save-btn"
        onClick={
          handleSubmit
        }
      >
        Save Appointment
      </Button>
    </Paper>
  );
};

export default AppointmentForm;