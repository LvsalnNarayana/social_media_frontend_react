import React from "react";

import {
  Box,
  List,
  Stack,
  Divider,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import UserAvatar from "../shared/UserAvatar";

const Sidebar = () => {
  return (
    <Stack direction="row" flexGrow={1} sx={{ top: 0, position: "sticky" }}>
      <Stack width="100%" p={2}>
        <List>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <UserAvatar username="harry_potter" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Harry Potter</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/friends.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Friends</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/stories.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Stories</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/groups.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Groups</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/memories.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Memories</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/saved.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Saved</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box
                component="img"
                src="/birthdays.png"
                width={30}
                height={30}
              />
            </ListItemIcon>
            <ListItemText>Birthdays</ListItemText>
          </ListItemButton>
        </List>
        <Divider />
        <Typography variant="body1" fontSize={16} my={1}>
          Games
        </Typography>
      </Stack>
      <Divider orientation="vertical" />
    </Stack>
  );
};

export default Sidebar;
