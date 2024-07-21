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

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import {
  Stack,
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import useData from "../../hooks/data/useData";

const Signup = () => {
  const { countries } = useData();
  const [inputs, setInputs] = useState({
    email: "",
    phone: "",
    lastname: "",
    birthday: "",
    password: "",
    location: "",
    firstname: "",
    countryCode: "",
    confirmPassword: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [validating, setValidating] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    small: false,
    number: false,
    symbol: false,
    length: false,
    capital: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    lastname: "",
    birthday: "",
    password: "",
    location: "",
    firstname: "",
    countryCode: "",
    confirmPassword: "",
  });

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

    if (inputs.firstname === "") {
      tempErrors.firstname = "Firstname is required";
      setFormIsValid(false);
    }
    if (inputs.lastname === "") {
      tempErrors.lastname = "Lastname is required";
      setFormIsValid(false);
    }
    if (inputs.phone === "" && inputs.countryCode === "") {
      tempErrors.phone = "Phone & Country code is required";
      setFormIsValid(false);
    }
    if (inputs.phone === "" && inputs.countryCode !== "") {
      tempErrors.phone = "Phone is required";
      setFormIsValid(false);
    }
    if (inputs.countryCode === "" && inputs.phone !== "") {
      tempErrors.phone = "Country code is required";
      setFormIsValid(false);
    }
    if (inputs.email === "") {
      tempErrors.email = "Email is required";
      setFormIsValid(false);
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      tempErrors.email = "Invalid email address";
      setFormIsValid(false);
    }
    if (inputs.password === "") {
      tempErrors.password = "Password is required";
      setFormIsValid(false);
    } else if (
      !Object.values(passwordCriteria).every((x) => {
        return x === true;
      })
    ) {
      tempErrors.password = "Password does not meet all required criteria.";
      setFormIsValid(false);
    }
    if (inputs.confirmPassword === "") {
      tempErrors.confirmPassword = "Password must be re-entered";
      setFormIsValid(false);
    } else if (inputs.confirmPassword !== inputs.password) {
      tempErrors.confirmPassword = "Password did not match";
      setFormIsValid(false);
    }
    if (inputs.birthday === "") {
      tempErrors.birthday = "Birthday is required";
      setFormIsValid(false);
    }
    if (inputs.location === "") {
      tempErrors.location = "Location is required";
      setFormIsValid(false);
    }

    setErrors(tempErrors);
    setValidating(false);

    return formIsValid;
  };

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;

    if (fieldName === "password") {
      setPasswordCriteria({
        number: /\d/.test(value),
        length: value.length >= 8,
        small: /[a-z]/.test(value),
        capital: /[A-Z]/.test(value),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }

    setInputs((prev) => {
      return { ...prev, [fieldName]: value };
    });
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
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ mb: 2, width: "100%" }}
          gap={0}
        >
          <TextField
            id="firstname_input"
            placeholder="Firstname"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            value={inputs.firstname}
            onChange={(e) => {
              return handleInputChange(e, "firstname");
            }}
            sx={{
              p: 0.2,
              my: 0.5,
            }}
          />
          {errors.firstname !== "" &&
            errors.firstname !== null &&
            errors.firstname !== undefined && (
              <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
                {errors.firstname}
              </Typography>
            )}
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ mb: 2, width: "100%" }}
          gap={0}
        >
          <TextField
            id="lastname_input"
            placeholder="Lastname"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            value={inputs.lastname}
            onChange={(e) => {
              return handleInputChange(e, "lastname");
            }}
            sx={{
              p: 0.2,
              my: 0.5,
            }}
          />
          {errors.lastname !== "" &&
            errors.lastname !== null &&
            errors.lastname !== undefined && (
              <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
                {errors.lastname}
              </Typography>
            )}
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <TextField
          id="email_input"
          placeholder="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={inputs.email}
          onChange={(e) => {
            return handleInputChange(e, "email");
          }}
          sx={{
            p: 0.2,
            my: 0.5,
          }}
        />
        {errors.email !== "" &&
          errors.email !== null &&
          errors.email !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {errors.email}
            </Typography>
          )}
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          gap={2}
        >
          <Select
            id="country_code_select"
            value={inputs.countryCode}
            displayEmpty
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
              setInputs({ ...inputs, location: e.target.value });
            }}
            sx={{
              p: 0.1,
              my: 0.5,
              width: "150px",
            }}
            size="small"
          >
            <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
              <Typography sx={{ fontSize: "13px", textTransform: "uppercase" }}>
                _______
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
          <TextField
            id="phone_input"
            placeholder="Phone number"
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
            value={inputs.phone}
            onChange={(e) => {
              return handleInputChange(e, "phone");
            }}
            sx={{
              p: 0.2,
              my: 0.5,
            }}
          />
        </Stack>
        {errors.phone !== "" &&
          errors.phone !== null &&
          errors.phone !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {errors.phone}
            </Typography>
          )}
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <TextField
          id="birthday_input"
          placeholder="Birthday"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={inputs.birthday}
          onChange={(e) => {
            return handleInputChange(e, "birthday");
          }}
          sx={{
            p: 0.2,
            my: 0.5,
          }}
        />
        {errors.birthday !== "" &&
          errors.birthday !== null &&
          errors.birthday !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {errors.birthday}
            </Typography>
          )}
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <TextField
          id="password_input"
          placeholder="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={inputs.password}
          onChange={(e) => {
            return handleInputChange(e, "password");
          }}
          sx={{
            p: 0.2,
            my: 0.5,
          }}
        />
        {errors.password !== "" &&
          errors.password !== null &&
          errors.password !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {errors.password}
            </Typography>
          )}
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ my: 1, width: "100%" }}
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
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ fontSize: "18px" }}
              />
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
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ fontSize: "18px" }}
              />
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
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ fontSize: "18px" }}
              />
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
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ fontSize: "18px" }}
              />
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
              <CheckCircleOutlineIcon
                fontSize="small"
                sx={{ fontSize: "18px" }}
              />
            )}
            Minimum 8 characters
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <TextField
          id="confirm_password_input"
          placeholder="Confirm password"
          variant="outlined"
          fullWidth
          margin="normal"
          size="small"
          value={inputs.confirmPassword}
          onChange={(e) => {
            return handleInputChange(e, "confirmPassword");
          }}
          sx={{
            p: 0.2,
            my: 0.5,
            width: "100%",
            border: "none",
            outline: "none",
            "& .MuiInputBase-root": {
              fontSize: "13px",
            },
            "& .MuiInputBase-root:placeholder": {
              fontSize: "13px",
            },
            "& .MuiInputBase-root:focus": {
              border: 0,
              outline: "none",
            },
            "& .MuiInputBase-root:focusVisible": {
              border: 0,
              outline: "none",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 1,
                borderColor: "dodgerblue",
              },
          }}
        />
        {errors.confirmPassword !== "" &&
          errors.confirmPassword !== null &&
          errors.confirmPassword !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {errors.confirmPassword}
            </Typography>
          )}
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2, width: "100%" }}
        gap={0}
      >
        <Select
          id="country_code_select"
          value={inputs.location}
          displayEmpty
          fullWidth
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
            setInputs({ ...inputs, location: e.target.value });
          }}
          sx={{
            p: 0.1,
            my: 0.5,
            width: "100%",
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
        {errors.location !== "" &&
          errors.location !== null &&
          errors.location !== undefined && (
            <Typography sx={{ ml: 0.5, color: "red", fontSize: "11px" }}>
              {errors.location}
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
