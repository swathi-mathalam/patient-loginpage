

import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import createSagaMiddleware from "redux-saga";

import authReducer from "./reducers/authReducer";
import patientReducer from "./reducers/patientReducer";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware =
  createSagaMiddleware();

const rootReducer =
  combineReducers({
    auth: authReducer,
    patient: patientReducer,
  });

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;