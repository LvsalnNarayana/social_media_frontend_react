/* eslint-disable prettier/prettier */
/* eslint-disable require-unicode-regexp */
import React, { useState, useEffect } from "react";

import { Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const PasswordCriteriaChecker = ({ sx, password }) => {
  const [passwordCriteria, setPasswordCriteria] = useState({
    small: false,
    number: false,
    symbol: false,
    length: false,
    capital: false,
  });

  useEffect(() => {
    setPasswordCriteria({
      length: password.length >= 8,
      number: (/\d/).test(password),
      small: (/[a-z]/).test(password),
      capital: (/[A-Z]/).test(password),
      symbol: (/[!@#$%^&*(),.?":{}|<>]/).test(password),
    });
  }, [password]);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%", ...sx }}
      gap={1}
    >
      <Typography
        sx={{
          gap: 1,
          ml: 0.5,
          display: "flex",
          fontSize: "12px",
          alignItems: "center",
          justifyContent: "flex-start",
          color: passwordCriteria.capital ? "green" : "#00000060",
        }}
      >
        {passwordCriteria.capital ? (
          <CheckCircleIcon fontSize="small" sx={{ fontSize: "18px" }} />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" sx={{ fontSize: "18px" }} />
        )}
        At least one uppercase letter
      </Typography>
      <Typography
        sx={{
          gap: 1,
          ml: 0.5,
          display: "flex",
          fontSize: "12px",
          alignItems: "center",
          justifyContent: "flex-start",
          color: passwordCriteria.small ? "green" : "#00000060",
        }}
      >
        {passwordCriteria.small ? (
          <CheckCircleIcon fontSize="small" sx={{ fontSize: "18px" }} />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" sx={{ fontSize: "18px" }} />
        )}
        At least one lowercase letter
      </Typography>
      <Typography
        sx={{
          gap: 1,
          ml: 0.5,
          display: "flex",
          fontSize: "12px",
          alignItems: "center",
          justifyContent: "flex-start",
          color: passwordCriteria.number ? "green" : "#00000060",
        }}
      >
        {passwordCriteria.number ? (
          <CheckCircleIcon fontSize="small" sx={{ fontSize: "18px" }} />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" sx={{ fontSize: "18px" }} />
        )}
        At least one number
      </Typography>
      <Typography
        sx={{
          gap: 1,
          ml: 0.5,
          display: "flex",
          fontSize: "12px",
          alignItems: "center",
          justifyContent: "flex-start",
          color: passwordCriteria.symbol ? "green" : "#00000060",
        }}
      >
        {passwordCriteria.symbol ? (
          <CheckCircleIcon fontSize="small" sx={{ fontSize: "18px" }} />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" sx={{ fontSize: "18px" }} />
        )}
        At least one symbol
      </Typography>
      <Typography
        sx={{
          gap: 1,
          ml: 0.5,
          display: "flex",
          fontSize: "12px",
          alignItems: "center",
          justifyContent: "flex-start",
          color: passwordCriteria.length ? "green" : "#00000060",
        }}
      >
        {passwordCriteria.length ? (
          <CheckCircleIcon fontSize="small" sx={{ fontSize: "18px" }} />
        ) : (
          <CheckCircleOutlineIcon fontSize="small" sx={{ fontSize: "18px" }} />
        )}
        Minimum 8 characters
      </Typography>
    </Stack>
  );
};

export default PasswordCriteriaChecker;
