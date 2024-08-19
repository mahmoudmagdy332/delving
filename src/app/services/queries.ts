/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import {
  allBooksAPI,
  coursesAPI,
  getAboutAPI,
  getCareersAPI,
  getFQsAPI,
  getHomeAPI,
  getSettingAPI,
  getTermsAPI,
  instructorsAPI,
  instructorsAPIPagination,
  PackagesAPIPagination,
} from "../utils/api";
import { getLogoutAPI, getStudentProfileAPI } from "../utils/apiAuth";
import { CoursesParams } from "../utils/types/types";

export function settingQuery() {
  return useQuery({
    queryKey: ["setting"],
    queryFn: async () => await getSettingAPI(),
    refetchOnMount: false,
    retry: 1,
  });
}

export function AboutUsQuery() {
  return useQuery({
    queryKey: ["About"],
    queryFn: async () => await getAboutAPI(),
  });
}
export function TermsQuery() {
  return useQuery({
    queryKey: ["Terms"],
    queryFn: async () => await getTermsAPI(),
  });
}
export function FQsQuery() {
  return useQuery({
    queryKey: ["FQs"],
queryFn: async () => await getFQsAPI(),
  });
}
export function CareerQuery() {
  return useQuery({
    queryKey: ["career"],
queryFn: async () => await getCareersAPI(),
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
  return useQuery({
    queryKey: ["logout"],
    queryFn: async () => await getLogoutAPI(),
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
