import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";


export const store = configureStore({
  reducer: {
    languageReducer: languageSlice,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
