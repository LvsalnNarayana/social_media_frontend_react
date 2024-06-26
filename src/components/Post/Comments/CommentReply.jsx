import React from "react";

import { Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import useDate from "../../../hooks/useDate";
import UserAvatar from "../../shared/UserAvatar";

const CommentReply = ({ reply }) => {
  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      direction="column"
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Stack
          justifyContent="flex-start"
          alignItems="center"
          direction="row"
          sx={{ my: 1, width: "100%" }}
          gap={1.5}
        >
          <UserAvatar username={reply?.user?.username} width={30} height={30} />
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            direction="column"
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "13px",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              variant="body1"
              component="p"
            >
              {reply?.user?.firstname} {reply?.user?.lastname}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
              }}
              variant="body1"
              component="p"
            >
              {useDate(reply?.replied_at)}
            </Typography>
          </Stack>
        </Stack>
        {reply?.engagement?.reaction_count > 0 && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={0.5}
            sx={{
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <FavoriteBorderIcon fontSize="small" sx={{ fontSize: "16px" }} />
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              {reply?.engagement?.reaction_count}
            </Typography>
          </Stack>
        )}
      </Stack>
      <Typography
        sx={{
          fontSize: "13px",
        }}
        variant="body1"
      >
        {reply?.reply}
      </Typography>
      <Typography
        sx={{
          mt: 2,
          gap: 0.5,
          display: "flex",
          fontSize: "13px",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            color: "dodgerblue",
            textDecoration: "underline",
          },
        }}
        variant="body1"
      >
        <FavoriteBorderIcon fontSize="small" />
        Like
      </Typography>
    </Stack>
  );
};

export default CommentReply;
