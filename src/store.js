/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./state/appSlice";
import createPostReducer from "./state/createPost";

export const store = configureStore({
  reducer: {
    app: appReducer,
    createPost: createPostReducer,
  },
});
