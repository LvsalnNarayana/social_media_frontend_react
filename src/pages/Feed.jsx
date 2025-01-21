import React from "react";

import { Stack } from "@mui/material";

import Post from "../components/Post/Post";
import Story from "../components/Story/Story";
import CreatePost from "../components/CreatePost/CreatePost";

const Feed = () => {
  return (
    <Stack
      gap={3}
      py={3}
      width="100%"
      maxWidth="500px"
      mx="auto"
      justifyContent="center"
      alignItems="center"
    >
      <CreatePost />
      <Stack
        pb={1.5}
        gap={1}
        width="100%"
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ overflowX: "auto" }}
      >
        <Story />
        <Story />
        <Story />
        <Story />
      </Stack>
      <Post />
    </Stack>
  );
};

export default Feed;
