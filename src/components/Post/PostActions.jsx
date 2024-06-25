import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Zoom,
  Stack,
  Button,
  Avatar,
  Tooltip,
  tooltipClasses,
} from "@mui/material";

const PostActions = () => {
  const [openLikeActionTooltip, setOpenLikeActionTooltip] = useState(false);

  const handleOpenLikeActionTooltip = () => {
    setOpenLikeActionTooltip(true);
  };

  const handleCloseLikeActionTooltip = () => {
    setOpenLikeActionTooltip(false);
  };
  const HtmlTooltip = styled(({ className, ...props }) => {
    return (
      <Tooltip
        {...props}
        placement="top-start"
        TransitionComponent={Zoom}
        open={openLikeActionTooltip}
        onClose={handleCloseLikeActionTooltip}
        onOpen={handleOpenLikeActionTooltip}
        classes={{ popper: className }}
      />
    );
  })(({ theme }) => {
    return {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: 10,
        width: "auto",
        color: "#fff",
        backgroundColor: "#fff",
        border: "1px solid #dadde9",
        fontSize: theme.typography.pxToRem(12),
        "&.MuiTooltip-tooltip": {
          marginBottom: "0px",
        },
      },
    };
  });

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <HtmlTooltip
        title={
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Avatar
              component="div"
              onClick={handleCloseLikeActionTooltip}
              sx={{
                width: 36,
                height: 36,
                cursor: "pointer",
                overflow: "visible",
              }}
              alt="Remy Sharp"
              src="/emoji/face-with-head-bandage-img.png"
            />
            <Avatar
              component="div"
              onClick={handleCloseLikeActionTooltip}
              sx={{
                width: 36,
                height: 36,
                cursor: "pointer",
                overflow: "visible",
              }}
              alt="Remy Sharp"
              src="/emoji/smiling-face-with-star-eyes-img.png"
            />
            <Avatar
              component="div"
              onClick={handleCloseLikeActionTooltip}
              sx={{
                width: 36,
                height: 36,
                cursor: "pointer",
                overflow: "visible",
              }}
              alt="Remy Sharp"
              src="/emoji/grinning-face-img.png"
            />
            <Avatar
              component="div"
              onClick={handleCloseLikeActionTooltip}
              sx={{
                width: 36,
                height: 36,
                cursor: "pointer",
                overflow: "visible",
              }}
              alt="Remy Sharp"
              src="/emoji/smiling-face-with-heart-eyes-img.png"
            />
          </Stack>
        }
      >
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
      </HtmlTooltip>
      <Button
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
