import React, {
  useState,
} from "react";

import {
  Typography,
  Paper,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Snackbar,
  Alert,
  Chip,
  Divider,
} from "@mui/material";

import MainLayout from "../components/MainLayout";
import "../styles/consultation.scss";

const Consultation = () => {
  const [
    consultations,
    setConsultations,
  ] = useState([]);

  const [openPopup, setOpenPopup] =
    useState(false);

  const [formData, setFormData] =
    useState({
      patientId: "",
      patientName: "",
      doctorName: "",
      department: "",
      diagnosis: "",
      prescription: "",
      notes: "",
      status: "In Progress",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = () => {
    const newConsultation = {
      consultationId: `CONS${Math.floor(
        1000 +
          Math.random() * 9000
      )}`,
      date:
        new Date().toLocaleDateString(),
      ...formData,
    };

    setConsultations([
      newConsultation,
      ...consultations,
    ]);

    setOpenPopup(true);

    setFormData({
      patientId: "",
      patientName: "",
      doctorName: "",
      department: "",
      diagnosis: "",
      prescription: "",
      notes: "",
      status: "In Progress",
    });
  };

  return (
    <MainLayout
      title="Consultation"
      subtitle="Manage patient consultations"
    >
      <div className="consultation-page">
        {/* Header */}
        <div className="consultation-header">
          <div>
            <Typography
              variant="h4"
              className="page-title"
            >
              Consultation
            </Typography>

            <Typography className="page-subtitle">
              Manage patient
              consultations and
              treatment records
            </Typography>
          </div>

          <Paper className="stats-card">
            <Typography variant="h6">
              Total Consultations
            </Typography>

            <Typography className="stats-number">
              {
                consultations.length
              }
            </Typography>
          </Paper>
        </div>

        {/* Form */}
        <Paper className="consultation-card">
          <Typography
            variant="h5"
            className="card-title"
          >
            Patient Consultation
          </Typography>

          <Typography className="card-subtitle">
            Add diagnosis and
            treatment details
          </Typography>

          <Divider sx={{ mb: 4 }} />

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
              multiline
              rows={3}
              label="Diagnosis"
              name="diagnosis"
              value={
                formData.diagnosis
              }
              onChange={
                handleChange
              }
              fullWidth
            />

            <TextField
              multiline
              rows={3}
              label="Prescription"
              name="prescription"
              value={
                formData.prescription
              }
              onChange={
                handleChange
              }
              fullWidth
            />

            <TextField
              className="full-width"
              multiline
              rows={4}
              label="Doctor Notes"
              name="notes"
              value={
                formData.notes
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
              <MenuItem value="In Progress">
                In Progress
              </MenuItem>

              <MenuItem value="Completed">
                Completed
              </MenuItem>

              <MenuItem value="Follow Up">
                Follow Up
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
            Save Consultation
          </Button>
        </Paper>

        {/* Table */}
        <Paper className="table-card">
          <Typography
            variant="h5"
            mb={3}
          >
            Consultation History
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    ID
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
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {consultations.length >
                0 ? (
                  consultations.map(
                    (item) => (
                      <TableRow
                        key={
                          item.consultationId
                        }
                      >
                        <TableCell>
                          {
                            item.consultationId
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
                          <Chip
                            label={
                              item.status
                            }
                            color={
                              item.status ===
                              "Completed"
                                ? "success"
                                : item.status ===
                                  "Follow Up"
                                ? "warning"
                                : "info"
                            }
                          />
                        </TableCell>
                      </TableRow>
                    )
                  )
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      align="center"
                    >
                      No Consultation
                      Records Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        {/* Snackbar */}
        <Snackbar
          open={openPopup}
          autoHideDuration={3000}
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
            Consultation Saved
            Successfully!
          </Alert>
        </Snackbar>
      </div>
    </MainLayout>
  );
};

export default Consultation;