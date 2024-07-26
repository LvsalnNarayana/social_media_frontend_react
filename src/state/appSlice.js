/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFriends: [],
  postDraftScreen: "draft",
  activeComponent: "story",
  createPostDialogOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveComponent: (state, action) => {
      state.activeComponent = action.payload;
    },
    setPostDraftScreen: (state, action) => {
      state.postDraftScreen = action.payload;
    },
    setSelectedFriends: (state, action) => {
      state.selectedFriends = action.payload;
    },
    setCreatePostDialogOpen: (state, action) => {
      state.createPostDialogOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActiveComponent,
  setPostDraftScreen,
  setSelectedFriends,
  setCreatePostDialogOpen,
} = appSlice.actions;
export const selectAppState = (state) => {
  return state.app;
};
export default appSlice.reducer;
