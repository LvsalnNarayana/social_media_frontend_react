import React from "react";

import AddIcon from "@mui/icons-material/Add";
import { Stack, Avatar, Button, Typography } from "@mui/material";

const ReactionUserCard = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <Avatar>N</Avatar>
        <Stack>
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
            sx={{ fontWeight: 500, fontSize: "12px" }}
          >
            13 Mutual friends
          </Typography>
        </Stack>
      </Stack>
      <Button color="primary" variant="contained" disableElevation size="small">
        <AddIcon fontSize="small" />
        &nbsp;Add Friend
      </Button>
    </Stack>
  );
};

export default ReactionUserCard;
