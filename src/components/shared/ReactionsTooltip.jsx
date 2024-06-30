import React, { useState } from "react";

import { Stack, Avatar } from "@mui/material";

import CustomTooltip from "./CustomTooltip";

const ReactionsTooltip = ({ type, width, children }) => {
  const [reactionTooltipOpen, setReactionTooltipOpen] = useState(false);
  const handleReaction = (reaction) => {
    // eslint-disable-next-line no-console
    console.log(`${type} reaction : ${reaction}`);
  };

  return (
    <CustomTooltip
      open={reactionTooltipOpen}
      onClose={() => {
        return setReactionTooltipOpen(false);
      }}
      onOpen={() => {
        return setReactionTooltipOpen(true);
      }}
      title={
        <Stack
          gap={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Avatar
            component="div"
            onClick={(event) => {
              event.stopPropagation();
              handleReaction("like");
            }}
            sx={{
              width,
              height: width,
              cursor: "pointer",
              overflow: "visible",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            alt="like"
            src="/emoji/reactions/like.png"
          />
          <Avatar
            component="div"
            onClick={() => {
              return handleReaction("love");
            }}
            sx={{
              width,
              height: width,
              cursor: "pointer",
              overflow: "visible",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            alt="love"
            src="/emoji/reactions/love.png"
          />
          <Avatar
            component="div"
            onClick={() => {
              return handleReaction("haha");
            }}
            sx={{
              width,
              height: width,
              cursor: "pointer",
              overflow: "visible",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            alt="haha"
            src="/emoji/reactions/haha.png"
          />
          <Avatar
            component="div"
            onClick={() => {
              return handleReaction("cry");
            }}
            sx={{
              width,
              height: width,
              cursor: "pointer",
              overflow: "visible",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            alt="cry"
            src="/emoji/reactions/cry.png"
          />
          <Avatar
            component="div"
            onClick={() => {
              return handleReaction("angry");
            }}
            sx={{
              width,
              height: width,
              cursor: "pointer",
              overflow: "visible",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            alt="angry"
            src="/emoji/reactions/angry.png"
          />
          <Avatar
            component="div"
            onClick={() => {
              return handleReaction("flower");
            }}
            sx={{
              width,
              height: width,
              cursor: "pointer",
              overflow: "visible",
              transition: "all 0.1s ease-in-out",
              "&:hover": {
                transform: "scale(1.3)",
              },
            }}
            alt="flower"
            src="/emoji/reactions/flower.png"
          />
        </Stack>
      }
    >
      {children}
    </CustomTooltip>
  );
};

export default ReactionsTooltip;
