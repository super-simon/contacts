import { createSlice } from "@reduxjs/toolkit";

type SettingsSliceType = {
  themeStyle: "dark" | "light";
};

const settingsInitialState: SettingsSliceType = {
  themeStyle:
    (localStorage.getItem("themeStyle") as "dark" | "light") ?? "light",
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState: settingsInitialState,
  reducers: {
    toggleThemeStyle: (state) => {
      state.themeStyle = state.themeStyle === "dark" ? "light" : "dark";
      localStorage.setItem("themeStyle", state.themeStyle);
    },
  },
});

export const settingsActions = {
  ...settingsSlice.actions,
};
