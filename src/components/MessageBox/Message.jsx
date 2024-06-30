/* eslint-disable max-lines */
/* eslint-disable max-statements */
import React, { useRef, useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import {
  Stack,
  Avatar,
  Typography,
  IconButton,
  AvatarGroup,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import CustomMenu from "../shared/CustomMenu";
import useUser from "../../hooks/data/useUser";
import CustomTooltip from "../shared/CustomTooltip";
import ReactionsTooltip from "../shared/ReactionsTooltip";

const Message = ({ role }) => {
  const user = useUser();
  const messageRef = useRef(null);
  const [showMessageReaction, setShowMessageReaction] = useState(false);
  const handleMessageMenuClick = (menuItem) => {
    // eslint-disable-next-line no-console
    console.log(`Clicked menu item: ${menuItem}`);
  };
  const menu = [
    <Typography
      key="delete"
      onClick={() => {
        handleMessageMenuClick("delete");
      }}
      sx={{
        p: 0.5,
        width: "100%",
        fontSize: "13px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      Delete
    </Typography>,
  ];

  return (
    <Stack
      direction={role === "user" ? `row` : `row-reverse`}
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={1}
      sx={{ p: 1, my: 1, width: "100%" }}
      ref={messageRef}
      onMouseEnter={() => {
        return setShowMessageReaction(true);
      }}
      onMouseLeave={() => {
        setShowMessageReaction(false);
      }}
    >
      <UserAvatar username={user?.username} width={32} height={32} />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems={role === "user" ? `flex-start` : `flex-end`}
        sx={{
          mt: -1,
          width: "100%",
        }}
      >
        <Stack
          direction={role === "user" ? `row-reverse` : `row`}
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={2}
        >
          {showMessageReaction ? (
            <Stack
              direction={role === "user" ? `row-reverse` : `row`}
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              {role === "user" ? (
                <div
                  style={{
                    flexShrink: 0,
                    width: "30px",
                    height: "30px",
                  }}
                />
              ) : (
                <CustomMenu
                  trigger={
                    <IconButton disableTouchRipple size="small" sx={{ mt: 1 }}>
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  }
                  menu={menu}
                />
              )}
              <ReactionsTooltip width={28} type="message">
                <EmojiEmotionsOutlinedIcon
                  fontSize="small"
                  sx={{ mt: 1, cursor: "pointer", color: "#00000080" }}
                />
              </ReactionsTooltip>
            </Stack>
          ) : (
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "30px",
                  height: "30px",
                }}
              />
              <div
                style={{
                  flexShrink: 0,
                  width: "20px",
                  height: "20px",
                }}
              />
            </Stack>
          )}
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems={role === "user" ? `flex-end` : `flex-start`}
          >
            <CustomTooltip title="09 : 30 AM" color="#000">
              <Typography
                variant="body1"
                sx={{
                  p: 1.5,
                  fontSize: "13px",
                  borderRadius: "8px",
                  border: "1px solid #00000030",
                }}
              >
                hello
              </Typography>
            </CustomTooltip>
            <Stack
              direction="row"
              justifyContent={role === "user" ? `flex-start` : `flex-end`}
              alignItems="center"
              sx={{ my: 0.5, width: "100%" }}
            >
              <AvatarGroup sx={{ flexShrink: 0 }}>
                <CustomTooltip title="hello" color="#000">
                  <Avatar
                    sx={{ width: 18, height: 18 }}
                    alt="like"
                    src="/emoji/reactions/like.png"
                  />
                </CustomTooltip>
                <CustomTooltip title="hello" color="#000">
                  <Avatar
                    sx={{ width: 18, height: 18 }}
                    alt="love"
                    src="/emoji/reactions/haha.png"
                  />
                </CustomTooltip>
              </AvatarGroup>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Message;
