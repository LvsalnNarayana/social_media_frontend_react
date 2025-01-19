import React from "react";

import {
  List,
  Stack,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";

const ContactsList = () => {
  return (
    <Stack direction="row" flexGrow={1} sx={{ top: 0, position: "sticky" }}>
      <Stack width="100%" p={2}>
        <List>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 1, minWidth: "30px" }}>
              <UserAvatar username="harry_potter" width={25} height={25} />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& .MuiTypography-root ": { fontSize: 14 },
              }}
            >
              Harry Potter
            </ListItemText>
            <Box
              width={10}
              height={10}
              sx={{ borderRadius: "100%", backgroundColor: "#38b000" }}
            />
          </ListItemButton>
        </List>
      </Stack>
    </Stack>
  );
};

export default ContactsList;
