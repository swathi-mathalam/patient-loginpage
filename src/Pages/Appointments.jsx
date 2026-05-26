import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

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

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { Formik } from "formik";
import * as Yup from "yup";

import MainLayout from "../components/MainLayout";

import {
  getAppointments,
  createAppointment,
  deleteAppointment,
} from "../redux/appointment/appointmentActions";

import "../styles/appointments.scss";

const validationSchema =
  Yup.object({
    patientId:
      Yup.string().required(
        "Patient ID is required"
      ),
    patientName:
      Yup.string().required(
        "Patient name is required"
      ),
    doctorName:
      Yup.string().required(
        "Doctor name is required"
      ),
    department:
      Yup.string().required(
        "Department is required"
      ),
    date:
      Yup.string().required(
        "Date is required"
      ),
    time:
      Yup.string().required(
        "Time is required"
      ),
  });

const Appointments = () => {
  const dispatch =
    useDispatch();

  const [search, setSearch] =
    useState("");

  const [statusFilter,
    setStatusFilter] =
    useState("All");

  const [openSnackbar,
    setOpenSnackbar] =
    useState(false);

  const {
    appointments,

  } = useSelector(
    (state) =>
      state.appointment
  );

  useEffect(() => {
    dispatch(
      getAppointments()
    );
  }, [dispatch]);

  const filteredAppointments =
    useMemo(() => {
      return appointments.filter(
        (item) => {
          const matchesSearch =
            item.patientName
              ?.toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesStatus =
            statusFilter ===
              "All" ||
            item.status ===
              statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        }
      );
    }, [
      appointments,
      search,
      statusFilter,
    ]);

  const pendingCount =
    appointments.filter(
      (item) =>
        item.status ===
        "Pending"
    ).length;

  const completedCount =
    appointments.filter(
      (item) =>
        item.status ===
        "Completed"
    ).length;

  return (
    <MainLayout
      title="Appointments"
      subtitle="Manage appointments"
    >
      <div className="appointments-page">
        <div className="summary-cards">
          <Paper className="summary-card">
            <Typography>
              Total
            </Typography>
            <h2>
              {
                appointments.length
              }
            </h2>
          </Paper>

          <Paper className="summary-card">
            <Typography>
              Pending
            </Typography>
            <h2>
              {pendingCount}
            </h2>
          </Paper>

          <Paper className="summary-card">
            <Typography>
              Completed
            </Typography>
            <h2>
              {
                completedCount
              }
            </h2>
          </Paper>
        </div>

        <div className="appointment-content">
          <Paper className="appointment-form-card">
            <Typography
              variant="h5"
              className="title"
            >
              Schedule Appointment
            </Typography>

            <Formik
              initialValues={{
                patientId:
                  "",
                patientName:
                  "",
                doctorName:
                  "",
                department:
                  "",
                date: "",
                time: "",
                appointmentType:
                  "General Checkup",
                reason:
                  "",
                status:
                  "Pending",
              }}
              validationSchema={
                validationSchema
              }
              onSubmit={(
                values,
                {
                  resetForm,
                }
              ) => {
                dispatch(
                  createAppointment(
                    values
                  )
                );

                setOpenSnackbar(
                  true
                );

                resetForm();
              }}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                touched,
                errors,
              }) => (
                <form
                  onSubmit={
                    handleSubmit
                  }
                >
                  <div className="form-grid">
                    <TextField
                      label="Patient ID"
                      name="patientId"
                      value={
                        values.patientId
                      }
                      onChange={
                        handleChange
                      }
                      error={
                        touched.patientId &&
                        Boolean(
                          errors.patientId
                        )
                      }
                      helperText={
                        touched.patientId &&
                        errors.patientId
                      }
                      fullWidth
                    />

                    <TextField
                      label="Patient Name"
                      name="patientName"
                      value={
                        values.patientName
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
                        values.doctorName
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
                        values.department
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
                        values.date
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                      InputLabelProps={{
                        shrink:
                          true,
                      }}
                    />

                    <TextField
                      type="time"
                      name="time"
                      value={
                        values.time
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    />

                    <TextField
                      select
                      label="Type"
                      name="appointmentType"
                      value={
                        values.appointmentType
                      }
                      onChange={
                        handleChange
                      }
                      fullWidth
                    >
                      <MenuItem value="General Checkup">
                        General Checkup
                      </MenuItem>
                      <MenuItem value="Follow-up">
                        Follow-up
                      </MenuItem>
                    </TextField>

                    <TextField
                      select
                      label="Status"
                      name="status"
                      value={
                        values.status
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

                  <div className="reason-wrapper">
  <TextField
    label="Reason"
    name="reason"
    value={values.reason}
    onChange={handleChange}
    multiline
    rows={2}
    fullWidth
  />
</div>

                  <Button
                    type="submit"
                    variant="contained"
                    className="save-btn"
                  >
                    Save Appointment
                  </Button>
                </form>
              )}
            </Formik>
          </Paper>

          <Paper className="appointment-table-card">
            <div className="table-header">
              <Typography variant="h5">
                Records
              </Typography>

              <div className="filters">
                <TextField
                  size="small"
                  label="Search"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                />

                <TextField
                  select
                  size="small"
                  value={
                    statusFilter
                  }
                  onChange={(e) =>
                    setStatusFilter(
                      e.target.value
                    )
                  }
                >
                  <MenuItem value="All">
                    All
                  </MenuItem>
                  <MenuItem value="Pending">
                    Pending
                  </MenuItem>
                  <MenuItem value="Completed">
                    Completed
                  </MenuItem>
                </TextField>
              </div>
            </div>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Patient</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredAppointments.map(
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
                                  "Confirmed"
                                ? "primary"
                                : "warning"
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            color="error"
                            onClick={() =>
                              dispatch(
                                deleteAppointment(
                                  item.appointmentId
                                )
                              )
                            }
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() =>
            setOpenSnackbar(
              false
            )
          }
        >
          <Alert severity="success">
            Appointment Saved
            Successfully
          </Alert>
        </Snackbar>
      </div>
    </MainLayout>
  );
};

export default Appointments;
