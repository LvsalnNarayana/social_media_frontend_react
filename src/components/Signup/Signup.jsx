/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable require-unicode-regexp */
/* eslint-disable wrap-regex */
/* eslint-disable no-undefined */
/* eslint-disable operator-linebreak */
/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable max-lines */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Stack, Button, Select, MenuItem, Typography } from "@mui/material";

import InputField from "../shared/InputField";
import useData from "../../hooks/data/useData";
import passwordChecker from "../../utilities/passwordCheker";
import {
  setSignup,
  selectAuthState,
  setSignupErrors,
} from "../../state/authSlice";

const Signup = () => {
  const { countries } = useData();
  const dispatch = useDispatch();
  const { signup, signup_errors } = useSelector(selectAuthState);

  const [formIsValid, setFormIsValid] = useState(false);
  const [validating, setValidating] = useState(false);

  const validateInput = () => {
    setFormIsValid(true);
    setValidating(true);
    const tempErrors = {
      email: "",
      phone: "",
      lastname: "",
      birthday: "",
      password: "",
      location: "",
      firstname: "",
      confirmPassword: "",
    };

    if (signup.firstname === "") {
      tempErrors.firstname = "Firstname is required";
      setFormIsValid(false);
    }
    if (signup.lastname === "") {
      tempErrors.lastname = "Lastname is required";
      setFormIsValid(false);
    }
    if (signup.phone === "" && signup.countryCode === "") {
      tempErrors.phone = "Phone & Country code is required";
      setFormIsValid(false);
    }
    if (signup.phone === "" && signup.countryCode !== "") {
      tempErrors.phone = "Phone is required";
      setFormIsValid(false);
    }
    if (signup.countryCode === "" && signup.phone !== "") {
      tempErrors.phone = "Country code is required";
      setFormIsValid(false);
    }
    if (signup.email === "") {
      tempErrors.email = "Email is required";
      setFormIsValid(false);
    } else if (!/\S+@\S+\.\S+/.test(signup.email)) {
      tempErrors.email = "Invalid email address";
      setFormIsValid(false);
    }
    if (signup.password === "") {
      tempErrors.password = "Password is required";
      setFormIsValid(false);
    } else if (!passwordChecker(signup.password)) {
      tempErrors.password = "Password does not meet all required criteria.";
      setFormIsValid(false);
    }
    if (signup.confirmPassword === "") {
      tempErrors.confirmPassword = "Password must be re-entered";
      setFormIsValid(false);
    } else if (signup.confirmPassword !== signup.password) {
      tempErrors.confirmPassword = "Password did not match";
      setFormIsValid(false);
    }
    if (signup.birthday === "") {
      tempErrors.birthday = "Birthday is required";
      setFormIsValid(false);
    }
    if (signup.location === "") {
      tempErrors.location = "Location is required";
      setFormIsValid(false);
    }
    dispatch(setSignupErrors(tempErrors));
    setValidating(false);

    return formIsValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInput()) {
      console.log("Form is valid, submitting...");
      // Submit logic here
    } else {
      console.log("Errors in form");
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap={0}
      sx={{ p: 2, width: 450, borderRadius: 5, border: "1px solid #ccc" }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 6, fontWeight: 600, fontSize: "20px" }}
      >
        Signup
      </Typography>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        flex="1 1 0"
        width="100%"
        gap={1}
      >
        <InputField
          name="firstname"
          disabled={validating}
          value={signup.firstname}
          changeValue={(value) => {
            dispatch(setSignup({ ...signup, firstname: value }));
            dispatch(setSignupErrors({ ...signup_errors, firstname: "" }));
          }}
          placeholder="Firstname"
          error={signup_errors.firstname}
        />
        <InputField
          name="firstname"
          disabled={validating}
          value={signup.lastname}
          changeValue={(value) => {
            dispatch(setSignup({ ...signup, lastname: value }));
            dispatch(setSignupErrors({ ...signup_errors, lastname: "" }));
          }}
          placeholder="Lastname"
          error={signup_errors.lastname}
        />
      </Stack>
      <InputField
        name="email"
        disabled={validating}
        value={signup.lastname}
        changeValue={(value) => {
          dispatch(setSignup({ ...signup, email: value }));
          dispatch(setSignupErrors({ ...signup_errors, email: "" }));
        }}
        placeholder="Email"
        error={signup_errors.email}
      />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        gap={2}
      >
        <Select
          id="country_code_select"
          value={signup.countryCode}
          displayEmpty
          disabled={validating}
          MenuProps={{
            PaperProps: {
              elevation: 0,
              sx: {
                mt: 1,
                py: 0.4,
                maxHeight: "200px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              },
            },
          }}
          onChange={(e) => {
            dispatch(setSignup({ ...signup, countryCode: e.target.value }));
          }}
          sx={{
            my: 0.5,
            width: "150px",
            "& .MuiSelect-select": {
              p: 0.85,
            },
          }}
          size="small"
        >
          <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
            <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
              code
            </Typography>
          </MenuItem>
          {countries?.map((country, index) => {
            return (
              <MenuItem
                key={index}
                sx={{ px: 0.8, py: 0.2 }}
                value={country.alpha2}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={1}
                >
                  <img
                    alt={country.name}
                    src={`/flags/${country.alpha2}.png`}
                    style={{ width: 20, height: 20, maxWidth: "100%" }}
                  />
                  <Typography
                    sx={{ fontSize: "13px", textTransform: "uppercase" }}
                  >
                    {country.alpha2}
                  </Typography>
                </Stack>
              </MenuItem>
            );
          })}
        </Select>
        <InputField
          name="phone"
          disabled={validating}
          value={signup.phone}
          changeValue={(value) => {
            dispatch(setSignup({ ...signup, phone: value }));
            dispatch(setSignupErrors({ ...signup_errors, phone: "" }));
          }}
          placeholder="Phone"
          error={signup_errors.phone}
        />
      </Stack>
      <InputField
        name="birthday"
        disabled={validating}
        value={signup.birthday}
        changeValue={(value) => {
          dispatch(setSignup({ ...signup, birthday: value }));
          dispatch(setSignupErrors({ ...signup_errors, birthday: "" }));
        }}
        placeholder="Birthday"
        error={signup_errors.birthday}
      />
      <InputField
        name="passowrd"
        disabled={validating}
        value={signup.passowrd}
        changeValue={(value) => {
          dispatch(setSignup({ ...signup, passowrd: value }));
          dispatch(setSignupErrors({ ...signup_errors, passowrd: "" }));
        }}
        placeholder="Password"
        error={signup_errors.password}
      />
      <InputField
        name="confirm_password"
        disabled={validating}
        value={signup.confirmPassword}
        changeValue={(value) => {
          dispatch(setSignup({ ...signup, confirmPassword: value }));
          dispatch(setSignupErrors({ ...signup_errors, confirmPassword: "" }));
        }}
        placeholder="Confirm Password"
        error={signup_errors.confirmPassword}
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <Select
          id="country_code_select"
          value={signup.location}
          displayEmpty
          fullWidth
          disabled={validating}
          MenuProps={{
            PaperProps: {
              elevation: 0,
              sx: {
                mt: 1,
                py: 0.4,
                maxWidth: "100%",
                maxHeight: "200px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              },
            },
          }}
          onChange={(e) => {
            dispatch(setSignup({ ...signup, location: e.target.value }));
          }}
          sx={{
            p: 0.1,
            my: 0.5,
            width: "100%",
            "& .MuiSelect-select": {
              p: 0.7,
            },
          }}
          size="small"
        >
          <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
            <Typography sx={{ fontSize: "13px", color: "#00000060" }}>
              Location
            </Typography>
          </MenuItem>
          {countries?.map((country, index) => {
            return (
              <MenuItem
                key={index}
                sx={{ px: 0.8, py: 0.2 }}
                value={country.alpha2}
              >
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap={1}
                >
                  <img
                    alt={country.name}
                    src={`/flags/${country.alpha2}.png`}
                    style={{ width: 20, height: 20, maxWidth: "100%" }}
                  />
                  <Typography sx={{ fontSize: "13px" }}>
                    {country.name}
                  </Typography>
                </Stack>
              </MenuItem>
            );
          })}
        </Select>
        {signup_errors.location !== "" &&
          signup_errors.location !== null &&
          signup_errors.location !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {signup_errors.location}
            </Typography>
          )}
      </Stack>
      <Button
        onClick={(e) => {
          return handleSubmit(e);
        }}
        variant="contained"
        disableElevation
        disableRipple
        size="small"
        color="success"
        sx={{ mt: 3, mx: "auto", width: "80%" }}
      >
        Signup
      </Button>
    </Stack>
  );
};

export default Signup;
