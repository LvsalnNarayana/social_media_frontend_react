/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
/* eslint-disable no-extra-parens */
/* eslint-disable max-statements */
import moment from "moment";
import React, { useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  Menu,
  Stack,
  Button,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  IconButton,
  ListItemIcon,
  FormControlLabel,
} from "@mui/material";

import InputField from "../shared/InputField";
import CustomTooltip from "../shared/CustomTooltip";

const EducationItem = () => {
  const [editEducationItem, setEditEducationItem] = useState(false);
  const schoolItem = {
    id: "school_item_1",
    city: "London",
    graduated: true,
    tooltip: "Global",
    position: "Student",
    visibility: "global",
    school: "King's College",
    icon: SchoolOutlinedIcon,
    endDate: "2022-05-18T14:10:30Z",
    startDate: "2020-05-18T14:10:30Z",
    attendedFor: "BSc Computer Science",
    description: "Studied various computer science subjects.",
    courses: [
      {
        grade: "A",
        name: "Introduction to Programming",
      },
      {
        grade: "A+",
        name: "Data Structures and Algorithms",
      },
    ],
  };
  const [educationMenuAnchor, setEducationMenuAnchor] = useState(null);
  const educationMenuOpen = Boolean(educationMenuAnchor);
  const handlecloseWorkMenu = () => {
    setEducationMenuAnchor(null);
  };

  return (
    <>
      {!editEducationItem && (
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
            <schoolItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                Studied at <b>{schoolItem.school}</b>
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                from {moment(schoolItem.startDate).format("YYYY")} to{" "}
                {schoolItem.graduated ? (
                  moment(schoolItem.endDate).format("YYYY")
                ) : (
                  <>current</>
                )}
              </Typography>
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
                schoolItem.visibility[0].toUpperCase() +
                schoolItem.visibility.slice(1)
              }
              color="#000"
            >
              {schoolItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>
            <IconButton
              disableRipple
              onClick={(event) => {
                return setEducationMenuAnchor(event.currentTarget);
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              elevation={1}
              id="work-menu"
              anchorEl={educationMenuAnchor}
              open={educationMenuOpen}
              onClose={handlecloseWorkMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  mt: 1,
                  width: "auto",
                  borderRadius: 2,
                  overflow: "visible",
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                },
              }}
            >
              <MenuItem
                sx={{ p: 1, px: 1.5, fontSize: "13px" }}
                onClick={() => {
                  setEditEducationItem(true);
                  setEducationMenuAnchor(null);
                }}
              >
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Edit School / College
              </MenuItem>
              <MenuItem sx={{ p: 1, px: 1.5, fontSize: "13px" }}>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                Delete School / College
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      )}
      {editEducationItem && (
        <Stack sx={{ my: 2 }}>
          <Select
            id={`education_from_select_${schoolItem.id}`}
            value={schoolItem.visibility}
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
          <InputField
            name="school_name"
            placeholder="Enter your school name"
            value={schoolItem.school}
          />
          <InputField
            rows={4}
            multiple
            name="school_description"
            placeholder="Description"
            value={schoolItem.description}
          />
          <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
            Time period
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
            sx={{ my: 1 }}
          >
            <Select
              id={`education_from_select_${schoolItem.id}`}
              value={moment(schoolItem.startDate).format("YYYY")}
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
              onChange={() => {}}
              sx={{
                my: 0.5,
                width: "100px",
                "& .MuiSelect-select": {
                  p: 0.85,
                },
              }}
              size="small"
            >
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  Year
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2024">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2024
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2023">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2023
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2022">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2022
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2021">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2021
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2020">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2020
                </Typography>
              </MenuItem>
            </Select>
            <Select
              id={`education_to_select_${schoolItem.id}`}
              value={moment(schoolItem.endDate).format("YYYY")}
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
              onChange={() => {}}
              sx={{
                my: 0.5,
                width: "100px",
                "& .MuiSelect-select": {
                  p: 0.85,
                },
              }}
              size="small"
            >
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  Year
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2024">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2024
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2023">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2023
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2022">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2022
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2021">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2021
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2020">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2020
                </Typography>
              </MenuItem>
            </Select>
          </Stack>
          <FormControlLabel
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
            control={
              <Checkbox
                disableRipple
                size="small"
                checked={schoolItem.graduated}
              />
            }
            label="Graduated"
          />
          <Stack
            gap={1}
            sx={{ mt: 2 }}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
              Courses
            </Typography>
            <InputField
              name="course_1"
              placeholder="Enter your course name"
              value={schoolItem.courses[0].name}
              sx={{ mb: 0 }}
            />
            <InputField
              name="course_2"
              placeholder="Enter your course name"
              value={schoolItem.courses[1].name}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ my: 2 }}
          >
            <Button disableElevation size="small" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => {
                return setEditEducationItem(false);
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

export default EducationItem;
