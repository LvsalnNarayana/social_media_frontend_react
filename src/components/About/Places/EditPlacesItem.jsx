/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";

import {
  Stack,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";

import useData from "../../../hooks/data/useData";
import ChangeAudience from "../../shared/ChangeAudience";

const EditPlacesItem = ({ placeItem }) => {
  const { countries } = useData();
  const [newPlaceItem, setNewPlaceItem] = useState({
    id: placeItem?.id || "",
    location: placeItem?.location || {},
    current: placeItem?.current || false,
    visibility: placeItem?.visibility || "global",
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
          Place
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
            id={`country_code_select_${newPlaceItem?.id}`}
            value={newPlaceItem?.location?.country || ""}
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
              setNewPlaceItem({
                ...newPlaceItem,
                location: {
                  ...newPlaceItem?.location,
                  country: event.target.value,
                },
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
        <FormControlLabel
          sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
          control={
            <Checkbox
              size="small"
              disableRipple
              onChange={() => {
                return setNewPlaceItem({
                  ...newPlaceItem,
                  current: !newPlaceItem?.current,
                });
              }}
              checked={newPlaceItem?.current || false}
            />
          }
          label="current"
        />
      </Stack>
    </Stack>
  );
};

export default EditPlacesItem;
