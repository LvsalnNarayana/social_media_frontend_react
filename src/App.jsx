/* eslint-disable operator-linebreak */
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactJson from "react-json-view";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, Button, Divider } from "@mui/material";

import "./App.css";
import Post from "./components/Post/Post";
import useData from "./hooks/data/useData";
import Drawer from "./components/Drawer/Drawer";
import { selectAppState } from "./state/appSlice";
import { selectPostDraft } from "./state/createPost";
import SearchBar from "./components/SearchBar/SearchBar";
import MessageBox from "./components/MessageBox/MessageBox";
import CreatePost from "./components/CreatePost/CreatePost";

const drawerWidth = 240;

const App = () => {
  const { post, conversation, historyResults } = useData();
  const { activeComponent } = useSelector(selectAppState);
  const [collapseJson, setCollapseJson] = useState(false);
  const draftPost = useSelector(selectPostDraft);

  const components = {
    search: { name: "Search", data: historyResults, component: <SearchBar /> },
    create_post: {
      data: draftPost,
      name: "Create Post",
      component: <CreatePost />,
    },
    message_box: {
      data: conversation,
      name: "Message Box",
      component: <MessageBox />,
    },
    post: {
      data: post,
      name: "Post",
      component: <Post />,
      fields: [
        "hashtags",
        "post_location",
        "location",
        "media",
        "user",
        "status",
        "mentions",
        "subscriptions",
        "tags",
        "engagement",
        "comments",
      ],
    },
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        component="nav"
        sx={{
          overflowY: "auto",
          maxHeight: "100vh",
          flexShrink: { sm: 0 },
          width: { sm: drawerWidth },
        }}
      >
        <Drawer />
      </Stack>
      <Stack
        sx={{
          width: "100%",
          height: "100vh",
          maxHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Stack
          sx={{
            top: 0,
            zIndex: 1201,
            boxShadow: "none",
            position: "sticky",
            width: { sm: `100%` },
            backgroundColor: "#1434A4",
          }}
        >
          <Typography variant="h6" sx={{ p: 1, color: "white" }}>
            Social Media
          </Typography>
        </Stack>
        <Stack
          component="main"
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            flexGrow: 1,
          }}
        >
          <Stack
            justifyContent="flex-start"
            alignItems="center"
            width="50%"
            flexGrow={1}
            sx={{
              p: 3,
              width: "50%",
              height: "100%",
              overflowY: "auto",
              maxHeight: "calc(100vh - 50px)",
            }}
          >
            {components[activeComponent].component}
          </Stack>
          <Divider orientation="vertical" flexItem />
          <Stack
            justifyContent="flex-start"
            alignItems="flex-start"
            flexGrow={1}
            sx={{
              p: 3,
              width: "50%",
              overflowY: "auto",
              maxHeight: "calc(100vh - 50px)",
            }}
          >
            <Button
              size="small"
              variant="contained"
              disableElevation
              sx={{ mb: 2, ml: "auto" }}
              onClick={() => {
                setCollapseJson(!collapseJson);
              }}
            >
              Collapse All
            </Button>
            <ReactJson
              src={components[activeComponent].data}
              name={components[activeComponent].name}
              shouldCollapse={({ name }) => {
                return components[activeComponent]?.fields?.includes(name);
              }}
              collapsed={collapseJson}
              enableClipboard={false}
              displayDataTypes={false}
              displayObjectSize={false}
              collapseStringsAfterLength={60}
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default App;
