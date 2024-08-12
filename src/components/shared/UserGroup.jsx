import React from "react";

import { Stack } from "@mui/material";

import UserAvatar from "./UserAvatar";
import CustomTooltip from "./CustomTooltip";
import useData from "../../hooks/data/useData";

const UserGroup = ({ sx, users, length }) => {
  const { friends } = useData();

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ position: "relative", ...sx }}
    >
      {(friends || users).slice(0, length).map((friend) => {
        return (
          <CustomTooltip
            key={friend.id}
            margin={10}
            padding={4}
            position="bottom"
            title={`${friend?.firstname} ${friend?.lastname}`}
            color="#000"
          >
            <div
              style={{
                marginLeft: "-10px",
                borderRadius: "100%",
                border: "3px solid white",
              }}
            >
              <UserAvatar username={friend.username} width={32} />
            </div>
          </CustomTooltip>
        );
      })}
    </Stack>
  );
};

export default UserGroup;
