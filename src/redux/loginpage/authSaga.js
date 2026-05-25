// redux/loginpage/authSaga.js

import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";

import API from "../../services/api";

import {
  LOGIN_REQUEST,
} from "./authTypes";

import {
  loginSuccess,
  loginFailure,
} from "./authActions";

function* loginSaga(action) {
  try {
    console.log(
      "Login Payload:",
      action.payload
    );

    // API Call
    const response = yield call(
      API.get,
      "/users"
    );

    const users =
      response.data;

    console.log(
      "Users Data:",
      users
    );

    // Match user email
    const matchedUser =
      users.find(
        (user) =>
          user.email ===
          action.payload.email
      );

    if (matchedUser) {
      // Save user
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
    console.error(
      "Saga Error:",
      error
    );

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