import React from "react";

import { Stack, Divider, Container, Typography } from "@mui/material";

import "./App.css";
import Post from "./components/Post/Post";
import SearchBar from "./components/SearchBar/SearchBar";

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
      </Stack>
    </Container>
  );
};

export default App;
