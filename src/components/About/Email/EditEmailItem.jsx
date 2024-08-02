import React, { useState } from "react";

import { Stack, Typography } from "@mui/material";

import InputField from "../../shared/InputField";
import ChangeAudience from "../../shared/ChangeAudience";

const EditEmailItem = ({ emailItem }) => {
  const [newEmailItem, setNewEmailItem] = useState({
    id: emailItem?.id || "",
    email: emailItem.email || "",
    primary: emailItem.primary || false,
    verified: emailItem.verified || false,
    visibility: emailItem.visibility || "global",
  });

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Stack
        flexGrow={1}
        gap={1}
        sx={{ width: "100%" }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "16px" }}>
          Email
        </Typography>
        <ChangeAudience label />
        <InputField
          value={newEmailItem.email}
          name={`email__${newEmailItem.id}`}
          placeholder="Email"
          sx={{ width: "100%" }}
          changeValue={(value) => {
            setNewEmailItem({
              ...newEmailItem,
              email: value,
            });
          }}
        />
      </Stack>
    </Stack>
  );
};

export default EditEmailItem;
