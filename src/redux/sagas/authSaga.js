import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";

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
    console.log(
      "Login Payload:",
      action.payload
    );

    const response = yield call(
      API.get,
      "/users"
    );

    const users = response.data;

    console.log(
      "Users Data:",
      users
    );

    const matchedUser =
      users.find(
        (user) =>
          user.email ===
          action.payload.email
      );

    if (matchedUser) {
      localStorage.setItem(
        "user",
        JSON.stringify(
          matchedUser
        )
      );

      yield put(
        loginSuccess(
          matchedUser
        )
      );

      console.log(
        "Login Success"
      );
    } else {
      yield put(
        loginFailure(
          "Invalid Email"
        )
      );

      console.log(
        "Login Failed"
      );
    }
  } catch (error) {
    console.error(error);

    yield put(
      loginFailure(
        "Login Failed"
      )
    );
  }
}

export default function* authSaga() {
  yield takeLatest(
    LOGIN_REQUEST,
    loginSaga
  );
}