import React from "react";

import { Stack, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import ReactionsTooltip from "../shared/ReactionsTooltip";

const PostActions = ({ enableCommentInput }) => {
  const enableComment = () => {
    enableCommentInput(true);
  };

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <ReactionsTooltip width={32} type="post">
        <Button
          sx={{
            gap: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
          Like
        </Button>
      </ReactionsTooltip>
      <Button
        onClick={enableComment}
        sx={{
          gap: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChatBubbleOutlineIcon fontSize="small" />
        Comment
      </Button>
      <Button
        sx={{
          gap: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ShareIcon fontSize="small" />
        Share
      </Button>
    </Stack>
  );
};

export default PostActions;
