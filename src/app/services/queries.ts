/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import {
  allBooksAPI,
  coursesAPI,
  getCategoriesQueryAPI,
  getHomeAPI,
  getSettingAPI,
  instructorsAPI,
  instructorsAPIPagination,
  PackagesAPIPagination,
} from "../utils/api";
import { getLogoutAPI, getStudentProfileAPI } from "../utils/apiAuth";
import { CoursesParams } from "../utils/types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { changeLoading } from "../slices/settingSlice";
import { removeUser } from "../slices/UserSlice";

export function settingQuery() {
  return useQuery({
    queryKey: ["setting"],
    queryFn: async () => await getSettingAPI(),
    refetchOnMount: false,
    retry: 1,
  });
}
export function categoriesQuery() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getCategoriesQueryAPI(),
    refetchOnMount: false,
    retry: 1,
  });
}
export const UseInstructorsQuery = (currentPage: number) => {
  return useQuery({
    queryKey: ["instructors", currentPage],
    queryFn: async () => await instructorsAPIPagination(currentPage),
    refetchOnMount: false,
  });
};
export const UsePackagesQuery = (currentPage: number) => {
  return useQuery({
    queryKey: ["packages", currentPage],
    queryFn: async () => await PackagesAPIPagination(currentPage),
    refetchOnMount: false,
  });
};
export function homeQuery() {
  return useQuery({
    queryKey: ["home"],
    queryFn: async () => await getHomeAPI(),
    refetchOnMount: false,
  });
}

export function authUserQuery() {
  return useQuery({
    queryKey: ["UserAuth"],
    queryFn: async () => await getStudentProfileAPI(),

    refetchOnWindowFocus: false,
  });
}

export function logoutQuery() {
  const dispatch = useDispatch<AppDispatch>();
  return useQuery({
    queryKey: ["logout"],
    queryFn: async () => {
      dispatch(changeLoading(true))
      const l= await getLogoutAPI()
      await dispatch(removeUser())
      dispatch(changeLoading(false))
      return l;
    },
    enabled: false,
  });
}

export function CoursesQuery({ name, id }: CoursesParams) {
  return useQuery({
    queryKey: ["Courses", { name, id }],
    queryFn: async () => await coursesAPI({ name, id }),
  });
}
export function AllInstructorQuery() {
  return useQuery({
    queryKey: ["AllInstructor"],
    queryFn: async () => await instructorsAPI(),
  });
}

export function UseBooksQuery() {
  return useQuery({
    queryKey: ["BooksPagenation"],
    queryFn: async () => await allBooksAPI(1),
  });
}
