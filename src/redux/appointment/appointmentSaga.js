import {
  put,
  takeLatest,
  call,
} from "redux-saga/effects";

import API from "../../services/api";

import * as types from "./appointmentTypes";

import {
  setAppointments,
  addAppointment,
  removeAppointment,
  appointmentError,
} from "./appointmentActions";
function* getAppointmentsSaga() {
  try {
    const response =
      yield call(
        API.get,
        "/users"
      );

    const formatted =
      response.data.map(
        (item) => ({
          appointmentId: `APT${item.id}`,
          patientId:
            item.id,
          patientName:
            item.name,
            doctorName:
            "Dr. Sharma",
          department:
            "General Medicine",
          date:
            "2026-05-26",
          time:
            "10:00 AM",
          appointmentType:
            "General Checkup",
          status:
            "Pending",
        })
      );
       yield put(
      setAppointments(
        formatted
      )
    );
  } catch (error) {
    yield put(
      appointmentError(
        error.message
      )
    );
  }
}
function* createAppointmentSaga(
  action
) {
  try {
    const response =
      yield call(
        API.post,
        "/posts",
        action.payload
      );
      const newAppointment =
      {
        appointmentId: `APT${Math.floor(
          1000 +
            Math.random() *
              9000
        )}`,
        ...response.data,
      };

    yield put(
      addAppointment(
        newAppointment
      )
    );
    } catch (error) {
    yield put(
      appointmentError(
        error.message
      )
    );
  }
}
function* deleteAppointmentSaga(
  action
) {
  try {
    yield call(
      API.delete,
      `/posts/${action.payload}`
    );

    yield put(
      removeAppointment(
        action.payload
      )
    );
  } catch (error) {
    yield put(
        appointmentError(
        error.message
      )
    );
  }
}
export default function* appointmentSaga() {
  yield takeLatest(
    types.GET_APPOINTMENTS,
    getAppointmentsSaga
  );

  yield takeLatest(
    types.CREATE_APPOINTMENT,
    createAppointmentSaga
  );

  yield takeLatest(
    types.DELETE_APPOINTMENT,
    deleteAppointmentSaga
  );
}