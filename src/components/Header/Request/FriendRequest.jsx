import React from "react";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, IconButton, Typography } from "@mui/material";

import UserAvatar from "../../shared/UserAvatar";

const FriendRequest = () => {
  return (
    <Stack
      width="100%"
      p={1}
      direction="row"
      gap={2}
      alignItems="center"
      sx={{
        borderRadius: 2,
        border: "1px solid #ccc",
      }}
    >
      <UserAvatar username="this is one" width={35} height={35} />
      <Stack flexGrow={1}>
        <Typography variant="body1" fontSize={14} fontWeight={600}>
          voldemort
        </Typography>
        <Typography variant="body1" fontSize={12} fontWeight={500}>
          1 Mutual Friend
        </Typography>
      </Stack>
      <Stack direction="row" gap={1} flexShrink={0}>
        <IconButton color="success" sx={{ p: 0.5, minHeight: "auto" }}>
          <CheckIcon fontSize="small" />
        </IconButton>
        <IconButton color="error" sx={{ p: 0.5, minHeight: "auto" }}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default FriendRequest;
