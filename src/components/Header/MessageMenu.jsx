/* eslint-disable no-undefined */
import React, { useState } from "react";

import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Menu, Stack, Divider, IconButton, Typography } from "@mui/material";

import Message from "./Messages/Message";

const MessageMenu = () => {
  const [messageMenuAnchor, setMessageMenuAnchor] = useState(null);
  const messageMenuOpen = Boolean(messageMenuAnchor);

  const handleMessageMenuOpen = (event) => {
    setMessageMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMessageMenuAnchor(null);
  };

  return (
    <>
      <IconButton
        onClick={handleMessageMenuOpen}
        aria-controls={messageMenuOpen ? "friend-request-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={messageMenuOpen ? "true" : undefined}
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
      >
        <ChatBubbleIcon sx={{ color: "white" }} />
      </IconButton>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={messageMenuAnchor}
        open={messageMenuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 0,
            minWidth: 360,
            maxWidth: 360,
            borderRadius: 2,
            boxShadow: "none",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          },
        }}
      >
        <Typography variant="body1" fontSize={18} fontWeight={600} px={1}>
          Messages
        </Typography>
        <Divider sx={{mt:1}}/>
        <Stack p={2} width="100%" spacing={1} maxHeight={400} overflow="auto">
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </Stack>
      </Menu>
    </>
  );
};

export default MessageMenu;
