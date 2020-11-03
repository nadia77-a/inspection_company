import { put, call } from "redux-saga/effects";

import AuthActions from "redux-store/models/auth";

import { fetchLogin } from "api-calls/auth";

export function* signInByEmail(credencials) {
  const response = yield call(
    fetchLogin,
    credencials.email,
    credencials.password
  );
  console.log("response", response);
  if (response && response.data) {
    sessionStorage.setItem("accountData", JSON.stringify(response.data));
  }
  if (response && response.error) {
    if (response.error.response) {
      if (response.error.response.data) {
        yield put(
          AuthActions.setAccountInfoError(response.error.response.data)
        );
      }
    }
  }
}
