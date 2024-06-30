import React from "react";

import { Stack, Divider, Container, Typography } from "@mui/material";

import "./App.css";
import Post from "./components/Post/Post";
import SearchBar from "./components/SearchBar/SearchBar";
import MessageBox from "./components/MessageBox/MessageBox";
import WhatsOnyourMind from "./components/CreatePost/CreatePost";

const App = () => {
  return (
    <Container
      sx={{ py: 4, display: "flex", justifyContent: "center" }}
      disableGutters
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={4}
        sx={{
          py: 6,
        }}
      >
        <Typography variant="h4">Post Component</Typography>
        <Divider sx={{ width: "100%" }} />
        <Post />
        <Typography variant="h4">Search Component</Typography>
        <Divider sx={{ width: "100%" }} />
        <SearchBar />
        <Typography variant="h4">Message Box Component</Typography>
        <Divider sx={{ width: "100%" }} />
        <MessageBox />
        <Typography variant="h4">Create Post Component</Typography>
        <Divider sx={{ width: "100%" }} />
        <WhatsOnyourMind />
      </Stack>
    </Container>
  );
};

export default App;
