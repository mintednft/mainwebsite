import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import logger from "../utils/logger";

import rootReducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

let preloadedState = {};
const persistedAuthState = localStorage.getItem("_auth");

if (persistedAuthState) {
  preloadedState = {
    auth: JSON.parse(persistedAuthState),
  };
}

const store = createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(sagas);

export default store;
