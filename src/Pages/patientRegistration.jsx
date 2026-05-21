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
import Sidebar from "../components/Sidebar";
import "../styles/patientRegistration.scss";
import { useDispatch } from "react-redux";
import { createPatient } from "../redux/actions/patientActions";

const steps = [
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
  email: Yup.string().email(
    "Invalid email"
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


  const dispatch =
    useDispatch();

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

  // FIXED SUBMIT FUNCTION
  const handleSubmit = (
  values,
  { resetForm }
) => {
  console.log(
    "Submit clicked"
  );

  const newPatientId =
    generatePatientId();

  const patientData = {
    patientId:
      newPatientId,
    ...values,
  };

  console.log(
    "Patient Data:",
    patientData
  );

  dispatch(
    createPatient(
      patientData
    )
  );

  setPatientId(
    newPatientId
  );

  setOpenPopup(true);

  resetForm();

  setTimeout(() => {
    navigate(
      "/patient-management"
    );
  }, 3000);
};

  return (
    <div className="patient-page">
      <Sidebar />

      <div className="patient-container">
        <Paper className="patient-card">
          <Typography
            variant="h4"
            mb={3}
          >
            Patient Registration
          </Typography>

          {/* Stepper */}
          <Stepper
            activeStep={activeStep}
            sx={{ mt: 2 }}
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
  onSubmit={
    handleSubmit
  }
>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              resetForm,
            }) => (
              <Form>
                {/* STEP 1 */}
                {activeStep ===
                  0 && (
                  <Box className="form-grid">
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={
                        values.firstName
                      }
                      onChange={
                        handleChange
                      }
                      onBlur={
                        handleBlur
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
                    />

                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={
                        values.lastName
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      select
                      label="Gender"
                      name="gender"
                      fullWidth
                      value={
                        values.gender
                      }
                      onChange={
                        handleChange
                      }
                    >
                      <MenuItem value="Male">
                        Male
                      </MenuItem>

                      <MenuItem value="Female">
                        Female
                      </MenuItem>
                    </TextField>

                    <TextField
  type="date"
  name="dob"
  fullWidth
  value={values.dob}
  onChange={handleChange}
  slotProps={{
    inputLabel: {
      shrink: true,
    },
  }}
/>

                    <TextField
                      label="Blood Group"
                      name="bloodGroup"
                      fullWidth
                      value={
                        values.bloodGroup
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Mobile Number"
                      name="mobile"
                      fullWidth
                      value={
                        values.mobile
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Email Address"
                      name="email"
                      fullWidth
                      value={
                        values.email
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </Box>
                )}

                {/* STEP 2 */}
                {activeStep ===
                  1 && (
                  <Box className="form-grid">
                    <TextField
                      label="Address Line 1"
                      name="address1"
                      fullWidth
                      value={
                        values.address1
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Address Line 2"
                      name="address2"
                      fullWidth
                      value={
                        values.address2
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="City"
                      name="city"
                      fullWidth
                      value={
                        values.city
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="State"
                      name="state"
                      fullWidth
                      value={
                        values.state
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="ZIP Code"
                      name="zipCode"
                      fullWidth
                      value={
                        values.zipCode
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Country"
                      name="country"
                      fullWidth
                      value={
                        values.country
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </Box>
                )}

                {/* STEP 3 */}
                {activeStep ===
                  2 && (
                  <Box className="form-grid">
                    <TextField
                      label="Emergency Contact Name"
                      name="emergencyName"
                      fullWidth
                      value={
                        values.emergencyName
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Relationship"
                      name="relationship"
                      fullWidth
                      value={
                        values.relationship
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Contact Number"
                      name="emergencyContact"
                      fullWidth
                      value={
                        values.emergencyContact
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </Box>
                )}

                {/* STEP 4 */}
                {activeStep ===
                  3 && (
                  <Box className="form-grid">
                    <TextField
                      label="Insurance Provider"
                      name="insuranceProvider"
                      fullWidth
                      value={
                        values.insuranceProvider
                      }
                      onChange={
                        handleChange
                      }
                    />

                    <TextField
                      label="Insurance ID"
                      name="insuranceId"
                      fullWidth
                      value={
                        values.insuranceId
                      }
                      onChange={
                        handleChange
                      }
                    />
                  </Box>
                )}

                {/* BUTTONS */}
                <div className="btn-group">
                  {activeStep >
                    0 && (
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
                  steps.length -
                    1 ? (
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
                      type="submit"
                      variant="contained"
                    >
                      Save Patient
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() =>
                      resetForm()
                    }
                  >
                    Reset Form
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
                </div>
              </Form>
            )}
          </Formik>
        </Paper>

        {/* SUCCESS POPUP */}
        <Snackbar
  open={openPopup}
  autoHideDuration={10000} // 10 seconds
  onClose={() =>
    setOpenPopup(false)
  }
  anchorOrigin={{
    vertical: "top",
    horizontal: "center",
  }}
>
  <Alert
    onClose={() =>
      setOpenPopup(false)
    }
    severity="success"
    variant="filled"
    sx={{
      width: "100%",
      minWidth: "380px",
      borderRadius: "16px",
      fontSize: "16px",
      fontWeight: "600",
      padding: "12px 18px",
      boxShadow:
        "0 8px 25px rgba(0,0,0,0.18)",
      alignItems: "center",
    }}
  >
    ✅ Patient Registered Successfully!
    <br />
    <strong>
      Patient ID: {patientId}
    </strong>
  </Alert>
</Snackbar>
      </div>
    </div>
  );
};

export default PatientRegistration;