/* eslint-disable no-console */
import React, { useState } from "react";

import SendIcon from "@mui/icons-material/Send";
import { TextField, InputAdornment } from "@mui/material";

const CommentTextArea = ({ type }) => {
  const [textInput, setTextInput] = useState("");

  const handleTextInputAction = () => {
    if (type === "comment") {
      console.log(`Comment Submitted : ${textInput}`);
    } else if (type === "reply") {
      console.log(`Reply Submitted : ${textInput}`);
    }
  };

  return (
    <TextField
      size="small"
      id="comment_input"
      multiline
      maxRows={3}
      minRows={1}
      value={textInput}
      InputProps={{
        endAdornment: (
          <InputAdornment
            sx={{ cursor: "pointer" }}
            position="start"
            onClick={handleTextInputAction}
          >
            <SendIcon fontSize="small" />
          </InputAdornment>
        ),
      }}
      onInput={(e) => {
        return setTextInput(e.target.value);
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
