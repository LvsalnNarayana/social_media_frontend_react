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

import useDate from "../../hooks/useDate";
import UserAvatar from "../shared/UserAvatar";
import CustomMenu from "../shared/CustomMenu";
import CustomTooltip from "../shared/CustomTooltip";
import ReactionsTooltip from "../shared/ReactionsTooltip";

const Message = ({ message }) => {
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
        px: 1,
        p: 0.5,
        width: "100%",
        fontSize: "13px",
        cursor: "pointer",
        borderRadius: "4px",
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
      direction={message?.user?.is_logged_in ? `row-reverse` : `row`}
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={1}
      sx={{ p: 1, width: "100%" }}
      ref={messageRef}
      onMouseEnter={() => {
        return setShowMessageReaction(true);
      }}
      onMouseLeave={() => {
        setShowMessageReaction(false);
      }}
    >
      <UserAvatar username={message?.user?.username} width={32} height={32} />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems={message?.user?.is_logged_in ? `flex-end` : `flex-start`}
        sx={{
          mt: -1,
          width: "100%",
        }}
      >
        <Stack
          direction={message?.user?.is_logged_in ? `row` : `row-reverse`}
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={2}
        >
          {showMessageReaction ? (
            <Stack
              direction={message?.user?.is_logged_in ? `row` : `row-reverse`}
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              {message?.user?.is_logged_in ? (
                <CustomMenu
                  trigger={
                    <IconButton disableTouchRipple size="small" sx={{ mt: 1 }}>
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                  }
                  menu={menu}
                />
              ) : (
                <div
                  style={{
                    flexShrink: 0,
                    width: "30px",
                    height: "30px",
                  }}
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
            alignItems={message?.user?.is_logged_in ? `flex-start` : `flex-end`}
          >
            <Typography
              variant="body1"
              sx={{
                p: 1.5,
                fontSize: "13px",
                borderRadius: "8px",
                border: "1px solid #00000030",
              }}
            >
              {message?.message}
            </Typography>

            <Stack
              direction="row"
              justifyContent={
                // eslint-disable-next-line multiline-ternary
                message?.engagement?.reactions?.length > 0
                  ? `space-between`
                  : `flex-start`
              }
              alignItems="center"
              sx={{ my: 0.5, width: "100%" }}
            >
              <Typography
                variant="body1"
                sx={{
                  pl: 1,
                  fontSize: "10px",
                  color: "#00000040",
                }}
              >
                {useDate(message?.timestamp, "message")}
              </Typography>
              <AvatarGroup sx={{ flexShrink: 0 }}>
                {message?.engagement?.reactions?.map((reaction, index) => {
                  return (
                    <CustomTooltip
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      margin={10}
                      padding={4}
                      title={`${reaction?.firstname} ${reaction?.lastname}`}
                      color="#000"
                    >
                      <Avatar
                        sx={{ width: 18, height: 18 }}
                        alt="like"
                        src={`/emoji/reactions/${reaction?.reaction}.png`}
                      />
                    </CustomTooltip>
                  );
                })}
              </AvatarGroup>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Message;
