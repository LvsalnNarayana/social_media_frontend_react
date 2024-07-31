/* eslint-disable no-constant-binary-expression */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from "react";
import ReactJson from "react-json-view";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, Button, Divider } from "@mui/material";

import "./App.css";
import OTP from "./components/OTP/OTP";
import Post from "./components/Post/Post";
import useData from "./hooks/data/useData";
import Login from "./components/Login/Login";
import Story from "./components/Story/Story";
import About from "./components/Profile/About";
import Drawer from "./components/Drawer/Drawer";
import Signup from "./components/Signup/Signup";
import { selectAppState } from "./state/appSlice";
import Profile from "./components/Profile/Profile";
import { selectPostDraft } from "./state/createPost";
import SearchBar from "./components/SearchBar/SearchBar";
import CreateStory from "./components/Story/CreateStory";
import MessageBox from "./components/MessageBox/MessageBox";
import CreatePost from "./components/CreatePost/CreatePost";
import Notification from "./components/Notifications/Notification";
import ResetPassword from "./components/Reset Password/ResetPassword";
import ForgotPassword from "./components/Forgot Password/ForgotPassword";
import NotificationContainer from "./components/Notifications/NotificationContainer";

const drawerWidth = 320;

const App = () => {
  const {
    post,
    story,
    conversation,
    notification,
    notifications,
    historyResults,
  } = useData();
  const { activeComponent } = useSelector(selectAppState);
  const [collapseJson, setCollapseJson] = useState(false);
  const draftPost = useSelector(selectPostDraft);

  const components = {
    otp: {
      name: "O T P",
      component: <OTP />,
    },
    login: {
      name: "Login",
      component: <Login />,
    },
    about: {
      name: "About",
      component: <About />,
    },
    signup: {
      name: "Signup",
      component: <Signup />,
    },
    profile: {
      name: "Profile",
      component: <Profile />,
    },
    search: { name: "Search", data: historyResults, component: <SearchBar /> },
    story: {
      data: story,
      name: "Story",
      component: <Story />,
    },
    create_story: {
      name: "Create Story",
      component: <CreateStory />,
    },
    reset_password: {
      name: "Reset Password",
      component: <ResetPassword />,
    },
    forgot_password: {
      name: "Forgot Password",
      component: <ForgotPassword />,
    },
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
    notification: {
      data: notification,
      name: "Notification",
      component: <Notification />,
    },
    notification_container: {
      data: notifications,
      name: "Notification Container",
      component: <NotificationContainer />,
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
    <>
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
            {components[activeComponent].name !== "Profile" &&
              components[activeComponent].name !== "About" && (
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
                      return components[activeComponent]?.fields?.includes(
                        name,
                      );
                    }}
                    collapsed={collapseJson}
                    enableClipboard={false}
                    displayDataTypes={false}
                    displayObjectSize={false}
                    collapseStringsAfterLength={60}
                  />
                </Stack>
              )}
          </Stack>
        </Stack>
      </Box>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "13px",
          },
        }}
      />
    </>
  );
};

export default App;
