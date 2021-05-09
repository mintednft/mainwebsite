import { fork } from "redux-saga/effects";
import watchAuthentication from "./auth";
import watchUsers from "./user";

export default function* rootSaga() {
  yield fork(watchAuthentication);
  yield fork(watchUsers);
}
