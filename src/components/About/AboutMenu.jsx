import React from "react";

import { Stack, MenuItem, MenuList, Typography } from "@mui/material";

const AboutMenu = ({ activeMenu, setActiveMenu }) => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ py: 2, width: "200px" }}
      gap={2}
    >
      <Typography
        variant="h3"
        sx={{ px: 1, width: "100%", fontWeight: 600, fontSize: "20px" }}
      >
        About
      </Typography>
      <MenuList
        sx={{
          width: "100%",
          "& .MuiMenuItem-root": {
            p: 1,
            mb: 1,
          },
        }}
      >
        <MenuItem
          disableRipple
          selected={activeMenu === "overview"}
          onClick={() => {
            return setActiveMenu("overview");
          }}
          sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
        >
          Overview
        </MenuItem>
        <MenuItem
          disableRipple
          selected={activeMenu === "work_and_education"}
          onClick={() => {
            return setActiveMenu("work_and_education");
          }}
          sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
        >
          Work and Education
        </MenuItem>
        <MenuItem
          disableRipple
          selected={activeMenu === "places"}
          onClick={() => {
            return setActiveMenu("places");
          }}
          sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
        >
          Places Lived
        </MenuItem>
        <MenuItem
          disableRipple
          selected={activeMenu === "contact"}
          onClick={() => {
            return setActiveMenu("basic_info");
          }}
          sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
        >
          Basic Info
        </MenuItem>
        <MenuItem
          disableRipple
          selected={activeMenu === "lifeEvents"}
          onClick={() => {
            return setActiveMenu("lifeEvents");
          }}
          sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
        >
          Life Events
        </MenuItem>
      </MenuList>
    </Stack>
  );
};

export default AboutMenu;
