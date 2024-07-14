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
        <Typography variant="body1" sx={{ fontWeight: 500, fontSize: "15px" }}>
          <span style={{ fontWeight: 600 }}>
            {user?.firstname} {user?.lastname}
          </span>
          {(Object.keys(postDraft?.location || {}).length > 0 ||
            postDraft.tags.length > 0) && <span> is </span>}
          {Object.keys(postDraft?.location || {}).length > 0 && (
            <>
              at{" "}
              <span style={{ fontWeight: 600 }}>
                {postDraft.location.place}, {postDraft.location.city},{" "}
                {postDraft.location.country}
              </span>
            </>
          )}
          {postDraft.tags.length > 0 && (
            <>
              <span> with </span>
              {postDraft?.tags?.slice(0, 2)?.map((tag, index) => {
                return (
                  <span key={tag.id} style={{ fontWeight: 600 }}>
                    {tag.firstname} {tag.lastname}
                    {index < 1 && postDraft.tags.length > 1 ? ", " : ""}
                  </span>
                );
              })}
              {postDraft?.tags?.length > 2 ? (
                <span> and {postDraft.tags.length - 2} others</span>
              ) : (
                ""
              )}
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
