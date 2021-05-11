import {
  USERS_REQUESTED,
  ADD_USER_REQUESTED,
  EDIT_USER_REQUESTED,
  DELETE_USER_REQUESTED,
  RESET_USERS,
} from "../actionTypes";

export const getUsersAction = (payload) => {
  return {
    type: USERS_REQUESTED,
    payload,
  };
};

export const addUserAction = (payload) => {
  return {
    type: ADD_USER_REQUESTED,
    payload,
  };
};

export const updateUserAction = (userId, payload) => {
  return {
    type: EDIT_USER_REQUESTED,
    payload,
    meta: { userId },
  };
};

export const deleteUserAction = (userId) => {
  return {
    type: DELETE_USER_REQUESTED,
    payload: userId,
  };
};

export const resetUsersAction = (payload) => {
  return {
    type: RESET_USERS,
    payload,
  };
};
