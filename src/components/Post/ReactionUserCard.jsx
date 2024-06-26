import React from "react";

import AddIcon from "@mui/icons-material/Add";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Stack, Button, Typography } from "@mui/material";

import UserAvatar from "../shared/UserAvatar";

const ReactionUserCard = ({ user }) => {
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
        <UserAvatar username={user?.username} />
        <Stack>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: 600, fontSize: "14px" }}
          >
            {user?.firstname} {user?.lastname}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: 500, fontSize: "12px" }}
          >
            {user?.mutual_friends_count} Mutual Friends
          </Typography>
        </Stack>
      </Stack>
      {user?.friendship_status === "not_friends" && (
        <Button
          sx={{
            py: 0.5,
            fontSize: "12px",
            minWidth: "150px",
          }}
          color="primary"
          variant="contained"
          disableElevation
          size="small"
        >
          <AddIcon fontSize="small" />
          &nbsp;Add Friend
        </Button>
      )}
      {user?.friendship_status === "friends" && (
        <Button
          sx={{
            py: 0.5,
            fontSize: "12px",
            minWidth: "150px",
          }}
          color="primary"
          variant="contained"
          disableElevation
          size="small"
        >
          <GroupsIcon fontSize="small" />
          &nbsp;Friends
        </Button>
      )}
      {user?.friendship_status === "request_sent" && (
        <Button
          sx={{
            py: 0.5,
            fontSize: "12px",
            minWidth: "150px",
          }}
          color="primary"
          variant="contained"
          disableElevation
          size="small"
        >
          <PersonAddIcon fontSize="small" />
          &nbsp;Request sent
        </Button>
      )}
    </Stack>
  );
};

export default ReactionUserCard;
