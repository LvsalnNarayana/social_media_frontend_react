/* eslint-disable operator-linebreak */
import React from "react";

import { Select, MenuItem, Typography } from "@mui/material";

const SelectDateTime = ({ id, type, value, changeValue }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, index) => {
    return 1950 + index;
  });
  const monthsInYear = Array.from({ length: 13 }, (_, i) => {
    return (i + 1).toString().padStart(2, "0");
  });
  const daysInMonth = Array.from({ length: 31 }, (_, i) => {
    return (i + 1).toString().padStart(2, "0");
  });

  return (
    <Select
      id={id}
      value={value || ""}
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
        changeValue(event?.target?.value);
      }}
      sx={{
        my: 0.5,
        width: "100px",
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
          {type}
        </Typography>
      </MenuItem>
      {type === "year" &&
        years.map((year) => {
          return (
            <MenuItem
              key={year}
              sx={{ px: 0.8, py: 0.2 }}
              value={year.toString()}
            >
              <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                {year.toString()}
              </Typography>
            </MenuItem>
          );
        })}
      {type === "month" &&
        monthsInYear.map((year) => {
          return (
            <MenuItem
              key={year}
              sx={{ px: 0.8, py: 0.2 }}
              value={year.toString()}
            >
              <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                {year.toString()}
              </Typography>
            </MenuItem>
          );
        })}
      {type === "days" &&
        daysInMonth.map((year) => {
          return (
            <MenuItem
              key={year}
              sx={{ px: 0.8, py: 0.2 }}
              value={year.toString()}
            >
              <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                {year.toString()}
              </Typography>
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default SelectDateTime;
