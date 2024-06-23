import React, { useState } from "react";

import ReplyIcon from "@mui/icons-material/Reply";
import { Stack, Avatar, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import CommentInput from "./CommentInput";

const Comment = () => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const handleShowReplyInput = () => {
    setShowReplyInput(true);
  };
  const handleCloseReplyInput = () => {
    setShowReplyInput(false);
  };

  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      direction="column"
      sx={{ my: 1 }}
      gap={0}
    >
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        direction="row"
        sx={{ my: 1 }}
        gap={1.5}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
          }}
        >
          N
        </Avatar>
        <Stack
          justifyContent="flex-start"
          alignItems="flex-start"
          direction="column"
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            variant="body1"
            component="p"
          >
            Jhon Doe
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "12px",
            }}
            variant="body1"
            component="p"
          >
            8 June at 09:54
          </Typography>
        </Stack>
      </Stack>
      <Typography sx={{ fontSize: "13px" }} variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur a,
        voluptas quibusdam debitis aut similique. Modi, voluptates! Incidunt qui
        ullam, dolore amet omnis, quis deleniti veritatis voluptas vero nemo
        animi.
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        direction="row"
        sx={{ my: 2 }}
        gap={2}
      >
        <Typography
          sx={{
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
        <Typography
          sx={{
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
          onClick={handleShowReplyInput}
          variant="body1"
        >
          <ReplyIcon fontSize="small" />
          Reply
        </Typography>
      </Stack>
      <Stack sx={{ px: 4 }} gap={2}>
        {showReplyInput && (
          <CommentInput closeReply={handleCloseReplyInput} type="reply" />
        )}
        <Stack
          justifyContent="flex-start"
          alignItems="flex-start"
          direction="column"
          gap={1}
        >
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            direction="column"
          >
            <Stack
              justifyContent="flex-start"
              alignItems="center"
              direction="row"
              sx={{ my: 1 }}
              gap={1.5}
            >
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  fontSize: "14px",
                }}
              >
                N
              </Avatar>
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
                  Jhon Doe
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "11px",
                  }}
                  variant="body1"
                  component="p"
                >
                  8 June at 09:54
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{
                fontSize: "12px",
              }}
              variant="body1"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur a, voluptas quibusdam debitis aut similique. Modi,
              voluptates! Incidunt qui ullam, dolore amet omnis, quis deleniti
              veritatis voluptas vero nemo animi.
            </Typography>
          </Stack>
          <Typography
            sx={{
              my: 1,
              fontSize: "12px",
              cursor: "pointer",
              color: "dodgerblue",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            + View 2 more replies
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Comment;
