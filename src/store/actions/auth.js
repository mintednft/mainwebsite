import {
  AUTH_REGISTRATION_REQUESTED,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT,
  AUTH_PASSWORD_UPDATE_REQUESTED,
  RESET_AUTH,
} from "../actionTypes";

export const registerUserAction = (payload) => {
  return {
    type: AUTH_REGISTRATION_REQUESTED,
    payload,
  };
};

export const loginUserAction = (payload) => {
  return {
    type: AUTH_LOGIN_REQUESTED,
    payload,
  };
};

export const updatePasswordAction = (payload) => {
  return {
    type: AUTH_PASSWORD_UPDATE_REQUESTED,
    payload,
  };
};

export const logoutUserAction = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const resetAuthAction = (payload) => {
  return {
    type: RESET_AUTH,
    payload,
  };
};
