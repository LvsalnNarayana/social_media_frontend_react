import React from "react";

import { Stack, Divider, Container, Typography } from "@mui/material";

import "./App.css";
import Post from "./components/Post/Post";

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
        gap={2}
      >
        <Typography variant="h4">Post Component</Typography>
        <Divider sx={{ width: "100%" }} />
        <Post />
      </Stack>
    </Container>
  );
};

export default App;
