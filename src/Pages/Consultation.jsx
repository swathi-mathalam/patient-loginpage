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
  Box,
  
  
} from "@mui/material";

import MainLayout from "../components/MainLayout";
import "../styles/consultation.scss";

const Consultation = () => {
  const [
    consultations,
    setConsultations,
  ] = useState([]);

  const [
    openPopup,
    setOpenPopup,
  ] = useState(false);

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

  const handleChange = (
    e
  ) => {
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
    <Box
      sx={{
        p: 3,
        background: "#f4f7fc",
        minHeight: "100vh",
      }}
    >
      {/* Top Header */}
      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "#fff",
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Patient Consultation
          </Typography>

          <Typography variant="body1">
            Manage diagnosis, treatment &
            patient consultations
          </Typography>
        </Box>

        <Paper
          sx={{
            p: 3,
            borderRadius: "20px",
            minWidth: "220px",
            textAlign: "center",
            bgcolor: "rgba(255,255,255,0.15)",
            color: "#fff",
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="body1">
            Total Consultations
          </Typography>

          <Typography
            variant="h3"
            fontWeight="bold"
          >
            {consultations.length}
          </Typography>
        </Paper>
      </Paper>

      {/* Form Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "24px",
          mb: 4,
          boxShadow:
            "0px 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Typography className="section-title">
  Consultation History
</Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: 3,
          }}
        >
          <TextField
            label="Patient ID"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Patient Name"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Doctor Name"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            select
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="">
              Select Department
            </MenuItem>
            <MenuItem value="Cardiology">
              Cardiology
            </MenuItem>
            <MenuItem value="Neurology">
              Neurology
            </MenuItem>
            <MenuItem value="Orthopedics">
              Orthopedics
            </MenuItem>
            <MenuItem value="General Medicine">
              General Medicine
            </MenuItem>
          </TextField>

          <TextField
            multiline
            rows={4}
            label="Diagnosis"
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            multiline
            rows={4}
            label="Prescription"
            name="prescription"
            value={formData.prescription}
            onChange={handleChange}
            fullWidth
          />

          <Box className="full-width">
  <TextField
    multiline
    rows={4}
    label="Doctor Notes"
    name="notes"
    value={formData.notes}
    onChange={handleChange}
    fullWidth
  />
</Box>

          <TextField
            select
            label="Status"
            name="status"
            value={formData.status}
            onChange={handleChange}
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
        </Box>

        <div className="btn-wrapper">
  <Button
    variant="contained"
    className="save-btn"
    onClick={handleSubmit}
  >
    Save Consultation
  </Button>
</div>
      </Paper>

      {/* Table Section */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "24px",
          boxShadow:
            "0px 8px 24px rgba(0,0,0,0.08)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          Consultation History
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  background: "#eef2ff",
                }}
              >
                <TableCell>
                  <b>ID</b>
                </TableCell>
                <TableCell>
                  <b>Patient</b>
                </TableCell>
                <TableCell>
                  <b>Doctor</b>
                </TableCell>
                <TableCell>
                  <b>Department</b>
                </TableCell>
                <TableCell>
                  <b>Date</b>
                </TableCell>
                <TableCell>
                  <b>Status</b>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {consultations.length >
              0 ? (
                consultations.map(
                  (item) => (
                    <TableRow
                      hover
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
                        {item.patientName}
                      </TableCell>

                      <TableCell>
                        {item.doctorName}
                      </TableCell>

                      <TableCell>
                        {item.department}
                      </TableCell>

                      <TableCell>
                        {item.date}
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
                    Records
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Snackbar
        open={openPopup}
        autoHideDuration={3000}
        onClose={() =>
          setOpenPopup(false)
        }
      >
        <Alert severity="success">
          Consultation Saved Successfully!
        </Alert>
      </Snackbar>
    </Box>
  </MainLayout>
);
};

export default Consultation;