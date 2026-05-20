import { call, put, takeLatest } from "redux-saga/effects";
import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAILURE,
} from "../actions/patientActions";

import { createPatientApi } from "../../services/patientApi";

function* createPatientSaga(action) {
  try {
    const response = yield call(
      createPatientApi,
      action.payload
    );

    yield put({
      type: CREATE_PATIENT_SUCCESS,
      payload: response,
    });

    alert("Patient created successfully!");
  } catch (error) {
    yield put({
      type: CREATE_PATIENT_FAILURE,
      payload: error.message,
    });

    alert("Something went wrong!");
  }
}

export function* watchPatientSaga() {
  yield takeLatest(
    CREATE_PATIENT_REQUEST,
    createPatientSaga
  );
}