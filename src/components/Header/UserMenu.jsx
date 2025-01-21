/* eslint-disable no-undefined */
import React, { useState } from "react";

import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Box,
  List,
  Menu,
  Divider,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";

const UserMenu = () => {
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const userMenuOpen = Boolean(userMenuAnchor);

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setUserMenuAnchor(null);
  };

  return (
    <>
      {/* Button to Open User Menu */}
      <Box
        component="button"
        onClick={handleUserMenuOpen}
        sx={{
          padding: 0,
          border: "none",
          cursor: "pointer",
          background: "transparent",
        }}
        aria-controls={userMenuOpen ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={userMenuOpen ? "true" : undefined}
      >
        <UserAvatar username="hello world" width={32} height={32} />
      </Box>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={userMenuAnchor}
        open={userMenuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        PaperProps={{
          sx: {
            mt: 0.5,
            minWidth: 150,
            borderRadius: 2,
            boxShadow: "none",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          },
        }}
      >
        <List sx={{ p: 0 }}>
          {/* Profile Section */}
          <ListItemButton onClick={handleClose}>
            <ListItemIcon sx={{ mr: 1, minWidth: "30px" }}>
              <UserAvatar username="hello world" width={25} height={25} />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& .MuiTypography-root ": { fontSize: 14 },
              }}
            >
              Profile
            </ListItemText>
          </ListItemButton>

          <Divider />
          <ListItemButton onClick={handleClose}>
            <ListItemIcon sx={{ mr: 1, minWidth: "30px" }}>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& .MuiTypography-root ": { fontSize: 14 },
              }}
            >
              Settings
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemIcon sx={{ mr: 1, minWidth: "30px" }}>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& .MuiTypography-root ": { fontSize: 14 },
              }}
            >
              Logout
            </ListItemText>
          </ListItemButton>
        </List>
      </Menu>
    </>
  );
};

export default UserMenu;
