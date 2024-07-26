/* eslint-disable no-console */
/* eslint-disable no-negated-condition */
/* eslint-disable no-restricted-globals */
/* eslint-disable wrap-regex */
/* eslint-disable require-unicode-regexp */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { MuiOtpInput } from "mui-one-time-password-input";

import { Stack, Button, Typography } from "@mui/material";

const OTP = () => {
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState({ otp: "" });

  const matchIsNumeric = (text) => {
    return text !== "" && !isNaN(Number(text));
  };

  const validateChar = (value) => {
    return matchIsNumeric(value);
  };
  const handleChange = (newValue) => {
    setOtp(newValue);
    setErrors({ otp: "" });
  };
  const handleSubmit = () => {
    const tempErrors = { ...errors, otp: "" };

    if (otp !== "") {
      console.log("OTP Submitted");
    } else {
      tempErrors.otp = "OTP is required";
    }
    setErrors(tempErrors);
  };

  return (
    <Stack
      gap={
        Object.values(errors).every((value) => {
          return value !== "";
        }) ? 0 : 2
      }
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <MuiOtpInput
        value={otp}
        onChange={handleChange}
        length={4}
        validateChar={validateChar}
        sx={{
          gap: 2,
          "& .MuiOtpInput-TextField": {
            width: "50px",
          },
          "& .MuiOtpInput-TextField .MuiInputBase-input": {
            p: 2,
          },
        }}
      />
      {errors.otp && (
        <Typography sx={{ my: 1, ml: 0.5, color: "red", fontSize: "11px" }}>
          {errors.otp}
        </Typography>
      )}
      <Button
        onClick={handleSubmit}
        disableElevation
        disableRipple
        variant="contained"
      >
        Submit
      </Button>
    </Stack>
  );
};

export default OTP;
