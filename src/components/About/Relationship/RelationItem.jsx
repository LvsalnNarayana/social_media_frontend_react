/* eslint-disable react/no-array-index-key */
/* eslint-disable max-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {
  Stack,
  Button,
  Select,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

import useData from "../../../hooks/data/useData";
import CustomTooltip from "../../shared/CustomTooltip";

const RelationItem = () => {
  const { relationship } = useData();
  const [editRelationOpen, setEditRelationOpen] = useState(false);

  const relationItem = {
    id: "relation_id_1",
    status: "Single",
    relationId: "single",
    visibility: "global",
    icon: FavoriteBorderOutlinedIcon,
  };

  return (
    <>
      {!editRelationOpen && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
          >
            <relationItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                {relationItem.status}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <CustomTooltip
              padding={4}
              title={
                relationItem.visibility[0].toUpperCase() +
                relationItem.visibility.slice(1)
              }
              color="#000"
            >
              {relationItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>

            <IconButton
              disableRipple
              onClick={() => {
                setEditRelationOpen(true);
              }}
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      )}
      {editRelationOpen && (
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
            sx={{ width: "100%" }}
          >
            <Stack
              width="100%"
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap={1}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                Relationship Status
              </Typography>
              <Select
                id="birthday_visibility_select"
                value={relationItem.visibility}
                displayEmpty
                MenuProps={{
                  PaperProps: {
                    elevation: 0,
                    sx: {
                      mt: 0.2,
                      py: 0.6,
                      backgroundColor: "#fff",
                      border: "1px solid #ccc",
                    },
                  },
                }}
                onChange={() => {}}
                sx={{
                  my: 1,
                  width: "140px",
                  "& .MuiSelect-select": {
                    p: 0.6,
                  },
                }}
                size="small"
              >
                <MenuItem sx={{ px: 0.8, py: 0.8 }} value="only_me">
                  <Stack
                    gap={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <LockIcon fontSize="small" />
                    <Typography sx={{ fontSize: "14px" }}>Only Me</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem sx={{ px: 0.8, py: 0.8 }} value="friends">
                  <Stack
                    gap={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <GroupIcon fontSize="small" />
                    <Typography sx={{ fontSize: "14px" }}>Friends</Typography>
                  </Stack>
                </MenuItem>
                <MenuItem sx={{ px: 0.8, py: 0.8 }} value="global">
                  <Stack
                    gap={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <PublicIcon fontSize="small" />
                    <Typography sx={{ fontSize: "14px" }}>Global</Typography>
                  </Stack>
                </MenuItem>
              </Select>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                width="100%"
                gap={2}
              >
                <Select
                  id={`relation_status_select_${relationItem.id}`}
                  value={relationItem.relationId}
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
                  onChange={() => {}}
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
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ mt: 2, width: "100%" }}
          >
            <Button disableElevation size="small" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => {
                return setEditRelationOpen(false);
              }}
              disableElevation
              size="small"
              variant="outlined"
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default RelationItem;
