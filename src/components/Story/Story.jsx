/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable multiline-ternary */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable max-statements */
import React, { useState, useEffect } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Stack, Dialog, Divider, Typography, IconButton } from "@mui/material";

import UserAvatar from "../shared/UserAvatar";
import useData from "../../hooks/data/useData";

const Story = () => {
  const { user, story } = useData();
  const [storyOpen, setStoryOpen] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [storyAvailable, setStoryAvailable] = useState(false);
  const handleStoryClose = () => {
    setStoryOpen(false);
    setStoryIndex(0);
  };

  const startStory = () => {
    console.log("start");
  };

  const endStory = () => {
    console.log("end");
    if (storyIndex < story?.stories?.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else {
      handleStoryClose();
    }
  };

  useEffect(() => {
    let timeout = null;

    timeout = setTimeout(() => {
      setStoryAvailable(true);
    }, 3000);

    return () => {
      clearTimeout(timeout);
      setStoryAvailable(false);
    };
  }, [storyOpen, storyIndex]);

  return (
    <>
      <Stack
        component="div"
        onClick={() => {
          setStoryOpen(true);
        }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          width: 160,
          height: 260,
          borderRadius: 5,
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          backgroundSize: "100%",
          backgroundColor: "#000000",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${story?.stories?.[0]?.url})`,
        }}
      >
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 5,
            position: "absolute",
            backgroundColor: "#00000040",
          }}
        />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            top: 12,
            left: 12,
            zIndex: 1000,
            position: "absolute",
          }}
          gap={1}
        >
          <UserAvatar username={user?.username} width={26} />
          <Typography
            variant="body1"
            sx={{ color: "white", fontWeight: 600, fontSize: "13px" }}
          >
            {user.firstname} {user.lastname}
          </Typography>
        </Stack>
      </Stack>
      <Dialog
        disableRestoreFocus
        disableEscapeKeyDown
        disablePortal
        onClose={handleStoryClose}
        PaperProps={{
          sx: {
            width: "auto",
            height: "auto",
            borderRadius: 5,
            backgroundColor: "transparent",
            transition: "all 0.1s ease-in",
          },
        }}
        open={storyOpen}
      >
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            width: 400,
            height: 700,
            borderRadius: 5,
            cursor: "pointer",
            position: "relative",
            backgroundSize: "100%",
            backgroundColor: "#000",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${storyAvailable ? story?.stories?.[storyIndex]?.url : ""})`,
          }}
        >
          <div
            onClick={() => {
              if (storyIndex > 0) {
                setStoryIndex(storyIndex - 1);
              }
            }}
            style={{
              top: 0,
              zIndex: 10,
              left: "0%",
              width: "50%",
              height: "100%",
              cursor: "pointer",
              position: "absolute",
            }}
          />
          <div
            onClick={() => {
              if (storyIndex < story.stories.length) {
                setStoryIndex(storyIndex + 1);
              }
            }}
            style={{
              top: 0,
              zIndex: 10,
              left: "50%",
              width: "50%",
              height: "100%",
              cursor: "pointer",
              position: "absolute",
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              mt: 2,
              mx: "auto",
              zIndex: 20,
              width: "90%",
              cursor: "auto",
              position: "relative",
            }}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
            >
              <UserAvatar username={user?.username} width={26} />
              <Typography
                variant="body1"
                sx={{ color: "white", fontWeight: 600, fontSize: "13px" }}
              >
                {user.firstname} {user.lastname}
              </Typography>
            </Stack>
            <IconButton
              onClick={handleStoryClose}
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
              size="small"
            >
              <CloseIcon fontSize="small" sx={{ color: "white" }} />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={0.5}
            style={{
              zIndex: 20,
              width: "100%",
              cursor: "auto",
              margin: "8px 0px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {story?.stories?.map((singleStory, index) => {
              return (
                <Stack
                  key={singleStory?.id}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  gap={1}
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    backgroundColor: "#ffffff50",
                  }}
                >
                  <Divider
                    onAnimationStart={startStory}
                    onAnimationEnd={endStory}
                    sx={{
                      height: "2px",
                      backgroundColor: "#e8e8e8",
                      width: storyIndex > index ? "100%" : "0%",
                      animation:
                        storyAvailable && storyIndex === index
                          ? `storyTimer ${singleStory.duration}s linear`
                          : "",
                    }}
                  />
                </Stack>
              );
            })}
          </Stack>
          {!storyAvailable && (
            <Stack
              flexGrow={1}
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%", height: "100%" }}
            >
              <Typography sx={{ color: "white", fontSize: "12px" }}>
                Loading...
              </Typography>
            </Stack>
          )}
        </Stack>
      </Dialog>
    </>
  );
};

export default Story;
