/* eslint-disable no-negated-condition */
/* eslint-disable operator-linebreak */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
/* eslint-disable no-extra-parens */
/* eslint-disable max-statements */
import moment from "moment";
import React, { useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Menu,
  Stack,
  Button,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  IconButton,
  ListItemIcon,
  FormControlLabel,
} from "@mui/material";

import InputField from "../shared/InputField";
import CustomTooltip from "../shared/CustomTooltip";

const WorkplaceItem = () => {
  const [editWorkItem, setWorkItem] = useState(false);
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
            <CustomTooltip
              padding={4}
              title={
                workItem.visibility[0].toUpperCase() +
                workItem.visibility.slice(1)
              }
              color="#000"
            >
              {workItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>
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
                  setWorkItem(true);
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
        <Stack sx={{ my: 2 }}>
          <Select
            id={`workplace_from_select_${workItem.id}`}
            value={workItem.visibility}
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
          <InputField
            name={`workplace_name_${workItem.id}`}
            placeholder="Company"
            value={workItem.company}
          />
          <InputField
            name={`workplace_position_${workItem.id}`}
            placeholder="Position"
            value={workItem.position}
          />
          <InputField
            name={`workplace_town_${workItem.id}`}
            placeholder="City / Town"
            value={workItem.city}
          />
          <InputField
            rows={4}
            multiple
            name={`workplace_description_${workItem.id}`}
            placeholder="Description"
            value={workItem.description}
          />
          <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
            Time period
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            gap={2}
            sx={{ my: 1 }}
          >
            <Select
              id={`workplace_from_select_${workItem.id}`}
              value={moment(workItem.startDate).format("YYYY")}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  elevation: 0,
                  sx: {
                    mt: 0.2,
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
                width: "100px",
                "& .MuiSelect-select": {
                  p: 0.85,
                },
              }}
              size="small"
            >
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  Year
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2024">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2024
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2023">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2023
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2022">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2022
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2021">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2021
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2020">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2020
                </Typography>
              </MenuItem>
            </Select>
            <Select
              id={`workplace_to_select_${workItem.id}`}
              value={moment(workItem.endDate).format("YYYY")}
              displayEmpty
              MenuProps={{
                PaperProps: {
                  elevation: 0,
                  sx: {
                    mt: 0.2,
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
                width: "100px",
                "& .MuiSelect-select": {
                  p: 0.85,
                },
              }}
              size="small"
            >
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  Year
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2024">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2024
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2023">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2023
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2022">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2022
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2021">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2021
                </Typography>
              </MenuItem>
              <MenuItem sx={{ px: 0.8, py: 0.2 }} value="2020">
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  2020
                </Typography>
              </MenuItem>
            </Select>
          </Stack>
          <FormControlLabel
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
            control={
              <Checkbox
                disableRipple
                size="small"
                checked={workItem.graduated}
              />
            }
            label="Current"
          />

          <Stack
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
                return setWorkItem(false);
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
