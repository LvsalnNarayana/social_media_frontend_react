/* eslint-disable no-undefined */
import React, { useState } from "react";

import GroupIcon from "@mui/icons-material/Group";
import { Menu, Stack, Divider, IconButton, Typography } from "@mui/material";

import FriendRequest from "./Request/FriendRequest";

const FriendRequestMenu = () => {
  const [friendRequestMenuAnchor, setFriendRequestMenuAnchor] = useState(null);
  const friendRequestMenuOpen = Boolean(friendRequestMenuAnchor);

  const handleFriendRequestMenuOpen = (event) => {
    setFriendRequestMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setFriendRequestMenuAnchor(null);
  };

  return (
    <>
      <IconButton
        onClick={handleFriendRequestMenuOpen}
        aria-controls={
          friendRequestMenuOpen ? "friend-request-menu" : undefined
        }
        aria-haspopup="true"
        aria-expanded={friendRequestMenuOpen ? "true" : undefined}
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
      >
        <GroupIcon sx={{ color: "white" }} />
      </IconButton>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={friendRequestMenuAnchor}
        open={friendRequestMenuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 0,
            minWidth: 340,
            borderRadius: 2,
            boxShadow: "none",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          },
        }}
      >
        <Typography variant="body1" fontSize={16} fontWeight={600} px={1}>
          Friend Requests
        </Typography>
        <Divider sx={{ mt: 1 }} />
        <Stack p={2} width="100%" spacing={1} maxHeight={400} overflow="auto">
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
          <FriendRequest />
        </Stack>
      </Menu>
    </>
  );
};

export default FriendRequestMenu;
