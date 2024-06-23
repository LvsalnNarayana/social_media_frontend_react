import React from "react";

import { Close } from "@mui/icons-material";
import { Stack, Avatar, styled, IconButton } from "@mui/material";

const StyledInput = styled("input")(({ type }) => ({
  "&:focus": {
    boxShadow: "0 0 2px rgba(0, 0, 255, 0.5)",
    borderColor: "#ccc",
    borderWidth: "1px",
    outline: "none",
  },
  "&::placeholder": {
    fontSize: type === "reply" ? "12px" : "14px",
    letterSpacing: "0.5px",
  },
  "&:focusVisible": {
    border: "1px solid rgba(0, 0, 255, 0.5)",
    outline: "none",
  },
  letterSpacing: type === "reply" ? "1px" : "0.5px",
  fontSize: type === "reply" ? "12px" : "14px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "8px",
  width: "100%",
}));

const CommentInput = (props) => {
  const { closeReply, type } = props;

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
          height: type === "reply" ? 28 : 32,
          width: type === "reply" ? 28 : 32,
          fontSize: "16px",
          flexShrink: 0,
        }}
      >
        N
      </Avatar>
      <StyledInput
        id="comment_input"
        placeholder={type === "reply" ? "Add a reply..." : "Add a comment..."}
        type="text"
      />
      {type === "reply" && (
        <IconButton onClick={closeReply} aria-label="add" size="small">
          <Close fontSize="small" />
        </IconButton>
      )}
    </Stack>
  );
};

export default CommentInput;
