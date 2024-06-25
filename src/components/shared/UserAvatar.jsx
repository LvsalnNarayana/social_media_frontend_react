import React, { useRef, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import multiavatar from "@multiavatar/multiavatar/esm";

import { Avatar } from "@mui/material";

const UserAvatar = (props) => {
  const { username } = props;
  const avatarRef = useRef(null);

  useEffect(() => {
    const svgCode = multiavatar(username);

    if (avatarRef.current) {
      avatarRef.current.innerHTML = svgCode;
    }
  }, [username]);

  return (
    <>
      {username ? (
        <div style={{ width: 40, height: 40 }} ref={avatarRef} />
      ) : (
        <Avatar
          sx={{ p: 0.5, width: 42, height: 42, backgroundColor: "#00000040" }}
          src="/ape.png"
        />
      )}
    </>
  );
};

export default UserAvatar;
