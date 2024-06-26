import React, { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import {
  Fade,
  Stack,
  Popper,
  IconButton,
  Typography,
  ClickAwayListener,
} from "@mui/material";

import useDate from "../../hooks/useDate";
import UserAvatar from "../shared/UserAvatar";

const PostHeader = (props) => {
  const { post } = props;
  const [postMenuAnchor, setPostMenuAnchor] = useState(null);
  const [postMenuOpen, setPostMenuOpen] = useState(false);
  const handlePostMenuOpen = (event) => {
    setPostMenuAnchor(event.currentTarget);
    setPostMenuOpen(true);
  };
  const handlePostMenuClose = () => {
    setPostMenuAnchor(null);
    setPostMenuOpen(false);
  };

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <UserAvatar username={post.user.username} width={40} height={40} />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: 600, fontSize: "14px" }}
            >
              {post.user.firstname} {post.user.lastname}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: 500, fontSize: "14px" }}
            >
              &nbsp;is at{" "}
              <strong style={{ fontWeight: 600 }}>
                {post.location.city}, {post.location.country}
              </strong>
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: 500, fontSize: "12px" }}
          >
            {useDate(post.published_at)}
          </Typography>
        </Stack>
      </Stack>
      <IconButton disableTouchRipple onClick={handlePostMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Popper
        sx={{ width: 150, zIndex: 1200 }}
        open={postMenuOpen}
        anchorEl={postMenuAnchor}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => {
          return (
            <ClickAwayListener onClickAway={handlePostMenuClose}>
              <Fade {...TransitionProps} timeout={350}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  gap={1}
                  sx={{
                    p: 1,
                    border: 1,
                    width: "100%",
                    borderRadius: 2,
                    borderColor: "#00000020",
                    backgroundColor: "white",
                  }}
                >
                  <Stack
                    onClick={handlePostMenuClose}
                    direction="row"
                    component="div"
                    alignItems="center"
                    justifyContent="flex-start"
                    sx={{
                      px: 1,
                      width: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#00000010",
                      },
                    }}
                  >
                    <BookmarkBorderIcon fontSize="small" />
                    <Typography
                      sx={{
                        p: 1,
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      Save
                    </Typography>
                  </Stack>
                  <Stack
                    onClick={handlePostMenuClose}
                    direction="row"
                    component="div"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexGrow={1}
                    sx={{
                      px: 1,
                      width: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#00000010",
                      },
                    }}
                  >
                    <CancelPresentationIcon fontSize="small" />
                    <Typography
                      sx={{ p: 1, fontWeight: 500, fontSize: "14px" }}
                    >
                      Unfollow
                    </Typography>
                  </Stack>
                  <Stack
                    onClick={handlePostMenuClose}
                    direction="row"
                    component="div"
                    justifyContent="flex-start"
                    alignItems="center"
                    flexGrow={1}
                    sx={{
                      px: 1,
                      width: "100%",
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "#00000010",
                      },
                    }}
                  >
                    <DoNotDisturbIcon fontSize="small" />
                    <Typography
                      sx={{ p: 1, fontWeight: 500, fontSize: "14px" }}
                    >
                      Block
                    </Typography>
                  </Stack>
                </Stack>
              </Fade>
            </ClickAwayListener>
          );
        }}
      </Popper>
    </Stack>
  );
};

export default PostHeader;
