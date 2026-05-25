// redux/patientregistrationpage/patientSaga.js

import axios from "axios";

import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";

import {
  CREATE_PATIENT_REQUEST,
} from "./patientTypes";

import {
  createPatientSuccess,
  createPatientFailure,
} from "./patientActions";

// API Function
const createPatientApi =
  async (patientData) => {
    const response =
      await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        patientData
      );

    return response.data;
  };

function* createPatientSaga(
  action
) {
  try {
    console.log(
      "Patient Payload:",
      action.payload
    );

    const response =
      yield call(
        createPatientApi,
        action.payload
      );

    yield put(
      createPatientSuccess(
        response
      )
    );

    console.log(
      "Patient Added Successfully"
    );
  } catch (error) {
    yield put(
      createPatientFailure(
        error.message
      )
    );

    console.log(
      "Patient Create Failed"
    );
  }
}

export default function* patientSaga() {
  yield takeLatest(
    CREATE_PATIENT_REQUEST,
    createPatientSaga
  );
}