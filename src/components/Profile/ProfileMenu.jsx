/* eslint-disable multiline-ternary */
import React, { useState } from "react";

import { Stack, Button } from "@mui/material";

const ProfileMenu = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={2}
      sx={{ width: "100%" }}
    >
      <Button
        onClick={() => {
          return setActiveTab("posts");
        }}
        sx={{
          width: "250px",
          fontSize: "16px",
          transition: "0.1s ease-in-out",
          color: activeTab === "posts" ? "#4b008290" : "black",
          borderBottom:
            activeTab === "posts"
              ? "5px solid #4b008290"
              : "5px solid transparent",
        }}
      >
        Posts
      </Button>
      <Button
        onClick={() => {
          return setActiveTab("about");
        }}
        sx={{
          width: "250px",
          fontSize: "16px",
          transition: "0.1s ease-in-out",
          color: activeTab === "about" ? "#4b008290" : "black",
          borderBottom:
            activeTab === "about"
              ? "5px solid #4b008290"
              : "5px solid transparent",
        }}
      >
        About
      </Button>
      <Button
        onClick={() => {
          return setActiveTab("friends");
        }}
        sx={{
          width: "250px",
          fontSize: "16px",
          transition: "0.1s ease-in-out",
          color: activeTab === "friends" ? "#4b008290" : "black",
          borderBottom:
            activeTab === "friends"
              ? "5px solid #4b008290"
              : "5px solid transparent",
        }}
      >
        Friends
      </Button>
      <Button
        onClick={() => {
          return setActiveTab("photos");
        }}
        sx={{
          width: "250px",
          fontSize: "16px",
          transition: "0.1s ease-in-out",
          color: activeTab === "photos" ? "#4b008290" : "black",
          borderBottom:
            activeTab === "photos"
              ? "5px solid #4b008290"
              : "5px solid transparent",
        }}
      >
        Photos
      </Button>
      <Button
        onClick={() => {
          return setActiveTab("groups");
        }}
        sx={{
          width: "250px",
          fontSize: "16px",
          transition: "0.1s ease-in-out",
          color: activeTab === "groups" ? "#4b008290" : "black",
          borderBottom:
            activeTab === "groups"
              ? "5px solid #4b008290"
              : "5px solid transparent",
        }}
      >
        Groups
      </Button>
    </Stack>
  );
};

export default ProfileMenu;
