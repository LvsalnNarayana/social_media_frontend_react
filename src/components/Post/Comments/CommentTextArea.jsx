import React from "react";

import SendIcon from "@mui/icons-material/Send";
import { TextField, InputAdornment } from "@mui/material";

const CommentTextArea = () => {
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
      placeholder="Add a comment..."
      sx={{
        width: "100%",
        border: "none",
        outline: "none",
        "& .MuiInputBase-root": {
          fontSize: "14px",
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
