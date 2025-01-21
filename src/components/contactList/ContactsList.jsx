import React from "react";

import { List, Stack, Divider, Typography } from "@mui/material";

import ContactCard from "./ContactCard";

const ContactsList = () => {
  return (
    <Stack direction="row" flexGrow={1} sx={{ top: 0, position: "sticky" }}>
      <Divider orientation="vertical" />
      <Stack width="100%" p={2}>
        <List>
          <ContactCard type="user" name="harry potter" />
          <ContactCard type="user" name="hermoniee potter" />
          <ContactCard type="user" name="ron potter" />
          <ContactCard type="user" name="snape potter" />
        </List>
        <Divider />
        <Typography variant="body1" fontSize={16}>
          Groups
        </Typography>
        <List>
          <ContactCard
            type="group"
            name="Slytherin"
            users={[
              {
                username: "harry potter",
              },
              {
                username: "hermoniee potter",
              },
              {
                username: "ron potter",
              },
              {
                username: "snape potter",
              },
            ]}
          />
        </List>
      </Stack>
    </Stack>
  );
};

export default ContactsList;
