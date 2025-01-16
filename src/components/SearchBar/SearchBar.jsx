import React, { useRef, useState, useEffect } from "react";

import { Stack, TextField } from "@mui/material";

import SearchResults from "./SearchResults";

const SearchBar = () => {
  const searchBarRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchBarFocus, setSearchBarFocus] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        // eslint-disable-next-line operator-linebreak
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
          borderRadius: 2,
          outline: "none",
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
          "& .MuiInputBase-root": {
            fontSize: "14px",
            backgroundColor: "#fff",
          },
          "& .MuiInputBase-input": {
            px: 1.2,
            py: 0.7,
            outline: "none",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              border: 0,
              borderColor: "dodgerblue",
            },
        }}
      />

      <SearchResults focus={searchBarFocus} />
    </Stack>
  );
};

export default SearchBar;
