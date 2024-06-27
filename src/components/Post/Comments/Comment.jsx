/* eslint-disable max-statements-per-line */
/* eslint-disable no-shadow */
/* eslint-disable multiline-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import ReplyIcon from "@mui/icons-material/Reply";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Zoom,
  Stack,
  Tooltip,
  Typography,
  tooltipClasses,
} from "@mui/material";

import CommentInput from "./CommentInput";
import CommentReply from "./CommentReply";
import useDate from "../../../hooks/useDate";
import UserAvatar from "../../shared/UserAvatar";

const Comment = ({ comment }) => {
  const [replySlice, setReplySlice] = useState(1);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const ReactionListTooltip = styled(({ className, ...props }) => {
    return (
      <Tooltip
        {...props}
        placement="top-start"
        TransitionComponent={Zoom}
        classes={{ popper: className }}
      />
    );
  })(({ theme }) => {
    return {
      [`& .${tooltipClasses.tooltip}`]: {
        padding: 7,
        width: "auto",
        color: "#000",
        borderRadius: "10px",
        backgroundColor: "#fff",
        maxWidth: "100% !important",
        border: "1px solid #dadde9",
        fontSize: theme.typography.pxToRem(12),
        "&.MuiTooltip-tooltip": {
          marginBottom: "0px",
        },
      },
    };
  });
  const handleShowReplyInput = () => {
    setShowReplyInput(true);
  };
  const handleCloseReplyInput = () => {
    setShowReplyInput(false);
  };
  const handleViewMoreReplies = () => {
    setReplySlice((prevReplySlice) => {
      const remainingReplies = comment?.replies?.length - prevReplySlice;

      return remainingReplies > 5
        ? prevReplySlice + 5
        : prevReplySlice + remainingReplies;
    });
  };
  const handleCommentLike = () => {
    // eslint-disable-next-line no-console
    console.log("Liked Comment");
  };

  return (
    <Stack
      justifyContent="flex-start"
      alignItems="flex-start"
      direction="column"
      sx={{ width: "100%" }}
      gap={0}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ my: 1, width: "100%" }}
      >
        <Stack
          justifyContent="flex-start"
          alignItems="center"
          direction="row"
          gap={1.5}
        >
          <UserAvatar
            username={comment?.user?.username}
            width={32}
            height={32}
          />
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
              {comment?.user?.firstname} {comment?.user?.lastname}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "11px",
              }}
              variant="body1"
              component="p"
            >
              {useDate(comment.commented_at)}
            </Typography>
          </Stack>
        </Stack>
        {comment?.engagement?.reaction_count > 0 && (
          <ReactionListTooltip
            title={
              <>
                {comment?.engagement?.reactions?.map((reaction, index) => {
                  return (
                    <Stack
                      // eslint-disable-next-line react/no-array-index-key
                      key={index}
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      gap={1}
                      sx={{ my: 1 }}
                    >
                      <UserAvatar
                        username={reaction?.username}
                        width={20}
                        height={20}
                      />
                      <Typography sx={{ fontSize: "14px" }}>
                        {reaction?.firstname} {reaction?.lastname}
                      </Typography>
                    </Stack>
                  );
                })}
              </>
            }
          >
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
                {comment?.engagement?.reaction_count}
              </Typography>
            </Stack>
          </ReactionListTooltip>
        )}
      </Stack>
      <Typography sx={{ fontSize: "13px" }} variant="body1">
        {comment?.comment}
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        direction="row"
        sx={{ my: 2 }}
        gap={2}
      >
        <Typography
          onClick={handleCommentLike}
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
      <Stack sx={{ px: 4, width: "100%" }} gap={2}>
        {showReplyInput && (
          <CommentInput closeReply={handleCloseReplyInput} type="reply" />
        )}
        {comment?.replies?.length > 0 && replySlice >= 1 && (
          <>
            {comment?.replies?.slice(0, replySlice)?.map((reply, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <CommentReply key={index} reply={reply} />
              );
            })}
          </>
        )}
        {
          // eslint-disable-next-line operator-linebreak
          comment?.replies?.length > 0 &&
            replySlice < comment?.replies?.length && (
              <Typography
                onClick={handleViewMoreReplies}
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
                + View {comment?.replies?.length - replySlice} more replies
              </Typography>
            )
        }
      </Stack>
    </Stack>
  );
};

export default Comment;
