/* eslint-disable max-lines */
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Stack,
  TextField,
  IconButton,
  Typography,
  InputAdornment,
} from "@mui/material";

import { setLocation } from "../../state/createPost";
import { setPostDraftScreen } from "../../state/appSlice";

const CreatePostLocation = () => {
  const places = useMemo(() => {
    return [
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        coordinates: [51.4826, 0.0077],
        place: "University of Greenwich",
      },
      {
        type: "point",
        city: "London",
        place: "Big Ben",
        country: "United Kingdom",
        coordinates: [51.5007, -0.1246],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "Buckingham Palace",
        coordinates: [51.5014, -0.1419],
      },
      {
        type: "point",
        city: "London",
        place: "Tower of London",
        country: "United Kingdom",
        coordinates: [51.5081, -0.0759],
      },
      {
        type: "point",
        city: "London",
        place: "British Museum",
        country: "United Kingdom",
        coordinates: [51.5194, -0.127],
      },
      {
        type: "point",
        city: "London",
        place: "Hyde Park",
        country: "United Kingdom",
        coordinates: [51.5074, -0.1657],
      },
      {
        type: "point",
        city: "London",
        place: "London Eye",
        country: "United Kingdom",
        coordinates: [51.5033, -0.1196],
      },
      {
        type: "point",
        city: "London",
        place: "The Shard",
        country: "United Kingdom",
        coordinates: [51.5045, -0.0865],
      },
      {
        type: "point",
        city: "London",
        place: "Tate Modern",
        country: "United Kingdom",
        coordinates: [51.5076, -0.0994],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "Westminster Abbey",
        coordinates: [51.4993, -0.1273],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "St. Paul's Cathedral",
        coordinates: [51.5138, -0.0984],
      },
      {
        type: "point",
        city: "London",
        place: "Covent Garden",
        country: "United Kingdom",
        coordinates: [51.5114, -0.1232],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "Piccadilly Circus",
        coordinates: [51.5101, -0.1343],
      },
      {
        type: "point",
        city: "London",
        place: "Camden Market",
        country: "United Kingdom",
        coordinates: [51.5416, -0.1426],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "Natural History Museum",
        coordinates: [51.4967, -0.1764],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "Kensington Palace",
        coordinates: [51.5058, -0.1877],
      },
      {
        type: "point",
        city: "London",
        place: "Science Museum",
        country: "United Kingdom",
        coordinates: [51.4978, -0.1745],
      },
      {
        type: "point",
        city: "London",
        place: "Regent's Park",
        country: "United Kingdom",
        coordinates: [51.5313, -0.1569],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "National Gallery",
        coordinates: [51.5089, -0.1283],
      },
      {
        type: "point",
        city: "London",
        country: "United Kingdom",
        place: "Hampton Court Palace",
        coordinates: [51.4036, -0.3375],
      },
    ];
  }, []);

  const dispatch = useDispatch();

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        p: 2,
        width: "100%",
      }}
    >
      <TextField
        size="small"
        id="whats_on_you_mind_input"
        placeholder="Search a Place, City, Country"
        sx={{
          width: "100%",
          border: "none",
          outline: "none",
          "& .MuiInputBase-root": {
            fontSize: "14px",
          },
          "& .MuiInputBase-root:placeholder": {
            fontSize: "14px",
          },
          "& .MuiInputBase-root:focus": {
            border: 0,
            outline: "none",
          },
          "& .MuiInputBase-root:focusVisible": {
            border: 0,
            outline: "none",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 1,
              borderColor: "dodgerblue",
            },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size="small" disableTouchRipple>
                <SearchIcon sx={{ color: "#00000060" }} />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <InputAdornment position="start">
                <IconButton size="small" disableTouchRipple>
                  <LocationOnIcon sx={{ color: "#00000060" }} />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
        }}
      />
      <Stack
        gap={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          my: 2,
          width: "100%",
          height: "30vh",
          minHeight: "30vh",
          maxHeight: "50vh",
          overflowY: "auto",
        }}
      >
        {places.map((place, index) => {
          return (
            <Typography
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              variant="body1"
              onClick={() => {
                dispatch(
                  setLocation({
                    type: place?.type,
                    city: place?.city,
                    place: place?.place,
                    country: place?.country,
                    coordinates: place?.coordinates,
                  }),
                );
                dispatch(setPostDraftScreen("draft"));
              }}
              sx={{
                p: 1,
                flexShrink: 0,
                width: "100%",
                borderRadius: 2,
                fontSize: "14px",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              {place.place}, {place.city}, {place.country}
            </Typography>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default CreatePostLocation;
