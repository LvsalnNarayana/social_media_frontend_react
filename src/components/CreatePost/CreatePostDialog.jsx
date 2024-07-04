import React, { useState } from "react";

import { Close } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Menu,
  Stack,
  Dialog,
  Button,
  Divider,
  MenuItem,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import useUser from "../../hooks/data/useUser";
import usePrivacyOption from "../../hooks/usePrivacyOption";

const CreatePostDialog = ({ dialogOpen, handleDialogClose }) => {
  const user = useUser();
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
      onClose={() => {
        return handleDialogClose(false);
      }}
      open={dialogOpen}
    >
      <Stack
        gap={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          p: 1,
          width: "40vw",
          height: "70vh",
          maxWidth: "80vw",
          minWidth: "40vw",
          minHeight: "70vh",
          maxHeight: "90vh",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "20px" }}
          >
            Create Post
          </Typography>
          <IconButton size="small">
            <Close fontSize="small" />
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
            p: 1,
            width: "100%",
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
                sx={{ fontWeight: 600, fontSize: "14px" }}
              >
                {user?.firstname} {user?.lastname}
              </Typography>
              <Button
                sx={{
                  p: 0.2,
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
                &nbsp;
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
            >
              <MenuItem
                sx={{ fontSize: "12px" }}
                onClick={() => {
                  return handlePrivacyMenuOption("only_me");
                }}
              >
                Only Me
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "12px" }}
                onClick={() => {
                  return handlePrivacyMenuOption("global");
                }}
              >
                Global
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "12px" }}
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
            maxRows={4}
            minRows={4}
            sx={{ width: "100%" }}
            placeholder={`What's on your mind? ${user?.firstname} ${user?.lastname}`}
          />
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default CreatePostDialog;
