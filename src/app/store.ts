import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import UserSlice from "./slices/UserSlice";
import settingSlice from "./slices/settingSlice";
import coursesSlice from "./slices/coursesSlice";
import AboutusSlice from "./slices/AboutusSlice";
import FQsSlice from "./slices/FQsSlice";
import CareersSlice from "./slices/CareersSlice";
import categoriesSlice from "./slices/categoriesSlice";
import homeSlice from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    languageReducer: languageSlice,
    UserReducer: UserSlice,
    settingReducer: settingSlice,
    CoursesReducer: coursesSlice,
    AboutAsReducer: AboutusSlice,
    QuestionReducer: FQsSlice,
    CareersReducer: CareersSlice,
    categoriesReducer:categoriesSlice,
    homeReducer:homeSlice, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
