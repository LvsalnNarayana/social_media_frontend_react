import React from "react";
import { useDispatch } from "react-redux";

import { Stack, Typography } from "@mui/material";

import { setActiveComponent } from "../../state/appSlice";

const DrawerItem = ({ id, name, active }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      component="div"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      onClick={() => {
        dispatch(setActiveComponent(id));
      }}
      gap={2}
      sx={{
        p: 1,
        my: 1,
        px: 2,
        width: "100%",
        borderRadius: 2,
        backgroundColor: active ? "#1434A410" : "transparent",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#1434A410",
        },
      }}
    >
      <Typography>{name}</Typography>
    </Stack>
  );
};

export default DrawerItem;
