/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
import moment from "moment";
import React, { useState } from "react";

import { Stack, Typography } from "@mui/material";

import ChangeAudience from "../../shared/ChangeAudience";
import SelectDateTime from "../../shared/SelectDateTime";

const EditBirthdayItem = ({ birthdayItem }) => {
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
        gap={1}
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
          <SelectDateTime
            type="year"
            id="birthday_year_select"
            value={moment(newBirthdayItem.date).format("YYYY") || ""}
            onChange={(event) => {
              setBirthdayItem({
                ...newBirthdayItem,
                date: moment(event.target.value).format("YYYY-MM-DD"),
              });
            }}
          />
          <SelectDateTime
            type="month"
            id="birthday_month_select"
            value={moment(newBirthdayItem.date).format("MM") || ""}
            onChange={(event) => {
              setBirthdayItem({
                ...newBirthdayItem,
                date: moment(event.target.value).format("YYYY-MM-DD"),
              });
            }}
          />
          <SelectDateTime
            type="days"
            id="birthday_day_select"
            value={moment(newBirthdayItem.date).format("DD") || ""}
            onChange={(event) => {
              setBirthdayItem({
                ...newBirthdayItem,
                date: moment(event.target.value).format("YYYY-MM-DD"),
              });
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EditBirthdayItem;
