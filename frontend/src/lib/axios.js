import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-application-t8tb.onrender.com" : "/api",
  withCredentials: true,
});