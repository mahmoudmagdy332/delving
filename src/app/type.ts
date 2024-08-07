import { book, course, Package } from "./utils/types/types";

export type langInitialState = {
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
};
export type settingInitialState = {
  lang: string;
  translations: { [key: string]: string };
  languageLoading: boolean;
};

export type user = {
  name: string;
  email: string;
  phone: string;
  image: string;
  gender: string;
  status: string;
  wallet: number;
  points: number;
};
export type userInitialState = {
  user: user | null;
  courses: course[];
  Packages: Package[];
  books: book[];
};
