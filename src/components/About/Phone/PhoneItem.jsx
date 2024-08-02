/* eslint-disable react/no-array-index-key */
/* eslint-disable max-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";

import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import {
  Menu,
  Stack,
  Button,
  Select,
  MenuItem,
  Typography,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import InputField from "../../shared/InputField";
import useData from "../../../hooks/data/useData";
import CustomTooltip from "../../shared/CustomTooltip";

const PhoneItem = () => {
  const { countries } = useData();
  const [editPhoneOpen, setEditPhoneOpen] = useState(false);
  const [phoneMenuAnchor, setPhoneMenuAnchor] = useState(null);
  const phoneMenuOpen = Boolean(phoneMenuAnchor);
  const handleclosePhoneMenu = () => {
    setPhoneMenuAnchor(null);
  };
  const phoneItem = {
    id: "phone_id_1",
    country: "",
    verified: false,
    phone: "34567890",
    countryCode: "+91",
    visibility: "global",
    icon: LocalPhoneOutlinedIcon,
  };

  return (
    <>
      {!editPhoneOpen && (
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
            <phoneItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                {phoneItem.countryCode} {phoneItem.phone}
              </Typography>
            </Stack>
          </Stack>
          <Stack
            gap={2}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {!phoneItem.verified && (
              <Typography
                sx={{
                  mr: 2,
                  gap: 0.5,
                  display: "flex",
                  fontSize: "14px",
                  color: "#ff000090",
                  alignItems: "center",
                }}
              >
                <ReportProblemIcon fontSize="small" /> Not-verified
              </Typography>
            )}
            <CustomTooltip
              padding={4}
              title={
                phoneItem.visibility[0].toUpperCase() +
                phoneItem.visibility.slice(1)
              }
              color="#000"
            >
              {phoneItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>
            <IconButton
              disableRipple
              onClick={(e) => {
                setPhoneMenuAnchor(e.currentTarget);
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              elevation={1}
              id="work-menu"
              anchorEl={phoneMenuAnchor}
              open={phoneMenuOpen}
              onClose={handleclosePhoneMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
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
                sx={{ p: 1, px: 1.5, fontSize: "13px" }}
                onClick={() => {
                  setEditPhoneOpen(true);
                  setPhoneMenuAnchor(null);
                }}
              >
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Edit phone
              </MenuItem>
              <MenuItem sx={{ p: 1, px: 1.5, fontSize: "13px" }}>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                Delete phone
              </MenuItem>
              {!phoneItem.verified && (
                <MenuItem sx={{ p: 1, px: 1.5, fontSize: "13px" }}>
                  <ListItemIcon>
                    <ReportProblemIcon fontSize="small" />
                  </ListItemIcon>
                  Verify phone
                </MenuItem>
              )}
            </Menu>
          </Stack>
        </Stack>
      )}
      {editPhoneOpen && (
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
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap={1}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                Phone
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                width="100%"
                gap={2}
              >
                <Select
                  id="country_code_select"
                  value={phoneItem.countryCode}
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
                    width: "150px",
                    "& .MuiSelect-select": {
                      p: 0.85,
                    },
                  }}
                  size="small"
                >
                  <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
                    <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                      code
                    </Typography>
                  </MenuItem>
                  {countries?.map((country, index) => {
                    return (
                      <MenuItem
                        key={index}
                        sx={{ px: 0.8, py: 0.2 }}
                        value={country.alpha2}
                      >
                        <Stack
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                          gap={1}
                        >
                          <img
                            alt={country.name}
                            src={`/flags/${country.alpha2}.png`}
                            style={{ width: 20, height: 20, maxWidth: "100%" }}
                          />
                          <Typography
                            sx={{
                              fontSize: "13px",
                              textTransform: "uppercase",
                            }}
                          >
                            {country.alpha2}
                          </Typography>
                        </Stack>
                      </MenuItem>
                    );
                  })}
                </Select>
                <InputField
                  name="phone"
                  value={phoneItem.phone}
                  changeValue={() => {}}
                  placeholder="Phone"
                />
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
                return setEditPhoneOpen(false);
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

export default PhoneItem;
