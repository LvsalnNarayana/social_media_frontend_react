/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable max-statements */
/* eslint-disable wrap-regex */
/* eslint-disable require-unicode-regexp */
import toast from "react-hot-toast";
import React, { useState } from "react";

import { Stack, Button, Typography, Divider } from "@mui/material";

import InputField from "../shared/InputField";
import passwordChecker from "../../utilities/passwordCheker";
import PasswordCriteriaChecker from "../shared/PasswordCriteriaChecker";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfrimPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    const tempErrors = { ...errors };

    if (password === "") {
      tempErrors.password = "Password is required";
      setFormIsValid(false);
    } else if (!passwordChecker(password)) {
      tempErrors.password = "Password does not meet all required criteria.";
      setFormIsValid(false);
    }
    if (confirmPassword === "") {
      tempErrors.confirmPassword = "Password must be re-entered";
      setFormIsValid(false);
    } else if (confirmPassword !== password) {
      tempErrors.confirmPassword = "Password did not match";
      setFormIsValid(false);
    }
    setErrors(tempErrors);
    if (
      Object.values(tempErrors).every((x) => {
        return x === "";
      })
    ) {
      console.log("form is valid");
      toast.success("Password reset successful");
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        pb: 4,
        px: 2,
        width: "300px",
        borderRadius: 3,
        border: "1px solid #cccccc70",
      }}
    >
      <Typography
        variant="h6"
        sx={{ pt: 2, width: "100%", textAlign: "center" }}
      >
        Reset Password
      </Typography>
      <Divider sx={{ mb: 2, width: "100%" }} />
      <InputField
        name="password"
        label="Password"
        value={password}
        changeValue={(value) => {
          setPassword(value);
          setErrors({ ...errors, password: "" });
        }}
        fullWidth
        size="small"
        id="reset_password_input"
        placeholder="Enter your email here"
        error={errors.password}
      />
      <PasswordCriteriaChecker password={password} sx={{ mb: 2 }} />
      <InputField
        name="confirm_password"
        label="Confirm Password"
        value={confirmPassword}
        changeValue={(value) => {
          setConfrimPassword(value);
          setErrors({ ...errors, confirmPassword: "" });
        }}
        fullWidth
        size="small"
        id="reset_confirm_password_input"
        placeholder="re-enter your password here"
        error={errors.confirmPassword}
      />
      <Button
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        size="small"
        disableElevation
      >
        Reset
      </Button>
    </Stack>
  );
};

export default ResetPassword;
