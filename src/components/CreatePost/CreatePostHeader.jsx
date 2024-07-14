/* eslint-disable multiline-ternary */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Close } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Stack, Typography, IconButton } from "@mui/material";

import {
  selectAppState,
  setPostDraftScreen,
  setCreatePostDialogOpen,
} from "../../state/appSlice";

const CreatePostHeader = () => {
  const { postDraftScreen } = useSelector(selectAppState);
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: 1, px: 2, width: "100%" }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={0.5}
      >
        {postDraftScreen !== "draft" && (
          <IconButton
            onClick={() => {
              return dispatch(setPostDraftScreen("draft"));
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: "18px" }}>
          {postDraftScreen === "draft"
            ? "Create a new post"
            : postDraftScreen === "location"
              ? "Add location"
              : postDraftScreen === "tags"
                ? "Tag your friends"
                : postDraftScreen === "feelings"
                  ? "How are you feelings?"
                  : ""}
        </Typography>
      </Stack>
      <IconButton
        size="small"
        onClick={() => {
          dispatch(setCreatePostDialogOpen(false));
          dispatch(setPostDraftScreen("draft"));
        }}
      >
        <Close fontSize="small" sx={{ color: "black" }} />
      </IconButton>
    </Stack>
  );
};

export default CreatePostHeader;
