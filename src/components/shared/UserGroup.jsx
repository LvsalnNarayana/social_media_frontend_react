import React from "react";

import { Stack } from "@mui/material";

import UserAvatar from "./UserAvatar";

const UserGroup = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      style={{ position: "relative" }}
    >
      <div
        style={{
          marginLeft: "0px",
          borderRadius: "100%",
          border: "3px solid white",
        }}
      >
        <UserAvatar username="jhon_doe" width={32} />
      </div>
      <div
        style={{
          marginLeft: "-20px",
          borderRadius: "100%",
          border: "3px solid white",
        }}
      >
        <UserAvatar username="jhon_doe" width={32} />
      </div>
      <div
        style={{
          marginLeft: "-20px",
          borderRadius: "100%",
          border: "3px solid white",
        }}
      >
        <UserAvatar username="jhon_doe" width={32} />
      </div>
    </Stack>
  );
};

export default UserGroup;
