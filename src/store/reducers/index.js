import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
});

export default rootReducer;
