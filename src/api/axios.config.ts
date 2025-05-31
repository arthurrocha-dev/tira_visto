import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const Axios = () => {
  const headers: Record<string, string> = {
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-version": "2.0",
  };

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 32000,
    headers,
  });

  return axiosInstance;
};
