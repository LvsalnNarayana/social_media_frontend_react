import React, { useState } from "react";

import BlockIcon from "@mui/icons-material/Block";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import {
  Menu,
  Stack,
  Button,
  Divider,
  MenuItem,
  Container,
  Typography,
} from "@mui/material";

import ProfileMenu from "./ProfileMenu";
import UserGroup from "../shared/UserGroup";
import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";

const Profile = () => {
  const { user } = useData();
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);
  const profileMenuOpen = Boolean(profileMenuAnchor);
  const handleProfileMenuClick = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <div
        style={{ width: "100%", height: "400px", backgroundColor: "#4b008220" }}
      />
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          gap={2}
          sx={{ mt: -11, width: "100%" }}
        >
          <UserAvatar username={user.username} width={180} />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ width: "100%" }}
          >
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap={1}
            >
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                {user.firstname} {user.lastname}
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                gap={0}
              >
                <UserGroup length={8} sx={{ ml: 2 }} />
                <Typography>+200 Friends</Typography>
              </Stack>
            </Stack>
            <Button
              onClick={handleProfileMenuClick}
              size="small"
              disableElevation
              disableRipple
              variant="contained"
              sx={{ mt: 1 }}
            >
              Friends <ExpandMoreIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={profileMenuAnchor}
              open={profileMenuOpen}
              onClose={handleProfileMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  mt: 1,
                  width: "150px",
                  borderRadius: 2,
                  overflow: "visible",
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                },
              }}
            >
              <MenuItem
                disableRipple
                sx={{ gap: 0.5, fontSize: "14px", alignItems: "center" }}
                onClick={handleProfileMenuClose}
              >
                <ChatBubbleOutlineIcon fontSize="small" />
                Message
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ gap: 0.5, fontSize: "14px", alignItems: "center" }}
                onClick={handleProfileMenuClose}
              >
                <BlockIcon fontSize="small" />
                Block
              </MenuItem>
              <MenuItem
                disableRipple
                sx={{ gap: 0.5, fontSize: "14px", alignItems: "center" }}
                onClick={handleProfileMenuClose}
              >
                <PersonOffIcon fontSize="small" />
                Unfriend
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
        <Divider sx={{ mt: 8, mb: 2 }} />
        <ProfileMenu />
      </Container>
    </Stack>
  );
};

export default Profile;
