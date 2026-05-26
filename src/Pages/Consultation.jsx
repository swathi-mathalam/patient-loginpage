import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import MainLayout from "../components/MainLayout";
import "../styles/consultation.scss";

const Consultation = () => {
  const [openPopup, setOpenPopup] =
    useState(false);

  const [consultations, setConsultations] =
    useState([]);

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
      subtitle="Manage Patient Consultation"
    >
      <Box className="consultation-page">
        {/* Header */}
        

        {/* Form */}
        <Paper className="consultation-card">
          <h2>
            Patient Consultation
          </h2>

          <div className="consult-grid">
            <input
              type="text"
              name="patientId"
              placeholder="Patient ID"
              value={
                formData.patientId
              }
              onChange={
                handleChange
              }
            />

            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={
                formData.patientName
              }
              onChange={
                handleChange
              }
            />

            <input
              type="text"
              name="doctorName"
              placeholder="Doctor Name"
              value={
                formData.doctorName
              }
              onChange={
                handleChange
              }
            />

            <select
              name="department"
              value={
                formData.department
              }
              onChange={
                handleChange
              }
            >
              <option value="">
                Select Department
              </option>
              <option>
                Cardiology
              </option>
              <option>
                Neurology
              </option>
              <option>
                Orthopedics
              </option>
              <option>
                General Medicine
              </option>
            </select>

           <textarea
  rows="2"
  name="diagnosis"
  placeholder="Diagnosis"
  value={formData.diagnosis}
  onChange={handleChange}
  className="small-textarea"
/>


            <textarea
  rows="2"
  name="prescription"
  placeholder="Prescription"
  value={formData.prescription}
  onChange={handleChange}
  className="small-textarea"
/>

           <textarea
  rows="2"
  name="notes"
  placeholder="Doctor Notes"
  value={formData.notes}
  onChange={handleChange}
  className="small-textarea"
/>
          </div>

          <div className="btn-wrap">
            <Button
              variant="contained"
              onClick={
                handleSubmit
              }
              className="save-btn"
            >
              Save Consultation
            </Button>
          </div>
        </Paper>

        {/* History */}
        <Paper className="history-card">
          <Typography
            variant="h5"
            fontWeight="bold"
          >
            Consultation History
          </Typography>

          {consultations.length >
          0 ? (
            consultations.map(
              (item) => (
                <div
                  key={
                    item.consultationId
                  }
                  className="history-item"
                >
                  <h4>
                    {
                      item.patientName
                    }
                  </h4>

                  <p>
                    <strong>
                      Doctor:
                    </strong>{" "}
                    {
                      item.doctorName
                    }
                  </p>

                  <p>
                    <strong>
                      Department:
                    </strong>{" "}
                    {
                      item.department
                    }
                  </p>

                  <p>
                    <strong>
                      Date:
                    </strong>{" "}
                    {item.date}
                  </p>
                </div>
              )
            )
          ) : (
            <p>
              No Consultation
              Records
            </p>
          )}
        </Paper>

        <Snackbar
          open={openPopup}
          autoHideDuration={3000}
          onClose={() =>
            setOpenPopup(false)
          }
        >
          <Alert severity="success">
            Consultation Saved
            Successfully!
          </Alert>
        </Snackbar>
      </Box>
    </MainLayout>
  );
};

export default Consultation;