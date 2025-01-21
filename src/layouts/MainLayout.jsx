import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Stack } from "@mui/material";

import Header from "../components/Header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import ContactsList from "../components/contactList/ContactsList";

const MainLayout = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Stack maxHeight="100vh" sx={{ overflow: "hidden" }}>
      <Stack sx={{ top: 0, zIndex: 1000, position: "sticky" }}>
        <Header />
      </Stack>
      <Stack
        position="relative"
        display="grid"
        gridTemplateColumns="300px auto 300px"
        gap="12%"
        flexGrow={1}
        sx={{ overflow: "auto" }}
      >
        <Stack
          flexGrow={1}
          sx={{
            top: 0,
            overflowY: "auto",
            position: "sticky",
            maxHeight: "calc(100vh - 48px)",
          }}
        >
          <Sidebar />
        </Stack>
        <Outlet />
        <Stack
          flexGrow={1}
          sx={{
            top: 0,
            overflowY: "auto",
            position: "sticky",
            maxHeight: "calc(100vh - 48px)",
          }}
        >
          <ContactsList />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
