/* eslint-disable operator-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forgotPassword: {
    email: "",
  },
  forgotPassword_errors: {
    email: "",
  },
  login: {
    email: "",
    password: "",
  },
  login_errors: {
    email: "",
    password: "",
  },
  signup: {
    email: "",
    phone: "",
    lastname: "",
    birthday: "",
    password: "",
    location: "",
    firstname: "",
    countryCode: "",
    confirmPassword: "",
  },
  signup_errors: {
    email: "",
    phone: "",
    lastname: "",
    birthday: "",
    password: "",
    location: "",
    firstname: "",
    countryCode: "",
    confirmPassword: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setSignup: (state, action) => {
      state.signup = action.payload;
    },
    setLoginErrors: (state, action) => {
      state.login_errors = action.payload;
    },
    setSignupErrors: (state, action) => {
      state.signup_errors = action.payload;
    },
  },
});

export const { setLogin, setSignup, setLoginErrors, setSignupErrors } =
  authSlice.actions;
export const selectAuthState = (state) => {
  return state.auth;
};
export default authSlice.reducer;
