import React from "react";

import { Close } from "@mui/icons-material";
import { Stack, Avatar, IconButton } from "@mui/material";

import CommentTextArea from "./CommentTextArea";

const CommentInput = (props) => {
  const { type, closeReply } = props;

  return (
    <Stack
      justifyContent="flex-start"
      sx={{ width: "100%" }}
      alignItems="center"
      direction="row"
      gap={1}
    >
      <Avatar
        sx={{
          flexShrink: 0,
          fontSize: "16px",
          width: type === "reply" ? 28 : 32,
          height: type === "reply" ? 28 : 32,
        }}
      >
        N
      </Avatar>
      <CommentTextArea />
      {type === "reply" && (
        <IconButton onClick={closeReply} aria-label="add" size="small">
          <Close fontSize="small" />
        </IconButton>
      )}
    </Stack>
  );
};

export default CommentInput;
