import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import { watchPatientSaga } from "./patientSaga";

export default function* rootSaga() {
  yield all([
    authSaga(),
     watchPatientSaga(),
  ]);
}