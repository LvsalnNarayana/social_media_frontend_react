/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeComponent: "post",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveComponent } = appSlice.actions;
export const appState = (state) => {
  return state.app;
};
export default appSlice.reducer;
