import React, { useState } from "react";

import { Add } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import {
  Stack,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";

import CustomMenu from "../shared/CustomMenu";

const MessageInput = () => {
  const [messageText, setMessageText] = useState("");

  return (
    <Stack direction="row" alignItems="center" sx={{ p: 1, width: "100%" }}>
      <CustomMenu
        placement="top-end"
        trigger={
          <IconButton
            size="small"
            disableTouchRipple
            sx={{ height: "fit-content" }}
          >
            <Add sx={{ color: "#00000060" }} />
          </IconButton>
        }
        menu={[
          <Typography
            key="delete"
            sx={{
              p: 0.5,
              width: "100%",
              fontSize: "13px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#00000010",
              },
            }}
          >
            Attach Media
          </Typography>,
        ]}
      />
      <TextField
        onInput={(e) => {
          setMessageText(e.target.value);
        }}
        multiline
        maxRows={3}
        InputProps={{
          endAdornment: (
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <InputAdornment position="start">
                <IconButton size="small" disableTouchRipple>
                  <EmojiEmotionsOutlinedIcon sx={{ color: "#00000060" }} />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
        }}
        value={messageText}
        id="searchbar_input"
        placeholder="Type your message..."
        sx={{
          p: 0.5,
          width: "100%",
          border: "none",
          outline: "none",
          "& .MuiInputBase-root:placeholder": {
            fontSize: "14px",
          },
          "& .MuiInputBase-root": {
            p: 1.5,
            fontSize: "14px",
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
      />
      <IconButton
        size="small"
        disableTouchRipple
        sx={{ height: "fit-content" }}
      >
        <SendIcon sx={{ color: "#00000060" }} />
      </IconButton>
    </Stack>
  );
};

export default MessageInput;
