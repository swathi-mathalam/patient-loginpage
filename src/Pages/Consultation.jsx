import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/consultation.scss";

const Consultation = () => {
  const [patientId, setPatientId] =
    useState("");

  const [consultationData, setConsultationData] =
    useState({
      doctorName: "",
      symptoms: "",
      diagnosis: "",
      prescription: "",
      consultationDate: "",
    });

  const patientData = {
    id: "PAT123456",
    name: "Swathi",
    age: 24,
    gender: "Female",
  };

  const handleChange = (e) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Consultation Saved Successfully!"
    );

    console.log({
      patientId,
      ...consultationData,
    });

    setConsultationData({
      doctorName: "",
      symptoms: "",
      diagnosis: "",
      prescription: "",
      consultationDate: "",
    });
  };

  return (
    <div className="consultation-page">
      <Sidebar />

      <div className="consultation-container">
        <div className="consultation-header">
          <h1>Consultation</h1>
          <p>
            Add patient consultation details
          </p>
        </div>

        {/* Search Patient */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search Patient ID / Name"
            value={patientId}
            onChange={(e) =>
              setPatientId(e.target.value)
            }
          />

          <button>Search</button>
        </div>

        {/* Patient Details */}
        <div className="patient-card">
          <h2>Patient Details</h2>

          <div className="patient-info">
            <p>
              <strong>ID:</strong>{" "}
              {patientData.id}
            </p>

            <p>
              <strong>Name:</strong>{" "}
              {patientData.name}
            </p>

            <p>
              <strong>Age:</strong>{" "}
              {patientData.age}
            </p>

            <p>
              <strong>Gender:</strong>{" "}
              {patientData.gender}
            </p>
          </div>
        </div>

        {/* Consultation Form */}
        <form
          className="consultation-form"
          onSubmit={handleSubmit}
        >
          <div className="form-grid">
            <input
              type="text"
              placeholder="Doctor Name"
              name="doctorName"
              value={
                consultationData.doctorName
              }
              onChange={handleChange}
            />

            <input
              type="date"
              name="consultationDate"
              value={
                consultationData.consultationDate
              }
              onChange={handleChange}
            />

            <textarea
              placeholder="Symptoms"
              name="symptoms"
              value={
                consultationData.symptoms
              }
              onChange={handleChange}
            />

            <textarea
              placeholder="Diagnosis"
              name="diagnosis"
              value={
                consultationData.diagnosis
              }
              onChange={handleChange}
            />

            <textarea
              placeholder="Prescription"
              name="prescription"
              value={
                consultationData.prescription
              }
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Save Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consultation;