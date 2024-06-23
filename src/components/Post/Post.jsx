import React from "react";

import { Stack, Divider } from "@mui/material";

import PostMedia from "./PostMedia";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import PostReactions from "./PostReactions";
import CommentContainer from "./Comments/CommentContainer";

const Post = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={2}
      sx={{
        p: 2,
        boxShadow: 1,
        maxWidth: 450,
        borderRadius: 2,
      }}
    >
      <PostHeader />
      <PostMedia />
      <PostReactions />
      <Divider sx={{ width: "100%" }} />
      <PostActions />
      <CommentContainer />
    </Stack>
  );
};

export default Post;
