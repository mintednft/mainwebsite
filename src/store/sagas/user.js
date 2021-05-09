import { put, call, takeEvery } from "redux-saga/effects";
import {
  getUsersService,
  editUserService,
  deleteUserService,
  addUserService,
} from "../services/user";

import {
  USERS_REQUESTED,
  USERS_SUCCESS,
  USERS_FAILED,
  ADD_USER_REQUESTED,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  DELETE_USER_REQUESTED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  EDIT_USER_REQUESTED,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  UPDATE_USERS_DATA,
} from "../actionTypes";

export function* getUsersSaga(action) {
  try {
    const payload = yield call(getUsersService, action.payload);
    yield put({ type: USERS_SUCCESS, payload });
  } catch (error) {
    yield put({ type: USERS_FAILED, error });
  }
}

export function* addUserSaga(action) {
  try {
    const payload = yield call(addUserService, action.payload);
    yield put({ type: ADD_USER_SUCCESS, payload });
    yield put({
      type: UPDATE_USERS_DATA,
      payload: { id: null, newData: payload },
    });
  } catch (error) {
    yield put({ type: ADD_USER_FAILED, error });
  }
}
export function* editUserSaga(action) {
  try {
    const payload = yield call(
      editUserService,
      action.meta.userId,
      action.payload
    );
    yield put({ type: EDIT_USER_SUCCESS, payload });
    yield put({
      type: UPDATE_USERS_DATA,
      payload: { id: action.meta.userId, newData: action.payload },
    });
  } catch (error) {
    yield put({ type: EDIT_USER_FAILED, error });
  }
}
export function* deleteUserSaga(action) {
  try {
    const payload = yield call(deleteUserService, action.payload);
    yield put({ type: DELETE_USER_SUCCESS, payload });
    yield put({ type: UPDATE_USERS_DATA, payload: { id: action.payload } });
  } catch (error) {
    yield put({ type: DELETE_USER_FAILED, error });
  }
}

export default function* watchUsers() {
  yield takeEvery(USERS_REQUESTED, getUsersSaga);
  yield takeEvery(ADD_USER_REQUESTED, addUserSaga);
  yield takeEvery(EDIT_USER_REQUESTED, editUserSaga);
  yield takeEvery(DELETE_USER_REQUESTED, deleteUserSaga);
}
