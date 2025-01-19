import React from "react";

import { Stack } from "@mui/material";

import Post from "../components/Post/Post";
import Story from "../components/Story/Story";
import Header from "../components/Header/Header";
import Sidebar from "../components/home/Sidebar";
import ContactsList from "../components/home/ContactsList";
import CreatePost from "../components/CreatePost/CreatePost";

const Feed = () => {
  return (
    <Stack maxHeight="100vh" sx={{ overflow: "hidden" }}>
      <Stack sx={{ top: 0, zIndex: 1000, position: "sticky" }}>
        <Header />
      </Stack>
      <Stack
        position="relative"
        display="grid"
        gridTemplateColumns="1fr auto 1fr"
        gap="15%"
        maxHeight="100%"
        sx={{ overflow: "auto" }}
      >
        <Stack
          flexGrow={1}
          sx={{ top: 0, position: "sticky", maxHeight: "calc(100vh - 48px)" }}
        >
          <Sidebar />
        </Stack>
        <Stack
          gap={3}
          my={3}
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
        <ContactsList />
      </Stack>
    </Stack>
  );
};

export default Feed;
