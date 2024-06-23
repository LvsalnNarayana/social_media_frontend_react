import React from "react";

import { Stack } from "@mui/material";

import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentContainer = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <CommentInput />
      <Comment />
    </Stack>
  );
};

export default CommentContainer;
