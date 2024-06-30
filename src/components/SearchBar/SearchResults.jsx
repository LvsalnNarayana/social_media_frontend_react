import React from "react";

import { Fade, Stack, useTheme, Typography } from "@mui/material";

import SearchResult from "./SearchResult";
import useSearchHistory from "../../hooks/data/useSearchHistory";

const SearchResults = ({ focus }) => {
  const theme = useTheme();
  const searchHistoryResults = useSearchHistory();

  return (
    <Fade in={focus} easing={theme?.transitions?.easing?.easeIn}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        sx={{
          p: 2,
          left: 0,
          top: "120%",
          zIndex: 1200,
          width: "100%",
          height: "auto",
          overflowY: "auto",
          maxHeight: "300px",
          borderRadius: "8px",
          background: "white",
          position: "absolute",
          backgroundColor: "white",
          border: "1px solid #00000050",
        }}
      >
        {searchHistoryResults?.length > 0 ? (
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={2}
            sx={{
              width: "100%",
            }}
          >
            {searchHistoryResults?.map((result, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <SearchResult key={index} result={result} />;
            })}
          </Stack>
        ) : (
          <Typography sx={{ fontSize: "14px", color: "#00000050" }}>
            No recent searches
          </Typography>
        )}
      </Stack>
    </Fade>
  );
};

export default SearchResults;
