import React from "react";

import { Stack, Typography } from "@mui/material";

import UserAvatar from "../../shared/UserAvatar";

const Message = () => {
  return (
    <Stack
      width="100%"
      p={1}
      direction="row"
      alignItems="center"
      sx={{
        gap: 2,
        borderRadius: 2,
        cursor: "pointer",
        fontWeight: "bold",
        backgroundColor: "#f5f5f5",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          backgroundColor: "#e5e5e5",
        },
      }}
    >
      <UserAvatar username="lady" width={30} height={30} />
      <Stack width="100%" flexGrow={1} sx={{ overflow: "hidden" }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={1}
        >
          <Typography variant="body1" fontSize={14} fontWeight={600}>
            Snape
          </Typography>
          <Typography
            variant="body1"
            fontSize={10}
            fontWeight={600}
            color="text.secondary"
          >
            12:30 PM
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          fontSize={12}
          width="100%"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          Voldemort is attacking hogwarts dsdsdsdsdsdsdasdAEFsDFzsgzfsgzs
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Message;
