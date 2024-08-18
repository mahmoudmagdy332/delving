import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import UserSlice from "./slices/UserSlice";
import settingSlice from "./slices/settingSlice";
import coursesSlice from "./slices/coursesSlice";

export const store = configureStore({
  reducer: {
    languageReducer: languageSlice,
    UserReducer: UserSlice,
    settingReducer: settingSlice,
    CoursesReducer: coursesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
