import React from "react";

import { Stack, Button, Divider } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CollectionsIcon from "@mui/icons-material/Collections";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import PostInput from "./PostInput";
import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";
import CreatePostDialog from "./CreatePostDialog";

const CreatePost = () => {
  const { user } = useData();

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
          <PostInput user={user} />
        </Stack>
        <Divider sx={{ my: 2, width: "100%" }} />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Button sx={{ gap: 1, width: "100%", color: "#000" }}>
            <VideoCallIcon sx={{ color: "red" }} />
            Live Video
          </Button>
          <Button sx={{ gap: 1, width: "100%", color: "#000" }}>
            <CollectionsIcon sx={{ color: "purple" }} />
            Photo/Video
          </Button>
          <Button sx={{ gap: 1, width: "100%", color: "#000" }}>
            <InsertEmoticonIcon sx={{ color: "orange" }} />
            Feeling/activity
          </Button>
        </Stack>
      </Stack>
      <CreatePostDialog />
    </>
  );
};

export default CreatePost;
