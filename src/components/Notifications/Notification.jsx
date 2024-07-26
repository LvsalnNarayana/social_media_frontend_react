import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Stack, IconButton, Typography } from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";

const Notification = ({ notification }) => {
  const { notification: defaultData } = useData();

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={1.5}
      sx={{
        p: 1.5,
        width: "370px",
        borderRadius: 2,
        border: "1px solid #cccccc70",
        backgroundColor: (notification || defaultData).read ? "" : "#1434A415",
      }}
    >
      <UserAvatar
        username={(notification || defaultData)?.user?.username}
        width={36}
      />
      <Typography variant="body1" sx={{ flexGrow: 1, fontSize: "13px" }}>
        {`${(notification || defaultData)?.content?.slice(0, 70)}${(notification || defaultData)?.content.length > 70 ? "..." : ""}`}
      </Typography>
      <IconButton size="small">
        <CloseIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default Notification;
