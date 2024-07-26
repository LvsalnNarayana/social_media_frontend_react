/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable max-statements */
/* eslint-disable wrap-regex */
/* eslint-disable require-unicode-regexp */
import toast from "react-hot-toast";
import React, { useState } from "react";

import { Stack, Button } from "@mui/material";

import InputField from "../shared/InputField";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleSubmit = () => {
    const tempErrors = { ...errors };

    if (!email) {
      setFormIsValid(false);
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email) && !email.trim().includes(" ")) {
      setFormIsValid(false);
      tempErrors.email = "Please enter a valid email";
    }
    setErrors(tempErrors);
    if (
      Object.values(tempErrors).every((value) => {
        return value === "";
      })
    ) {
      console.log("Form submitted");
      setEmail("");
      toast.success("Verification mail sent successfully");
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "300px" }}
    >
      <InputField
        value={email}
        changeValue={(value) => {
          setEmail(value);
          setErrors({ ...errors, email: "" });
        }}
        fullWidth
        size="small"
        name="reset_password"
        placeholder="Enter your email here"
        error={errors.email}
      />
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        size="small"
        disableElevation
      >
        Send verification mail
      </Button>
    </Stack>
  );
};

export default ForgotPassword;
