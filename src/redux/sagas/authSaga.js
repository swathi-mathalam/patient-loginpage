import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../services/api";
import {
  LOGIN_REQUEST,
} from "../types/authTypes";

import {
  loginSuccess,
  loginFailure,
} from "../actions/authActions";

function* loginSaga(action) {
  try {
    const response = yield call(
      API.get,
      "/users"
    );

    const users = response.data;

    const matchedUser = users.find(
      (user) =>
        user.email === action.payload.email
    );

    if (matchedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify(matchedUser)
      );

      yield put(loginSuccess(matchedUser));
    } else {
      yield put(
        loginFailure("Invalid Credentials")
      );
    }
  } catch (error) {
    yield put(
      loginFailure("Login Failed")
    );
  }
}

export default function* authSaga() {
  yield takeLatest(
    LOGIN_REQUEST,
    loginSaga
  );
}