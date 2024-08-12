/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable no-extra-parens */
/* eslint-disable max-statements */
import moment from "moment";
import React, { useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
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

import EditGender from "./Gender/EditGender";
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
              {type === "gender" && (
                <>
                  <Typography sx={{ fontSize: "14px" }}>
                    {data.value}
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>Gender</Typography>
                </>
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
                  color: data.verified ? "#000" : "#ff000090",
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
                  color: data.verified ? "#000" : "#ff000090",
                }}
              >
                <ReportProblemIcon fontSize="small" /> Not-verified
              </Typography>
            )}
            {type === "gender" && (
              <IconButton
                disableRipple
                onClick={() => {
                  return setEditItem(true);
                }}
              >
                <EditOutlinedIcon fontSize="small" />
              </IconButton>
            )}
            {type !== "gender" && (
              <>
                <ChangeAudience />
                <IconButton
                  disableRipple
                  onClick={(event) => {
                    return setMenuAnchor(event.currentTarget);
                  }}
                >
                  <MoreHorizIcon fontSize="small" />
                </IconButton>
              </>
            )}
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
          {type === "gender" && <EditGender gender={data} />}
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
