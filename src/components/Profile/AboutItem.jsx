/* eslint-disable max-statements */
import React, { useState } from "react";

import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SportsMartialArtsOutlinedIcon from "@mui/icons-material/SportsMartialArtsOutlined";
import {
  Menu,
  Stack,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import CustomTooltip from "../shared/CustomTooltip";

const AboutItem = () => {
  const [workMenuAnchor, setWorkMenuAnchor] = useState(null);
  const workMenuOpen = Boolean(workMenuAnchor);
  const handlecloseWorkMenu = () => {
    setWorkMenuAnchor(null);
  };
  const workItem = {
    current: true,
    city: "Bangalore",
    tooltip: "Global",
    visibility: "public",
    endDate: "2023-12-31",
    startDate: "2021-01-01",
    icon: <WorkOutlineIcon />,
    position: "Software Engineer",
    title: "Works at Amazon India",
    description: "Working on cloud computing technologies.",
  };

  const schoolItem = {
    city: "London",
    graduated: true,
    tooltip: "Global",
    position: "Student",
    visibility: "public",
    endDate: "2015-06-30",
    startDate: "2010-09-01",
    school: "King's College",
    icon: <SchoolOutlinedIcon />,
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

  const cityItem = {
    endDate: "",
    position: "",
    current: true,
    city: "London",
    tooltip: "Global",
    visibility: "public",
    startDate: "2018-01-01",
    title: "Lives in London",
    icon: <CottageOutlinedIcon />,
    description: "Living in the heart of the city.",
  };

  const relationItem = {
    status: "Single",
    visibility: "public",
    icon: <FavoriteBorderOutlinedIcon />,
  };

  const hobbiesItem = {
    visibility: "friends",
    icon: <SportsMartialArtsOutlinedIcon />,
    hobbies: ["Reading", "Traveling", "Photography", "Cooking"],
  };
  const languagesItem = {
    visibility: "public",
    icon: <LanguageOutlinedIcon />,
    languages: ["English", "Spanish", "French"],
  };
  const phoneItem = {
    phone: "+1234567890",
    visibility: "public",
    icon: <LocalPhoneOutlinedIcon />,
  };
  const emailItem = {
    visibility: "public",
    email: "narayana@example.com",
    icon: <MailOutlineOutlinedIcon />,
  };
  const birthdayItem = {
    date: "24-10-2023",
    visibility: "public",
    icon: <CakeOutlinedIcon />,
  };

  return (
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
        <WorkOutlineIcon sx={{ fontSize: "30px" }} />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography sx={{ fontSize: "14px" }}>
            works at <b>Amazon India</b>
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            8 July 2018 to present
          </Typography>
        </Stack>
      </Stack>
      <Stack
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <CustomTooltip padding={4} title="Global" color="#000">
          <PublicIcon />
        </CustomTooltip>
        <IconButton
          disableRipple
          onClick={(event) => {
            return setWorkMenuAnchor(event.currentTarget);
          }}
        >
          <MoreHorizIcon fontSize="small" />
        </IconButton>
        <Menu
          elevation={1}
          id="work-menu"
          anchorEl={workMenuAnchor}
          open={workMenuOpen}
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
          <MenuItem sx={{ p: 1, fontSize: "13px" }}>
            <ListItemIcon>
              <EditOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Edit Workplace
          </MenuItem>
          <MenuItem sx={{ p: 1, fontSize: "13px" }}>
            <ListItemIcon>
              <DeleteOutlineIcon fontSize="small" />
            </ListItemIcon>
            Delete Workplace
          </MenuItem>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default AboutItem;
