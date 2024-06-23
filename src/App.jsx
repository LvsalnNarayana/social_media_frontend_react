import React from "react";

import { Container } from "@mui/material";

import "./App.css";
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Container
        sx={{ py: 4, display: "flex", justifyContent: "center" }}
        disableGutters
      >
        <Post />
      </Container>
    </>
  );
};

export default App;
