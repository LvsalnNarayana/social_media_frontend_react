import React from "react";

import { TextField } from "@mui/material";

const PostInput = ({ user, handleCreatePostOpen }) => {
  return (
    <TextField
      size="small"
      id="whats_on_you_mind_input"
      placeholder={`what's on your mind, ${user?.firstname}?`}
      onFocus={() => {
        return handleCreatePostOpen(true);
      }}
      sx={{
        width: "100%",
        border: "none",
        outline: "none",
        "& .MuiInputBase-root": {
          fontSize: "14px",
        },
        "& .MuiInputBase-root:placeholder": {
          fontSize: "14px",
        },
        "& .MuiInputBase-root:focus": {
          border: 0,
          outline: "none",
        },
        "& .MuiInputBase-root:focusVisible": {
          border: 0,
          outline: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: 1,
            borderColor: "dodgerblue",
          },
      }}
    />
  );
};

export default PostInput;
