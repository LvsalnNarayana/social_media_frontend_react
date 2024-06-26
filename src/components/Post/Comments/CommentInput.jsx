import React from "react";

import { Close } from "@mui/icons-material";
import { Stack, IconButton } from "@mui/material";

import CommentTextArea from "./CommentTextArea";
import UserAvatar from "../../shared/UserAvatar";
import useUser from "../../../hooks/data/useUser";

const CommentInput = (props) => {
  const { type, closeReply } = props;
  const user = useUser();

  return (
    <Stack
      justifyContent="flex-start"
      sx={{ width: "100%" }}
      alignItems="center"
      direction="row"
      gap={1}
    >
      <UserAvatar username={user.username} width={38} height={38} />
      <CommentTextArea type={type} />
      {type === "reply" && (
        <IconButton onClick={closeReply} aria-label="add" size="small">
          <Close fontSize="small" />
        </IconButton>
      )}
    </Stack>
  );
};

export default CommentInput;
