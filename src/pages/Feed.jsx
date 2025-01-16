import React from "react";

import { Stack, Divider, Typography } from "@mui/material";

import Post from "../components/Post/Post";
import Story from "../components/Story/Story";
import Header from "../components/Header/Header";
import CreatePost from "../components/CreatePost/CreatePost";

const Feed = () => {
  return (
    <>
      <Stack sx={{ top: 0, zIndex: 1000, position: "sticky" }}>
        <Header />
      </Stack>
      <Stack
        gap={3}
        my={3}
        width="40%"
        mx="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Stack width="100%" gap={1}>
          <Typography
            variant="body1"
            fontSize={18}
            fontWeight={600}
            textAlign="left"
            width="100%"
          >
            Stories
          </Typography>
          <Divider />
          <Stack
            pb={1.5}
            gap={3}
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
        </Stack>
        <CreatePost />
        <Post />
      </Stack>
    </>
  );
};

export default Feed;
