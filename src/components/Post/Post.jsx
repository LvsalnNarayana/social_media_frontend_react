import React, { useState } from "react";

import { Stack, Divider } from "@mui/material";

import PostMedia from "./PostMedia";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import PostReactions from "./PostReactions";
import usePost from "../../hooks/data/usePost";
import CommentContainer from "./Comments/CommentContainer";

const Post = () => {
  const post = usePost();
  const [commentInputField, setCommentInputField] = useState(false);

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
      <PostHeader post={post} />
      <PostMedia post={post} />
      <PostReactions post={post} />
      <Divider sx={{ width: "100%" }} />
      <PostActions post={post} enableCommentInput={setCommentInputField} />
      <CommentContainer post={post} enableCommentInput={commentInputField} />
    </Stack>
  );
};

export default Post;
