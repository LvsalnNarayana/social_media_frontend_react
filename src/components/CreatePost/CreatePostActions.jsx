/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useDispatch } from "react-redux";

import TagFacesIcon from "@mui/icons-material/TagFaces";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Stack, Tooltip, Typography, IconButton } from "@mui/material";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import { setMedia } from "../../state/createPost";
import { setPostDraftScreen } from "../../state/appSlice";

const CreatePostActions = () => {
  const dispatch = useDispatch();
  const handleFileInputChange = (event) => {
    dispatch(setMedia(event.target.files));
  };

  return (
    <Stack
      sx={{
        p: 1,
        px: 2,
        mb: 2,
        width: "100%",
        borderRadius: "8px",
        border: "2px solid #00000020",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body1" sx={{ fontSize: "14px" }}>
        Add to your post
      </Typography>
      <Stack
        gap={2}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Tooltip title="Photo / Video" arrow placement="top">
          <IconButton component="label" style={{ cursor: "pointer" }}>
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileInputChange}
              accept="image/*,video/*"
              multiple
            />
            <AddPhotoAlternateIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Tag people" arrow placement="top">
          <IconButton
            onClick={() => {
              return dispatch(setPostDraftScreen("tags"));
            }}
          >
            <LocalOfferIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Feeling" arrow placement="top">
          <IconButton
            onClick={() => {
              return dispatch(setPostDraftScreen("feelings"));
            }}
          >
            <TagFacesIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Check in" arrow placement="top">
          <IconButton
            onClick={() => {
              return dispatch(setPostDraftScreen("location"));
            }}
          >
            <LocationOnIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Live Video" arrow placement="top">
          <IconButton>
            <PhotoCameraFrontIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};

export default CreatePostActions;
