import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
  MenuItem,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainLayout from "../components/MainLayout";
import "../styles/patientRegistration.scss";
import { createPatient } from "../redux/patientregistrationpage/patientActions";const steps = [
  "Basic Information",
  "Address Information",
  "Emergency Contact",
  "Insurance Information",
];

const validationSchema = Yup.object({
  firstName: Yup.string().required(
    "First Name is required"
  ),

  lastName: Yup.string().required(
    "Last Name is required"
  ),

  dob: Yup.string().required(
    "Date of Birth is required"
  ),

  mobile: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Enter valid mobile number"
    )
    .required(
      "Mobile number is required"
    ),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  emergencyName:
    Yup.string().required(
      "Emergency Contact Name is required"
    ),

  relationship:
    Yup.string().required(
      "Relationship is required"
    ),

  emergencyContact:
    Yup.string()
      .matches(
        /^[0-9]{10}$/,
        "Enter valid contact number"
      )
      .required(
        "Contact number is required"
      ),

  insuranceProvider:
    Yup.string().required(
      "Insurance Provider is required"
    ),

  insuranceId:
    Yup.string().required(
      "Insurance ID is required"
    ),
});

const PatientRegistration = () => {
  const [activeStep, setActiveStep] =
    useState(0);

  const [openPopup, setOpenPopup] =
    useState(false);

  const [patientId, setPatientId] =
    useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    bloodGroup: "",
    mobile: "",
    email: "",

    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    emergencyName: "",
    relationship: "",
    emergencyContact: "",

    insuranceProvider: "",
    insuranceId: "",
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const generatePatientId = () => {
    return `PAT${Math.floor(
      100000 + Math.random() * 900000
    )}`;
  };

  const handleSubmit = (
    values,
    { resetForm }
  ) => {
    const newPatientId =
      generatePatientId();

    const patientData = {
      patientId: newPatientId,
      ...values,
    };

    dispatch(
      createPatient(patientData)
    );

    setPatientId(newPatientId);
    setOpenPopup(true);

    resetForm();
    setActiveStep(0);

    setTimeout(() => {
      navigate(
        "/patient-management"
      );
    }, 3000);
  };

  return (
    <MainLayout
      title="Patient Registration"
      subtitle="Register new patient details"
    >
      <Box className="patient-page">
        <Paper
          elevation={3}
          className="patient-card"
        >
          {/* Header */}
          <Box className="header-section">
            <Typography
              variant="h4"
              className="page-title"
            >
              Patient Registration
            </Typography>

            <Typography
              variant="body1"
              className="page-subtitle"
            >
              Add patient information
            </Typography>
          </Box>

          {/* Stepper */}
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{ mb: 4 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Formik
            initialValues={
              initialValues
            }
            validationSchema={
              validationSchema
            }
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              submitForm,
              resetForm,
            }) => (
              <Form>
                {/* STEP 1 */}
                {activeStep === 0 && (
                  <Box className="form-grid">
                    <TextField
                      label="First Name"
                      name="firstName"
                      value={
                        values.firstName
                      }
                      onChange={
                        handleChange
                      }
                      error={
                        touched.firstName &&
                        Boolean(
                          errors.firstName
                        )
                      }
                      helperText={
                        touched.firstName &&
                        errors.firstName
                      }
                      fullWidth
                    />

                    <TextField
                      label="Last Name"
                      name="lastName"
                      value={
                        values.lastName
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      select
                      label="Gender"
                      name="gender"
                      value={
                        values.gender
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    >
                      <MenuItem value="Male">
                        Male
                      </MenuItem>

                      <MenuItem value="Female">
                        Female
                      </MenuItem>
                    </TextField>

                    {/* FIXED DOB */}
                    <TextField
  type="date"
  name="dob"
  value={values.dob}
  onChange={handleChange}
/>

                    <TextField
                      label="Blood Group"
                      name="bloodGroup"
                      value={
                        values.bloodGroup
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Mobile Number"
                      name="mobile"
                      value={
                        values.mobile
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Email"
                      name="email"
                      value={
                        values.email
                      }
                      onChange={
                        handleChange
                      }
                      className="full-width"
                      fullWidth
                    />
                  </Box>
                )}

                {/* STEP 2 */}
                {activeStep === 1 && (
                  <Box className="form-grid">
                    <TextField
                      label="Address Line 1"
                      name="address1"
                      value={
                        values.address1
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Address Line 2"
                      name="address2"
                      value={
                        values.address2
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="City"
                      name="city"
                      value={
                        values.city
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="State"
                      name="state"
                      value={
                        values.state
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Zip Code"
                      name="zipCode"
                      value={
                        values.zipCode
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Country"
                      name="country"
                      value={
                        values.country
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />
                  </Box>
                )}

                {/* STEP 3 */}
                {activeStep === 2 && (
                  <Box className="form-grid">
                    <TextField
                      label="Emergency Contact Name"
                      name="emergencyName"
                      value={
                        values.emergencyName
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Relationship"
                      name="relationship"
                      value={
                        values.relationship
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Contact Number"
                      name="emergencyContact"
                      value={
                        values.emergencyContact
                      }
                      onChange={
                        handleChange
                      }
                      className="full-width"
                      fullWidth
                    />
                  </Box>
                )}

                {/* STEP 4 */}
                {activeStep === 3 && (
                  <Box className="form-grid">
                    <TextField
                      label="Insurance Provider"
                      name="insuranceProvider"
                      value={
                        values.insuranceProvider
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      label="Insurance ID"
                      name="insuranceId"
                      value={
                        values.insuranceId
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />
                  </Box>
                )}

                {/* Buttons */}
                <Box className="button-group">
                  {activeStep > 0 && (
                    <Button
                      variant="outlined"
                      onClick={
                        handleBack
                      }
                    >
                      Back
                    </Button>
                  )}

                  {activeStep <
                  steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={
                        handleNext
                      }
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={
                        submitForm
                      }
                    >
                      Save Patient
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    onClick={() =>
                      resetForm()
                    }
                  >
                    Reset
                  </Button>

                  <Button
                    color="error"
                    onClick={() =>
                      navigate(
                        "/dashboard"
                      )
                    }
                  >
                    Cancel
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>

        {/* Success Popup */}
        <Snackbar
          open={openPopup}
          autoHideDuration={4000}
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
            Patient Registered
            Successfully!
            <br />
            <strong>
              ID: {patientId}
            </strong>
          </Alert>
        </Snackbar>
      </Box>
    </MainLayout>
  );
};

export default PatientRegistration;