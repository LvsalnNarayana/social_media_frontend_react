/* eslint-disable max-lines */
import React, { useState } from "react";

import { Close } from "@mui/icons-material";
import {
  Stack,
  Avatar,
  Dialog,
  Typography,
  IconButton,
  AvatarGroup,
  Divider,
} from "@mui/material";

import ReactionUserCard from "./ReactionUserCard";

const PostReactions = ({ post }) => {
  const [reactionsDialogOpen, setReactionsDialogOpen] = useState(false);
  const [reactionCategory, setReactionCategory] = useState(0);
  const handleReactionsDialogOpen = () => {
    setReactionsDialogOpen(true);
  };
  const handleReactionsDialogClose = () => {
    setReactionsDialogOpen(false);
  };

  return (
    <>
      <Stack
        onClick={handleReactionsDialogOpen}
        component="div"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={0.3}
      >
        <AvatarGroup max={4}>
          {post?.engagement?.reactions?.slice(0, 4).map((user, index) => {
            return (
              <Avatar
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{ width: 18, height: 18 }}
                alt="Remy Sharp"
                src={`/emoji/reactions/${user?.reaction_name}.png`}
              />
            );
          })}
        </AvatarGroup>
        {post?.engagement?.reaction_count > 0 ? (
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {`${post?.engagement?.reactions?.[0].firstname} ${post?.engagement?.reactions?.[0].lastname}`}{" "}
            and {post?.engagement?.reaction_count} others reacted
          </Typography>
        ) : (
          <Typography
            variant="body1"
            sx={{
              fontSize: "12px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Be the first to like this
          </Typography>
        )}
      </Stack>
      <Dialog
        PaperProps={{
          elevation: 0,
          sx: {
            pb: 2,
            width: "35vw",
            maxWidth: "80vw",
            position: "relative",
            backgroundColor: "#fff",
          },
        }}
        onClose={handleReactionsDialogClose}
        open={reactionsDialogOpen}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{
            p: 2,
            pb: 0,
            top: 0,
            zIndex: 1000,
            width: "100%",
            position: "sticky",
            backgroundColor: "#fff",
          }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={3}
            sx={{
              pb: 2,
              position: "relative",
              "& >div": {
                minWidth: "50px",
              },
            }}
          >
            <Stack
              component="div"
              onClick={() => {
                setReactionCategory(0);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                All
              </Typography>
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                setReactionCategory(1);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/reactions/like.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                {
                  post?.engagement?.reactions?.filter((user) => {
                    return user?.reaction_name === "like";
                  }).length
                }
              </Typography>
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                setReactionCategory(2);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/reactions/love.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                {
                  post?.engagement?.reactions?.filter((user) => {
                    return user?.reaction_name === "love";
                  }).length
                }
              </Typography>
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                setReactionCategory(3);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/reactions/haha.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                {
                  post?.engagement?.reactions?.filter((user) => {
                    return user?.reaction_name === "haha";
                  }).length
                }
              </Typography>
            </Stack>
            <Stack
              component="div"
              onClick={() => {
                setReactionCategory(4);
              }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={0.5}
              sx={{
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{ width: 24, height: 24, overflow: "visible" }}
                alt="Remy Sharp"
                src="/emoji/reactions/cry.png"
              />
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: "16px" }}
              >
                {
                  post?.engagement?.reactions?.filter((user) => {
                    return user?.reaction_name === "cry";
                  }).length
                }
              </Typography>
            </Stack>
            <span
              style={{
                bottom: 0,
                width: "50px",
                height: "4px",
                position: "absolute",
                borderRadius: "10px",
                backgroundColor: "dodgerblue",
                transition: "all 0.1s ease-in",
                left: `calc(${reactionCategory * 50}px + ${reactionCategory * 24}px)`,
              }}
            />
          </Stack>
          <IconButton onClick={handleReactionsDialogClose} size="small">
            <Close fontSize="small" />
          </IconButton>
        </Stack>
        <Divider sx={{ width: "100%" }} />
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={3}
          sx={{
            p: 2,
            pb: 0,
            width: "100%",
            height: "80vh",
            overflowY: "auto",
            maxHeight: "80vh",
          }}
        >
          <>
            {reactionCategory === 0 && (
              <>
                {post?.engagement?.reactions?.map((user, index) => {
                  // eslint-disable-next-line react/no-array-index-key
                  return <ReactionUserCard key={index} user={user} />;
                })}
              </>
            )}
            {reactionCategory === 1 && (
              <>
                {post?.engagement?.reactions
                  ?.filter((user) => {
                    return user?.reaction_name === "like";
                  })
                  ?.map((user, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ReactionUserCard key={index} user={user} />;
                  })}
              </>
            )}
            {reactionCategory === 2 && (
              <>
                {post?.engagement?.reactions
                  ?.filter((user) => {
                    return user?.reaction_name === "love";
                  })
                  ?.map((user, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ReactionUserCard key={index} user={user} />;
                  })}
              </>
            )}
            {reactionCategory === 3 && (
              <>
                {post?.engagement?.reactions
                  ?.filter((user) => {
                    return user?.reaction_name === "haha";
                  })
                  ?.map((user, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ReactionUserCard key={index} user={user} />;
                  })}
              </>
            )}
            {reactionCategory === 4 && (
              <>
                {post?.engagement?.reactions
                  ?.filter((user) => {
                    return user?.reaction_name === "cry";
                  })
                  ?.map((user, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ReactionUserCard key={index} user={user} />;
                  })}
              </>
            )}
          </>
        </Stack>
      </Dialog>
    </>
  );
};

export default PostReactions;
