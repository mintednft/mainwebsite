import { API } from "./index";
import { toQueryParams } from "../../utils";

const USERS_URL = "v1/api/users/";

export const getUsersService = (params) => {
  const url = `${USERS_URL}?${toQueryParams(params)}`;
  return API.get(url);
};

export const addUserService = (data) => {
  return API.post(USERS_URL, data);
};

export const editUserService = (userId, data) => {
  return API.put(USERS_URL + userId, data);
};

export const deleteUserService = (userId) => {
  return API.delete(USERS_URL + userId);
};
