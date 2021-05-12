import React from "react";

const AUTH = {};

export default function useTempAuth() {
  AUTH.loggedIn = !!window.localStorage.getItem("_ta");
  const setAuth = (loggedIn) => {
    if (loggedIn) {
      window.localStorage.getItem("_ta");
    } else {
      window.localStorage.removeItem("_ta");
    }
    AUTH.loggedIn = loggedIn;
  };
  return [!!AUTH.loggedIn, setAuth];
}
