// languageSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { coursesSliceType } from "../utils/types/types";

const initialState: coursesSliceType = {
  courses: null,
  currentPage:1,
  last_page: 1,
  top:true,
  filter:{
    rating: undefined ,
    user_ids: undefined , 
    min_price : undefined , 
    max_price : undefined , 
    category_ids:undefined
}
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
        state.filter = {...state.filter , ...action.payload};
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
  },
  setCurrentPage: (state, action) => {
    state.currentPage = action.payload;
},
  setLastPage: (state, action) => {
    state.last_page = action.payload;
  },
  },
});

export const { changeFilter,setCourses,setCurrentPage,setLastPage } = coursesSlice.actions;

export default coursesSlice.reducer;

export const useCoursesSliceSelector = useSelector.withTypes<RootState>();
