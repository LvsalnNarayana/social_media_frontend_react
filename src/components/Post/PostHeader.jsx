import React, { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import {
  Fade,
  Stack,
  Avatar,
  Popper,
  IconButton,
  Typography,
  ClickAwayListener,
} from "@mui/material";

function PostHeader() {
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
        <Avatar sx={{ width: 40, height: 40, fontSize: "18px" }}>N</Avatar>
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
              Jhon Doe
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{ fontWeight: 500, fontSize: "14px" }}
            >
              &nbsp;is at <strong>London, England</strong>
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: 500, fontSize: "12px" }}
          >
            8 June at 09:54
          </Typography>
        </Stack>
      </Stack>
      <IconButton disableTouchRipple onClick={handlePostMenuOpen}>
        <MoreVertIcon />
      </IconButton>

      <Popper
        sx={{ zIndex: 1200, width: 150 }}
        open={postMenuOpen}
        anchorEl={postMenuAnchor}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
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
                      fontSize: "14px",
                      fontWeight: 500,
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
                  <Typography sx={{ p: 1, fontSize: "14px", fontWeight: 500 }}>
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
                  <Typography sx={{ p: 1, fontSize: "14px", fontWeight: 500 }}>
                    Block
                  </Typography>
                </Stack>
              </Stack>
            </Fade>
          </ClickAwayListener>
        )}
      </Popper>
    </Stack>
  );
}

export default PostHeader;
