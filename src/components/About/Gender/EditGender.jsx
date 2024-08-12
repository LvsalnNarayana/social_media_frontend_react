/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";

import { Stack, Select, MenuItem, Typography } from "@mui/material";

const EditGender = ({ gender }) => {
  const [genderItem, setGenderItem] = useState({
    value: gender.value || "",
    visibility: gender.visibility || "global",
  });

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "16px" }}>
        Gender
      </Typography>
      <Select
        id="gender_select"
        value={genderItem.value || ""}
        displayEmpty
        MenuProps={{
          PaperProps: {
            elevation: 0,
            sx: {
              mt: 0.2,
              py: 0.4,
              maxHeight: "200px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            },
          },
        }}
        onChange={(event) => {
          setGenderItem({
            ...genderItem,
            value: event.target.value,
          });
        }}
        sx={{
          my: 0.5,
          width: "200px",
          "& .MuiSelect-select": {
            p: 0.85,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        }}
        size="small"
      >
        <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
          <Typography
            sx={{
              fontSize: "13px",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Gender
          </Typography>
        </MenuItem>
        <MenuItem sx={{ px: 0.8, py: 0.2 }} value="male">
          <Typography
            sx={{
              fontSize: "13px",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Male
          </Typography>
        </MenuItem>
        <MenuItem sx={{ px: 0.8, py: 0.2 }} value="female">
          <Typography
            sx={{
              fontSize: "13px",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            Female
          </Typography>
        </MenuItem>
      </Select>
    </Stack>
  );
};

export default EditGender;
