/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Paper, IconButton } from "@mui/material";

import { removeMedia, selectPostDraft } from "../../state/createPost";

const CreatePostMedia = () => {
  const dispatch = useDispatch();
  const postDraft = useSelector(selectPostDraft);

  const handleRemoveMedia = (index) => {
    dispatch(removeMedia(index));
  };

  return (
    <Box sx={{ gap: 2, display: "flex", flexWrap: "wrap" }}>
      {postDraft.media &&
        postDraft.media.map((item, index) => {
          return (
            <Paper
              key={index}
              elevation={0}
              sx={{
                width: 100,
                height: 100,
                display: "flex",
                overflow: "hidden",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.type.startsWith("image") && (
                <>
                  <img
                    src={item.url}
                    alt={`Uploaded content ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => {
                      return handleRemoveMedia(index);
                    }}
                    sx={{
                      top: 2,
                      right: 2,
                      color: "white",
                      position: "absolute",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.9)",
                      },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </>
              )}
            </Paper>
          );
        })}
    </Box>
  );
};

export default CreatePostMedia;
