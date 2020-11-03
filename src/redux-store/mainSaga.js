import { takeLatest, all } from "redux-saga/effects";

/* ------------- Types ------------- */
import { AuthTypes } from "./models/auth";
import { signInByEmail } from "./sagas/auth";

export function* mainSaga() {
  yield all([takeLatest(AuthTypes.SIGN_IN_BY_EMAIL, signInByEmail)]);
}
