import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 2000,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function (response) {
    if (response.data) {
      return response.data.content;
    }
    return {};
  },
  function (error) {
    return Promise.reject(error);
  }
);
