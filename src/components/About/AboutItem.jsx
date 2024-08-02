/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable no-extra-parens */
/* eslint-disable max-statements */
import moment from "moment";
import React, { useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
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
  Button,
  Divider,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import EditEmailItem from "./Email/EditEmailItem";
import EditPhoneItem from "./Phone/EditPhoneItem";
import EditPlacesItem from "./Places/EditPlacesItem";
import ChangeAudience from "../shared/ChangeAudience";
import EditWorkplaceItem from "./Work/EditWorkplaceItem";
import EditEducationItem from "./School/EditEducationItem";
import EditBirthdayItem from "./Birthday/EditBirthdayItem";
import EditRelationItem from "./Relationship/EditRelationItem";

const AboutItem = ({ type, Icon, data }) => {
  const [editItem, setEditItem] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuOpen = Boolean(menuAnchor);
  const handleCloseMenu = () => {
    setMenuAnchor(null);
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
    <>
      {!editItem && (
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
            <Icon sx={{ fontSize: "30px" }} />
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              {type === "workplace" && (
                <>
                  <Typography sx={{ fontSize: "14px" }}>
                    {data?.current ? <>working</> : <>Worked</>}{" "}
                    {data.position !== "" && `as ${data.position}`} at{" "}
                    <b>{data.company}</b>
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    from {moment(data.startDate).format("YYYY")} to{" "}
                    {data.current ? (
                      <>current</>
                    ) : (
                      moment(data.endDate).format("YYYY")
                    )}
                  </Typography>
                </>
              )}
              {type === "birthday" && (
                <>
                  <Typography sx={{ fontSize: "14px" }}>
                    {moment(data.date).format("DD MMMM")}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>Birth date</Typography>
                </>
              )}
              {type === "school" && (
                <>
                  <Typography sx={{ fontSize: "14px" }}>
                    {data?.graduated ? <>Studied</> : <>Studying</>} at{" "}
                    <b>{data.school}</b>
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    from {moment(data.startDate).format("YYYY")} to{" "}
                    {data.graduated ? (
                      moment(data.endDate).format("YYYY")
                    ) : (
                      <>current</>
                    )}
                  </Typography>
                </>
              )}
              {type === "email" && (
                <Typography sx={{ fontSize: "14px" }}>{data.email}</Typography>
              )}
              {type === "phone" && (
                <Typography sx={{ fontSize: "14px" }}>
                  {data.countryCode} {data.phone}
                </Typography>
              )}
              {type === "place" && (
                <Typography sx={{ fontSize: "14px" }}>
                  {data.current && `Lives in`} {data.location.city}
                </Typography>
              )}
              {type === "relationship" && (
                <Typography sx={{ fontSize: "14px" }}>{data.status}</Typography>
              )}
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {type === "email" && !data?.verified && (
              <Typography
                sx={{
                  mr: 2,
                  gap: 0.5,
                  display: "flex",
                  fontSize: "14px",
                  alignItems: "center",
                  color: emailItem.verified ? "#000" : "#ff000090",
                }}
              >
                <ReportProblemIcon fontSize="small" /> Not-verified
              </Typography>
            )}
            {type === "phone" && !data?.verified && (
              <Typography
                sx={{
                  mr: 2,
                  gap: 0.5,
                  display: "flex",
                  fontSize: "14px",
                  alignItems: "center",
                  color: emailItem.verified ? "#000" : "#ff000090",
                }}
              >
                <ReportProblemIcon fontSize="small" /> Not-verified
              </Typography>
            )}
            <ChangeAudience />
            <IconButton
              disableRipple
              onClick={(event) => {
                return setMenuAnchor(event.currentTarget);
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              elevation={1}
              id="work-menu"
              anchorEl={menuAnchor}
              open={menuOpen}
              onClose={handleCloseMenu}
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
                sx={{ p: 1, fontSize: "13px" }}
                onClick={() => {
                  setEditItem(true);
                  setMenuAnchor(null);
                }}
              >
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Edit {type}
              </MenuItem>
              <MenuItem sx={{ p: 1, fontSize: "13px" }}>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                Delete {type}
              </MenuItem>
              {(type === "email" || type === "phone") && !data?.verified && (
                <MenuItem sx={{ p: 1, fontSize: "13px" }}>
                  <ListItemIcon>
                    <ReportProblemIcon fontSize="small" />
                  </ListItemIcon>
                  Verify {type}
                </MenuItem>
              )}
            </Menu>
          </Stack>
        </Stack>
      )}
      {editItem && (
        <>
          {type === "workplace" && <EditWorkplaceItem workItem={data} />}
          {type === "school" && <EditEducationItem schoolItem={data} />}
          {type === "email" && <EditEmailItem emailItem={data} />}
          {type === "place" && <EditPlacesItem placeItem={data} />}
          {type === "phone" && <EditPhoneItem phoneItem={data} />}
          {type === "birthday" && <EditBirthdayItem birthdayItem={data} />}
          {type === "relationship" && <EditRelationItem relationItem={data} />}
          <Divider sx={{ width: "100%" }} />
          <Stack
            width="100%"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ mb: 2 }}
          >
            <Button disableElevation size="small" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => {
                setEditItem(false);
                setMenuAnchor(null);
              }}
              disableElevation
              size="small"
              variant="outlined"
            >
              Cancel
            </Button>
          </Stack>
        </>
      )}
    </>
  );
};

export default AboutItem;
