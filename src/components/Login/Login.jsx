/* eslint-disable camelcase */
/* eslint-disable wrap-regex */
/* eslint-disable require-unicode-regexp */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable no-undefined */
/* eslint-disable max-lines */
/* eslint-disable no-negated-condition */
/* eslint-disable max-statements */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Stack, Button, Divider, Typography } from "@mui/material";

import InputField from "../shared/InputField";
import passwordChecker from "../../utilities/passwordCheker";
import PasswordCriteriaChecker from "../shared/PasswordCriteriaChecker";
import {
  setLogin,
  setLoginErrors,
  selectAuthState,
} from "../../state/authSlice";

const Login = () => {
  const { login, login_errors } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const validateForm = () => {
    const tempErrors = { email: "", password: "" };
    let formIsValid = true;

    if (!login.email) {
      formIsValid = false;
      tempErrors.email = "Email is required";
    } else if (
      !/\S+@\S+\.\S+/.test(login.email) &&
      !login.email.trim().includes(" ")
    ) {
      formIsValid = false;
      tempErrors.email = "Please enter a valid email";
    }
    // Password validation
    if (!login.password) {
      formIsValid = false;
      tempErrors.password = "Password is required";
    } else if (!passwordChecker(login.password)) {
      formIsValid = false;
      tempErrors.password = "Password does not meet all required criteria.";
    }

    dispatch(setLoginErrors(tempErrors));

    return formIsValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      console.log("Sign in with credentials", {
        email: login.email,
        password: login.password,
      });
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };

  const handleFacebookSignIn = () => {
    console.log("Sign in with Facebook");
  };

  const handleTwitterSignIn = () => {
    console.log("Sign in with Twitter");
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ p: 2, width: 300, borderRadius: 5, border: "1px solid #ccc" }}
    >
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Sign In
      </Typography>
      <InputField
        label="Email"
        name="email"
        value={login.email}
        changeValue={(value) => {
          dispatch(setLogin({ ...login, email: value }));
          dispatch(setLoginErrors({ ...login_errors, email: "" }));
        }}
        placeholder="Enter your email here"
        error={login_errors.email}
      />
      <InputField
        label="Password"
        name="password"
        value={login.password}
        changeValue={(value) => {
          dispatch(setLogin({ ...login, password: value }));
          dispatch(setLoginErrors({ ...login_errors, password: "" }));
        }}
        placeholder="Enter your password here"
        error={login_errors.password}
        type="password"
      />
      <PasswordCriteriaChecker password={login.password} />
      <Button
        disableElevation
        disableRipple
        onClick={handleSignIn}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      <Divider
        variant="body2"
        sx={{ mt: 2, mb: 1, width: "100%", fontSize: "12px" }}
      >
        or
      </Divider>
      <Stack
        direction="column"
        spacing={1.5}
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Button
          sx={{ width: "100%", fontSize: "12px" }}
          variant="outlined"
          onClick={handleGoogleSignIn}
        >
          <img
            alt="google"
            style={{ width: 18, height: 18, marginRight: 5 }}
            src="/google.png"
          />
          Signin with Google
        </Button>
        <Button
          sx={{ width: "100%", fontSize: "12px" }}
          variant="outlined"
          onClick={handleFacebookSignIn}
          color="primary"
        >
          <img
            alt="facebook"
            style={{ width: 18, height: 18, marginRight: 5 }}
            src="/facebook.png"
          />
          Signin with Facebook
        </Button>
        <Button
          sx={{ width: "100%", fontSize: "12px" }}
          variant="outlined"
          onClick={handleTwitterSignIn}
          color="primary"
        >
          <img
            alt="twitter"
            style={{ width: 18, height: 18, marginRight: 5 }}
            src="/twitter.png"
          />
          Signin with Twitter
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
