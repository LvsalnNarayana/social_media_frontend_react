import React from "react";

import { Stack, Button } from "@mui/material";

const ProfileMenu = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={2}
      sx={{ width: "100%" }}
    >
      <Button
        sx={{
          width: "250px",
          fontWeight: 600,
          fontSize: "16px",
          color: "#4b008290",
          borderBottom: "5px solid #4b008290",
        }}
      >
        Posts
      </Button>
      <Button
        sx={{
          width: "250px",
          color: "black",
          fontSize: "16px",
          borderBottom: "5px solid transparent",
        }}
      >
        About
      </Button>
      <Button
        sx={{
          width: "250px",
          color: "black",
          fontSize: "16px",
          borderBottom: "5px solid transparent",
        }}
      >
        Friends
      </Button>
      <Button
        sx={{
          width: "250px",
          color: "black",
          fontSize: "16px",
          borderBottom: "5px solid transparent",
        }}
      >
        Photos
      </Button>
      <Button
        sx={{
          width: "250px",
          color: "black",
          fontSize: "16px",
          borderBottom: "5px solid transparent",
        }}
      >
        Groups
      </Button>
    </Stack>
  );
};

export default ProfileMenu;
