import React from "react";

import { Stack, Divider } from "@mui/material";

import Message from "./Message";
import MessageInput from "./MessageInput";
import MessageHeader from "./MessageHeader";

const MessageBox = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: "340px",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "1px solid #00000010",
      }}
    >
      <MessageHeader />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
        sx={{
          p: 1,
          width: "100%",
          overflowY: "auto",
          maxHeight: "320px",
        }}
      >
        {
          // eslint-disable-next-line jsx-a11y/aria-role
          <Message role="user" />
        }
        <Message />
        <Message />
        <Message />
        <Divider sx={{ width: "100%", fontSize: "13px", color: "#00000070" }}>
          17/06/2024
        </Divider>
        <Message />
        <Message />
        <Message />
      </Stack>
      <MessageInput />
    </Stack>
  );
};

export default MessageBox;
