/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";

import { Stack, Select, MenuItem, Typography } from "@mui/material";

import useData from "../../../hooks/data/useData";
import ChangeAudience from "../../shared/ChangeAudience";

const EditRelationItem = ({ relationItem }) => {
  const { relationship } = useData();
  const [newRelationItem, setNewRelationItem] = useState({
    status: relationItem.status || "",
    relationId: relationItem.relationId || "",
    visibility: relationItem.visibility || "global",
  });

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Stack
        width="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={1}
      >
        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "16px" }}>
          Relationship Status
        </Typography>
        <ChangeAudience label />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          gap={2}
        >
          <Select
            id={`relationship_status_select_${newRelationItem.id}`}
            value={newRelationItem.relationId}
            displayEmpty
            MenuProps={{
              PaperProps: {
                elevation: 0,
                sx: {
                  mt: 1,
                  py: 0.4,
                  maxHeight: "200px",
                  backgroundColor: "#fff",
                  border: "1px solid #ccc",
                },
              },
            }}
            onChange={(event) => {
              setNewRelationItem((prev) => {
                return {
                  ...prev,
                  relationId: event.target.value,
                };
              });
            }}
            sx={{
              my: 0.5,
              width: "100%",
              "& .MuiSelect-select": {
                p: 0.85,
              },
            }}
            size="small"
          >
            <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
              <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                Relationship Status
              </Typography>
            </MenuItem>
            {relationship?.map((relation, index) => {
              return (
                <MenuItem
                  key={index}
                  sx={{ px: 0.8, py: 0.8 }}
                  value={relation.id}
                >
                  <Typography
                    sx={{
                      fontSize: "13px",
                    }}
                  >
                    {relation.value}
                  </Typography>
                </MenuItem>
              );
            })}
          </Select>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EditRelationItem;
