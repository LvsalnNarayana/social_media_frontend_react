import React from "react";
import { useSelector } from "react-redux";

import { Stack } from "@mui/material";

import DrawerItem from "./DrawerItem";
import { selectAppState } from "../../state/appSlice";

const Drawer = () => {
  const { activeComponent } = useSelector(selectAppState);
  const menu = [
    {
      id: "post",
      name: "Post",
    },
    {
      id: "search",
      name: "Search",
    },
    {
      id: "message_box",
      name: "Message Box",
    },
    {
      id: "create_post",
      name: "Create Post",
    },
    {
      id: "profile",
      name: "Profile",
    },
    {
      id: "settings",
      name: "Settings",
    },
    {
      id: "login",
      name: "Login",
    },
    {
      id: "signup",
      name: "Signup",
    },
  ];

  return (
    <Stack
      sx={{
        p: 2,
        width: "100%",
        height: "100%",
        borderRight: "1px solid #ccc",
      }}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {menu?.map((item) => {
        return (
          <DrawerItem
            active={item?.id === activeComponent}
            key={item?.id}
            id={item?.id}
            name={item?.name}
          />
        );
      })}
    </Stack>
  );
};

export default Drawer;
