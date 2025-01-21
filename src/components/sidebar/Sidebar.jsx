import React from "react";
import { useNavigate } from "react-router-dom";

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

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" flexGrow={1} sx={{ top: 0, position: "sticky" }}>
      <Stack width="100%" p={2}>
        <List>
          <ListItemButton
            sx={{ borderRadius: 2 }}
            onClick={() => {
              return navigate("/");
            }}
          >
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/home.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/friends");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/friends.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Friends</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/stories");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/stories.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Stories</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/groups");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/groups.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Groups</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/memories");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/memories.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Memories</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/saved-posts");
            }}
            sx={{ borderRadius: 2 }}
          >
            <ListItemIcon sx={{ mr: 2, minWidth: "30px" }}>
              <Box component="img" src="/saved.png" width={30} height={30} />
            </ListItemIcon>
            <ListItemText>Saved</ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              navigate("/birthdays");
            }}
            sx={{ borderRadius: 2 }}
          >
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
