/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable require-unicode-regexp */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TextField } from "@mui/material";

import useData from "../../hooks/data/useData";
import { setDescription, selectPostDraft } from "../../state/createPost";

const CreatePostInput = () => {
  const { user } = useData();
  const postDraft = useSelector(selectPostDraft);
  const dispatch = useDispatch();

  const [mentions, setMentions] = useState([]);
  const [hashtags, setHashtags] = useState([]);

  useEffect(() => {
    const extractEntities = (text) => {
      const mentionRegex = /@\w+/g;
      const hashtagRegex = /#\w+/g;

      const mentionsArray = text.match(mentionRegex) || [];
      const hashtagsArray = text.match(hashtagRegex) || [];

      setMentions(mentionsArray);
      setHashtags(hashtagsArray);
    };

    if (postDraft.description) {
      extractEntities(postDraft.description);
    }
  }, [postDraft.description]);

  return (
    <TextField
      multiline
      rows={4}
      value={postDraft?.description}
      onChange={(e) => {
        dispatch(setDescription(e?.target?.value));
      }}
      sx={{
        width: "100%",
        border: "none",
        outline: "none",
        "& .MuiInputBase-root": {
          fontSize: "14px",
        },
        "& .MuiInputBase-input::placeholder": {
          fontSize: "20px",
        },
        "& .MuiInputBase-root:focus": {
          border: 0,
          outline: "none",
        },
        "& .MuiInputBase-root:focusVisible": {
          border: 0,
          outline: "none",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: 1,
            borderColor: "dodgerblue",
          },
      }}
      placeholder={`What's on your mind? ${user?.firstname} ${user?.lastname}!!`}
    />
  );
};

export default CreatePostInput;
