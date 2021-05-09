import { API } from "./index";

const REGISTRATION_URL = "auth/register";
const LOGIN_URL = "auth/login";

export const registerUserService = (data) => {
  return API.post(REGISTRATION_URL, data);
};

export const loginUserService = (data) => {
  return API.post(LOGIN_URL, data);
};
