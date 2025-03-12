import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "./moduleSlice";

export const store = configureStore({
  reducer: {
    module: moduleReducer, // Add the module reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
