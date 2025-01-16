/* eslint-disable wrap-regex */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
/* eslint-disable operator-linebreak */
/* eslint-disable max-statements */
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Stack, Button, Typography } from "@mui/material";

import InputField from "../shared/InputField";
import passwordChecker from "../../utilities/passwordCheker";
import PasswordCriteriaChecker from "../shared/PasswordCriteriaChecker";
import {
  setLogin,
  setLoginErrors,
  selectAuthState,
} from "../../state/authSlice";

const Signin = () => {
  const { login, login_errors } = useSelector(selectAuthState);
  const dispatch = useDispatch();

  const validateForm = () => {
    const tempErrors = { email: "", password: "" };
    let formIsValid = true;

    if (!login.email) {
      formIsValid = false;
      tempErrors.email = "Email is required";
    } else if (
      !/\S+@\S+\.\S+/u.test(login.email) &&
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

  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{ overflowY: "auto", overflowX: "hidden" }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        flexShrink={0}
        gap={3}
        sx={{ p: 3, width: 350, borderRadius: 5, border: "1px solid #ccc" }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
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
        >
          Login
        </Button>
        <Typography variant="body1" fontSize={12}>
          Don&apos;t have an account? <Link to="/signup">signup</Link>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Signin;
