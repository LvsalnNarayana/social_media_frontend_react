/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-extra-parens */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Menu, Stack, Button, MenuItem, Typography } from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";
import usePrivacyOption from "../../hooks/usePrivacyOption";
import { setPostType, selectPostDraft } from "../../state/createPost";

const CreatePostUser = () => {
  const { user } = useData();
  const dispatch = useDispatch();
  const postDraft = useSelector(selectPostDraft);
  const [privacyMenuAnchor, setPrivacyMenuAnchor] = useState(null);
  const privacyMenuOpen = Boolean(privacyMenuAnchor);

  const handlePostPrivacyMenuOpen = (event) => {
    setPrivacyMenuAnchor(event.currentTarget);
  };
  const handlePrivacyMenuClose = () => {
    setPrivacyMenuAnchor(null);
  };
  const handlePrivacyMenuOption = (value) => {
    dispatch(setPostType(value));
    handlePrivacyMenuClose();
  };

  return (
    <Stack
      gap={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <UserAvatar username={user?.username} width={42} />
      <Stack
        gap={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            fontSize: "15px",
            display: "inline",
            verticalAlign: "middle",
          }}
        >
          <span style={{ fontWeight: 600 }}>
            {user?.firstname} {user?.lastname}
          </span>
          {(Object.keys(postDraft?.location || {}).length > 0 ||
            postDraft.tags.length > 0 ||
            Object.keys(postDraft?.feeling || {}).length > 0) && (
            <span>&nbsp;is&nbsp;</span>
          )}
          {Object.keys(postDraft?.feeling || {}).length > 0 && (
            <>
              <span> feeling </span>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "0px 5px",
                  alignItems: "center",
                  display: "inline-block",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  alt={postDraft?.feeling?.feeling}
                  src={postDraft?.feeling?.image}
                />
              </span>
              <span>{postDraft?.feeling?.feeling}</span>
            </>
          )}
          {postDraft.tags.length > 0 && (
            <>
              <span> with </span>
              {postDraft.tags.slice(0, 2).map((tag, index) => {
                return (
                  <span key={tag.id} style={{ fontWeight: 600 }}>
                    {tag.firstname} {tag.lastname}
                    {index < postDraft.tags.slice(0, 2).length - 1 ? ", " : ""}
                  </span>
                );
              })}
              {postDraft.tags.length > 2 && (
                <span> and {postDraft.tags.length - 2} others</span>
              )}
            </>
          )}
          {Object.keys(postDraft?.location || {}).length > 0 && (
            <>
              &nbsp;at&nbsp;
              <span style={{ fontWeight: 600 }}>
                {postDraft.location.place}, {postDraft.location.city},{" "}
                {postDraft.location.country}
              </span>
            </>
          )}
        </Typography>

        <Button
          sx={{
            p: 0.4,
            color: "black",
            fontWeight: 500,
            fontSize: "12px",
            px: "7px !important",
            backgroundColor: "#00000020",
            "&:hover": {
              backgroundColor: "#00000015",
            },
          }}
          onClick={(e) => {
            return handlePostPrivacyMenuOpen(e);
          }}
        >
          {usePrivacyOption(postDraft?.post_type)}
          <KeyboardArrowDownIcon fontSize="small" />
        </Button>
      </Stack>
      <Menu
        elevation={1}
        id="post-privacy-menu"
        anchorEl={privacyMenuAnchor}
        open={privacyMenuOpen}
        onClose={handlePrivacyMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          width: "200px",
        }}
      >
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => {
            return handlePrivacyMenuOption("only_me");
          }}
        >
          Only Me
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => {
            return handlePrivacyMenuOption("global");
          }}
        >
          Global
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "13px" }}
          onClick={() => {
            return handlePrivacyMenuOption("friends");
          }}
        >
          Friends
        </MenuItem>
      </Menu>
    </Stack>
  );
};

export default CreatePostUser;
