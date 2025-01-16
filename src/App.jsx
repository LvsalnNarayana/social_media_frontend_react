/* eslint-disable no-constant-binary-expression */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState } from "react";
import ReactJson from "react-json-view";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack, Button, Divider } from "@mui/material";

import "./App.css";
import OTP from "./components/OTP/OTP";
import Post from "./components/Post/Post";
import useData from "./hooks/data/useData";
import Story from "./components/Story/Story";
import About from "./components/About/About";
import Drawer from "./components/Drawer/Drawer";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
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
import Feed from "./pages/Feed";

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

  const routerComponent = () => {
    return (
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Typography>Not Found</Typography>} />
      </Routes>
    );
  };

  return (
    <>
      {routerComponent()}
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
