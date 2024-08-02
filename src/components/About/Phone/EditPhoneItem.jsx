/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";

import { Stack, Select, MenuItem, Typography } from "@mui/material";

import InputField from "../../shared/InputField";
import useData from "../../../hooks/data/useData";
import ChangeAudience from "../../shared/ChangeAudience";

const EditPhoneItem = ({ phoneItem }) => {
  const { countries } = useData();
  const [newPhoneItem, setNewPhoneItem] = useState({
    id: phoneItem.id || "",
    phone: phoneItem.phone || "",
    country: phoneItem.country || "",
    primary: phoneItem.primary || false,
    verified: phoneItem.verified || false,
    countryCode: phoneItem.countryCode || "",
    visibility: phoneItem.visibility || "global",
  });

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}
    >
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={1}
      >
        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "16px" }}>
          Phone
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
            id={`country_code_select_${newPhoneItem.id}`}
            value={newPhoneItem.country}
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
              setNewPhoneItem({
                ...newPhoneItem,
                country: event.target.value,
              });
            }}
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
            value={newPhoneItem.phone}
            changeValue={(value) => {
              setNewPhoneItem({ ...newPhoneItem, phone: value });
            }}
            placeholder="Phone"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EditPhoneItem;
