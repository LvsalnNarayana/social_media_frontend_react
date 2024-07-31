/* eslint-disable max-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
import moment from "moment";
import React, { useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Stack,
  Select,
  Button,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import CustomTooltip from "../shared/CustomTooltip";

const BirthdayItem = () => {
  const birthdayItem = {
    visibility: "global",
    icon: CakeOutlinedIcon,
    date: "2024-11-11T14:10:30Z",
  };
  const [editBirthdayOpen, setEditBirthdayMenu] = useState(false);
  const monthsInYear = Array.from({ length: 13 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );
  const daysInMonth = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0"),
  );

  return (
    <>
      {!editBirthdayOpen && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
          >
            <birthdayItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                {moment(birthdayItem.date).format("DD MMMM")}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>Birth date</Typography>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <CustomTooltip
              padding={4}
              title={
                birthdayItem.visibility[0].toUpperCase() +
                birthdayItem.visibility.slice(1)
              }
              color="#000"
            >
              {birthdayItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>
            <IconButton
              disableRipple
              onClick={() => {
                setEditBirthdayMenu(true);
              }}
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      )}
      {editBirthdayOpen && (
        <Stack
          gap={1}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
          >
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                Birthday
              </Typography>
              <Select
                id="birthday_visibility_select"
                value={birthdayItem.visibility}
                displayEmpty
                MenuProps={{
                  PaperProps: {
                    elevation: 0,
                    sx: {
                      mt: 0.2,
                      py: 0.6,
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                    },
                  },
                }}
                onChange={() => {}}
                sx={{
                  my: 1,
                  width: "140px",
                  "& .MuiSelect-select": {
                    p: 0.6,
                  },
                }}
                size="small"
              >
                <MenuItem sx={{ px: 0.8, py: 0.8 }} value="only_me">
                  <Stack
                    gap={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <LockIcon fontSize="small" />
                    <Typography sx={{ fontSize: "14px" }}>Only Me</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem sx={{ px: 0.8, py: 0.8 }} value="friends">
                  <Stack
                    gap={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <GroupIcon fontSize="small" />
                    <Typography sx={{ fontSize: "14px" }}>Friends</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem sx={{ px: 0.8, py: 0.8 }} value="global">
                  <Stack
                    gap={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <PublicIcon fontSize="small" />
                    <Typography sx={{ fontSize: "14px" }}>Global</Typography>
                  </Stack>
                </MenuItem>
              </Select>
              <Stack
                gap={2}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Select
                  id="birthday_year_select"
                  value={moment(birthdayItem.date).format("YYYY")}
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
                  onChange={() => {}}
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
                  </MenuItem>
                  <MenuItem sx={{ px: 0.8, py: 0.8 }} value="2024">
                    <Typography sx={{ fontSize: "14px" }}>2024</Typography>
                  </MenuItem>
                  <MenuItem sx={{ px: 0.8, py: 0.8 }} value="2023">
                    <Typography sx={{ fontSize: "14px" }}>2023</Typography>
                  </MenuItem>
                  <MenuItem sx={{ px: 0.8, py: 0.8 }} value="2022">
                    <Typography sx={{ fontSize: "14px" }}>2022</Typography>
                  </MenuItem>
                </Select>
                <Select
                  id="birthday_month_select"
                  value={moment(birthdayItem.date).format("MM")}
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
                  onChange={() => {}}
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
                  value={moment(birthdayItem.date).format("MM")}
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
                  onChange={() => {}}
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
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ width: "100%" }}
          >
            <Button disableElevation size="small" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => {
                return setEditBirthdayMenu(false);
              }}
              disableElevation
              size="small"
              variant="outlined"
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default BirthdayItem;
