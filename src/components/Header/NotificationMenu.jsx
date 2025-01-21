/* eslint-disable no-undefined */
import React, { useState } from "react";

import { Menu, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import NotificationContainer from "./Notifications/NotificationContainer";

const NotificationMenu = () => {
  const [notificationMenuAnchor, setNotificationMenuAnchor] = useState(null);
  const notificationMenuOpen = Boolean(notificationMenuAnchor);

  const handleNotificationMenuOpen = (event) => {
    setNotificationMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setNotificationMenuAnchor(null);
  };

  return (
    <>
      <IconButton
        onClick={handleNotificationMenuOpen}
        aria-controls={notificationMenuOpen ? "notification-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={notificationMenuOpen ? "true" : undefined}
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
      >
        <NotificationsIcon sx={{ color: "white" }} />
      </IconButton>

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={notificationMenuAnchor}
        open={notificationMenuOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            minWidth: 150,
            borderRadius: 2,
            boxShadow: "none",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
          },
        }}
      >
        <NotificationContainer />
      </Menu>
    </>
  );
};

export default NotificationMenu;
