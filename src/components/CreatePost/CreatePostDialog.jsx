import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Dialog, Divider } from "@mui/material";

import CreatePostTags from "./CreatePostTags";
import CreatePostDraft from "./CreatePostDraft";
import CreatePostHeader from "./CreatePostHeader";
import CreatePostLocation from "./CreatePostLocation";
import CreatePostFeelings from "./CreatePostFeelings";
import {
  selectAppState,
  setPostDraftScreen,
  setCreatePostDialogOpen,
} from "../../state/appSlice";

const CreatePostDialog = () => {
  const dispatch = useDispatch();
  const { postDraftScreen, createPostDialogOpen } = useSelector(selectAppState);

  const draftScreen = () => {
    switch (postDraftScreen) {
      case "draft":
        return <CreatePostDraft />;
      case "location":
        return <CreatePostLocation />;
      case "tags":
        return <CreatePostTags />;
      case "feelings":
        return <CreatePostFeelings />;
      default:
        return <CreatePostDraft />;
    }
  };

  return (
    <Dialog
      disableRestoreFocus
      disableEscapeKeyDown
      disablePortal
      onClose={() => {
        dispatch(setCreatePostDialogOpen(false));
        dispatch(setPostDraftScreen("draft"));
      }}
      PaperProps={{
        sx: {
          width: "35vw",
          height: "auto",
          maxWidth: "90vw !important",
          transition: "all 0.1s ease-in",
        },
      }}
      open={createPostDialogOpen}
    >
      <CreatePostHeader />
      <Divider sx={{ width: "100%" }} />
      {draftScreen()}
    </Dialog>
  );
};

export default CreatePostDialog;
