/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { useSelector } from "react-redux";

import { Box, Paper } from "@mui/material";

import { selectPostDraft } from "../../state/createPost";

const CreatePostMedia = () => {
  const postDraft = useSelector(selectPostDraft);

  return (
    <Box sx={{ gap: 2, display: "flex", flexWrap: "wrap" }}>
      {postDraft.media &&
        postDraft?.media?.map((item, index) => {
          return (
            <Paper
              key={index}
              elevation={3}
              sx={{
                width: 100,
                height: 100,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {item.type.startsWith("image") && (
                <img
                  src={item.url}
                  alt={`Uploaded content ${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              {/* {item.type.startsWith("video") && (
                <video
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  controls
                >
                  <source src={item.url} type={item.type} />
                  Your browser does not support the video tag.
                </video>
              )} */}
            </Paper>
          );
        })}
    </Box>
  );
};

export default CreatePostMedia;
