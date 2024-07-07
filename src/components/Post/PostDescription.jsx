import React from "react";

import { Chip, Link, Typography } from "@mui/material";

const PostDescription = ({ post }) => {
  const renderDescription = (description) => {
    if (!description) return null;

    // eslint-disable-next-line prefer-named-capture-group, require-unicode-regexp
    const parts = description.split(/(@\w+|#\w+)/g).filter(Boolean);

    return parts.map((part, index) => {
      if (part.startsWith("@")) {
        return (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            label={part}
            sx={{
              p: 0,
              height: "auto",
              margin: "0 2px",
              cursor: "pointer",
              "& .MuiChip-label": {
                px: "8px",
              },
            }}
            component="span"
          />
        );
      }
      if (part.startsWith("#")) {
        return (
          <Link
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            href={`/hashtag/${part.slice(1)}`}
            sx={{
              color: "blue",
              margin: "0 4px",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {part}
          </Link>
        );
      }

      return part;
    });
  };

  return (
    <Typography variant="body1" sx={{ fontSize: "14px" }}>
      {renderDescription(post?.description)}
    </Typography>
  );
};

export default PostDescription;
