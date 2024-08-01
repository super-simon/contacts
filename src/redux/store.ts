import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { settingsSlice } from "./slices/settingsSlice";

export const store = configureStore({
  reducer: {
    settingsSlice: settingsSlice.reducer,
  },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
