/* eslint-disable max-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";

import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import {
  Menu,
  Stack,
  Button,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import InputField from "../../shared/InputField";
import CustomTooltip from "../../shared/CustomTooltip";

const EmailItem = () => {
  const [editEmailOpen, setEditEmailOpen] = useState(false);
  const [emailMenuAnchor, setEmailMenuAnchor] = useState(null);
  const educationMenuOpen = Boolean(emailMenuAnchor);
  const handlecloseEmailMenu = () => {
    setEmailMenuAnchor(null);
  };
  const emailItem = {
    id: "email_id_1",
    verified: false,
    visibility: "global",
    email: "narayana@example.com",
    icon: MailOutlineOutlinedIcon,
  };

  return (
    <>
      {!editEmailOpen && (
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
            <emailItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                {emailItem.email}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
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
            <CustomTooltip
              padding={4}
              title={
                emailItem.visibility[0].toUpperCase() +
                emailItem.visibility.slice(1)
              }
              color="#000"
            >
              {emailItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>
            <IconButton
              disableRipple
              onClick={(e) => {
                setEmailMenuAnchor(e.currentTarget);
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              elevation={1}
              id="work-menu"
              anchorEl={emailMenuAnchor}
              open={educationMenuOpen}
              onClose={handlecloseEmailMenu}
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
                  setEditEmailOpen(true);
                  setEmailMenuAnchor(null);
                }}
              >
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Edit email
              </MenuItem>
              <MenuItem sx={{ p: 1, px: 1.5, fontSize: "13px" }}>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                Delete email
              </MenuItem>
              {!emailItem.verified && (
                <MenuItem sx={{ p: 1, px: 1.5, fontSize: "13px" }}>
                  <ListItemIcon>
                    <ReportProblemIcon fontSize="small" />
                  </ListItemIcon>
                  Verify email
                </MenuItem>
              )}
            </Menu>
          </Stack>
        </Stack>
      )}
      {editEmailOpen && (
        <Stack
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
            sx={{ width: "100%" }}
          >
            <Stack
              flexGrow={1}
              gap={1}
              sx={{ width: "100%" }}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                Email
              </Typography>
              <InputField
                value={emailItem.email}
                name={`email_edit_${emailItem.id}`}
                placeholder="Email"
                sx={{ width: "100%" }}
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ mt: 2, width: "100%" }}
          >
            <Button disableElevation size="small" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => {
                return setEditEmailOpen(false);
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

export default EmailItem;
