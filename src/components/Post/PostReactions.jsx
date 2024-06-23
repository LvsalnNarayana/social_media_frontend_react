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

const PostReactions = () => {
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
        sx={{ cursor: "pointer" }}
      >
        <AvatarGroup max={4}>
          <Avatar
            sx={{ width: 18, height: 18 }}
            alt="Remy Sharp"
            src="/emoji/face-with-head-bandage-img.png"
          />
          <Avatar
            sx={{ width: 18, height: 18 }}
            alt="Remy Sharp"
            src="/emoji/smiling-face-with-star-eyes-img.png"
          />
          <Avatar
            sx={{ width: 18, height: 18 }}
            alt="Remy Sharp"
            src="/emoji/grinning-face-img.png"
          />
          <Avatar
            sx={{ width: 18, height: 18 }}
            alt="Remy Sharp"
            src="/emoji/smiling-face-with-heart-eyes-img.png"
          />
        </AvatarGroup>
        <Typography variant="body1" sx={{ fontSize: "12px" }}>
          23, 456 people reacted
        </Typography>
      </Stack>
      <Dialog
        PaperProps={{
          elevation: 0,
          sx: {
            p: 2,
            width: "40vw",
            maxWidth: "80vw",
            minHeight: "60vh",
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
          sx={{ width: "100%" }}
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
                minWidth: "30px",
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
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
                left: 53,
                bottom: 0,
                width: "40px",
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
      </Dialog>
    </>
  );
};

export default PostReactions;
