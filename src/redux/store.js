// src/redux/store.js

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import createSagaMiddleware from "redux-saga";

// Login
import authReducer from "./loginpage/authReducer";
import loginRootSaga from "./loginpage/rootSaga";

// Patient Registration
import patientReducer from "./patientregistrationpage/patientReducer";
import patientRootSaga from "./patientregistrationpage/rootSaga";

const sagaMiddleware =
  createSagaMiddleware();

const rootReducer =
  combineReducers({
    auth: authReducer,
    patient: patientReducer, // ✅ Add this
  });

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware
  )
);

// Run sagas
sagaMiddleware.run(
  loginRootSaga
);

sagaMiddleware.run(
  patientRootSaga
);

export default store;