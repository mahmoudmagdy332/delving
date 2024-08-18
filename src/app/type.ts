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

export type User = {
  name: string;
  email: string;
  phone: string;
  image: string;
  gender: string;
  status: string;
  wallet: number;
  points: number;
};
export type UserState = {
  user: User | null;
  isPopup: boolean;
};
export type userInitialState = {
  user: User | null;
  courses: course[];
  Packages: Package[];
  books: book[];
};
