import React from "react";

import GroupIcon from "@mui/icons-material/Group";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Stack,
  useTheme,
  Container,
  IconButton,
  Typography,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import SearchBar from "../SearchBar/SearchBar";

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
            <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
              <GroupIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
              <ChatBubbleIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton sx={{ "&:hover": { backgroundColor: "transparent" } }}>
              <NotificationsIcon sx={{ color: "white" }} />
            </IconButton>
            <UserAvatar username="hello worls" width={32} height={32} />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
