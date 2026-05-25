// redux/patientregistrationpage/rootSaga.js

import { all } from "redux-saga/effects";
import patientSaga from "./patientSaga";

export default function* rootSaga() {
  yield all([
    patientSaga(),
  ]);
}