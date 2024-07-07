import React from "react";

import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";

const usePrivacyOption = (privacyOption) => {
  if (privacyOption === "only_me") {
    return (
      <>
        <LockIcon fontSize="small" sx={{ mr: 1, fontSize: "18px" }} />
        Only Me
      </>
    );
  }
  if (privacyOption === "global") {
    return (
      <>
        <PublicIcon fontSize="small" sx={{ mr: 1, fontSize: "18px" }} />
        Global
      </>
    );
  }

  return (
    <>
      <GroupIcon fontSize="small" sx={{ mr: 1, fontSize: "18px" }} />
      Friends
    </>
  );
};

export default usePrivacyOption;
