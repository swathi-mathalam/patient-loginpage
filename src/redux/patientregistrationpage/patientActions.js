// redux/patientregistrationpage/patientActions.js

import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAILURE,
} from "./patientTypes";

export const createPatient = (
  patientData
) => ({
  type:
    CREATE_PATIENT_REQUEST,
  payload: patientData,
});

export const createPatientSuccess =
  (data) => ({
    type:
      CREATE_PATIENT_SUCCESS,
    payload: data,
  });

export const createPatientFailure =
  (error) => ({
    type:
      CREATE_PATIENT_FAILURE,
    payload: error,
  });