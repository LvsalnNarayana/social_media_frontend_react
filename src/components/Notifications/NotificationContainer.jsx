/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable multiline-ternary */
import React, { useState } from "react";

import { Chip, Stack, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import Notification from "./Notification";
import useData from "../../hooks/data/useData";

const NotificationContainer = () => {
  const { notifications } = useData();
  const [updatesNotifications, setUpdatedNotifications] =
    useState(notifications);
  const [selected, setSelected] = useState("all");

  const handleSelection = (selectedState) => {
    if (selectedState === "all") {
      setSelected(selectedState);
      setUpdatedNotifications(notifications);
    } else {
      setSelected(selectedState);
      const filteredNotifications = notifications.filter((notification) => {
        return notification.read === false;
      });

      setUpdatedNotifications(filteredNotifications);
    }
  };

  const handleDeleteNotifications = () => {
    console.log("Delete notifications logic here");
  };

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      gap={1}
      sx={{ pb: 2, borderRadius: 2, border: "1px solid #ccc" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 2, pb: 0, mb: 1, width: "100%" }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          {/* Chips for filtering notifications */}
          <Chip
            clickable
            onClick={() => {
              return handleSelection("all");
            }}
            color={selected === "all" ? "primary" : "default"}
            label="All"
            sx={{
              height: "auto",
              cursor: "pointer",
              "& .MuiChip-label": { px: 1.5, py: 0.3, fontWeight: 600 },
            }}
          />
          <Chip
            clickable
            onClick={() => {
              return handleSelection("unread");
            }}
            color={selected === "unread" ? "primary" : "default"}
            label="Unread"
            sx={{
              height: "auto",
              cursor: "pointer",
              "& .MuiChip-label": { px: 1.5, py: 0.3, fontWeight: 600 },
            }}
          />
        </Stack>
        <IconButton
          size="small"
          color="error"
          onClick={handleDeleteNotifications}
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={1}
        sx={{ px: 2, height: "400px", overflowY: "auto" }}
      >
        {updatesNotifications.map((notification) => {
          return (
            <Notification key={notification.id} notification={notification} />
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NotificationContainer;
