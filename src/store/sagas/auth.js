import { put, call, takeLatest } from "redux-saga/effects";
import { registerUserService, loginUserService } from "../services/auth";

import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTRATION_REQUESTED,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_FAILED,
} from "../actionTypes";

export function* registerSaga(action) {
  try {
    const payload = yield call(registerUserService, action.payload);
    yield put({ type: AUTH_REGISTRATION_SUCCESS, payload });
  } catch (error) {
    yield put({ type: AUTH_REGISTRATION_FAILED, error });
  }
}

export function* loginSaga(action) {
  try {
    const payload = yield call(loginUserService, action.payload);
    yield put({ type: AUTH_LOGIN_SUCCESS, payload });
  } catch (error) {
    yield put({ type: AUTH_LOGIN_FAILED, error });
  }
}

export default function* watchAuthentication() {
  yield takeLatest(AUTH_REGISTRATION_REQUESTED, registerSaga);
  yield takeLatest(AUTH_LOGIN_REQUESTED, loginSaga);
}
