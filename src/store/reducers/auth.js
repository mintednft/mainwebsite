import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_REGISTRATION_SUCCESS,
  AUTH_REGISTRATION_FAILED,
  AUTH_LOGOUT,
  AUTH_PASSWORD_UPDATE_SUCCESS,
  AUTH_PASSWORD_UPDATE_FAILED,
  STATUS_FAILED,
  STATUS_SUCCESS,
  RESET_AUTH,
} from "../actionTypes";

const initialState = {
  token: null,
  user: {},
  auth_status: null,
  password_update_status: null,
};

function persistSession(state) {
  window.localStorage.setItem(
    "_auth",
    JSON.stringify({ ...state, auth_status: null })
  );
}

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH_REGISTRATION_SUCCESS:
    case AUTH_LOGIN_SUCCESS: {
      const updated = {
        ...state,
        token: payload.token,
        user: payload.user,
        auth_status: STATUS_SUCCESS,
      };
      persistSession(updated);
      return updated;
    }

    case AUTH_REGISTRATION_FAILED:
    case AUTH_LOGIN_FAILED: {
      const updated = {
        ...state,
        token: null,
        user: {},
        auth_status: STATUS_FAILED,
      };
      persistSession(updated);
      return updated;
    }

    case AUTH_PASSWORD_UPDATE_SUCCESS: {
      return {
        ...state,
        password_update_status: STATUS_SUCCESS,
      };
    }

    case AUTH_PASSWORD_UPDATE_FAILED: {
      return {
        ...state,
        password_update_status: STATUS_FAILED,
      };
    }

    case AUTH_LOGOUT:
      persistSession(initialState);
      return initialState;

    case RESET_AUTH:
      if (payload === true) {
        return initialState;
      }
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
