// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { coursesSliceType } from "../utils/types/types";

const initialState: coursesSliceType = {
  courses: null,
  singleCourse: null,
  category_id: undefined,
  search: undefined,
  level:0,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setSingleCourse: (state, action) => {
      state.singleCourse = action.payload;
    },
    setCategory: (state, action) => {
      state.category_id = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
  },
});

export const { setCourses, setSearch, setCategory ,setSingleCourse,setLevel} = coursesSlice.actions;

export default coursesSlice.reducer;

export const useCoursesSliceSelector = useSelector.withTypes<RootState>();
