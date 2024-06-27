import React, { useRef, useState, useEffect } from "react";

import { Grow, Stack, TextField, Typography } from "@mui/material";

const SearchBar = () => {
  const searchBarRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchBarFocus, setSearchBarFocus] = useState(false);

  useEffect(() => {
    console.log("searchBarFocus", searchBarFocus);
    console.log("searchInput", searchInput);

    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setSearchBarFocus(false);
      }
    };

    if (searchBarFocus) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchBarFocus, searchInput]);

  useEffect(() => {
    if (searchInput === "") {
      setSearchBarFocus(false);
    }
  }, [searchInput]);

  return (
    <Stack
      sx={{
        position: "relative",
      }}
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
    >
      <TextField
        onInput={(e) => {
          setSearchInput(e.target.value);
        }}
        onFocus={() => {
          setSearchBarFocus(true);
          searchBarRef.current.style.border = "1px solid #00000010";
        }}
        ref={searchBarRef}
        size="small"
        id="searchbar_input"
        placeholder="Search anything..."
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
          "&  .MuiInputBase-root:focus": {
            border: 0,
            outline: "none",
          },
          "&  .MuiInputBase-root:focusVisible": {
            border: 0,
            outline: "none",
          },
        }}
      />

      <Grow in={searchBarFocus}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          sx={{
            p: 2,
            left: 0,
            top: "140%",
            width: "100%",
            height: "auto",
            overflowY: "auto",
            maxHeight: "300px",
            borderRadius: "8px",
            background: "white",
            position: "absolute",
            border: "1px solid #00000010",
          }}
        >
          <Typography>Hello</Typography>
        </Stack>
      </Grow>
    </Stack>
  );
};

export default SearchBar;
