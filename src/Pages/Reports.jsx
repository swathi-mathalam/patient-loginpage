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
  IconButton,
  Divider,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import MainLayout from "../components/MainLayout";
import "../styles/reports.scss";

const MedicalRecords = () => {
  const [records, setRecords] =
    useState([]);

  const [formData, setFormData] =
    useState({
      patientName: "",
      diagnosis: "",
      symptoms: "",
      doctorName: "",
      medicines: "",
      visitDate: "",
      status: "",
    });

  const [editIndex,
    setEditIndex] =
    useState(null);

  const handleChange = (
    e
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave =
    () => {
      if (
        editIndex !== null
      ) {
        const updated =
          [...records];

        updated[
          editIndex
        ] = formData;

        setRecords(
          updated
        );

        setEditIndex(
          null
        );
      } else {
        setRecords([
          ...records,
          formData,
        ]);
      }

      setFormData({
        patientName:
          "",
        diagnosis: "",
        symptoms: "",
        doctorName:
          "",
        medicines:
          "",
        visitDate: "",
        status: "",
      });
    };

  const handleEdit = (
    index
  ) => {
    setFormData(
      records[index]
    );

    setEditIndex(index);
  };

  return (
    <MainLayout
      title="Medical Records"
     
    >
      <div className="medical-page">

        {/* Form Section */}
        <Paper className="record-form-card">
          <div className="form-header">
            <div>
              <Typography
  className="section-title"
>
  Patient Medical Record
</Typography>

<Typography
  className="section-subtitle"
>
  Add and manage patient
  treatment history
</Typography>
            </div>

            <div className="record-count">
              <span>
                {records.length}
              </span>
              Records
            </div>
          </div>

        

          <div className="form-grid">
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
              label="Medicines"
              name="medicines"
              value={
                formData.medicines
              }
              onChange={
                handleChange
              }
              fullWidth
            />

            <TextField
  multiline
  rows={2}
  label="Symptoms"
  name="symptoms"
  value={
    formData.symptoms
  }
  onChange={
    handleChange
  }
  className="small-symptoms"
  fullWidth
/>

            <TextField
  type="date"
  name="visitDate"
  value={formData.visitDate}
  onChange={handleChange}
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
              <MenuItem value="">
                Select Status
              </MenuItem>

              <MenuItem value="Ongoing">
                Ongoing
              </MenuItem>

              <MenuItem value="Completed">
                Completed
              </MenuItem>
            </TextField>
          </div>

          <div className="btn-wrapper">
            <Button
              variant="contained"
              className="save-btn"
              onClick={
                handleSave
              }
            >
              {editIndex !==
              null
                ? "Update Record"
                : "Save Record"}
            </Button>
          </div>
        </Paper>

        {/* Table */}
        <Paper className="table-card">
          <Typography
            className="table-title"
          >
            Medical Records
          </Typography>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Patient
                  </TableCell>

                  <TableCell>
                    Diagnosis
                  </TableCell>

                  <TableCell>
                    Doctor
                  </TableCell>

                  <TableCell>
                    Visit Date
                  </TableCell>

                  <TableCell>
                    Status
                  </TableCell>

                  <TableCell>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {records.length >
                0 ? (
                  records.map(
                    (
                      record,
                      index
                    ) => (
                      <TableRow
                        key={
                          index
                        }
                      >
                        <TableCell>
                          {
                            record.patientName
                          }
                        </TableCell>

                        <TableCell>
                          {
                            record.diagnosis
                          }
                        </TableCell>

                        <TableCell>
                          {
                            record.doctorName
                          }
                        </TableCell>

                        <TableCell>
                          {
                            record.visitDate
                          }
                        </TableCell>

                        <TableCell>
                          <Chip
                            label={
                              record.status
                            }
                            color={
                              record.status ===
                              "Completed"
                                ? "success"
                                : "warning"
                            }
                          />
                        </TableCell>

                        <TableCell>
                          <IconButton
                            onClick={() =>
                              handleEdit(
                                index
                              )
                            }
                          >
                            <EditIcon />
                          </IconButton>
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
                      No Medical Records Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </MainLayout>
  );
};

export default MedicalRecords;