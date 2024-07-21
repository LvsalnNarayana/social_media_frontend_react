import React from "react";

import { Close } from "@mui/icons-material";
import BlockIcon from "@mui/icons-material/Block";
import GroupIcon from "@mui/icons-material/Group";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import VideocamIcon from "@mui/icons-material/Videocam";
import { Stack, IconButton, Typography } from "@mui/material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";

import UserAvatar from "../shared/UserAvatar";
import CustomMenu from "../shared/CustomMenu";

const MessageHeader = ({ user }) => {
  const messageMenu = [
    <Typography
      key="delete"
      sx={{
        p: 0.8,
        gap: "5px",
        width: "100%",
        display: "flex",
        fontSize: "13px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <DeleteIcon fontSize="small" sx={{ color: "#00000070" }} />
      Delete Chat
    </Typography>,
    <Typography
      key="block"
      sx={{
        p: 0.8,
        gap: "5px",
        width: "100%",
        display: "flex",
        fontSize: "13px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <BlockIcon fontSize="small" sx={{ color: "#00000070" }} />
      Block
    </Typography>,
    <Typography
      key="mute"
      sx={{
        p: 0.8,
        gap: "5px",
        width: "100%",
        display: "flex",
        fontSize: "13px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <NotificationsOffIcon fontSize="small" sx={{ color: "#00000070" }} />
      Mute Notifications
    </Typography>,
    <Typography
      key="profile"
      sx={{
        p: 0.8,
        gap: "5px",
        width: "100%",
        display: "flex",
        fontSize: "13px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <PersonIcon fontSize="small" sx={{ color: "#00000070" }} />
      View Profile
    </Typography>,
    <Typography
      key="group"
      sx={{
        p: 0.8,
        gap: "5px",
        width: "100%",
        display: "flex",
        fontSize: "13px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "flex-start",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <GroupIcon fontSize="small" sx={{ color: "#00000070" }} />
      Create Group
    </Typography>,
  ];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      sx={{
        px: 1,
        py: 1,
        color: "white",
        backgroundColor: "#1434A4",
      }}
    >
      <CustomMenu
        width={200}
        placement="left-start"
        trigger={
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={0.5}
            sx={{ cursor: "pointer" }}
          >
            <UserAvatar username={user?.username} width={28} height={28} />
            <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
              {user?.firstname} {user?.lastname}
            </Typography>
            <ArrowDropDownIcon />
          </Stack>
        }
        menu={messageMenu}
      />
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={0.5}
      >
        <IconButton
          disableTouchRipple
          disableFocusRipple
          disableRipple
          size="small"
          sx={{ color: "white" }}
        >
          <VideocamIcon fontSize="small" />
        </IconButton>
        <IconButton
          disableTouchRipple
          disableFocusRipple
          disableRipple
          size="small"
          sx={{ color: "white" }}
        >
          <PhoneEnabledIcon fontSize="small" />
        </IconButton>
        <IconButton
          disableTouchRipple
          disableFocusRipple
          disableRipple
          size="small"
          sx={{ color: "white" }}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <IconButton
          disableTouchRipple
          disableFocusRipple
          disableRipple
          size="small"
          sx={{ color: "white" }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MessageHeader;
