import React from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Stack, IconButton, Typography } from "@mui/material";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

import useDate from "../../hooks/useDate";
import UserAvatar from "../shared/UserAvatar";
import CustomMenu from "../shared/CustomMenu";

const PostHeader = (props) => {
  const { post } = props;

  const handlePostSave = () => {
    // eslint-disable-next-line no-console
    console.log("Post Saved");
  };
  const handleUnfollowUser = () => {
    // eslint-disable-next-line no-console
    console.log("Unfollowed User");
  };
  const hanldeBlockUser = () => {
    // eslint-disable-next-line no-console
    console.log("User Blocked");
  };
  const postMenu = [
    <Stack
      key="save"
      onClick={handlePostSave}
      direction="row"
      component="div"
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        px: 1,
        width: "100%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <BookmarkBorderIcon fontSize="small" />
      <Typography
        sx={{
          p: 1,
          fontWeight: 500,
          fontSize: "14px",
        }}
      >
        Save
      </Typography>
    </Stack>,
    <Stack
      key="unfollow"
      onClick={handleUnfollowUser}
      direction="row"
      component="div"
      justifyContent="flex-start"
      alignItems="center"
      flexGrow={1}
      sx={{
        px: 1,
        width: "100%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <CancelPresentationIcon fontSize="small" />
      <Typography sx={{ p: 1, fontWeight: 500, fontSize: "14px" }}>
        Unfollow
      </Typography>
    </Stack>,
    <Stack
      key="block"
      onClick={hanldeBlockUser}
      direction="row"
      component="div"
      justifyContent="flex-start"
      alignItems="center"
      flexGrow={1}
      sx={{
        px: 1,
        width: "100%",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#00000010",
        },
      }}
    >
      <DoNotDisturbIcon fontSize="small" />
      <Typography sx={{ p: 1, fontWeight: 500, fontSize: "14px" }}>
        Block
      </Typography>
    </Stack>,
  ];

  return (
    <Stack
      width="100%"
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      gap={2}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <UserAvatar username={post.user.username} width={40} height={40} />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={0.5}
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography
              variant="body1"
              component="p"
              flexShrink={0}
              sx={{ width: "100%", fontSize: "14px" }}
            >
              <span style={{ fontWeight: 600 }}>
                {post.user.firstname} {post.user.lastname}
              </span>{" "}
              &nbsp;is at{" "}
              <strong style={{ fontWeight: 600 }}>
                {post?.location?.place}, {post?.location?.city},{" "}
                {post?.location?.country}
              </strong>
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontWeight: 500, fontSize: "12px" }}
          >
            {useDate(post.published_at)}
          </Typography>
        </Stack>
      </Stack>

      <CustomMenu
        trigger={
          <IconButton disableTouchRipple size="small">
            <MoreVertIcon fontSize="small" />
          </IconButton>
        }
        menu={postMenu}
      />
    </Stack>
  );
};

export default PostHeader;
