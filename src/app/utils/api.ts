import axios from "axios";
import {
  confrimCode,
  confrimPassword,
  filterType,
  IFormContuctInput,
  userData,
} from "./types/types";
import { baseUrl } from "../config";

const api = axios.create({
  baseURL: baseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const SingleBookAPI = (id: string) =>
  api.post("bookById", null, {
    params: {
      book_id: id,
    },
  });
export const SingleInstructorAPI = (id: string) =>
  api.post("instructorById", { user_id: id });

export const postSignupUserApi = (data: userData) => api.post("signup", data);
export const getSettingAPI = () => api.get("settings");
export const getHomeAPI = () => api.get("home");
export const postLoginUserAPI = (data: userData) => api.post("login", data);
export const ForgetPasswordAPI = (data: userData) =>
  api.post(`forgetPassword?email=${data.email}`);
export const ConfrimCodeAPI = (data: confrimCode) =>
  api.post("confrimCode", data);
export const ConfirmSignupCodeAPI = (data: confrimCode) =>
  api.post("confirmSignupCode", data);

export const confrimPasswordAPI = (data: confrimPassword) =>
  api.post("confrimPassword", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.token}`,
    },
  });
export const CategoryCoursesAPI = (id: string) =>
  api.post("courses/filter/bycaregory", { category_id: id });
export const AllCoursesAPI = () => api.get("courses");

export const CoursesAPI = (filter: filterType, currentPage: number) =>
  api.post(`courses/filter?page=${currentPage}`, filter);

export const instructorsAPIPagination = (currentPage: number) =>
  api.get(`instructors-paginate?page=${currentPage}`);
export const PackagesAPIPagination = (currentPage: number) =>
  api.get(`package-paginate?page=${currentPage}`);

export const SearchInstructorAPI = (name: string) =>
  api.post("serach-instructor", { name: name });
export const instructorsAPI = () => api.get("instructors");

export const SinglePackageAPI = (id: string) =>
  api.post("packageById", { package_id: id });

export const CourseDetailsAPI = (id: string) =>
  api.post("/courseById", { course_id: id });

export const contactUsAPI = (contuctForm: IFormContuctInput) =>
  api.post("/contact-us", contuctForm);

export const allBooksAPI = (currentPage: number) =>
  api.get(`book-paginate?page=${currentPage}`);
