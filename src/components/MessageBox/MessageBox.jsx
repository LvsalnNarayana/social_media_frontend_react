import React from "react";
import moment from "moment";

import { Stack, Divider } from "@mui/material";

import Message from "./Message";
import MessageInput from "./MessageInput";
import MessageHeader from "./MessageHeader";
import useData from "../../hooks/data/useData";

const MessageBox = () => {
  const { conversation } = useData();
  const user = conversation?.users?.filter((_user) => {
    return _user?.is_logged_in !== true;
  });
  const messagesWithDividers = [];

  let lastDate = null;

  conversation?.messages?.forEach((message, index) => {
    const messageDate = moment(message.timestamp).format("DD / MM / YYYY");

    if (messageDate !== lastDate) {
      messagesWithDividers.push(
        <Divider
          // eslint-disable-next-line react/no-array-index-key
          key={`divider-${index}`}
          sx={{ width: "100%", fontSize: "11px", color: "#00000070" }}
        >
          {messageDate}
        </Divider>,
      );
      lastDate = messageDate;
    }

    messagesWithDividers.push(
      // eslint-disable-next-line react/no-array-index-key
      <Message key={`message-${index}`} message={message} />,
    );
  });

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        width: "340px",
        borderRadius: 2,
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "1px solid #00000010",
      }}
    >
      <MessageHeader user={user[0]} />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={1}
        sx={{
          p: 1,
          width: "100%",
          overflowY: "auto",
          maxHeight: "350px",
        }}
      >
        {messagesWithDividers}
      </Stack>
      <MessageInput />
    </Stack>
  );
};

export default MessageBox;
