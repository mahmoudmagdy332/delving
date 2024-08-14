import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import UserSlice from "./slices/UserSlice";


export const store = configureStore({
  reducer: {
    languageReducer: languageSlice,
    UserReducer:UserSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
