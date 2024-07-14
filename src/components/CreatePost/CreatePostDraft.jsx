import React from "react";

import { Stack, Button } from "@mui/material";

import CreatePostUser from "./CreatePostUser";
import CreatePostInput from "./CreatePostInput";
import CreatePostActions from "./CreatePostActions";

const CreatePostDraft = () => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: "100%",
      }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexGrow={1}
        gap={2}
        sx={{
          p: 2,
          width: "100%",
          height: "65vh",
          maxHeight: "65vh",
          overflowY: "auto",
        }}
      >
        <CreatePostUser />
        <CreatePostInput />
        <div style={{ flexGrow: 1, width: "100%" }} />
        <CreatePostActions />
        <Button variant="contained" disableElevation sx={{ width: "100%" }}>
          Post
        </Button>
      </Stack>
    </Stack>
  );
};

export default CreatePostDraft;
