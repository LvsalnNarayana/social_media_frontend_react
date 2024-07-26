import React from "react";

import { Container, Stack, Typography } from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";

const Profile = () => {
  const { user } = useData();

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <div
        style={{ width: "100%", height: "400px", backgroundColor: "#4b008220" }}
      />
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          gap={2}
          sx={{ mt: -12 }}
        >
          <UserAvatar username={user.username} width={180} />
          <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
            {user.firstname} {user.lastname}
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Profile;
