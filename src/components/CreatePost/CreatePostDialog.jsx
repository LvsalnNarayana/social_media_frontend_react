import React, { useState } from "react";

import { Close } from "@mui/icons-material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import {
  Menu,
  Stack,
  Dialog,
  Button,
  Divider,
  Tooltip,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";
import usePrivacyOption from "../../hooks/usePrivacyOption";

const CreatePostDialog = ({ dialogOpen, handleCreatePostClose }) => {
  const { user } = useData();
  const [privacyOption, setPrivacyOption] = useState("only_me");
  const [privacyMenuAnchor, setPrivacyMenuAnchor] = useState(null);
  const open = Boolean(privacyMenuAnchor);
  const handlePostPrivacyMenuOpen = (event) => {
    setPrivacyMenuAnchor(event.currentTarget);
  };
  const handlePrivacyMenuClose = () => {
    setPrivacyMenuAnchor(null);
  };
  const handlePrivacyMenuOption = (value) => {
    setPrivacyOption(value);
    handlePrivacyMenuClose();
  };

  return (
    <Dialog
      disableRestoreFocus
      disablePortal
      onClose={handleCreatePostClose}
      PaperProps={{
        sx: {
          width: "35vw",
          maxWidth: "90vw !important",
        },
      }}
      open={dialogOpen}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 1, px: 2, width: "100%" }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "20px" }}
          >
            Create Post
          </Typography>
          <IconButton size="small" onClick={handleCreatePostClose}>
            <Close fontSize="small" sx={{ color: "black" }} />
          </IconButton>
        </Stack>
        <Divider sx={{ width: "100%" }} />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          flexGrow={1}
          gap={2}
          sx={{
            p: 2,
            width: "100%",
            height: "65vh",
            maxHeight: "65vh",
            overflowY: "auto",
          }}
        >
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <UserAvatar username={user?.username} width={42} />
            <Stack
              gap={0.5}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "15px" }}
              >
                {user?.firstname} {user?.lastname}
              </Typography>
              <Button
                sx={{
                  p: 0.4,
                  color: "black",
                  fontWeight: 500,
                  fontSize: "12px",
                  px: "7px !important",
                  backgroundColor: "#00000015",
                }}
                onClick={(e) => {
                  return handlePostPrivacyMenuOpen(e);
                }}
              >
                {usePrivacyOption(privacyOption)}
                <KeyboardArrowDownIcon fontSize="small" />
              </Button>
            </Stack>
            <Menu
              elevation={1}
              id="post-privacy-menu"
              anchorEl={privacyMenuAnchor}
              open={open}
              onClose={handlePrivacyMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                width: "200px",
              }}
            >
              <MenuItem
                sx={{ fontSize: "13px" }}
                onClick={() => {
                  return handlePrivacyMenuOption("only_me");
                }}
              >
                Only Me
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "13px" }}
                onClick={() => {
                  return handlePrivacyMenuOption("global");
                }}
              >
                Global
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "13px" }}
                onClick={() => {
                  return handlePrivacyMenuOption("friends");
                }}
              >
                Friends
              </MenuItem>
            </Menu>
          </Stack>
          <TextField
            multiline
            rows={4}
            sx={{
              width: "100%",
              border: "none",
              outline: "none",
              "& .MuiInputBase-root": {
                fontSize: "14px",
              },
              "& .MuiInputBase-input::placeholder": {
                fontSize: "20px",
              },
              "& .MuiInputBase-root:focus": {
                border: 0,
                outline: "none",
              },
              "& .MuiInputBase-root:focusVisible": {
                border: 0,
                outline: "none",
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 1,
                  borderColor: "dodgerblue",
                },
            }}
            placeholder={`What's on your mind? ${user?.firstname} ${user?.lastname}!!`}
          />
          <div style={{ flexGrow: 1, width: "100%" }} />
          <Stack
            sx={{
              p: 1,
              px: 2,
              mb: 2,
              width: "100%",
              borderRadius: "8px",
              border: "2px solid #00000020",
            }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" sx={{ fontSize: "14px" }}>
              Add to your post
            </Typography>
            <Stack
              gap={2}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Tooltip title="Photo / Video" arrow placement="top">
                <IconButton>
                  <AddPhotoAlternateIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Tag people" arrow placement="top">
                <IconButton>
                  <LocalOfferIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Feeling" arrow placement="top">
                <IconButton>
                  <TagFacesIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Check in" arrow placement="top">
                <IconButton>
                  <LocationOnIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Live Video" arrow placement="top">
                <IconButton>
                  <PhotoCameraFrontIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
          <Button variant="contained" disableElevation sx={{ width: "100%" }}>
            Post
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default CreatePostDialog;
