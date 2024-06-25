import React, { useState } from "react";

import { Close } from "@mui/icons-material";
import {
  Stack,
  Avatar,
  Dialog,
  Typography,
  IconButton,
  AvatarGroup,
} from "@mui/material";

import ReactionUserCard from "./ReactionUserCard";

const PostReactions = ({ post }) => {
  const [reactionsDialogOpen, setReactionsDialogOpen] = useState(false);
  const handleReactionsDialogOpen = () => {
    setReactionsDialogOpen(true);
  };
  const handleReactionsDialogClose = () => {
    setReactionsDialogOpen(false);
  };

  return (
    <>
      <Stack
        onClick={handleReactionsDialogOpen}
        component="div"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={0.3}
      >
        <AvatarGroup max={4}>
          {post?.engagement?.reactions?.users
            ?.slice(0, 4)
            .map((user, index) => {
              return (
                <Avatar
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  sx={{ width: 18, height: 18 }}
                  alt="Remy Sharp"
                  src={`/emoji/reactions/${user?.reaction_name}.png`}
                />
              );
            })}
        </AvatarGroup>
        {post?.engagement?.reaction_count > 0 ? (
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {`${post?.engagement?.reactions?.users[0].firstname} ${post?.engagement?.reactions?.users[0].lastname}`}{" "}
            and {post?.engagement?.reaction_count} others reacted
          </Typography>
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Be the first to like this
          </Typography>
        )}
      </Stack>
      <Dialog
        PaperProps={{
          elevation: 0,
          sx: {
            pb: 2,
            width: "35vw",
            maxWidth: "80vw",
            position: "relative",
            backgroundColor: "#fff",
          },
        }}
        onClose={handleReactionsDialogClose}
        open={reactionsDialogOpen}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{
            p: 2,
            pb: 0,
            top: 0,
            zIndex: 1000,
            width: "100%",
            position: "sticky",
            backgroundColor: "#fff",
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={3}
            sx={{
              pb: 2,
              position: "relative",
              "& >div": {
                minWidth: "50px",
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                All
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/smiling-face-with-heart-eyes-img.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                2
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/face-with-laughing-img.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                3
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/smiling-face-with-star-eyes-img.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                4
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/grinning-face-img.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                5
              </Typography>
            </Stack>
            <span
              style={{
                left: 74,
                bottom: 0,
                width: "50px",
                height: "4px",
                position: "absolute",
                borderRadius: "10px",
                backgroundColor: "dodgerblue",
              }}
            />
          </Stack>
          <IconButton onClick={handleReactionsDialogClose} size="small">
            <Close fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={2}
          sx={{
            p: 2,
            pb: 0,
            width: "100%",
            height: "80vh",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
          <ReactionUserCard />
        </Stack>
      </Dialog>
    </>
  );
};

export default PostReactions;
