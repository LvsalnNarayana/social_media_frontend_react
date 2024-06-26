import React from "react";

import SendIcon from "@mui/icons-material/Send";
import { TextField, InputAdornment } from "@mui/material";

const CommentTextArea = ({ type }) => {
  return (
    <TextField
      size="small"
      id="comment_input"
      multiline
      maxRows={3}
      minRows={1}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SendIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      placeholder={type === "reply" ? "Add a reply..." : "Add a comment..."}
      sx={{
        width: "100%",
        border: "none",
        outline: "none",
        "& .MuiInputBase-root": {
          fontSize: "12px",
        },
        "& .MuiInputBase-root:placeholder": {
          fontSize: "12px",
        },
        "&  .MuiInputBase-root:focus": {
          border: 0,
          outline: "none",
        },
        "&  .MuiInputBase-root:focusVisible": {
          border: 0,
          outline: "none",
        },
      }}
    />
  );
};

export default CommentTextArea;
