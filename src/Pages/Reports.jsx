import React, {
  useState,
} from "react";

import {
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";

import MainLayout from "../components/MainLayout";
import "../styles/reports.scss";

const Reports = () => {
  const [reports] = useState([
    {
      id: "REP1001",
      patient: "Swathi",
      doctor: "Dr. John",
      department:
        "Cardiology",
      date: "2026-05-21",
      status:
        "Completed",
      amount: "2500",
    },
    {
      id: "REP1002",
      patient: "Rahul",
      doctor: "Dr. Smith",
      department:
        "Neurology",
      date: "2026-05-20",
      status:
        "Pending",
      amount: "1800",
    },
  ]);

  return (
    <MainLayout
      title="Reports"
      subtitle="Hospital reports & analytics"
    >
      <div className="reports-page">
        {/* Header */}
        <div className="reports-header">
          <div>
            <Typography
              variant="h4"
              className="page-title"
            >
              Reports
            </Typography>

            <Typography className="page-subtitle">
              Track hospital
              performance and
              analytics
            </Typography>
          </div>

          <Button
            variant="contained"
            className="download-btn"
          >
            Download Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <Paper className="stat-card">
            <Typography>
              Total Patients
            </Typography>

            <h2>450</h2>
          </Paper>

          <Paper className="stat-card">
            <Typography>
              Appointments
            </Typography>

            <h2>220</h2>
          </Paper>

          <Paper className="stat-card">
            <Typography>
              Consultations
            </Typography>

            <h2>180</h2>
          </Paper>

          <Paper className="stat-card">
            <Typography>
              Revenue
            </Typography>

            <h2>₹1,45,000</h2>
          </Paper>
        </div>

        {/* Filter Section */}
        <Paper className="filter-card">
          <Typography
            variant="h5"
            className="card-title"
          >
            Filter Reports
          </Typography>

          <div className="filter-grid">
            <TextField
              type="date"
              fullWidth
            />

            <TextField
              select
              label="Department"
              fullWidth
            >
              <MenuItem value="">
                All
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
            </TextField>

            <TextField
              select
              label="Report Type"
              fullWidth
            >
              <MenuItem value="">
                All
              </MenuItem>

              <MenuItem value="Billing">
                Billing
              </MenuItem>

              <MenuItem value="Consultation">
                Consultation
              </MenuItem>

              <MenuItem value="Appointments">
                Appointments
              </MenuItem>
            </TextField>

            <Button
              variant="contained"
              className="generate-btn"
            >
              Generate
            </Button>
          </div>
        </Paper>

        {/* Reports Table */}
        <Paper className="table-card">
          <Typography
            variant="h5"
            mb={3}
          >
            Report Records
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Report ID
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
                    Amount
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {reports.map(
                  (report) => (
                    <TableRow
                      key={
                        report.id
                      }
                    >
                      <TableCell>
                        {
                          report.id
                        }
                      </TableCell>

                      <TableCell>
                        {
                          report.patient
                        }
                      </TableCell>

                      <TableCell>
                        {
                          report.doctor
                        }
                      </TableCell>

                      <TableCell>
                        {
                          report.department
                        }
                      </TableCell>

                      <TableCell>
                        {
                          report.date
                        }
                      </TableCell>

                      <TableCell>
                        ₹
                        {
                          report.amount
                        }
                      </TableCell>

                      <TableCell>
                        <Chip
                          label={
                            report.status
                          }
                          color={
                            report.status ===
                            "Completed"
                              ? "success"
                              : "warning"
                          }
                        />
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </MainLayout>
  );
};

export default Reports;