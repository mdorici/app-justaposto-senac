import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import history from "./history";
import { getAuthData } from "./storage";

const VITE_REACT_APP_BACKEND_URL =
  import.meta.env.VITE_REACT_APP_BACKEND_URL || "http://localhost:8080";
const VITE_REACT_APP_CLIENT_ID =
  import.meta.env.VITE_REACT_APP_CLIENT_ID || "myclientid";
const VITE_REACT_APP_CLIENT_SECRET =
  import.meta.env.VITE_REACT_APP_CLIENT_SECRET || "myclientsecret";

console.log("BASE_URL:", VITE_REACT_APP_BACKEND_URL);

type LoginData = {
  username: string;
  password: string;
};

export const BASE_URL = VITE_REACT_APP_BACKEND_URL;
const CLIENT_ID = VITE_REACT_APP_CLIENT_ID;
const CLIENT_SECRET = VITE_REACT_APP_CLIENT_SECRET;

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // ...
    return config;
  },
  function (error) {
    // ...
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // ...
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      history.push("/admin/auth");
    }
    return Promise.reject(error);
  }
);
