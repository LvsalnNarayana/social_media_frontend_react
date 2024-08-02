/* eslint-disable no-negated-condition */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
/* eslint-disable no-extra-parens */
/* eslint-disable max-statements */
import moment from "moment";
import React, { useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Menu,
  Stack,
  Button,
  Divider,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import EditWorkplaceItem from "./EditWorkplaceItem";
import ChangeAudience from "../../shared/ChangeAudience";

const WorkplaceItem = () => {
  const [editWorkItem, setEditWorkItem] = useState(false);
  const workItem = {
    id: "workplace_item_1",
    current: true,
    city: "Bangalore",
    company: "Amazon",
    visibility: "global",
    icon: WorkOutlineIcon,
    position: "Software Engineer",
    endDate: "2022-05-18T14:10:30Z",
    startDate: "2020-05-18T14:10:30Z",
    description: "Working on cloud computing technologies.",
  };

  const [workMenuAnchor, setWorkMenuAnchor] = useState(null);
  const workMenuOpen = Boolean(workMenuAnchor);
  const handlecloseWorkMenu = () => {
    setWorkMenuAnchor(null);
  };

  return (
    <>
      {!editWorkItem && (
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
            <workItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                Worked {workItem.position !== "" && `as ${workItem.position}`}{" "}
                at <b>{workItem.company}</b>
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                from {moment(workItem.startDate).format("YYYY")} to{" "}
                {workItem.current ? (
                  moment(workItem.endDate).format("YYYY")
                ) : (
                  <>current</>
                )}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <ChangeAudience />
            <IconButton
              disableRipple
              onClick={(event) => {
                return setWorkMenuAnchor(event.currentTarget);
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              elevation={1}
              id="work-menu"
              anchorEl={workMenuAnchor}
              open={workMenuOpen}
              onClose={handlecloseWorkMenu}
              MenuListProps={{
                "aria-labelledby": "work-menu-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  mt: 1,
                  width: "auto",
                  borderRadius: 2,
                  overflow: "visible",
                  backgroundColor: "white",
                  border: "1px solid #ccc",
                },
              }}
            >
              <MenuItem
                sx={{ p: 1, fontSize: "13px" }}
                onClick={() => {
                  setEditWorkItem(true);
                  setWorkMenuAnchor(null);
                }}
              >
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Edit Workplace
              </MenuItem>
              <MenuItem sx={{ p: 1, fontSize: "13px" }}>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                Delete Workplace
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      )}
      {editWorkItem && (
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ width: "100%" }}
        >
          <EditWorkplaceItem workItem={null} />
          <Divider sx={{ width: "100%" }} />
          <Stack
            width="100%"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={2}
            sx={{ my: 2 }}
          >
            <Button disableElevation size="small" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => {
                setEditWorkItem(false);
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

export default WorkplaceItem;
