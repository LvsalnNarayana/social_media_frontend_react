import React, { useState } from "react";

import { Stack, Button, Divider } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import PostInput from "./PostInput";
import UserAvatar from "../shared/UserAvatar";
import useUser from "../../hooks/data/useUser";
import CreatePostDialog from "./CreatePostDialog";

const CreatePost = () => {
  const user = useUser();
  const [createPostDialogOpen, setCreatePostDialogOpen] = useState(true);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="column"
        sx={{
          p: 3,
          width: "500px",
          borderRadius: 3,
          maxWidth: "500px",
          border: "1px solid #00000030",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{
            width: "100%",
          }}
          gap={2}
        >
          <UserAvatar username={user.username} width={38} height={38} />
          <PostInput
            user={user}
            handleCreatePostOpen={(value) => {
              return setCreatePostDialogOpen(value);
            }}
          />
        </Stack>
        <Divider sx={{ my: 2, width: "100%" }} />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Button sx={{ gap: 1, width: "100%" }}>
            <VideoCallIcon sx={{ color: "red" }} />
            Live Video
          </Button>
          <Button sx={{ gap: 1, width: "100%" }}>
            <CollectionsIcon sx={{ color: "purple" }} />
            Photo/Video
          </Button>
          <Button sx={{ gap: 1, width: "100%" }}>
            <InsertEmoticonIcon sx={{ color: "orange" }} />
            Feeling/activity
          </Button>
        </Stack>
      </Stack>
      <CreatePostDialog
        dialogOpen={createPostDialogOpen}
        handleDialogClose={(value) => {
          return setCreatePostDialogOpen(value);
        }}
      />
    </>
  );
};

export default CreatePost;
