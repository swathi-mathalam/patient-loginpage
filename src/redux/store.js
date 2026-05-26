import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import createSagaMiddleware from "redux-saga";

// ================= LOGIN =================
import authReducer from "./loginpage/authReducer";
import loginRootSaga from "./loginpage/rootSaga";

// ================= PATIENT =================
import patientReducer from "./patientregistrationpage/patientReducer";
import patientRootSaga from "./patientregistrationpage/rootSaga";

// ================= APPOINTMENT =================
import appointmentReducer from "./appointment/appointmentReducer";
import appointmentSaga from "./appointment/appointmentSaga";

const sagaMiddleware =
  createSagaMiddleware();

const rootReducer =
  combineReducers({
    auth: authReducer,

    patient:
      patientReducer,

    appointment:
      appointmentReducer,
  });

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware
  )
);

// ================= RUN SAGAS =================

sagaMiddleware.run(
  loginRootSaga
);

sagaMiddleware.run(
  patientRootSaga
);

sagaMiddleware.run(
  appointmentSaga
);

export default store;