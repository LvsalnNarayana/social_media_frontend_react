/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./state/postSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
