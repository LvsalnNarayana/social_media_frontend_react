import React from "react";

import { Box, ListItemIcon, ListItemText, ListItemButton } from "@mui/material";

import UserGroup from "../shared/UserGroup";
import UserAvatar from "../shared/UserAvatar";

const ContactCard = ({ type, name, users }) => {
  return (
    <>
      {type === "user" && (
        <ListItemButton sx={{ borderRadius: 2 }}>
          <ListItemIcon sx={{ mr: 1, minWidth: "30px" }}>
            <UserAvatar username={name} width={25} height={25} />
          </ListItemIcon>
          <ListItemText
            sx={{
              "& .MuiTypography-root ": { fontSize: 14 },
            }}
          >
            {name}
          </ListItemText>
          <Box
            width={10}
            height={10}
            sx={{ borderRadius: "100%", backgroundColor: "#38b000" }}
          />
        </ListItemButton>
      )}
      {type === "group" && (
        <ListItemButton sx={{ borderRadius: 2 }}>
          <ListItemIcon sx={{ mr: 1, minWidth: "30px" }}>
            <UserGroup length={3} users={users} sx={{ matchRoutes: 2 }} />
          </ListItemIcon>
          <ListItemText
            sx={{
              "& .MuiTypography-root ": { fontSize: 14 },
            }}
          >
            {name}
          </ListItemText>
          <Box
            width={10}
            height={10}
            sx={{ borderRadius: "100%", backgroundColor: "#38b000" }}
          />
        </ListItemButton>
      )}
    </>
  );
};

export default ContactCard;
