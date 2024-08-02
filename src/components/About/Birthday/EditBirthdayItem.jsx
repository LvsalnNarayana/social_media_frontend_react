/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import moment from "moment";
import React, { useState } from "react";

import { Stack, Select, MenuItem, Typography } from "@mui/material";

import ChangeAudience from "../../shared/ChangeAudience";

const EditBirthdayItem = ({ birthdayItem }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, index) => {
    return 1950 + index;
  });
  const monthsInYear = Array.from({ length: 13 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const daysInMonth = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const [newBirthdayItem, setBirthdayItem] = useState({
    date: birthdayItem.date || "",
    visibility: birthdayItem || "global",
  });

  return (
    <Stack
      gap={1}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Stack
        gap={0.2}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "16px" }}>
          Birthday
        </Typography>
        <ChangeAudience label />
        <Stack
          gap={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Select
            id="birthday_year_select"
            value={moment(newBirthdayItem.date).format("YYYY") || ""}
            displayEmpty
            MenuProps={{
              PaperProps: {
                elevation: 0,
                sx: {
                  mt: 0.2,
                  py: 0.6,
                  width: "80px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                },
              },
            }}
            onChange={(event) => {
              setBirthdayItem({
                ...newBirthdayItem,
                date: moment(event.target.value).format("YYYY-MM-DD"),
              });
            }}
            sx={{
              my: 1,
              width: "80px",
              "& .MuiSelect-select": {
                p: 0.6,
              },
            }}
            size="small"
          >
            <MenuItem sx={{ px: 0.8, py: 0.8 }} value="" disabled>
              <Typography sx={{ fontSize: "14px" }}>Year</Typography>
            </MenuItem>{" "}
            {years.map((year) => {
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
          <Select
            id="birthday_month_select"
            value={moment(newBirthdayItem.date).format("MM") || ""}
            displayEmpty
            MenuProps={{
              PaperProps: {
                elevation: 0,
                sx: {
                  mt: 0.2,
                  py: 0.6,
                  width: "80px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                },
              },
            }}
            onChange={(event) => {
              setBirthdayItem({
                ...newBirthdayItem,
                date: moment(event.target.value).format("YYYY-MM-DD"),
              });
            }}
            sx={{
              my: 1,
              width: "80px",
              "& .MuiSelect-select": {
                p: 0.6,
              },
            }}
            size="small"
          >
            <MenuItem sx={{ px: 0.8, py: 0.8 }} value="" disabled>
              <Typography sx={{ fontSize: "14px" }}>Month</Typography>
            </MenuItem>
            {monthsInYear.map((day) => {
              return (
                <MenuItem
                  key={day}
                  sx={{ px: 0.8, py: 0.8 }}
                  value={day.toString().padStart(2, "0")}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    {day.toString().padStart(2, "0")}
                  </Typography>
                </MenuItem>
              );
            })}
          </Select>
          <Select
            id="birthday_month_select"
            value={moment(newBirthdayItem.date).format("DD") || ""}
            displayEmpty
            MenuProps={{
              PaperProps: {
                elevation: 0,
                sx: {
                  mt: 0.2,
                  py: 0.6,
                  width: "80px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                },
              },
            }}
            onChange={(event) => {
              setBirthdayItem({
                ...newBirthdayItem,
                date: moment(event.target.value).format("YYYY-MM-DD"),
              });
            }}
            sx={{
              my: 1,
              width: "80px",
              "& .MuiSelect-select": {
                p: 0.6,
              },
            }}
            size="small"
          >
            <MenuItem sx={{ px: 0.8, py: 0.8 }} value="" disabled>
              <Typography sx={{ fontSize: "14px" }}>Month</Typography>
            </MenuItem>
            {daysInMonth.map((day) => {
              return (
                <MenuItem
                  key={day}
                  sx={{ px: 0.8, py: 0.8 }}
                  value={day.toString().padStart(2, "0")}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    {day.toString().padStart(2, "0")}
                  </Typography>
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EditBirthdayItem;
