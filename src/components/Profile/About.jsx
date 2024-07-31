import React, { useState } from "react";

import { Stack, Divider, MenuItem, MenuList, Typography } from "@mui/material";

import BirthdayItem from "./BirthdayItem";
import EducationItem from "./EducationItem";
import WorkplaceItem from "./WorkplaceItem";
import EmailItem from "./EmailItem";
import PhoneItem from "./PhoneItem";
import PlacesItem from "./PlacesItem";
import RelationItem from './RelationItem';

const About = () => {
  const [activeOverviewMenu, setOverviewActiveMenu] = useState("overview");

  return (
    <Stack
      gap={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ px: 2, width: "100%", borderRadius: 2, border: "1px solid #ccc" }}
    >
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
            selected={activeOverviewMenu === "overview"}
            onClick={() => {
              return setOverviewActiveMenu("overview");
            }}
            sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
          >
            Overview
          </MenuItem>
          <MenuItem
            disableRipple
            selected={activeOverviewMenu === "work"}
            onClick={() => {
              return setOverviewActiveMenu("work");
            }}
            sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
          >
            Work and Education
          </MenuItem>
          <MenuItem
            disableRipple
            selected={activeOverviewMenu === "places"}
            onClick={() => {
              return setOverviewActiveMenu("places");
            }}
            sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
          >
            Places Lived
          </MenuItem>
          <MenuItem
            disableRipple
            selected={activeOverviewMenu === "contact"}
            onClick={() => {
              return setOverviewActiveMenu("contact");
            }}
            sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
          >
            Contact Info
          </MenuItem>
          <MenuItem
            disableRipple
            selected={activeOverviewMenu === "lifeEvents"}
            onClick={() => {
              return setOverviewActiveMenu("lifeEvents");
            }}
            sx={{ width: "100%", borderRadius: 2, fontSize: "14px" }}
          >
            Life Events
          </MenuItem>
        </MenuList>
      </Stack>
      <Divider orientation="vertical" />
      <Stack gap={2} sx={{ py: 2, width: "100%" }}>
        <EducationItem />
        <WorkplaceItem />
        <BirthdayItem />
        <EmailItem />
        <PhoneItem />
        <PlacesItem />
        <RelationItem/>
        <Stack />
        <Stack />
        <Stack />
        <Stack />
      </Stack>
    </Stack>
  );
};

export default About;
