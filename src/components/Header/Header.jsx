import React from "react";

import { Stack, useTheme, Container, Typography } from "@mui/material";

import UserMenu from "./UserMenu";
import MessageMenu from "./MessageMenu";
import SearchBar from "../SearchBar/SearchBar";
import NotificationMenu from "./NotificationMenu";
import FriendRequestMenu from "./FriendRequestMenu";

const Header = () => {
  const theme = useTheme();

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: 0.5, backgroundColor: theme?.palette?.primary?.main }}
    >
      <Container maxWidth="xl">
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1" color="#fff" fontWeight={500}>
            Flybook
          </Typography>
          <Stack width="30%">
            <SearchBar />
          </Stack>
          <Stack direction="row" gap={2} alignItems="center">
            <FriendRequestMenu />
            <MessageMenu />
            <NotificationMenu />
            <UserMenu />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
