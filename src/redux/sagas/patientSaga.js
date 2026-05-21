import {
  put,
  takeLatest,
} from "redux-saga/effects";

import {
  CREATE_PATIENT_REQUEST,
  CREATE_PATIENT_SUCCESS,
  CREATE_PATIENT_FAILURE,
} from "../actions/patientActions";

function* createPatientSaga(
  action
) {
  try {
    console.log(
      "Saga Running:",
      action.payload
    );

    yield put({
      type:
        CREATE_PATIENT_SUCCESS,
      payload:
        action.payload,
    });

    console.log(
      "Patient Added Successfully"
    );
  } catch (error) {
    console.log(
      "Saga Error:",
      error
    );

    yield put({
      type:
        CREATE_PATIENT_FAILURE,
      payload:
        error.message,
    });
  }
}

export function* watchPatientSaga() {
  yield takeLatest(
    CREATE_PATIENT_REQUEST,
    createPatientSaga
  );
}