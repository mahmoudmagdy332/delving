import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../config";
import { OrderType, password, userData } from "./types/types";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("access_token");
    token
      && (config.headers["Authorization"] = `Bearer ${token}`)
    
    return config;
  },

);

export const getLogoutAPI = () => api.get("logout");

export const getsurveyAPI = () => api.get("survey");

export const getStudentProfileAPI = () => api.get("profile");
export const UpdateProfileAPI = (data: userData) => api.post("profile", data,{
  headers: {
    'Content-Type':'multipart/form-data'
},
  
});
export const changePasswordAPI = (data: password) =>
  api.post("change-password", data);


export const orderAPI = (data:OrderType ) =>
  api.post("order", data);