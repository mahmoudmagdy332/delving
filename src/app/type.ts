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
  fname: string;
  lname: string;
  email: string;
  phone: string;
  image: string;
  gender: string;
  status: string;
  wallet: number;
  points: number;
  survey_submited:boolean;
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
export type answerType={survey_id:null|number,answer_id:null|number}
export type quesions={
id: number,
title: string,
answers:{id:number,image:string,title:string}[]
}
