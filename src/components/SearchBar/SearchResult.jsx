import React from "react";

import { Close } from "@mui/icons-material";
import { Box, Stack, IconButton, Typography } from "@mui/material";

const SearchResult = ({ result }) => {
  return (
    <Stack
      // eslint-disable-next-line react/no-array-index-key
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <Box
          component="div"
          sx={{
            width: "22px",
            height: "22px",
            backgroundColor: "#00000040",
          }}
        />
        <Typography sx={{ fontSize: "14px", cursor: "pointer" }}>
          {result.term}
        </Typography>
      </Stack>
      <IconButton size="small">
        <Close fontSize="small" />
      </IconButton>
    </Stack>
  );
};

export default SearchResult;
