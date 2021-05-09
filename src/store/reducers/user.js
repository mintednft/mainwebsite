import {
  USERS_SUCCESS,
  USERS_FAILED,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILED,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
  AUTH_LOGOUT,
  STATUS_SUCCESS,
  STATUS_FAILED,
  RESET_USERS,
  UPDATE_USERS_DATA,
} from "../actionTypes";

import { mergeData, updateData } from "../../utils";

const initialState = {
  data: [],
  page: 1,
  total: 0,
  fetch_status: null,
  add_status: null,
  delete_status: null,
  update_status: null,
  stats: {},
  stats_status: null,
};

const withoutAdmin = (data = []) => {
  return data?.filter((o) => o.role !== "admin");
};

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USERS_SUCCESS: {
      return {
        ...state,
        ...payload,
        fetch_status: STATUS_SUCCESS,
        data: withoutAdmin(mergeData(state, payload)),
      };
    }

    case UPDATE_USERS_DATA: {
      return {
        ...state,
        ...updateData(state, payload.id, payload.newData),
      };
    }

    case USERS_FAILED: {
      return {
        ...state,
        fetch_status: STATUS_FAILED,
      };
    }

    case ADD_USER_SUCCESS: {
      return {
        ...state,
        add_status: STATUS_SUCCESS,
      };
    }

    case ADD_USER_FAILED: {
      return {
        ...state,
        add_status: STATUS_FAILED,
      };
    }

    case EDIT_USER_SUCCESS: {
      return {
        ...state,
        update_status: STATUS_SUCCESS,
      };
    }

    case EDIT_USER_FAILED: {
      return {
        ...state,
        update_status: STATUS_FAILED,
      };
    }

    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        delete_status: STATUS_SUCCESS,
      };
    }

    case DELETE_USER_FAILED: {
      return {
        ...state,
        delete_status: STATUS_FAILED,
      };
    }

    case AUTH_LOGOUT:
      return initialState;

    case RESET_USERS:
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
