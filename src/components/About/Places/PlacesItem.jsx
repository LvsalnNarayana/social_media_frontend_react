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
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
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

import useData from "../../../hooks/data/useData";
import CustomTooltip from "../../shared/CustomTooltip";

const PlacesItem = () => {
  const { countries } = useData();
  const [editPlaceOpen, setEditPlaceOpen] = useState(false);
  const [placeMenuAnchor, setPlaceMenuAnchor] = useState(null);
  const placeMenuOpen = Boolean(placeMenuAnchor);
  const handleclosePlaceMenu = () => {
    setPlaceMenuAnchor(null);
  };
  const placeItem = {
    id: "place_id_1",
    current: true,
    visibility: "global",
    icon: CottageOutlinedIcon,
    location: {
      state: "",
      country: "",
      city: "London",
      coOrdinates: {
        lat: "",
        long: "",
      },
    },
  };

  return (
    <>
      {!editPlaceOpen && (
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
            <placeItem.icon sx={{ fontSize: "40px" }} />
            <Stack
              gap={0.2}
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Typography sx={{ fontSize: "14px" }}>
                {placeItem.current && `Lives in`} {placeItem.location.city}
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
                placeItem.visibility[0].toUpperCase() +
                placeItem.visibility.slice(1)
              }
              color="#000"
            >
              {placeItem.visibility === "global" && <PublicIcon />}
            </CustomTooltip>
            <IconButton
              disableRipple
              onClick={(e) => {
                setPlaceMenuAnchor(e.currentTarget);
              }}
            >
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              elevation={1}
              id="work-menu"
              anchorEl={placeMenuAnchor}
              open={placeMenuOpen}
              onClose={handleclosePlaceMenu}
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
                  setEditPlaceOpen(true);
                  setPlaceMenuAnchor(null);
                }}
              >
                <ListItemIcon>
                  <EditOutlinedIcon fontSize="small" />
                </ListItemIcon>
                Edit place
              </MenuItem>
              <MenuItem sx={{ p: 1, px: 1.5, fontSize: "13px" }}>
                <ListItemIcon>
                  <DeleteOutlineIcon fontSize="small" />
                </ListItemIcon>
                Delete place
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      )}
      {editPlaceOpen && (
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
                Place
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                width="100%"
                gap={2}
              >
                <Select
                  id={`country_code_select_${placeItem.id}`}
                  value={placeItem.location.country}
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
                      Country
                    </Typography>
                  </MenuItem>
                  {countries?.map((country, index) => {
                    return (
                      <MenuItem
                        key={index}
                        sx={{ px: 0.8, py: 0.2 }}
                        value={country.name}
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
                            {country.name}
                          </Typography>
                        </Stack>
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
                return setEditPlaceOpen(false);
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

export default PlacesItem;
