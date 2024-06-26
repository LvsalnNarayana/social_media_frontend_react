import React from "react";

import { Stack } from "@mui/material";

import Comment from "./Comment";
import CommentInput from "./CommentInput";

const CommentContainer = ({ post }) => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <CommentInput />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={2}
        sx={{ my: 2, width: "100%" }}
      >
        {post?.comments?.map((comment, index) => {
          // eslint-disable-next-line react/no-array-index-key
          return <Comment key={index} comment={comment} />;
        })}
      </Stack>
    </Stack>
  );
};

export default CommentContainer;
